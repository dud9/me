<script setup lang="ts">
import type { Post } from '~/types'

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
</script>

<template />
