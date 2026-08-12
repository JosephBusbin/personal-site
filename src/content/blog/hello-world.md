---
title: 'Starting this site'
description: 'Why I built a personal site, and what I plan to put on it.'
pubDate: 2026-08-12
tags: ['meta']
---

This is a sample post. Delete it once you've written a real one — or edit it in
place and keep the filename, which becomes the URL (`/blog/hello-world`).

## How posting works

Add a Markdown file to `src/content/blog/`. The filename becomes the URL slug,
and the frontmatter block at the top is validated when the site builds: if you
misspell a field or forget a required one, the build tells you instead of
silently shipping a broken page.

The required fields are `title`, `description`, and `pubDate`. Optional ones are
`updatedDate`, `tags`, and `draft`.

## Drafts

Set `draft: true` and the post shows up while you're running the dev server but
is left out of the published site. That way unfinished writing can live in the
repository without going live.

## Formatting

Standard Markdown works: **bold**, *italic*, [links](https://astro.build),
lists, blockquotes, and fenced code blocks.

```python
import numpy as np

def normalize(x):
    return (x - np.mean(x)) / np.std(x)
```

> Block quotes render with an amber rule down the left edge.

That's the whole workflow — write a file, commit, push.
