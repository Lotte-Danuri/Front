<template>
  <div><h1>dfsf</h1></div>
</template>

<script>
import { useApi } from '/@src/composable/useApi'
const api = useApi()

export default {
  created() {
    this.postCategoryList()
  },
  methods: {
    async postCategoryList() {
      api
        .post('/products/condition', {
          categoryThirdId: [2],
          brandId: [1, 2, 3],
          minPrice: 100000,
          maxPrice: 500000,
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
}
</script>

<style>

</style>

