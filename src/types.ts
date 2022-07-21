import type { App } from 'vue'
export type UserModule = (app: App) => void
export type { App as AppContext }

export type SubNavType = 'front' | 'end' | 'logic' | 'life'

export interface Post {
  path: string
  title: string
  date: string
  lang?: string
  desc?: string
  platform?: string
  duration?: string
}
