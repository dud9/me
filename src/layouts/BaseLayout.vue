<script setup lang="ts">
import TheNav from './TheNav.vue'
import TheFoot from './TheFoot.vue'

const headerFixed = fixedHeader
</script>

<template>
  <n-layout :native-scrollbar="false" h-screen w-screen>
    <n-layout-header bordered :class="headerFixed ? 'fixed top-0 left-0 z-1000' : ''">
      <TheNav w-full class="h-[4.5rem]" />
    </n-layout-header>
    <n-layout-content :native-scrollbar="false" :position="headerFixed ? 'absolute' : 'static'" :class="headerFixed ? 'mt-[4.5rem]' : ''" border="2 red">
      <div flex justify-center px-7 py-10>
        <RouterView />
      </div>
    </n-layout-content>
    <n-layout-footer bg="white dark:[#101014]">
      <TheFoot w-full h-50px />
    </n-layout-footer>
    <FixHeader />
    <n-back-top :right="50" />
  </n-layout>
</template>
