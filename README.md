# personal-website

Personal career and portfolio site for Joseph Busbin. Built with
[Astro](https://astro.build), written in Markdown, deployed to GitHub Pages.

Live at **https://josephbusbin.github.io/personal-site/**

## Running it locally

```bash
npm install
npm run dev
```

The dev server prints a URL — note that the site lives under `/personal-site/`,
not the root, so open `http://localhost:4321/personal-site/`.

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server with live reload; drafts are visible |
| `npm run build` | Production build into `dist/`; drafts are excluded |
| `npm run preview` | Serve the built `dist/` to check it before pushing |

## Adding a blog post

Create `src/content/blog/my-post.md`. The filename becomes the URL
(`/blog/my-post`).

```markdown
---
title: 'Post title'
description: 'One or two lines, shown on the blog index.'
pubDate: 2026-08-12
tags: ['optional', 'tags']
draft: false
---

Body text in Markdown.
```

`title`, `description`, and `pubDate` are required. `updatedDate`, `tags`, and
`draft` are optional. Set `draft: true` to keep something visible in `npm run
dev` but out of the published site.

## Adding a research entry

Create `src/content/research/my-entry.md`.

```markdown
---
title: 'Entry title'
type: academic        # academic | informal | project
date: 2026-05-01
venue: 'Journal, conference, or course'   # optional
authors: ['Joseph Busbin']                # optional
abstract: >-
  Short summary shown on the research index and at the top of the entry.
links:                                    # optional
  - label: 'PDF'
    href: 'https://example.com/paper.pdf'
---

Body text in Markdown.
```

`title`, `type`, `date`, and `abstract` are required.

Frontmatter is validated against the schemas in `src/content.config.ts` when the
site builds. A typo or missing field fails the build with a clear message rather
than shipping a broken page.

## Publishing

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site
and deploys it; it takes a minute or two. Check the **Actions** tab if a deploy
doesn't appear.

## RSS

The blog is syndicated at `/rss.xml`, regenerated on every build from the same
posts — nothing to maintain. It's linked in the footer and advertised in every
page's `<head>` so feed readers discover it automatically.

Research entries are deliberately not in the feed; they get revised over time
and read poorly as a chronological stream. To change that, edit
`src/pages/rss.xml.ts`.

## Editing site-wide things

| What | Where |
| --- | --- |
| Name, GitHub/LinkedIn links, nav tabs, CV path | `src/site.ts` |
| CV content (education, experience, skills, …) | `src/cv.ts` |
| Colors, fonts, spacing, base typography | `src/styles/global.css` |
| Home page copy and headshot | `src/pages/index.astro` |
| Header, footer, nav markup | `src/layouts/BaseLayout.astro` |

The headshot is `src/assets/headshot.jpg`. Swap that file to change the photo —
Astro handles resizing and WebP conversion at build time. Keep it square.

To add a downloadable CV, put the PDF in `public/` and point `cvPath` in
`src/site.ts` at it. Until then the download button simply doesn't render.

## A note on internal links

The site deploys to a subpath (`/personal-site/`), so **never hardcode an
internal link** as `/blog`. Always use the helper:

```astro
import { url } from '../lib/url';
<a href={url('/blog')}>Blog</a>
```

This is what keeps a future move to a custom domain to a one-line change in
`astro.config.mjs` (set `base` to `/`). Hardcoded paths would all break.

## Optional per-page header images

`BaseLayout` exposes a `page-header` slot that renders full-bleed above the
content column. Nothing renders unless a page fills it:

```astro
<BaseLayout title="Blog">
  <div slot="page-header">…</div>
  …
</BaseLayout>
```

## Changing PDF CV

You simply replace the previous CV pdf file with one identically named 
at the file location which is the public folder. 

### Reminder on how to ship changes to GitHub
Commands: 
npm run build

```astro
git add -A
```

```astro
git commit -m "<insert commit message here>"
```

```astro
git push
```

