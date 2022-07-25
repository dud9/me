<script setup lang="ts">
import avatar from '~/assets/avatar2.jpg'
import qqScanCode from '~/assets/qq-scan-code.jpg'
import wechatPayCode from '~/assets/wechat-pay-code.jpg'

const navItemStyle = 'text-sm op-50 hover:op-100 focus:op-100'
const router = useRouter()
function go2(path: string) {
  router.push(path)
}
const imageNote = ref()
function showImage(type = 'qq') {
  if (unref(imageNote))
    return
  const title = type === 'qq'
    ? '联系我吧'
    : '赞助我吧'
  const description = type === 'qq'
    ? 'Just Playing Around!'
    : '为作者送上一杯咖啡~'
  const imageSrc = type === 'qq'
    ? qqScanCode
    : wechatPayCode
  const hasLeaveMessage = type !== 'qq'
  const leaveMessage = type === 'qq'
    ? ''
    : '谢谢老板~'
  useImageNote({
    title,
    description,
    imageSrc,
    avatar,
    hasLeaveMessage,
    leaveMessage,
    onClose: () => imageNote.value = undefined,
  })
}

const anchorBallColor = computed(() => {
  return unref(isDark)
    ? '#63E2B7'
    : '#18A058'
})
const route = useRoute()
function isActive(path: string) {
  return route.path.startsWith(path)
}
</script>

<template>
  <div flex justify-between items-center px="10 lt-md:4">
    <div flex-inline text-xl font-bold>
      <div i-noto-v1-cat mr-3 />
      <span lt-md:hidden text="black-800 dark:white">Duende</span>
    </div>
    <nav flex gap-6 justify-end items-center class="list-group">
      <div relative flex items-center>
        <n-button text :focusable="false" :native-focus-behavior="false" :class="navItemStyle" @click="go2('/posts')">
          <div i-carbon-align-horizontal-center />
          <span lt-sm:hidden ml-2 text-md>文</span>
        </n-button>
        <div v-if="isActive('/posts')" class="anchor-ball" lt-sm:hidden />
      </div>
      <div relative flex items-center>
        <n-button text :focusable="false" :native-focus-behavior="false" :class="navItemStyle" @click="go2('/projects')">
          <div i-ri-lightbulb-line />
          <span lt-sm:hidden ml-2>碼</span>
        </n-button>
        <div v-if="isActive('/projects')" class="anchor-ball" lt-sm:hidden />
      </div>
      <div relative flex items-center>
        <n-button text :focusable="false" :native-focus-behavior="false" :class="navItemStyle" @click="go2('/demos')">
          <div i-mdi-sticker-emoji />
          <span lt-sm:hidden ml-2>案</span>
        </n-button>
        <div v-if="isActive('/demos')" class="anchor-ball" lt-sm:hidden />
      </div>
      <div relative flex items-center>
        <n-button text :focusable="false" :native-focus-behavior="false" :class="navItemStyle" @click="go2('/tools')">
          <div i-carbon-tools />
          <span lt-sm:hidden ml-2>工</span>
        </n-button>
        <div v-if="isActive('/tools')" class="anchor-ball" lt-sm:hidden />
      </div>
      <div relative flex items-center>
        <n-button text :focusable="false" :native-focus-behavior="false" :class="navItemStyle" @click="go2('/notes')">
          <div i-ri-article-line />
          <span lt-sm:hidden ml-2>記</span>
        </n-button>
        <div v-if="isActive('/notes')" class="anchor-ball" lt-sm:hidden />
      </div>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button text :focusable="false" :native-focus-behavior="false" lt-sm:hidden :class="navItemStyle" @click="showImage('qq')">
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
          <n-button text :focusable="false" :native-focus-behavior="false" lt-sm:hidden :class="navItemStyle" @click="showImage('sponsor')">
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
          <n-button text :focusable="false" :native-focus-behavior="false" lt-sm:hidden :class="navItemStyle">
            <a href="https://github.com/dud9" target="_blank">
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

<style scoped>
.list-group {
  height: 100%;
  width: auto;
}
.anchor-ball {
  position: absolute;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: currentColor;
  transition: all 0.3s;
  bottom: -10px;
  left: 50%;
  opacity: 0.3;
}
.list-group:hover .anchor-ball {
  opacity: 1;
  background-color: v-bind(anchorBallColor);
  border-radius: 3px;
  width: 2.3rem;
  height: 2px;
  transform: translateX(-50%);
}
</style>

