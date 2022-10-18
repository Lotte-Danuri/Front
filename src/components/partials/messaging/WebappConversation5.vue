<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-5" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">LuxON-고객센터</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/images/logo/logo_black.png"
          alt=""
          data-user-popover="21"
          @error.once="onceImageErrored(150)"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/logo/logo_black.png"
            alt=""
            data-user-popover="0"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 11:12am</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            안녕하세요. LuxON-고객센터 입니다. <br />서비스 품질 향상을 위해 10월 21일
            04시 부터 05시까지 점검이 있을 예정입니다.<br />항상 더 나은 서비스를 제공하는
            LuxON이 되겠습니다.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
