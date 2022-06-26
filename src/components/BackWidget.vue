<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <router-link
    :to="route.path.split('/').slice(0, -1).join('/') || '/'"
    font-mono no-underline opacity-50 hover:opacity-75
  >
    cd ..
  </router-link>
</template>
