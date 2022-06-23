<script setup lang="ts">

</script>

<template>
  <div flex justify-end h-50px w-full>
    dasdasd
    <router-link to="/posts" title="博客">
      <span class="lt-md:hidden">Blog</span>
      <div i-ri-article-line md:hidden />
    </router-link>
    <router-link to="/projects" title="项目">
      <span class="lt-md:hidden">Projects</span>
      <div i-ri-lightbulb-line class="md:hidden" />
    </router-link>
    <router-link to="/demos" title="Demo">
      <div i-mdi-sticker-emoji />
    </router-link>
    <router-link to="/tools" title="工具">
      <div i-carbon-tools />
    </router-link>
    <router-link to="/notes" title="笔记">
      <div i-ri-sticky-note-line />
    </router-link>
    <a href="https://twitter.com/antfu7" target="_blank" title="QQ" class="lt-md:hidden">
      <div i-ri-qq-line />
    </a>
    <a href="https://twitter.com/antfu7" target="_blank" title="赞助" class="lt-md:hidden">
      <div i-ri-heart-line />
    </a>
    <a href="https://github.com/faitsse" target="_blank" title="GitHub" class="lt-md:hidden">
      <div i-uil-github-alt />
    </a>
    <toggle-theme />
  </div>
</template>

