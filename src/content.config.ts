import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { authorIds } from './authors';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    author: z.enum(authorIds).default('iamgio'),
  }),
});

export const collections = { blog };
