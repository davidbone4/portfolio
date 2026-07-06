// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: switch to your custom domain when added — used for canonical/OG URLs
  // and sitemap. Must match the real Cloudflare Pages URL for those to be correct.
  site: 'https://portfolio.pages.dev',
  integrations: [sitemap()],
});
