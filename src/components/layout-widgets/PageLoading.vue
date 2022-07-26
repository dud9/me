<script setup lang="ts">
const {
  duration = 1500,
} = defineProps<{
  duration?: number
}>()

let iconPx = $ref(160)
useTimeoutFn(() => {
  iconPx = 500
}, 10)
</script>

<template>
  <div bg="[#18A058] dark:![#63E2B7]" w-screen h-screen flex justify-center items-center>
    <div
      i-carbon-campsite text=" white" transition-all
      :class="`duration-${duration} !text-${iconPx}px`"
    />
  </div>
</template>

