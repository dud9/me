<script setup lang="ts">
import TheNav from './TheNav.vue'
import TheFoot from './TheFoot.vue'

const headerFixed = fixedHeader
</script>

<template>
  <n-layout :native-scrollbar="false" h-screen w-screen>
    <n-layout-header bordered :class="headerFixed ? 'fixed top-0 left-0' : ''">
      <TheNav w-full class="h-[4.5rem]" />
    </n-layout-header>
    <n-layout
      :native-scrollbar="false"
      :position="headerFixed ? 'absolute' : 'static'"
      :class="headerFixed ? 'mt-[4.5rem]' : ''"
    >
      <n-layout-content bg="[#F5F5F5] dark:[#101014]">
        <div flex justify-center px-7 py-10>
          <RouterView />
        </div>
      </n-layout-content>
      <n-layout-footer bg="[#F5F5F5] dark:[#101014]">
        <TheFoot w-full h-50px />
      </n-layout-footer>
      <n-back-top v-if="headerFixed" :right="50" />
    </n-layout>
    <FixHeader />
    <n-back-top v-if="!headerFixed" :right="50" />
  </n-layout>
</template>
