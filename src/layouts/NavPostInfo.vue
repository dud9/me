<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div flex justify-between items-center px-10 lt-md="px-5">
    <div flex items-center lt-sm:hidden>
      <n-tag type="success" size="small" mr-3>
        {{ route.meta.frontmatter?.postInfoInNav || '' }}
      </n-tag>
      <n-tag
        v-for="tag, idx in route.meta.frontmatter?.tags || []" :key="idx"
        type="info" size="small" mr-3
      >
        {{ tag }}
      </n-tag>
    </div>
    <n-h2 prefix="bar" strong ma>
      {{ route.meta.frontmatter?.title || '' }}
    </n-h2>
    <div v-if="route.meta.frontmatter?.description">
      {{ route.meta.frontmatter?.description || '' }}
    </div>
  </div>
</template>
