import type { ConfigProviderProps } from 'naive-ui'
import {
  createDiscreteApi,
  darkTheme,
  lightTheme,
} from 'naive-ui'

const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
  theme: isDark.value
    ? darkTheme
    : lightTheme,
}))

export function useGlobalNaiveApi() {
  const { message, notification, dialog, loadingBar } = createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
    {
      configProviderProps: configProviderPropsRef,
    },
  )
  return {
    message,
    notification,
    dialog,
    loadingBar,
  }
}
