<script setup lang="ts">
import TheNav from './TheNav.vue'
import TheFoot from './TheFoot.vue'
</script>

<template>
  <n-layout :native-scrollbar="false">
    <n-layout-header>
      <TheNav />
    </n-layout-header>
    <n-layout-content>
      <RouterView />
    </n-layout-content>
    <n-layout-footer>
      <TheFoot />
    </n-layout-footer>
    <n-back-top :right="100" />
  </n-layout>
</template>
