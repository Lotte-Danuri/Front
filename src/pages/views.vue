<!-- 127.0.0.1:3000/views -->

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
    <RouterView />
    <MyFooter></MyFooter>
  </div>
</template>

<script>
export default {
  name: 'App',
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