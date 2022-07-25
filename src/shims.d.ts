/// <reference types="vite/client" />

import 'vue-router'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

/// <reference types="vite-plugin-pages/client" />

declare module '*.md' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-router' {
  interface RouteMeta {
    frontmatter: any
  }
}
