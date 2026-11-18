import type { Camera, Region } from './camera';

/** Whether this browser can decode animated WebPs frame by frame. */
export function canPlayRecordings() {
  return 'ImageDecoder' in window && ImageDecoder.isTypeSupported('image/webp');
}

/** Length of an animated WebP's loop in milliseconds: the sum of the durations of its frames, read off their `ANMF` chunks. */
function loopDurationOf(webp: ArrayBuffer) {
  const view = new DataView(webp);
  const RIFF_HEADER = 12;
  const CHUNK_HEADER = 8;
  const DURATION_OFFSET = 12; // Past the frame's 24-bit x, y, width and height.

  let duration = 0;
  for (let offset = RIFF_HEADER; offset + CHUNK_HEADER <= view.byteLength;) {
    const fourcc = String.fromCharCode(...new Uint8Array(webp, offset, 4));
    const size = view.getUint32(offset + 4, true);
    if (fourcc === 'ANMF') {
      const at = offset + CHUNK_HEADER + DURATION_OFFSET;
      duration += view.getUint8(at) | (view.getUint8(at + 1) << 8) | (view.getUint8(at + 2) << 16);
    }
    offset += CHUNK_HEADER + size + (size % 2); // Chunks are padded to an even size.
  }
  return duration;
}

const sameRegion = (a: Region, b: Region) => a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;

/**
 * Plays an animated WebP on a canvas through a camera, decoding one frame ahead.
 * The clock waits whenever decoding falls behind. Reports loop progress from 0 to 1.
 */
export class RecordingPlayer {
  private readonly context: CanvasRenderingContext2D;
  private decoder?: Promise<ImageDecoder>;
  private frameCount = 0;
  private loopDuration = 0;

  private current?: VideoFrame;
  private currentIndex = 0;
  private upcoming?: VideoFrame;

  /** Page time at which the current loop started, in milliseconds. */
  private origin = 0;
  /** Time on the animation's clock of the last drawing, in milliseconds. */
  private time = 0;
  /** What the canvas shows, to skip redrawing unchanged frames. */
  private drawn?: { frame: VideoFrame; region: Region };
  /** Bumped on each play and pause, to drop decodes of a previous run. */
  private run = 0;
  private frameRequest = 0;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly url: string,
    private readonly camera: Camera,
    private readonly onProgress: (progress: number) => void = () => {},
  ) {
    this.context = canvas.getContext('2d')!;
    new ResizeObserver(() => this.resize()).observe(canvas);
  }

  /** Fetches the recording and gets its decoder ready, once. */
  prepare(): Promise<ImageDecoder> {
    return this.decoder ??= (async () => {
      const webp = await (await fetch(this.url)).arrayBuffer();
      this.loopDuration = loopDurationOf(webp);
      const decoder = new ImageDecoder({ data: webp, type: 'image/webp' });
      await decoder.tracks.ready;
      this.frameCount = decoder.tracks.selectedTrack!.frameCount;
      return decoder;
    })();
  }

  /** Shows the first frame, still. */
  async still() {
    const run = ++this.run;
    if (await this.start(run)) this.draw(0);
  }

  /** Plays from the first frame, looping. */
  async play() {
    const run = ++this.run;
    if (!await this.start(run)) return;

    this.origin = performance.now();
    const tick = (now: number) => {
      this.advance(run, now - this.origin);
      this.frameRequest = requestAnimationFrame(tick);
    };
    this.frameRequest = requestAnimationFrame(tick);
  }

  /** Stops on the frame being shown. */
  pause() {
    this.run++;
    cancelAnimationFrame(this.frameRequest);
    this.upcoming?.close();
    this.upcoming = undefined;
  }

  /** Shows the first frame and decodes the next, unless another run started meanwhile. */
  private async start(run: number) {
    const first = await this.decode(0);
    if (run !== this.run) {
      first.close();
      return false;
    }
    this.show(first, 0);
    this.decodeUpcoming(run);
    return true;
  }

  private async decode(index: number) {
    const decoder = await this.prepare();
    const { image } = await decoder.decode({ frameIndex: index });
    return image;
  }

  private decodeUpcoming(run: number) {
    void this.decode((this.currentIndex + 1) % this.frameCount).then((frame) => {
      if (run === this.run) this.upcoming = frame;
      else frame.close();
    });
  }

  /** Moves the clock to [time], swapping in the upcoming frame once it is due, and draws. */
  private advance(run: number, time: number) {
    const current = this.current!;
    const end = (current.timestamp + (current.duration ?? 0)) / 1000;

    if (this.upcoming) {
      const loops = this.currentIndex + 1 === this.frameCount;
      if (time >= (loops ? end : this.upcoming.timestamp / 1000)) {
        if (loops) {
          this.origin += end;
          time -= end;
        }
        this.show(this.upcoming, (this.currentIndex + 1) % this.frameCount);
        this.upcoming = undefined;
        this.decodeUpcoming(run);
      }
    } else if (time > end) {
      // Decoding fell behind: the clock waits on the current frame.
      this.origin += time - end;
      time = end;
    }

    this.draw(time);
    this.onProgress(Math.min(time / this.loopDuration, 1));
  }

  private show(frame: VideoFrame, index: number) {
    this.current?.close();
    this.current = frame;
    this.currentIndex = index;
  }

  /** Draws the current frame as the camera frames it at [time]. */
  private draw(time: number) {
    this.time = time;
    const frame = this.current;
    if (!frame) return;

    const region = this.camera(time);
    if (this.drawn?.frame === frame && sameRegion(this.drawn.region, region)) return;
    this.drawn = { frame, region };

    const { displayWidth: width, displayHeight: height } = frame;
    this.context.drawImage(
      frame,
      region.x * width, region.y * height, region.width * width, region.height * height,
      0, 0, this.canvas.width, this.canvas.height,
    );
  }

  private resize() {
    const scale = devicePixelRatio;
    this.canvas.width = Math.round(this.canvas.clientWidth * scale);
    this.canvas.height = Math.round(this.canvas.clientHeight * scale);
    // Resizing clears the canvas.
    this.drawn = undefined;
    this.draw(this.time);
  }
}
