import { gsap } from './gsap';

const TRACE = 0.9;
const FILL = 0.5;
const DISSOLVE = 1.1;
const SWELL = 1.12;

interface LogoTraceOptions {
  /** Whether the logo swells and dissolves once filled, rather than staying. */
  dissolve?: boolean;
}

/** The animation of a `LogoTrace`: its outline traces itself and fills in, then optionally swells and dissolves. */
export function logoTrace(logo: SVGElement, { dissolve = true }: LogoTraceOptions = {}) {
  const paths = logo.querySelectorAll<SVGPathElement>('path');
  const length = (_: number, path: SVGPathElement) => path.getTotalLength();

  const timeline = gsap.timeline()
    .set(logo, { opacity: 1 })
    .fromTo(paths, { strokeDasharray: length, strokeDashoffset: length }, {
      strokeDashoffset: 0,
      duration: TRACE,
      ease: 'power2.inOut',
      immediateRender: false,
    })
    .fromTo(logo, { '--fill': 0 }, { '--fill': 1, duration: FILL, ease: 'power1.out', immediateRender: false }, TRACE * 0.6);

  if (dissolve) {
    timeline.to(logo, { scale: SWELL, opacity: 0, duration: DISSOLVE, ease: 'power1.in' }, TRACE * 0.6 + FILL);
  }

  return timeline;
}

/** Shows a `LogoTrace` at the end of its animation, as with reduced motion: traced, filled and staying. */
export function showLogoTrace(logo: SVGElement) {
  gsap.set(logo, { opacity: 1, '--fill': 1 });
}
