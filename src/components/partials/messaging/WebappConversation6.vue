<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-6" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">Hermes</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/images/logo/hermes.png"
          alt=""
          data-user-popover="5"
          @error.once="onceImageErrored(150)"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg owner">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/avatars/svg/vuero-1.svg"
            alt=""
            data-user-popover="3"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 12:14pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            상품정보
            <br />
            <img
              src="/images/logo/hermes.webp"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            />
            <br />
            <p style="font-size: 25px; font-weight: bold; color: white">
              Chaine d'Ancre 백
            </p>
            <p style="color: white">램골드 / 블루 마린 / 블루 생-시르</p>
            <p style="color: white">H080245CAAB</p>
            <p style="color: white">₩ 14,670,000</p>
            <br />
            <button
              type="button"
              style="
                width: auto;
                height: 100;
                font-weight: bold;
                background-color: grey;
                color: white;
              "
            >
              상품 상세페이지로 이동
            </button>
          </div>
          <div class="chat-msg-text">이 제품 관심있는데 따로 할인은 없나요?</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/logo/hermes.png"
            alt=""
            data-user-popover="5"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 12:14pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            직원 할인가
            <br />
            <img
              src="/images/logo/hermes.webp"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            />
            <br />
            <p style="font-size: 25px; font-weight: bold; color: black">
              Chaine d'Ancre 백
            </p>
            <p style="color: black">램골드 / 블루 마린 / 블루 생-시르</p>
            <p style="color: black">H080245CAAB</p>
            <p style="color: black; text-decoration: line-through">₩ 14,670,000</p>
            10%
            <p style="color: black; text-decoration: underline">₩ 13,213,000</p>
            <br />
            <button type="button" style="width: auto; height: 100; font-weight: bold">
              장바구니에 넣기
            </button>
          </div>
          <div class="chat-msg-text">
            항상 저희 Hermes를 찾아주시는 Vip 고객님을 위해
            <br />
            특별 직원할인가에 구매할 수 있게 도와드리겠습니다.
          </div>
          <div class="chat-msg-text"></div>
          <div class="chat-msg-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>
