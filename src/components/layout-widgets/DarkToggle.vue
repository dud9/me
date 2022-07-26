<script setup lang="ts">
const toggle = toggleDark
</script>

<template>
  <n-button text :focusable="false" :native-focus-behavior="false" @click="toggle()">
    <div i="line-md-sunny-outline-loop dark:line-md-moon" />
  </n-button>
</template>
