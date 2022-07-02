<script setup lang="ts">
import type { Post } from '~/types'

const format = formatDate
const { page, pageSize, itemCount } = toRefs(pagination)
const router = useRouter()
const posts = computed<Post[]>(() => {
  const active = unref(activeSubNav)
  return router.getRoutes()
    .filter(i => i.path.startsWith(`/posts/${active}`)
            && i.meta.frontmatter.date
            && !i.path.endsWith('.html'))
    .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))
    .map(i => ({
      path: i.path,
      title: i.meta.frontmatter.title,
      date: i.meta.frontmatter.date,
      lang: i.meta.frontmatter.lang,
      duration: i.meta.frontmatter.duration,
    })) || []
})
const postsByPage = computed<Post[]>(() => {
  const _posts = unref(posts)
  itemCount.value = _posts.length
  if (_posts.length === 0)
    return []
  const _page = unref(page)
  const _pageSize = unref(pageSize)
  const [l, r] = [(_page - 1) * _pageSize, _page * _pageSize]
  return _posts.slice(l, r)
})
const showPager = computed(() => {
  return unref(posts).length > unref(pageSize)
})
</script>

<template>
  <ul>
    <template v-if="!posts.length">
      <!-- <PageNotFound /> -->
      { there is nothing }
    </template>
    <AppLink
      v-for="route in postsByPage" :key="route.path"
      class="item block font-normal mb-6 mt-2 no-underline"
      :to="route.path"
    >
      <li class="no-underline">
        <div class="title text-lg">
          {{ route.title }}
          <sup
            v-if="route.lang === 'zh'"
            class="text-xs border border-current rounded px-1 pb-0.2"
          >
            中文
          </sup>
        </div>

        <div class="time opacity-50 text-sm -mt-1">
          {{ format(route.date) }}
          <span v-if="route.duration" op80>· {{ route.duration }}</span>
          <span v-if="route.platform" op80>· {{ route.platform }}</span>
        </div>
      </li>
    </AppLink>
    <Pagination v-if="showPager" v-model:page="page" v-model:page-size="pageSize" :item-count="itemCount" />
  </ul>
</template>
