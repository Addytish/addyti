import { defineConfig } from 'astro/config';

// While the site lives at addytish.github.io/addyti, it needs the /addyti base path.
// When the custom domain is connected, set SITE to the domain and remove BASE
// (the deploy workflow reads both from environment variables).
const site = process.env.SITE || 'https://addytish.github.io';
const base = process.env.BASE === undefined ? '/addyti' : process.env.BASE;

export default defineConfig({
  site,
  base: base || undefined,
});
