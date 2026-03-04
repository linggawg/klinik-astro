// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const artikelCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        publishDate: z.date(),
        author: z.string().default('Tim Medis Klinik Unpad'),
        description: z.string(),
        category: z.string(),
        image: z.string().optional(),
    }),
});

export const collections = {
    'artikel': artikelCollection,
};