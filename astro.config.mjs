import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://citedby.co',
  base: '/blog',
  integrations: [
    tailwind(),
  ],
  output: 'static',
});
