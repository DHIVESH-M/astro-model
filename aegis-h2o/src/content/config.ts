import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Super Clusters Team'),
    category: z.enum([
      'Water Technology',
      'IoT',
      'Machine Learning',
      'Research',
      'Filtration',
      'Project Development'
    ]),
    readTime: z.string(),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  'blog': blogCollection
};
