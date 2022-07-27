<script setup lang="ts">
import type { Post } from '~/types'

const useDayJs = dayJs
const router = useRouter()
const posts = computed<Post[]>(() => {
  return router.getRoutes()
    .filter(i => i.path.startsWith('/codes')
            && i.meta.frontmatter.date
            && !i.path.endsWith('.html'))
    .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))
    .map(i => ({
      path: i.path,
      title: i.meta.frontmatter.title,
      date: i.meta.frontmatter.date,
      lang: i.meta.frontmatter.lang,
      duration: i.meta.frontmatter.duration,
      tags: i.meta.frontmatter?.tags || [],
      difficulty: i.meta.frontmatter?.difficulty || 'simple',
    })) || []
})

const refCodeCnt = ref()
const codeCntLabel = computed(() => {
  return '累计完成'
})
function playCodeCntAnimation() {
  refCodeCnt.value?.play()
}
onMounted(() => {
  playCodeCntAnimation()
})
function getPostType(difficulty: 'simple' | 'medium' | 'hard' = 'simple') {
  return {
    simple: 'success',
    medium: 'warning',
    hard: 'error',
  }[difficulty]
}
</script>

<template>
  <div flex="~ col">
    <div flex justify-between items-center>
      <n-statistic :label="codeCntLabel" tabular-nums>
        <n-number-animation
          ref="refCodeCnt"
          show-separator
          :from="0"
          :to="30"
          :active="false"
        />
        <template #suffix>
          题
        </template>
      </n-statistic>
      <ListCodesProgress v-bind="{ total: 30, simple: 5, medium: 10, hard: 15 }" />
    </div>
    <div mt-10px>
      <div class="group">
        <n-h2 prefix="bar" type="info" align-text>
          2022 <span text-14px hidden group-hover:inline-block>(3)</span>
        </n-h2>
      </div>
      <n-timeline>
        <n-timeline-item
          v-for="post, idx in posts"
          :key="idx"
          :type="getPostType(post.difficulty)"
        >
          <template #header>
            <div flex items-center>
              <span mr-3>{{ useDayJs(post.date).format('MM/DD') }}</span>
              <span mr-2>{{ post.title }}</span>
              <n-tag v-if="post.difficulty === 'simple'" type="success" size="small" round>
                Simple
              </n-tag>
              <n-tag v-if="post.difficulty === 'medium'" type="warning" size="small" round>
                Medium
              </n-tag>
              <n-tag v-if="post.difficulty === 'hard'" type="error" size="small" round>
                Hard
              </n-tag>
              <div v-if="post.tags?.length" flex-inline items-center ml-4>
                <n-tag v-for="tag, idx in post.tags" :key="idx" type="info" :bordered="false" size="small" mr-2 cursor-pointer>
                  {{ tag }}
                </n-tag>
              </div>
            </div>
          </template>
        </n-timeline-item>
      </n-timeline>
    </div>
  </div>
</template>
