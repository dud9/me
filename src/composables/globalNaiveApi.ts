import type { ConfigProviderProps } from 'naive-ui'
import {
  createDiscreteApi,
  darkTheme,
  lightTheme,
} from 'naive-ui'

const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
  theme: isDark
    ? darkTheme
    : lightTheme,
}))

const { message, notification, dialog, loadingBar } = createDiscreteApi(
  ['message', 'dialog', 'notification', 'loadingBar'],
  {
    configProviderProps: configProviderPropsRef,
  },
)

export {
  message,
  notification,
  dialog,
  loadingBar,
}
