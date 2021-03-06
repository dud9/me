import '@unocss/reset/tailwind.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'
import 'uno.css'

import { createApp } from 'vue'
import App from './App.vue'
import type { AppContext, UserModule } from './types'

function init(app: AppContext) {
  Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
    .forEach(i => i.install?.(app))
  app.mount('#app')
}

const app = createApp(App)
init(app)

