<script setup lang="ts">
const toggle = toggleDark
</script>

<template>
  <n-button text :focusable="false" @click="toggle()">
    <div i="ri-sun-line dark:ri-moon-line" />
  </n-button>
</template>
