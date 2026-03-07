import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Kyle Cupples'),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    keywords: z.array(z.string()).min(5).max(20),
    contentType: z.enum(['comparison', 'data-driven', 'how-to', 'state-of', 'guide']),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    glossaryTerms: z.array(z.object({
      term: z.string(),
      definition: z.string(),
    })).optional(),
    entities: z.array(z.object({
      name: z.string(),
      type: z.enum(['Brand', 'Product', 'Person', 'Organization', 'Technology']),
      url: z.string().optional(),
    })).optional(),
    howToSteps: z.array(z.object({
      name: z.string(),
      text: z.string(),
    })).optional(),
  }),
});

export const collections = { blog };
