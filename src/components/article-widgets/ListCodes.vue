<script setup lang="ts">
import type { Post } from '~/types'

const useDayJs = dayJs
const router = useRouter()
const { width } = useWindowSize()
const filterThisMonth = ref(false)
const filterTags = ref<string[]>([])

function isThisMonth(date: string) {
  const nowYear = useDayJs().year()
  const targetYear = useDayJs(date).year()
  const nowMonth = useDayJs().month()
  const targetMonth = useDayJs(date).month()
  return nowYear === targetYear && nowMonth === targetMonth
}

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

const filterPosts = computed<Post[]>(() => {
  let _posts = posts.value
  if (_posts.length === 0)
    return _posts
  if (filterThisMonth.value)
    _posts = _posts.filter(i => isThisMonth(i.date))
  if (filterTags.value.length > 0) {
    _posts = _posts.filter((i) => {
      if (i.tags?.length)
        return i.tags.some((tag: string) => filterTags.value.includes(tag))
      return false
    })
  }
  return _posts
})

const postsByYear = computed<Record<string, Post[]>>(() => {
  const obj: Record<string, Post[]> = {}
  const _post = filterPosts.value
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
const codeTotalCnt = computed(() => {
  const _posts = posts.value
  const obj = {
    total: 0,
    simple: 0,
    medium: 0,
    hard: 0,
  }
  if (_posts.length === 0)
    return obj
  obj.total = _posts.length
  obj.simple = (_posts.filter(i => i.difficulty === 'simple') || []).length
  obj.medium = (_posts.filter(i => i.difficulty === 'medium') || []).length
  obj.hard = (_posts.filter(i => i.difficulty === 'hard') || []).length
  return obj
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

const tagOptions = computed<{ label: string; value: string }[]>(() => {
  const _posts = posts.value
  if (_posts.length === 0)
    return []
  const tagList: string[] = []
  _posts.forEach((i: Post) => {
    if (i.tags?.length) {
      for (const tagName of i.tags) {
        if (tagList.includes(tagName))
          continue
        tagList.push(tagName)
      }
    }
  })
  return tagList.map(tag => ({ label: tag, value: tag })) || []
})

const tagMaxNum = computed(() => width.value < 640 ? 3 : 5)
function addTagByList(tagList: string[]) {
  if (tagList.length > tagMaxNum.value) {
    const diff = tagList.length - tagMaxNum.value
    filterTags.value = tagList.slice(diff)
  }
  else {
    filterTags.value = tagList
  }
}
function addTagOneByOne(tagName: string) {
  if (filterTags.value.includes(tagName))
    return
  if (filterTags.value.length + 1 > tagMaxNum.value)
    addTagByList([...filterTags.value, tagName])

  else
    filterTags.value.push(tagName)
}

function closeTag(tagName: string) {
  const index = filterTags.value.findIndex(i => i === tagName)
  if (index === -1)
    return
  filterTags.value.splice(index, 1)
}
</script>

<template>
  <div flex="~ col">
    <div flex items-center gap-x-10 lt-sm:gap-x-2 :class="{ 'justify-between': width < 500 }">
      <div flex="~ col">
        <n-gradient-text type="info" font-bold text-xl>
          累计完成
        </n-gradient-text>
        <n-statistic tabular-nums>
          <n-number-animation
            ref="refCodeCnt"
            show-separator
            :from="0"
            :to="codeTotalCnt.total"
            :active="false"
          />
          <template #suffix>
            题
            <n-gradient-text type="info" font-bold text-sm>
              加油!
            </n-gradient-text>
          </template>
        </n-statistic>
      </div>
      <ListCodesProgress v-bind="{ ...codeTotalCnt }" />
    </div>
    <div flex items-center ha min-h-100px>
      <div flex-inline items-center font-bold :class="{ '!flex-col justify-center': width < 500 }">
        <n-text type="primary">
          本月
        </n-text>
        <n-switch v-model:value="filterThisMonth" :round="false" ml-2 :checked-value="true" />
      </div>
      <div
        v-if="filterTags?.length" wa ha ml-4 p-3
        flex-inline items-center gap-y-2 :class="{ '!flex-wrap': width < 500 }"
      >
        <TransitionGroup name="fade">
          <n-tag
            v-for="tag, idx in filterTags"
            :key="idx" type="info" closable mx-1
            :size="width < 500 ? 'small' : 'medium'"
            @close="closeTag(tag)"
          >
            {{ tag }}
          </n-tag>
        </TransitionGroup>
        <n-popselect
          :value="filterTags" multiple
          :options="tagOptions" trigger="click"
          :on-update:value="addTagByList"
        >
          <n-text type="info">
            <div i-carbon-add-alt ml-2 cursor-pointer op-50 hover="op-100" />
          </n-text>
        </n-popselect>
      </div>
    </div>

    <div v-if="Object.keys(postsByYear).length" mt-10px>
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
          <TransitionGroup name="fade">
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
                <div flex items-center :class="{ 'flex-col': width < 500 }">
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
                  </div>
                  <div
                    v-if="post.tags?.length"
                    flex-inline items-center ml-4
                    :class="{ 'justify-start w-full': width < 500 }"
                  >
                    <n-tag
                      v-for="tag, idx in post.tags"
                      :key="idx" type="info" :bordered="false"
                      size="small" mr-2 cursor-pointer
                      @click="addTagOneByOne(tag)"
                    >
                      {{ tag }}
                    </n-tag>
                  </div>
                </div>
              </template>
            </n-timeline-item>
          </TransitionGroup>
        </n-timeline>
      </template>
    </div>
  </div>
</template>

<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}
.fade-leave-active {
  position: absolute;
}
</style>
