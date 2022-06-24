<script setup lang="ts">
</script>

<template>
  <div flex justify-between items-center px="10 lt-md:4" text-18px>
    <div text="30px black-800 dark:white" op-80>
      Faitsse
    </div>
    <nav flex gap-5 justify-end items-center>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button quaternary text>
            <span lt-md:hidden text-22px>Blog</span>
            <div i-ri-article-line md:hidden text-lg />
          </n-button>
        </template>
        <span> Posts </span>
      </n-tooltip>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button quaternary text text-22px>
            <span class="lt-md:hidden">Projects</span>
            <div i-ri-lightbulb-line md:hidden text-lg />
          </n-button>
        </template>
        <span> Projects </span>
      </n-tooltip>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button quaternary text text-lg>
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
          <n-button quaternary text text-lg>
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
          <n-button quaternary text text-lg>
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
          <n-button quaternary text :focusable="false" text-lg lt-md:hidden>
            <a href="https://twitter.com/antfu7" target="_blank">
              <div i-ri-qq-line />
            </a>
          </n-button>
        </template>
        <span> QQ </span>
      </n-tooltip>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button quaternary text :focusable="false" text-lg lt-md:hidden>
            <a href="https://twitter.com/antfu7" target="_blank">
              <div i-ri-heart-line />
            </a>
          </n-button>
        </template>
        <span> Sponsor Me </span>
      </n-tooltip>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <n-button quaternary text :focusable="false" text-lg lt-md:hidden>
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
          <DarkToggle />
        </template>
        <span> Theme </span>
      </n-tooltip>
    </nav>
  </div>
</template>

