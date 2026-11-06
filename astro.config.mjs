import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.bebopcms.com',
  output: 'static',
  build: {
    assets: 'assets'
  }
});