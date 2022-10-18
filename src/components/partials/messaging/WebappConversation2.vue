<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-2" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">Gucci</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/images/logo/gucci.svg"
          alt=""
          data-user-popover="33"
          @error.once="onceImageErrored(150)"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/logo/gucci.svg"
            alt=""
            data-user-popover="33"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 9:34am</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">안녕하세요. 구찌 쇼핑매니저 입니다.</div>
          <div class="chat-msg-text">
            <img
              src="/images/logo/guccicoupon.webp"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            />
            <br />
            <button
              style="background-color: black; font-size: 20px; color: white; margin: auto"
            >
              쿠폰 다운받기▽
            </button>
          </div>
          <div class="chat-msg-text">
            22FW 신상 발매 기념 GUCCI LuxON VIP만 위해
            <br />고객 감사 쿠폰을 준비했습니다.
          </div>

          <div class="chat-msg-text">
            앞으로도 저희 Gucci LuxON점을 사랑해주시면 감사합니다.
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
          <div class="chat-msg-date">Sent at 9:42am</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">오 덕분에 좋은 제품을 좋은 가격에 살 수 있네요.</div>
          <div class="chat-msg-text">감사합니다 ^^</div>
        </div>
      </div>
    </div>
  </div>
</template>
