<script setup lang="ts">
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useApi } from '/@src/composable/useApi'

// We may want to retrieve the posts from an API
// as we are using typescript, it is a good practice to always define our types
interface Product {
  id: string
}

const api = useApi()

// articles and fetchArticles variables can be provided by a composable function
const products = ref<Product[]>([]) // we know that the articles will be an array of Article

async function fetchProducts() {
  try {
    const { data } = await api.get<Product[]>('/products') // we know that our api respond with an array of Article
    products.value = data
  } catch (error) {
    // here we can handle the error
    console.error(error)
  }
}

// We trigger the fetchArticles function when the component is mounted
watchEffect(fetchProducts)

// don't forget to setup our page meta
useHead({
  title: 'My LuxOn',
})
</script>


<template>
  <div>
    <li v-for="product in products" :key="product.id">
      <!-- Here we are linking to the article detail page with a dynamic "slug" parameter -->
      <RouterLink
        :to="{
          name: '/views/MyMain',
          params: {
            id: product.id,
          },
        }"
      >
        {{ product.id }}
      </RouterLink>
    </li>
  </div>
</template>
