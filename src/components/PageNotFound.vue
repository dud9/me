<template>
  <n-result status="404" title="😅连个毛也没有~" description="😅😅😅😅😅😅">
    <template #footer>
      <n-button text class="text-xl" @click="$router.go(-1)">
        cd..
      </n-button>
    </template>
  </n-result>
</template>
