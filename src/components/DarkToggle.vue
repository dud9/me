<script setup lang='ts'>
const toggle = toggleDark
</script>

<template>
  <n-button quaternary text :focusable="false" text-lg @click="toggle()">
    <div i="ri-sun-line dark:ri-moon-line" />
  </n-button>
</template>
