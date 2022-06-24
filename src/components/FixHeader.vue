<script setup lang="ts">
const headerFixed = fixedHeader
const debounceToggle = useDebounceFn(() => {
  const { message } = getGlobalNaiveApi()
  toggleFixedHeader()
  message.success(
    unref(fixedHeader)
      ? '已固定页头'
      : '已取消固定',
  )
}, 1000)
</script>

<template>
  <div fixed top-8rem right-50px lt-md:hidden>
    <n-tooltip
      placement="bottom"
      trigger="hover"
    >
      <template #trigger>
        <n-button text :focusable="false" class="text-2xl" @click="debounceToggle">
          <div
            :class="headerFixed
              ? 'i-ph-push-pin-slash-bold'
              : 'i-ph-push-pin-bold'"
            op-50 hover:op-100 focus:op-100
          />
        </n-button>
      </template>
      <span> 固定页头 </span>
    </n-tooltip>
  </div>
</template>
