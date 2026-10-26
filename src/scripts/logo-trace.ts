import { gsap } from './gsap';

const TRACE = 0.9;
const FILL = 0.5;
const DISSOLVE = 1.1;
const SWELL = 1.12;

/** The animation of a `LogoTrace`: its outline traces itself, fills in, then swells and dissolves. */
export function logoTrace(logo: SVGElement) {
  const paths = logo.querySelectorAll<SVGPathElement>('path');
  const length = (_: number, path: SVGPathElement) => path.getTotalLength();

  return gsap.timeline()
    .set(logo, { opacity: 1 })
    .fromTo(paths, { strokeDasharray: length, strokeDashoffset: length }, {
      strokeDashoffset: 0,
      duration: TRACE,
      ease: 'power2.inOut',
      immediateRender: false,
    })
    .fromTo(logo, { '--fill': 0 }, { '--fill': 1, duration: FILL, ease: 'power1.out', immediateRender: false }, TRACE * 0.6)
    // Dissolves once filled.
    .to(logo, { scale: SWELL, opacity: 0, duration: DISSOLVE, ease: 'power1.in' }, TRACE * 0.6 + FILL);
}
