<template>
    <MyHeader></MyHeader>
    <router-link to="/"></router-link>
    <router-link to="/MyShop"></router-link>
    <router-view/>
    <MyFooter></MyFooter>
</template>

<script>
import MyHeader from './components/layouts/MyHeader.vue'
import MyFooter from './components/layouts/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>

</style>
