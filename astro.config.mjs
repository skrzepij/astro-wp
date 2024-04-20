import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import deno from '@astrojs/deno'
import sitemap from '@astrojs/sitemap'

import db from '@astrojs/db'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), db()],
  output: 'server',
  adapter: deno()
})