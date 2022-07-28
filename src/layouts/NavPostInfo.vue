<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div flex justify-between items-center px="15">
    <div text-lg font-bold>
      {{ route.meta.frontmatter?.title || '' }}
    </div>
    <div ml-3>
      {{ route.meta.frontmatter?.description || '' }}
    </div>
  </div>
</template>
