/** Breakpoints for scripts, in pixels. Mirrors `styles/_breakpoints.scss`. */
export const bp = {
  sm: 768,
  md: 1024,
} as const;

/** Media queries for scripts. Mirror the mixins of `styles/_breakpoints.scss`. */
export const media = {
  mdDown: `(max-width: ${bp.md}px)`,
  mdUp: `(min-width: ${bp.md + 1}px)`,
  motionOk: '(prefers-reduced-motion: no-preference)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
} as const;
