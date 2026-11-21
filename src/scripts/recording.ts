import type { Camera } from './camera';

/**
 * Plays a recording's looping video, framed through a camera by transforming the video.
 * The camera and the reported progress, from 0 to 1, both read the video's own clock, so they never drift from it.
 */
export class RecordingPlayer {
  private frameRequest = 0;
  private started = false;

  constructor(
    private readonly video: HTMLVideoElement,
    private readonly camera: Camera,
    private readonly onProgress: (progress: number) => void = () => {},
  ) {}

  /**
   * Plays from the start, looping, as soon as the video has loaded and is visible: Safari stalls muted videos started while hidden.
   */
  play() {
    this.video.currentTime = 0;
    this.started = false;

    cancelAnimationFrame(this.frameRequest);
    const tick = () => {
      if (!this.started && this.ready()) {
        this.started = true;
        // Rejected when the browser blocks autoplay, e.g. in low power mode: the first frame stays.
        this.video.play().catch(() => {});
      }
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

  private ready() {
    return this.video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA
      && this.video.checkVisibility({ visibilityProperty: true, opacityProperty: true });
  }

  private render() {
    const { currentTime, duration } = this.video;
    const { x, y, width, height } = this.camera(currentTime * 1000);
    this.video.style.transform = `scale(${1 / width}, ${1 / height}) translate(${-x * 100}%, ${-y * 100}%)`;
    if (duration) this.onProgress(currentTime / duration);
  }
}
