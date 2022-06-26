<script setup lang="ts">
import type { SubNavType } from '~/types'

const inactiveStyle = 'opacity-20 hover:opacity-50'
function isActive(type: string) {
  return type === unref(activeSubNav)
}
function go2(type: SubNavType) {
  changeActiveSubNav(type)
}
</script>

<template>
  <div prose m-auto mb-8 select-none>
    <div mb-0 flex="~ gap-3" text-3xl>
      <a class="!border-none !font-400" :class="isActive('front') ? '' : inactiveStyle" @click="go2('front')">
        前端
      </a>
      <a class="!border-none !font-400" :class="isActive('end') ? '' : inactiveStyle" @click="go2('end')">
        后端
      </a>
      <a class="!border-none !font-400" :class="isActive('logic') ? '' : inactiveStyle" @click="go2('logic')">
        算法
      </a>
      <a class="!border-none !font-400" :class="isActive('life') ? '' : inactiveStyle" @click="go2('life')">
        生活
      </a>
    </div>
  </div>
</template>
