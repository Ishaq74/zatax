import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), icon({
    include: {
      mdi: ["brush", "magnify", "cellphone-link", "account"]
    }
  }), tailwind()],
  output: 'server'
});