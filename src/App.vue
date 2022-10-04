<template>
    <MyHeader></MyHeader>
    <router-link to="/"></router-link>
    <router-view/>
    <MyChat></MyChat>
    <MyFooter></MyFooter>
</template>

<script>
import MyHeader from './components/layouts/MyHeader.vue'
import MyChat from './components/layouts/MyChat.vue'
import MyFooter from './components/layouts/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyChat,
    MyFooter
  }
}
</script>

<style>

</style>
