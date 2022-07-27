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

const postsByYear = computed<Record<string, Post[]>>(() => {
  const obj: Record<string, Post[]> = {}
  const _post = posts.value
  if (_post.length === 0)
    return obj
  _post.forEach((i) => {
    const year = useDayJs(i.date).format('YYYY')
    const yearPosts = Object.prototype.hasOwnProperty.call(obj, year)
      ? [...obj[year], i]
      : [i]
    obj[year] = yearPosts
  })
  return obj
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
    simple: ['success', 'Simple'],
    medium: ['warning', 'Medium'],
    hard: ['error', 'Hard'],
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
    <div v-if="Object.keys(postsByYear).length" mt-30px>
      <template
        v-for="[key, posts] in Object.entries(postsByYear)
          .sort((a, b) => +Number(b[0]) - +Number(a[0]))"
        :key="key"
      >
        <div class="group">
          <n-h2 prefix="bar" type="info" align-text>
            {{ key }} <span text-14px hidden group-hover:inline-block>({{ posts.length || 0 }})</span>
          </n-h2>
        </div>
        <n-timeline mb-5 :icon-size="24">
          <n-timeline-item
            v-for="post, idx in posts"
            :key="idx" class="flex items-center"
          >
            <template #icon>
              <div v-if="post.difficulty === 'simple'" i-twemoji-zany-face />
              <div v-if="post.difficulty === 'medium'" i-twemoji-confounded-face />
              <div v-if="post.difficulty === 'hard'" i-twemoji-loudly-crying-face />
            </template>
            <template #header>
              <div flex items-center>
                <AppLink
                  :to="post.path" class="mr-2 item"
                >
                  <span mr-3>{{ useDayJs(post.date).format('MM/DD') }}</span>
                  <span>{{ post.title }}</span>
                </AppLink>
                <n-tag :type="getPostType(post.difficulty)[0]" size="small" round>
                  {{ getPostType(post.difficulty)[1] }}
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
      </template>
    </div>
  </div>
</template>
