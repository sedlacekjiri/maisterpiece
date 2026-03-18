import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sedlacekjiri.github.io',
  base: '/maisterpiece',
  integrations: [tailwind()],
});
