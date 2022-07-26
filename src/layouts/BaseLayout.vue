<script setup lang="ts">
import TheNav from './TheNav.vue'
import TheFoot from './TheFoot.vue'

const headerFixed = fixedHeader
const refBaseWrapper = ref()
const refContentWrapper = ref()
const route = useRoute()
watch(() => route.path, (val, old) => {
  if (!old.startsWith(val)) {
    const target = unref(headerFixed)
      ? refContentWrapper
      : refBaseWrapper
    target.value?.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

let scrollTop = $ref(0)
function onScroll(e: any) {
  scrollTop = e?.target?.scrollTop || 0
}
watch(headerFixed, () => {
  const top = scrollTop
  const target = unref(headerFixed)
    ? refContentWrapper
    : refBaseWrapper
  useTimeoutFn(() => {
    target.value?.scrollTo({ top, behavior: 'smooth' })
  }, 50)
})

const { width } = useWindowSize()
const backTopOffsetRight = computed(() => {
  return width.value < 500
    ? 30
    : 50
})
</script>

<template>
  <n-layout
    ref="refBaseWrapper"
    h-screen w-screen min-h-screen
    :on-scroll="onScroll"
  >
    <n-layout-header
      :class="headerFixed ? 'z-10' : ''"
      bg="!white dark:!dark-800" bordered
      :position="headerFixed ? 'absolute' : 'static'"
    >
      <TheNav w-full class="h-[3.5rem]" />
    </n-layout-header>
    <n-layout
      ref="refContentWrapper" bg="!white dark:![#050505]"
      :position="headerFixed ? 'absolute' : 'static'"
      :class="headerFixed ? 'mt-[3.5rem]' : ''"
      :on-scroll="onScroll"
    >
      <n-layout-content bg-transparent>
        <div flex="~ col" justify-center px-7 py-10>
          <RouterView v-slot="{ Component, route }">
            <Transition name="fade-slide" mode="out-in" appear>
              <component :is="Component" :key="route.fullPath" />
            </Transition>
          </RouterView>
        </div>
      </n-layout-content>
      <n-layout-footer bg="white dark:[#050505]">
        <TheFoot w-full h-50px />
      </n-layout-footer>
      <n-back-top v-if="headerFixed" :right="backTopOffsetRight" />
    </n-layout>
    <FixHeader />
    <n-back-top v-if="!headerFixed" :right="backTopOffsetRight" />
  </n-layout>
</template>
