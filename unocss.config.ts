import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts, presetWind } from 'unocss'

export default defineConfig({
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
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        mono: 'DM Mono',
      },
    }),
  ],
})
