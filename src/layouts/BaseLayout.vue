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
</script>

<template>
  <n-layout ref="refBaseWrapper" :native-scrollbar="false" h-screen w-screen min-h-screen :on-scroll="onScroll">
    <n-layout-header
      bordered :class="headerFixed ? 'z-10' : ''"
      :position="headerFixed ? 'absolute' : 'static'"
    >
      <TheNav w-full class="h-[4.5rem]" />
    </n-layout-header>
    <n-layout
      ref="refContentWrapper"
      :native-scrollbar="false"
      :position="headerFixed ? 'absolute' : 'static'"
      :class="headerFixed ? 'mt-[4.5rem]' : ''"
      :on-scroll="onScroll"
    >
      <n-layout-content>
        <div flex="~ col" justify-center px-7 py-10>
          <RouterView v-slot="{ Component, route }">
            <Transition name="fade-slide" mode="out-in" appear>
              <component :is="Component" :key="route.fullPath" />
            </Transition>
          </RouterView>
        </div>
      </n-layout-content>
      <n-layout-footer bg="white dark:[#101014]">
        <TheFoot w-full h-50px />
      </n-layout-footer>
      <n-back-top v-if="headerFixed" :right="50" />
    </n-layout>
    <FixHeader />
    <n-back-top v-if="!headerFixed" :right="50" />
  </n-layout>
</template>
