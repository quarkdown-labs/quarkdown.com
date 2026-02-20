// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Zilla Slab',
        cssVariable: '--font-body',
      },
      {
        provider: fontProviders.google(),
        name: 'Odor Mean Chey',
        cssVariable: '--font-heading',
      },
      {
        provider: fontProviders.google(),
        name: 'Urbanist',
        cssVariable: '--font-sans',
        weights: [600],
      },
      {
        provider: fontProviders.google(),
        name: 'JetBrains Mono',
        cssVariable: '--font-code',
      },
    ],
  },
});
