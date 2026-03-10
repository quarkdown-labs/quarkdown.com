// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://quarkdown.com',
  // @ts-ignore — process.env is available at config time in Node
  base: process.env.BASE_PATH || '/',
  integrations: [sitemap()],
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
