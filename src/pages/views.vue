<template>
  <MyHeader></MyHeader>
  <MyChat
    style="position: fixed; z-index: 999; right: 100px; bottom: 50px"
    @click="buttonClick"
  ></MyChat>
  <MyVuero
    v-if="chatShow"
    style="position: fixed; width: 75%; height: 50%; top: 50px; left: 200px; z-index: 999"
  ></MyVuero>
  <RouterView v-slot="{ Component }">
    <Transition name="fade-slow" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <MyFooter></MyFooter>
</template>

<script>
import MyHeader from './components/layouts/MyHeader.vue'
import MyChat from './components/layouts/MyChat.vue'
import MyVuero from './messaging-v2.vue'
import MyFooter from './components/layouts/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyChat,
    MyVuero,
    MyFooter,
  },
  data() {
    return {
      chatShow: false,
    }
  },
  methods: {
    buttonClick() {
      this.chatShow = !this.chatShow
    },
  },
}
</script>

<style>
</style>
