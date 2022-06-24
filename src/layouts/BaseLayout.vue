<script setup lang="ts">
import TheNav from './TheNav.vue'
</script>

<template>
  <n-layout :native-scrollbar="false">
    <n-layout-header bg="white dark:black-800">
      <TheNav w-full h-50px border="1 red" />
    </n-layout-header>
    <n-layout-content content-style="padding: 24px; background-color: black;">
      <RouterView />
    </n-layout-content>
    <n-layout-footer>
      <TheFoot />
    </n-layout-footer>
  </n-layout>
</template>
