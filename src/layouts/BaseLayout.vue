<script setup lang="ts">
import TheNav from './TheNav.vue'
</script>

<template>
  <n-layout :native-scrollbar="false">
    <n-layout-header>
      <TheNav w-full h-50px border="1 red" />
    </n-layout-header>
    <n-layout-content content-style="padding: 24px;">
      <RouterView />
    </n-layout-content>
    <n-layout-footer>
      <TheFoot />
    </n-layout-footer>
  </n-layout>
</template>
