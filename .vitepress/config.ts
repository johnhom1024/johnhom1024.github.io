import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: './dist',
  title: "johnhom",
  description: "A VitePress Site",
  cleanUrls: true,
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/img/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/img/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/img/favicon-16x16.png"}],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/img/avatar.jpg',
  },
  buildEnd: genFeed,
})
