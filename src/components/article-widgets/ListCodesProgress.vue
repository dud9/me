<script setup lang="ts">
import { useThemeVars } from 'naive-ui'
// import { changeColor } from 'seemly'

const {
  total = 0,
  simple = 0,
  medium = 0,
  hard = 0,
} = defineProps<{
  total?: number
  simple?: number
  medium?: number
  hard?: number
}>()

const themeVars = useThemeVars()
const percentage = computed(() => {
  if (total === 0)
    return [0, 0, 0]
  return [
    Number((simple / total).toFixed(1)),
    Number((medium / total).toFixed(1)),
    Number((hard / total).toFixed(1)),
  ]
})
</script>

<template>
  <div flex justify-center items-center class="!h-30px">
    <n-progress
      type="dashboard" :percentage="percentage[0]"
      :color="themeVars.successColor"

      :indicator-text-color="themeVars.successColor"
    >
      {{ simple }}
    </n-progress>
    <n-progress type="circle" status="warning" :percentage="percentage[1]">
      {{ medium }}
    </n-progress>
    <n-progress type="circle" status="error" :percentage="percentage[2]">
      {{ hard }}
    </n-progress>
  </div>
</template>
