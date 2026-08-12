// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
//
// Deployed as a GitHub Pages *project* site:
//   https://josephbusbin.github.io/personal-site/
//
// If you later move to a custom domain (e.g. https://josephbusbin.com), change
// `site` to that domain and set `base` to '/'. Nothing else needs to change --
// every internal link in this project goes through the `url()` helper in
// src/lib/url.ts, which derives paths from `base` rather than hardcoding it.
export default defineConfig({
  site: 'https://josephbusbin.github.io',
  base: '/personal-site',
});
