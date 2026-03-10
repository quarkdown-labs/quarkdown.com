import { gsap } from 'gsap';

/** Lazily loads ScrollTrigger and registers it with GSAP. */
export async function loadScrollTrigger() {
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap };
