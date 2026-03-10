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
} as const;
