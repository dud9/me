<script setup lang="ts">
const route = useRoute()
const { message } = useGlobalNaiveApi()
const currentUrl = computed(() => {
  return window.location.href || '/'
})
const { copy, copied, isSupported } = useClipboard({ source: currentUrl.value })
const debouncedShare = useDebounceFn(() => {
  share()
}, 200)
function share() {
  if (!isSupported) {
    message.error('当前不支持该操作哦~')
    return
  }
  copy()
  if (copied)
    message.success('链接以复制到剪切板中, 快去分享吧~')

  else
    message.error('链接复制失败, 请重试一下~')
}
</script>

<template>
  <div flex justify-between items-center px-10 lt-md="px-5">
    <div flex items-center lt-lg:hidden>
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
    <div flex items-center>
      <n-h2 prefix="bar" strong ma>
        {{ route.meta.frontmatter?.title || '' }}
      </n-h2>
      <div v-if="route.meta.frontmatter?.description" ml-2 lt-sm:hidden>
        <n-ellipsis
          :class="route.meta.frontmatter?.tags?.length > 1 ? '!max-w-350px' : '!max-w-500px'"
          lt-lg="!max-w-240px" op-30
        >
          {{ route.meta.frontmatter?.description || '' }}
        </n-ellipsis>
      </div>
    </div>

    <div flex items-center>
      <n-button strong secondary round @click="debouncedShare">
        <div i-carbon-share mr-2 />
        分享
      </n-button>
      <span font-bold text-16px op-30 ml-2 lt-sm:hidden>Horbar</span>
    </div>
  </div>
</template>
