import type { Camera } from './camera';

/**
 * Plays a recording's looping video, framed through a camera by transforming the video.
 * The camera and the reported progress, from 0 to 1, both read the video's own clock, so they never drift from it.
 */
export class RecordingPlayer {
  private frameRequest = 0;

  constructor(
    private readonly video: HTMLVideoElement,
    private readonly camera: Camera,
    private readonly onProgress: (progress: number) => void = () => {},
  ) {}

  /** Plays from the start, looping. */
  play() {
    this.video.currentTime = 0;
    // Rejected when the browser blocks autoplay, e.g. in low power mode: the first frame stays.
    this.video.play().catch(() => {});

    cancelAnimationFrame(this.frameRequest);
    const tick = () => {
      this.render();
      this.frameRequest = requestAnimationFrame(tick);
    };
    tick();
  }

  /** Stops on the frame shown. */
  pause() {
    this.video.pause();
    cancelAnimationFrame(this.frameRequest);
  }

  private render() {
    const { currentTime, duration } = this.video;
    const { x, y, width, height } = this.camera(currentTime * 1000);
    this.video.style.transform = `scale(${1 / width}, ${1 / height}) translate(${-x * 100}%, ${-y * 100}%)`;
    if (duration) this.onProgress(currentTime / duration);
  }
}
