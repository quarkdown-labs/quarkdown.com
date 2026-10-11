/** Shared responsive image presets for `<Image>` widths/sizes. */
export const imagePresets = {
  /** Standard output image alongside code. */
  output: {
    widths: [400, 640, 800] as number[],
    sizes: '(max-width: 768px) 100vw, 640px',
  },
  /** Side-by-side showcase images. */
  showcase: {
    widths: [400, 640, 900] as number[],
    sizes: '(max-width: 768px) 100vw, 50vw',
  },
  /** Full-width product screenshots. */
  screenshot: {
    widths: [640, 1100, 1600, 2200] as number[],
    sizes: '(max-width: 1200px) 100vw, 1100px',
  },
} as const;
