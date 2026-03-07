import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://blog.citedby.co',
  integrations: [
    tailwind(),
  ],
  output: 'static',
});
