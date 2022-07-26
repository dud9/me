<script setup lang="ts">
import type { Post } from '~/types'

const {
  post = {},
} = defineProps<{
  post?: Post
}>()

const format = formatDate
const typographyType = computed(() => {
  return {
    front: 'success',
    end: 'info',
    logic: 'warning',
    life: 'error',
  }[unref(activeSubNav)] || 'default'
})
</script>

<template>
  <AppLink
    class="item block font-normal mb-6 mt-2 no-underline"
    :to="post.path"
  >
    <li class="no-underline">
      <div class="title text-lg flex justify-between">
        <n-h3 :type="typographyType" prefix="bar" align-text>
          {{ post.title }}
          <sup
            v-if="post.lang === 'zh'"
            class="text-xs border border-current rounded px-1 pb-0.2"
          >
            中文
          </sup>
        </n-h3>
        <div v-if="post.fixTop" i-ph-push-pin-bold text-red-500 />
      </div>
      <div class="time opacity-50 text-sm -mt-1">
        {{ format(post.date) }}
        <span v-if="post.duration" op80>· {{ post.duration }}</span>
        <span v-if="post.platform" op80>· {{ post.platform }}</span>
      </div>
    </li>
  </AppLink>
</template>
