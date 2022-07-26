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

const { bool: loading, setBool: setLoading } = useBoolean(true)
useTimeoutFn(async () => {
  await nextTick()
  setLoading(false)
}, 1500)
</script>

<template>
  <n-config-provider :theme="theme">
    <n-loading-bar-provider>
      <BaseLayout v-if="!loading" />
      <PageLoading v-else />
    </n-loading-bar-provider>
  </n-config-provider>
</template>
