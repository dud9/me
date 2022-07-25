<script setup lang="ts">
const {
  tags = [],
} = defineProps<{
  tags?: string[]
}>()

const filterTags = computed(() => {
  return tags.slice(0, 6) || []
})
const tagType = (idx: number) => {
  return ['primary', 'info', 'success', 'warning', 'error', 'default'][idx]
}
</script>

<template>
  <div wa h-full flex justify-start items-center>
    <n-tag v-for="tag, idx in filterTags" :key="idx" :type="tagType(idx)" :bordered="false" mr-2>
      {{ tag }}
    </n-tag>
  </div>
</template>
