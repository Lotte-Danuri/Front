<script setup lang="ts">
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useApi } from '/@src/composable/useApi'

interface Article {
  id: string
  title: string
  slug: string
  content: string
  comments: string[]
}

const article = ref<Article>()
const loading = ref(false)
const api = useApi()
const router = useRouter()
const route = useRoute()

// Trigger the function when the slug changes
watchEffect(async () => {
  const currentSlug = (route.params?.slug as string) ?? ''

  loading.value = true

  try {
    const { data } = await api.get<Article[]>(`/articles?slug=${slug}`)

    if (!data?.length) {
      throw new Error('Artcile not found')
    }

    article.value = data[0]
  } catch (error) {
    // If the article does not exist, we replace the route to the 404 page
    // we also pass the original url to the 404 page as a query parameter
    // http://localhost:3000/article-not-found?original=/blog/a-fake-slug
    router.replace({
      name: '/[...all]', // this will match the ./src/pages/[...all].vue route
      params: {
        all: 'article-not-found',
      },
      query: {
        original: router.currentRoute.value.fullPath,
      },
    })
  } finally {
    loading.value = false
  }
})

// Setup our page meta with our article data
useHead({
  title: computed(() => article.value?.title ?? 'Loading article...'),
})
</script>

<template>
  <LandingLayout theme="light">
    <div v-if="loading">Loading article...</div>
    <div v-else class="blog-detail-wrapper">
      <!--
        Page content goes here

        You can see more complete pages content samples from
        files in /src/components/pages directory
      -->

      <h1>{{ article?.title }}</h1>
      <div>{{ article?.content }}</div>
    </div>
  </LandingLayout>
</template>

<style lang="scss" scoped>
.blog-detail-wrapper {
  // Here we can add custom styles for the blog page
  // They will be only applied to this component
}
</style>