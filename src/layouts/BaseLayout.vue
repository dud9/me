<template>
  <n-layout>
    <n-layout-header>
      <TheNav />
    </n-layout-header>
    <n-layout-content content-style="padding: 24px;">
      <RouterView />
    </n-layout-content>
    <n-layout-footer>
      <TheFoot />
    </n-layout-footer>
  </n-layout>
</template>
