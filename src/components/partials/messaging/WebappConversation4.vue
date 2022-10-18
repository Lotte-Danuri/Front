<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-4" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">LuxON-프로모션</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/images/logo/logo_white.png"
          alt=""
          data-user-popover="0"
          @error.once="onceImageErrored(150)"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/logo/logo_white.png"
            alt=""
            data-user-popover="0"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 10:11am</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">F/W 신상품 할인전</div>
          <div class="chat-msg-text">
            <img
              src="/images/logo/promotion2.jpeg"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            />
          </div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/logo/logo_white.png"
            alt=""
            data-user-popover="0"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 20:11am</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">롯데 면세점 x LuxON 면세 이벤트</div>
          <div class="chat-msg-text">
            <img
              src="/images/logo/promotion.jpeg"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            />
          </div>
        </div>
      </div>
      <div class="chat-msg owner">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/avatars/svg/vuero-1.svg"
            alt=""
            data-user-popover="3"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 10:44am</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>
