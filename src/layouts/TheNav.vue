<script setup lang="ts">
import { EnumAppMeta } from '~/enum'

const navItemStyle = 'text-lg op-50 hover:op-100 focus:op-100'
const router = useRouter()
function go2(path: string) {
  router.push(path)
}
function showImage(type = 'qq') {
  const title = type === 'qq'
    ? '联系我吧'
    : '赞助我吧'
  const description = 'Just Playing Around!'
  const imageSrc = type === 'src'
    ? EnumAppMeta.qqScanCode
    : EnumAppMeta.aliPay
  const hasLeaveMessage = type !== 'qq'
  const leaveMessage = type === 'qq'
    ? ''
    : '谢谢老板~'
  useImageNote({
    title,
    description,
    imageSrc,
    avatar: EnumAppMeta.avatar,
    hasLeaveMessage,
    leaveMessage,
  })
}
</script>

<template>
  <div flex justify-between items-center px="10 lt-md:4">
    <div flex-inline text="2xl black-800 ![#36ad6a] dark:![#7fe7c4]" font-bold>
      <div i-mdi-gentoo mr-3 animate-pulse />
      Faitsse
    </div>
    <nav flex gap-5 justify-end items-center>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button text :class="navItemStyle" @click="go2('/posts')">
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
          <n-button text :class="navItemStyle" @click="go2('/projects')">
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
          <n-button text :class="navItemStyle" @click="go2('/demos')">
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
          <n-button text :class="navItemStyle" @click="go2('/tools')">
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
          <n-button text :class="navItemStyle" @click="go2('/notes')">
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
          <n-button text :focusable="false" lt-md:hidden :class="navItemStyle" @click="showImage('qq')">
            <div i-ri-qq-line />
          </n-button>
        </template>
        <span> QQ </span>
      </n-tooltip>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button text :focusable="false" lt-md:hidden :class="navItemStyle" @click="showImage('sponsor')">
            <div i-ri-heart-line />
          </n-button>
        </template>
        <span> Sponsor Me </span>
      </n-tooltip>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button text :focusable="false" lt-md:hidden :class="navItemStyle">
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

