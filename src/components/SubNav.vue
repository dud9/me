<script setup lang="ts">
const inactiveStyle = 'opacity-20 hover:opacity-50'
function isActive(type: string) {
  return type === unref(activeSubNav)
}
</script>

<template>
  <div prose m-auto mb-8 select-none>
    <div mb-0 flex="~ gap-3" text-3xl>
      <router-link to="/posts/front" class="!border-none !font-400" :class="isActive('front') ? '' : inactiveStyle">
        前端
      </router-link>
      <router-link to="/posts/end" class="!border-none !font-400" :class="isActive('end') ? '' : inactiveStyle">
        后端
      </router-link>
      <router-link to="/posts/logic" class="!border-none !font-400" :class="isActive('logic') ? '' : inactiveStyle">
        算法
      </router-link>
      <router-link to="/posts/life" class="!border-none !font-400" :class="isActive('life') ? '' : inactiveStyle">
        生活
      </router-link>
    </div>
  </div>
</template>
