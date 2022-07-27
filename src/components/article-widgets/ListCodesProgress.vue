<script setup lang="ts">
import { useThemeVars } from 'naive-ui'

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
    Number((simple / total * 100).toFixed(0)),
    Number((medium / total * 100).toFixed(0)),
    Number((hard / total * 100).toFixed(0)),
  ]
})

const { width } = useWindowSize()
const hiddenSummary = computed(() => {
  return unref(width) < 500
})
</script>

<template>
  <div flex justify-center items-center>
    <n-progress
      style="width: 100px; margin: 4px 8px 8px 0;"
      type="multiple-circle"
      :show-indicator="false"
      :circle-gap="10"
      :percentage="percentage"
      :color="[themeVars.successColor, themeVars.warningColor, themeVars.errorColor]"
    />
    <div v-if="!hiddenSummary" flex="~ col" ml-3>
      <div flex-inline items-center>
        <div i-twemoji-zany-face mr-2 />
        <n-text type="primary" font-bold mr-4>
          Simple:
        </n-text>
        <span font-bold text-2xl>{{ simple }}</span>
        <span ml-1 text-sm>题</span>
        <n-divider vertical />
        <n-tag type="success">
          {{ percentage[0] }}%
        </n-tag>
      </div>
      <div flex-inline items-center>
        <div i-twemoji-confounded-face mr-2 />
        <n-text type="warning" font-bold mr-4>
          Medium:
        </n-text>
        <span font-bold text-2xl>{{ medium }}</span>
        <span ml-1 text-sm>题</span>
        <n-divider vertical />
        <n-tag type="warning">
          {{ percentage[1] }}%
        </n-tag>
      </div>
      <div flex-inline items-center>
        <div i-twemoji-loudly-crying-face mr-2 />
        <n-text type="error" font-bold mr-4>
          Hard:
        </n-text>
        <span font-bold text-2xl>{{ hard }}</span>
        <span ml-1 text-sm>题</span>
        <n-divider vertical />
        <n-tag type="error">
          {{ percentage[2] }}%
        </n-tag>
      </div>
    </div>
  </div>
</template>
