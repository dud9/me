<script setup lang="ts">
const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})
const format = formatDate
const router = useRouter()
const route = useRoute()
const content = ref<HTMLDivElement>()
// fix: when md title list click,
// scroll smooth to the target.
onMounted(() => {
  const navigate = () => {
    if (location.hash) {
      document.querySelector(decodeURIComponent(location.hash))
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleAnchors = (
    event: MouseEvent & { target: HTMLElement },
  ) => {
    const link = event.target.closest('a')
    if (
      !event.defaultPrevented
      && link
      && link.href
      && event.button === 0
      && link.target !== '_blank'
      && link.rel !== 'external'
      && !link.download
      && !event.metaKey
      && !event.ctrlKey
      && !event.shiftKey
      && !event.altKey
    ) {
      const url = new URL(link.href)
      if (url.origin !== window.location.origin)
        return
      event.preventDefault()
      const { pathname, hash } = url
      if (hash && (!pathname || pathname === location.pathname)) {
        window.history.replaceState({}, '', hash)
        navigate()
      }
      else {
        router.push({ path: pathname, hash })
      }
    }
  }
  useEventListener(window, 'hashchange', navigate)
  useEventListener(content.value!, 'click', handleAnchors, { passive: false })
  navigate()
  setTimeout(navigate, 500)
})
</script>

<template>
  <div flex="~ col">
    <div v-if="frontmatter.display ?? frontmatter.title" class="prose m-auto mb-8">
      <h1 class="mb-0">
        {{ frontmatter.display ?? frontmatter.title }}
      </h1>
      <p v-if="frontmatter.date" class="opacity-50 !-mt-2">
        {{ format(frontmatter.date) }} <span v-if="frontmatter.duration">· {{ frontmatter.duration }}</span>
      </p>
      <p v-if="frontmatter.subtitle" class="opacity-50 !-mt-6 italic">
        {{ frontmatter.subtitle }}
      </p>
      <PostTags v-if="frontmatter.tags?.length > 0" :tags="frontmatter.tags" />
    </div>
    <article ref="content">
      <slot />
    </article>
    <div v-if="!['index', 'all'].includes(route.name as string)" class="w-full prose m-auto mt-8 mb-8">
      <BackWidget />
    </div>
  </div>
</template>
