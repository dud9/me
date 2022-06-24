import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

function init(app: any) {
  Object.values(import.meta.globEager('./modules/*.ts'))
    .map(i => i.default)
    .forEach(i => i.install?.(app))
  app.mount('#app')
}

const app = createApp(App)
init(app)
