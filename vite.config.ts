import { resolve } from 'path'
import fs from 'fs-extra'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
import Unocss from 'unocss/vite'
import matter from 'gray-matter'
import { presetAttributify, presetIcons, presetUno, presetWind } from 'unocss'
import Anchor from 'markdown-it-anchor'
import Prism from 'markdown-it-prism'
// @ts-expect-error missing types
import TOC from 'markdown-it-table-of-contents'
import LinkAttributes from 'markdown-it-link-attributes'
import { slugify } from './scripts/slugify'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'autoImports.d.ts',
      dirs: [
        'src/composables',
      ],
    }),

    // your plugin installation
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        NaiveUiResolver(),
      ],
      dts: 'components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      shortcuts: {
        'nav-item': 'op30 hover:op100]',
      },
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons({
          scale: 1.2,
        }),
        presetWind(),
      ],
    }),

    Pages({
      extensions: ['vue', 'md'],
      pagesDir: 'pages',
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))

        if (!path.includes('projects.md')) {
          const md = fs.readFileSync(path, 'utf-8')
          const { data } = matter(md)
          route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        }
        return route
      },
    }),

    Markdown({
      wrapperComponent: 'Post',
      wrapperClasses: 'prose m-auto',
      headEnabled: true,
      markdownItOptions: {
        quotes: '""\'\'',
      },
      markdownItSetup(md) {
        md.use(Prism)
        md.use(Anchor, {
          slugify,
          permalink: Anchor.permalink.linkInsideHeader({
            symbol: '#',
            renderAttrs: () => ({ 'aria-hidden': 'true' }),
          }),
        })

        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })

        md.use(TOC, {
          includeLevel: [1, 2, 3],
          slugify,
        })
      },
    }),
  ],
})
