/**
 * Build an internal URL that respects the site's configured `base` path.
 *
 * The site currently deploys under /personal-site/, so a hardcoded href of
 * "/blog" would 404. Always route internal links through this helper -- then
 * switching to a custom domain is a one-line change in astro.config.mjs.
 *
 *   url('/blog')  ->  '/personal-site/blog'   (project page)
 *                 ->  '/blog'                 (custom domain, base '/')
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL; // '/personal-site/' or '/'
  const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const trimmedPath = path.startsWith('/') ? path : `/${path}`;
  return `${trimmedBase}${trimmedPath}` || '/';
}

/**
 * True when `path` is the current page, or an ancestor of it. Used to mark the
 * active tab in the nav. Compares base-stripped paths so it works under any base.
 */
export function isActive(currentPathname: string, path: string): boolean {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const current = currentPathname.replace(base, '').replace(/\/$/, '') || '/';
  const target = path.replace(/\/$/, '') || '/';
  return target === '/' ? current === '/' : current.startsWith(target);
}
