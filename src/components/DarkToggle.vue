<script setup lang='ts'>
const toggle = toggleDark
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggle()">
    <div i="ri-sun-line dark:ri-moon-line" />
  </a>
</template>
