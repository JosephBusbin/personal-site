/**
 * Single source of truth for site-wide identity and navigation.
 * Edit here rather than in individual pages.
 */

export const site = {
  name: 'Joseph Busbin',
  /** Used in <title> suffixes and the footer. */
  shortTitle: 'Joseph Busbin',
  /** Default meta description; individual pages override it. */
  description:
    'Joseph Busbin — undergraduate at William & Mary studying Computational and Applied Mathematics and Statistics, and Biology. Writing, research, and code.',
  github: 'https://github.com/JosephBusbin',
  /** Optional. Leave as null to hide the link. */
  linkedin: 'https://www.linkedin.com/in/joseph-busbin/' as string | null,
  /**
   * Optional. Null hides the footer email link.
   *
   * Deliberately off: a mailto: address on a public page gets harvested by
   * spam crawlers. LinkedIn and GitHub are the contact routes instead. Set a
   * string here if you decide you want it visible.
   */
  email: null as string | null,
  /**
   * Downloadable CV, served from public/. Null hides the download button, so
   * there is never a dead link.
   *
   * To enable: put the PDF at public/joseph-busbin-cv.pdf and set this to
   * '/joseph-busbin-cv.pdf'. Check it carries no contact details you'd rather
   * not have scraped -- anything committed here stays in git history.
   */
  cvPath: null as string | null,
};

/** The fixed tab set. Adding a tab here adds it to the nav everywhere. */
export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Research', href: '/research' },
  { label: 'About / CV', href: '/about' },
] as const;
