<script setup lang="ts">
import NavListMenus from './NavListMenus.vue'
import NavPostInfo from './NavPostInfo.vue'

const route = useRoute()
const canShowNavPostInfo = computed(() => {
  return route.meta.frontmatter?.showInfoInNav || false
})
const scrollingDown = inject('scrollingDown')
</script>

<template>
  <Transition name="fade-bottom" mode="out-in" appear>
    <NavPostInfo v-if="canShowNavPostInfo && scrollingDown" />
    <NavListMenus v-else />
  </Transition>
</template>

