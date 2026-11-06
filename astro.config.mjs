import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bebopcms.com',
  output: 'static',
  build: {
    assets: 'assets'
  }
});