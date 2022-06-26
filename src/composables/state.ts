import type { SubNavType } from '~/types'

export const activeSubNav = ref<SubNavType>('front')

export function changeActiveSubNav(nav: SubNavType) {
  activeSubNav.value = nav
}
