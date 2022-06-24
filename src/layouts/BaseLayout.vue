<script setup lang="ts">
import TheNav from './TheNav.vue'
import TheFoot from './TheFoot.vue'
</script>

<template>
  <n-layout :native-scrollbar="false" of="x-hidden y-auto">
    <n-layout-header bordered>
      <TheNav />
    </n-layout-header>
    <n-layout-content flex justify-center py-10 of="x-hidden y-auto">
      <RouterView />
    </n-layout-content>
    <n-layout-footer bg="white dark:[#101014]">
      <TheFoot flex justify-center items-center w-full h-50px />
    </n-layout-footer>
    <n-back-top :right="100" />
  </n-layout>
</template>
