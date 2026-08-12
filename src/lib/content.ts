import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Drafts are visible while running `npm run dev` and excluded from the
 * production build, so work-in-progress can live in the repo safely.
 */
const isVisible = (entry: { data: { draft: boolean } }) =>
  import.meta.env.PROD ? !entry.data.draft : true;

/** Blog posts, newest first. */
export async function getBlogPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', isVisible);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Research entries, newest first. */
export async function getResearchEntries(): Promise<CollectionEntry<'research'>[]> {
  const entries = await getCollection('research', isVisible);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** "March 4, 2026" — consistent across every listing and post header. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/** Machine-readable value for <time datetime="...">. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export const researchTypeLabels: Record<
  CollectionEntry<'research'>['data']['type'],
  string
> = {
  academic: 'Academic',
  informal: 'Informal',
  project: 'Project',
};
