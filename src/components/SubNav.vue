<script setup lang="ts">
import { useRoute } from 'vue-router'
import { englishOnly } from '../logics'

const inactiveStyle = 'opacity-20 hover:opacity-50'

const route = useRoute()
</script>

<template>
  <div class="prose m-auto mb-8 select-none">
    <button flex="~ gap1" items-center mb2 op30 text-xs @click="englishOnly = !englishOnly">
      <div :i="englishOnly ? 'carbon-checkbox-checked' : 'carbon-checkbox'" />
      English Only
    </button>

    <div mb-0 flex="~ gap-3" text-3xl>
      <router-link to="/posts" class="!border-none !font-400" :class="route.path === '/posts' ? '' : inactiveStyle">
        前端
      </router-link>
      <router-link to="/talks" class="!border-none !font-400" :class="route.path === '/talks' ? '' : inactiveStyle">
        后端
      </router-link>
      <router-link to="/podcasts" class="!border-none !font-400" :class="route.path === '/podcasts' ? '' : inactiveStyle">
        算法
      </router-link>
      <router-link to="/podcasts" class="!border-none !font-400" :class="route.path === '/podcasts' ? '' : inactiveStyle">
        生活
      </router-link>
    </div>
  </div>
</template>
