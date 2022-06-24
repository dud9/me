<script setup lang="ts">
import TheNav from './TheNav.vue'
import TheFoot from './TheFoot.vue'
</script>

<template>
  <n-layout :native-scrollbar="false" h-screen w-screen>
    <n-layout-header bordered>
      <TheNav class="h-[4.5rem]" />
    </n-layout-header>
    <n-layout-content flex justify-center py-10>
      <RouterView />
    </n-layout-content>
    <n-layout-footer bg="white dark:[#101014]">
      <TheFoot w-full h-50px />
    </n-layout-footer>
    <n-back-top :right="50" />
  </n-layout>
</template>
