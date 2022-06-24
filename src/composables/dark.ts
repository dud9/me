import { EnumStorageKey } from '~/enum'

const THEME_MODE_KEY = EnumStorageKey.themeMode

function initDark() {
  if (!localStorage.getItem(THEME_MODE_KEY)) {
    const prefersDark = window.matchMedia
                        && window.matchMedia('(prefers-color-scheme: dark)')
                          .matches
    localStorage.setItem(
      THEME_MODE_KEY,
      prefersDark
        ? 'dark'
        : 'light',
    )
  }

  return useDark({
    storageKey: THEME_MODE_KEY,
    valueDark: 'dark',
    valueLight: 'light',
  })
}

export const isDark = initDark()
export const toggleDark = useToggle(isDark)
