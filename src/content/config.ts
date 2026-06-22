import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.union([z.number(), z.string()]).optional(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  'posts': postsCollection,
};
