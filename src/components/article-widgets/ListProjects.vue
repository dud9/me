<script setup lang="ts">
import avatar from '~/assets/avatar.jpg'
import wechatPayCode from '~/assets/wechat-pay-code.jpg'

defineProps<{ projects: Record<string, any[]> }>()
const imageNote = ref()
function showImage() {
  if (unref(imageNote))
    return
  imageNote.value = useImageNote({
    title: '赞助我吧',
    description: '为作者送上一杯咖啡',
    imageSrc: wechatPayCode,
    avatar,
    hasLeaveMessage: true,
    leaveMessage: '谢谢老板~',
    onClose: () => imageNote.value = undefined,
  })
}
</script>

<template>
  <template v-for="key in Object.keys(projects)" :key="key">
    <h4 class="mt-10 font-bold">
      {{ key }}
    </h4>
    <div class="project-grid py-2 -mx-3 gap-2">
      <a
        v-for="item, idx in projects[key]"
        :key="idx"
        class="item relative flex items-center"
        :href="item.link"
        target="_blank"
        :class="!item.link ? 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4' : ''"
        :title="item.name"
      >
        <div v-if="item.icon" class="pt-2 pr-5">
          <div class="text-3xl opacity-50" :class="item.icon || 'i-carbon-unknown'" />
        </div>
        <div class="flex-auto">
          <div class="text-normal">{{ item.name }}</div>
          <div class="desc text-sm opacity-50 font-normal" v-html="item.desc" />
        </div>
      </a>
    </div>
  </template>
  <div class="markdown">
    <p op75 pt-4>
      <em>
        Thanks for getting intersted in my works! If like them or find them useful, consider
        &nbsp;<a
          cursor-pointer
          rel="nofollow noopener noreferrer"
          target="_blank"
          @click="showImage"
        >sponsoring me</a>&nbsp;to support me keeping them sustainable. Cheers! :)
      </em>
    </p>
  </div>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.project-grid a.item {
  padding: 0.8em 1em;
  background: transparent;
  font-size: 1.1rem;
}
.project-grid a.item:hover {
  background: #88888808;
}
</style>
