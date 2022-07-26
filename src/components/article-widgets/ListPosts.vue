<script setup lang="ts">
import type { Post } from '~/types'

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
      tags: i.meta.frontmatter?.tags || [],
      fixTop: i.meta.frontmatter?.fixTop || false,
    })) || []
})
const fixTopPosts = computed<Post[]>(() => {
  return unref(posts).filter(i => i.fixTop) || []
})
const postsByPage = computed<Post[]>(() => {
  const _posts = unref(posts).filter(i => !i.fixTop) || []
  itemCount.value = _posts.length
  if (_posts.length === 0)
    return []
  const _page = unref(page)
  const _pageSize = unref(pageSize)
  const [l, r] = [(_page - 1) * _pageSize, _page * _pageSize]
  return _posts.slice(l, r)
})
const showPager = computed(() => {
  return unref(posts).length > 7
})
const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isSameYear = (a: Date | string | number, b: Date | string | number) => a && b && getYear(a) === getYear(b)
</script>

<template>
  <ul>
    <template v-if="!posts.length">
      <!-- <PageNotFound /> -->
      { there is nothing. }
    </template>
    <template v-if="fixTopPosts.length > 0">
      <ListPostsLink v-for="post in fixTopPosts" :key="post.path" :post="post" />
    </template>
    <template v-for="post, idx in postsByPage" :key="post.path">
      <div v-if="!isSameYear(post.date, postsByPage[idx - 1]?.date)" relative h20>
        <span text-8em op10 absolute left--3rem top--2rem font-bold>{{ getYear(post.date) }}</span>
      </div>
      <ListPostsLink :post="post" />
    </template>
    <Pagination v-if="showPager" v-model:page="page" v-model:page-size="pageSize" :item-count="itemCount" />
  </ul>
</template>
