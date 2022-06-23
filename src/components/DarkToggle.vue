<script setup lang='ts'>
const dark = isDark
const toggle = toggleDark
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggle()">
    <ri-moon-line v-show="dark" />
    <ri-sun-line v-show="!dark" />
  </a>
</template>
