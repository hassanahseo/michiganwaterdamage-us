import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://michiganwaterdamage.us',
  trailingSlash: 'always',
  output: 'static',
  integrations: [tailwind(), mdx()],
});
