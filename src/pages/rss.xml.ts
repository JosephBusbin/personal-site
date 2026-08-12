import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../site';
import { getBlogPosts } from '../lib/content';
import { url } from '../lib/url';

/**
 * Blog feed at /rss.xml, regenerated on every build. Readers subscribe in a
 * feed app and get new posts automatically -- no mailing list to maintain.
 *
 * Only the blog is syndicated; research entries are revised over time and read
 * poorly as a chronological feed.
 */
export async function GET(context: APIContext) {
  const posts = await getBlogPosts();

  return rss({
    title: `${site.name} — Blog`,
    description: site.description,
    // The channel <link> readers show as "visit site" -- must include the base
    // path, or it points at the bare origin instead of this site. Item links
    // below are absolute paths, so they still resolve against the origin.
    site: new URL(
      import.meta.env.BASE_URL,
      context.site ?? 'https://josephbusbin.github.io',
    ),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      categories: post.data.tags,
      // Must carry the base path, or every feed link 404s.
      link: url(`/blog/${post.id}/`),
    })),
    customData: '<language>en-us</language>',
  });
}
