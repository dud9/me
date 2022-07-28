<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div flex justify-between items-center px="15">
    <div flex="~ col" items-center>
      <n-h3 prefix="bar" align-text>
        <n-text>{{ route.meta.frontmatter?.title || '' }}</n-text>
      </n-h3>
      <n-text v-if="route.meta.frontmatter?.subtitle">
        {{ route.meta.frontmatter?.subtitle || '' }}
      </n-text>
    </div>

    <div ml-12>
      {{ route.meta.frontmatter?.description || '' }}
    </div>
  </div>
</template>
