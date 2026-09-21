import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://aegis-h2-o.vercel.app',
  integrations: [mdx()],
  vite: {
    optimizeDeps: {
      include: ['animejs']
    }
  }
});
