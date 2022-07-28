<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div flex justify-between items-center px-20>
    <div flex justify-center items-center h-full border="1 red">
      <n-tag type="success" size="small" mr-3>
        {{ route.meta.frontmatter?.postInfoInNav || '' }}
      </n-tag>
      <n-h3 prefix="bar" align-text>
        {{ route.meta.frontmatter?.title || '' }}
      </n-h3>
      <n-text>{{ route.meta.frontmatter?.subtitle || '' }}</n-text>
    </div>

    <div ml-12>
      {{ route.meta.frontmatter?.description || '' }}
    </div>
  </div>
</template>
