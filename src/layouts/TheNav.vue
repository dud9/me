<script setup lang="ts">
const navItemStyle = 'text-lg op-50 hover:op-100 focus:op-100'
const router = useRouter()
function go2(path: string) {
  router.push(path)
}
</script>

<template>
  <div flex justify-between items-center px="10 lt-md:4">
    <div text="2xl black-800 dark:white">
      Faitsse
    </div>
    <nav flex gap-5 justify-end items-center>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button quaternary text :class="navItemStyle" @click="go2('/posts')">
            <span lt-md:hidden>Blog</span>
            <div i-ri-article-line md:hidden />
          </n-button>
        </template>
        <span> Posts </span>
      </n-tooltip>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button quaternary text :class="navItemStyle" @click="go2('/projects')">
            <span class="lt-md:hidden">Projects</span>
            <div i-ri-lightbulb-line md:hidden />
          </n-button>
        </template>
        <span> Projects </span>
      </n-tooltip>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button quaternary text :class="navItemStyle" @click="go2('/demos')">
            <div i-mdi-sticker-emoji />
          </n-button>
        </template>
        <span> Demos </span>
      </n-tooltip>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button quaternary text :class="navItemStyle" @click="go2('/tools')">
            <div i-carbon-tools />
          </n-button>
        </template>
        <span> Tools </span>
      </n-tooltip>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button quaternary text :class="navItemStyle" @click="go2('/notes')">
            <div i-ri-sticky-note-line />
          </n-button>
        </template>
        <span> Notes </span>
      </n-tooltip>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button quaternary text :focusable="false" lt-md:hidden :class="navItemStyle">
            <a href="https://twitter.com/antfu7" target="_blank">
              <div i-ri-qq-line />
            </a>
          </n-button>
        </template>
        <span> QQ </span>
      </n-tooltip>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button quaternary text :focusable="false" lt-md:hidden :class="navItemStyle">
            <a href="https://twitter.com/antfu7" target="_blank">
              <div i-ri-heart-line />
            </a>
          </n-button>
        </template>
        <span> Sponsor Me </span>
      </n-tooltip>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button quaternary text :focusable="false" lt-md:hidden :class="navItemStyle">
            <a href="https://github.com/faitsse" target="_blank">
              <div i-uil-github-alt />
            </a>
          </n-button>
        </template>
        <span> Github </span>
      </n-tooltip>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <DarkToggle :class="navItemStyle" />
        </template>
        <span> Theme </span>
      </n-tooltip>
    </nav>
  </div>
</template>

