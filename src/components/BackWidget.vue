<script setup lang="ts">
const route = useRoute()
const destination = computed(() => {
  if (!route.path)
    return '/'
  const split = route.path.split('/')
  return split.length > 2
    ? split.slice(0, 2).join('/')
    : split.slice(0, -1).join('/') || '/'
})
</script>

<template>
  <router-link
    :to="destination"
    font-mono no-underline opacity-50 hover:opacity-75
  >
    cd ..
  </router-link>
</template>
