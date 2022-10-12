<template>
  <div>
    <MyHeader></MyHeader>
    <MyChat
      style="position: fixed; z-index: 999; right: 100px; bottom: 50px"
      @click="buttonClick"
    ></MyChat>
    <MyVuero
      v-if="chatShow"
      style="
        position: fixed;
        width: 75%;
        height: 50%;
        top: 50px;
        left: 200px;
        z-index: 999;
        background-color: transparent;
      "
    ></MyVuero>
    <RouterView v-slot="{ Component }">
      <Transition name="fade-slow" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <MyMain></MyMain>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/layouts/MyHeader.vue'
import MyChat from './components/layouts/MyChat.vue'
import MyVuero from './messaging-v2.vue'
import MyMain from './views/MyMain.vue'
import MyFooter from './components/layouts/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyChat,
    MyVuero,
    MyMain,
    MyFooter,
  },
  data() {
    return {
      chatShow: false,
    }
  },
  created() {
    // window.onpopstate = function (event) {
    //   alert('location: ' + document.location + ', state: ' + JSON.stringify(event.state))
    // }
  },
  methods: {
    buttonClick() {
      this.chatShow = !this.chatShow
    },
  },
}
</script>

<style></style>
