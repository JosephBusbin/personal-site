import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A link attached to a research entry -- PDF, DOI, repo, slides, whatever.
const linkSchema = z.object({
  label: z.string(),
  href: z.string().url(),
});

// Informal writing. src/content/blog/*.md
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // One-or-two-line summary shown on the blog index and in page metadata.
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Drafts are excluded from production builds but visible in `npm run dev`.
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

// Academic work, informal research, and project write-ups that don't live
// cleanly on GitHub. src/content/research/*.md
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['academic', 'informal', 'project']),
    date: z.coerce.date(),
    // Journal, conference, course, or context. Shown next to the title.
    venue: z.string().optional(),
    authors: z.array(z.string()).default([]),
    // Short summary shown on the research index.
    abstract: z.string(),
    links: z.array(linkSchema).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, research };
