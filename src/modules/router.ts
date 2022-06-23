import autoRoutes from 'pages-generated'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith('/')
      ? `${i.path}index.html`
      : `${i.path}.html`,
  }
})

const scrollBehavior = (_to: any, _from: any, savedPosition: any) => {
  if (savedPosition)
    return savedPosition
  else
    return { top: 0 }
}

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
  scrollBehavior,
})

// router.beforeEach(() => { NProgress.start() })
// router.afterEach(() => { NProgress.done() })

export default {
  install(app: any) {
    app.use(router)
  },
}
