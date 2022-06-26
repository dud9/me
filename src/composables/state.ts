export type SubNavType = 'front' | 'end' | 'logic' | 'life'

export const activeSubNav = ref<SubNavType>('front')

export function changeActiveSubNav(nav: SubNavType) {
  activeSubNav.value = nav
}
