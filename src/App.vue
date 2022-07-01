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

useHead({
  title: 'Duende',
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/logo.svg',
    },
  ],
})
</script>

<template>
  <n-config-provider :theme="theme">
    <n-loading-bar-provider>
      <BaseLayout />
    </n-loading-bar-provider>
  </n-config-provider>
</template>
