<template>
  <div fixed top-8rem right-50px lt-md:hidden>
    <n-tooltip
      placement="bottom"
      trigger="hover"
    >
      <template #trigger>
        <n-button text class="text-2xl">
          <div i-bi-pin-angle op-50 hover:op-100 focus:op-100 />
        </n-button>
      </template>
      <span> 固定页头 </span>
    </n-tooltip>
  </div>
</template>
