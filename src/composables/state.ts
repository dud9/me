import type { Ref } from 'vue'
import type { SubNavType } from '~/types'
import { EnumStorageKey } from '~/enum'

let activeSubNavStorage: Ref<SubNavType> | undefined

if (activeSubNavStorage === undefined)
  activeSubNavStorage = useStorage<SubNavType>(EnumStorageKey.activeSubNav, 'front', sessionStorage)

export const activeSubNav = ref<SubNavType>(unref(activeSubNavStorage))

export function changeActiveSubNav(nav: SubNavType) {
  activeSubNav.value = nav
  activeSubNavStorage!.value = nav
}
