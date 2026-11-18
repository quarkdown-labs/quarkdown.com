import { gsap } from './gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

/** A rectangle of a recording's window. */
export interface Region {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** A camera move: from wherever the camera is at [startMs] to [to], over [durationMs]. */
export interface CameraMove {
  startMs: number;
  durationMs: number;
  to: Region;
}

/** A recording's camera timeline, with regions measured in a [width] by [height] window. */
export interface CameraTimeline {
  width: number;
  height: number;
  /** A CSS `cubic-bezier(x1, y1, x2, y2)`. */
  easing: string;
  moves: CameraMove[];
}

/** The region a camera frames at a time in milliseconds on the recording's clock, in fractions of the window. */
export type Camera = (time: number) => Region;

const WHOLE: Region = { x: 0, y: 0, width: 1, height: 1 };

const lerp = (from: Region, to: Region, progress: number): Region => {
  const at = (key: keyof Region) => from[key] + (to[key] - from[key]) * progress;
  return { x: at('x'), y: at('y'), width: at('width'), height: at('height') };
};

/** The GSAP ease equivalent to a CSS `cubic-bezier(...)`. */
function easeOf(cubicBezier: string) {
  const [x1, y1, x2, y2] = cubicBezier.match(/-?\d*\.?\d+/g)!.map(Number);
  return CustomEase.create(cubicBezier, `M0,0 C${x1},${y1} ${x2},${y2} 1,1`);
}

/**
 * The camera following [timeline], which starts on the whole window and holds still between moves.
 * Without a timeline, the camera stays on the whole window.
 */
export function cameraOf(timeline?: CameraTimeline): Camera {
  if (!timeline) return () => WHOLE;

  const ease = easeOf(timeline.easing);
  const relative = ({ x, y, width, height }: Region): Region => ({
    x: x / timeline.width,
    y: y / timeline.height,
    width: width / timeline.width,
    height: height / timeline.height,
  });
  const moves = timeline.moves.map((move) => ({ ...move, to: relative(move.to) }));

  return (time) => moves.reduce((from, { startMs, durationMs, to }) => {
    const progress = gsap.utils.clamp(0, 1, (time - startMs) / durationMs);
    return progress ? lerp(from, to, ease(progress)) : from;
  }, WHOLE);
}
