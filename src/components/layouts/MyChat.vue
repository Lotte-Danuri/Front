<template>
    <div class="chatContents">
        <div class="chatDiv" v-if="chatShow">
            mychat
        </div>
        <div class="chatButton" @click="buttonClick">
            <img src="../../assets/logo.png">
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      chatShow: true
    }
  },
  methods: {
    buttonClick () {
      this.chatShow = !this.chatShow
    }
  }
}

</script>

<style>
  .chatDiv {
    z-index: 999;
    width: 85%;
    height: 80%;
    background-color: pink;
    top: 100px;
    left: 50px;
    position: fixed;
  }
  .chatButton {
    z-index: 999;
    bottom: 50px;
    right: 50px;
    position: fixed;
  }
  .chatButton img {
    width: 100px;
    height: 100px;
  }

</style>
