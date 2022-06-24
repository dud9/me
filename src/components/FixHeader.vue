<script setup lang="ts">
const toggle = toggleFixedHeader
</script>

<template>
  <div fixed top-8rem right-50px lt-md:hidden>
    <n-tooltip
      placement="bottom"
      trigger="hover"
    >
      <template #trigger>
        <n-button text class="text-2xl" @click="toggle()">
          <div i-bi-pin-angle op-50 hover:op-100 focus:op-100 />
        </n-button>
      </template>
      <span> 固定页头 </span>
    </n-tooltip>
  </div>
</template>
