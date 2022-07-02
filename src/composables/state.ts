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

const basePagination = {
  page: 1,
  pageSize: 7,
  itemCount: 0,
}

export const pagination = reactive({
  ...basePagination,
})

watch(activeSubNav, () => {
  const { page } = basePagination
  pagination.page = page
})
