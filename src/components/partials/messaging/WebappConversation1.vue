<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-1" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">Channel</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/images/logo/channel.svg"
          alt=""
          data-user-popover="13"
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
          <div class="chat-msg-date">Sent at 1:22pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">안녕하세요. 올 겨울에 맬 백팩을 찾고 있는데</div>
          <div class="chat-msg-text">검정색 백팩 추천해주세요</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/logo/channel.svg"
            alt=""
            data-user-popover="13"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 1:03pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            안녕하세요. 고객님의 쇼핑을 도울 쇼핑매니저 입니다.
          </div>
          <div class="chat-msg-text">
            <img
              src="/images/logo/channelbag.webp"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            />
            <p style="font-size: 25px; font-weight: bold; color: black">라지백팩</p>
            <p>페이턴트 카프스킨, 골드 메탈 블랙 레퍼런스</p>
            <p>AS3662 B09576 94305</p>
            <p>6,540,000 원*</p>
            <br />
            <button type="button" style="width: auto; height: 100; font-weight: bold">
              상품페이지로 이동
            </button>
          </div>
          <div class="chat-msg-text">
            22fw 신상 라지 백팩 입니다.<br />
            디자이너 라프시몬스가 디자인한 이 백팩은<br />
            최근 20~30대 사이에서 큰 인기를 끌고 있습니다.
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
          <div class="chat-msg-date">Sent at 1:22pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            오 정말 예쁘네요
            <span role="img" aria-label="Faces with Tears of Joy">😂</span>.
          </div>
          <div class="chat-msg-text">추천 감사합니다. 덕분에 좋은 쇼핑을 경험 했어요</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/logo/channel.svg"
            alt=""
            data-user-popover="13"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 1:22pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">좋은 말씀 감사합니다.</div>
          <div class="chat-msg-text">지금까지 샤넬 쇼핑매니저 였습니다.</div>
          <div class="chat-msg-text">언제든 궁금하신점이 있으시면 물어봐 주세요.</div>
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
          <div class="chat-msg-date">Sent at 1:23pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>
