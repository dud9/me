<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import BaseLayout from '~/layouts/BaseLayout.vue'

type ThemeType = GlobalTheme | null
const theme = computed<ThemeType>(() => {
  return unref(isDark)
    ? darkTheme
    : null
})
</script>

<template>
  <n-config-provider :theme="theme">
    <BaseLayout />
  </n-config-provider>
</template>
