<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-3" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">샤넬 안채영 매니저</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/images/logo/channel.svg"
          alt=""
          data-user-popover="3"
          @error.once="onceImageErrored(150)"
        />
        <img
          class="chat-area-profile"
          src="/demo/avatars/13.jpg"
          alt=""
          data-user-popover="6"
          @error.once="onceImageErrored(150)"
        />
        <img
          class="chat-area-profile"
          src="/demo/avatars/19.jpg"
          alt=""
          data-user-popover="17"
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
          <div class="chat-msg-date">Sent at 4:15pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">상품 환불 관련 문의 드려요.</div>
          <div class="chat-msg-text">
            <img
              src="/images/logo/channelcs.jpeg"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            />
          </div>
          <div class="chat-msg-text">이번에 새로산 가방인데 스크레치가 크게 있네요.</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/logo/channel.svg"
            alt=""
            data-user-popover="17"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 4:27pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            고객님께 불편을 드려서 정말 죄송합니다.
            <span role="img" aria-label="cry">😭</span>
          </div>
          <div class="chat-msg-text">
            현재 고객님의 구매기록을 확인해본 결과 이 상품이 맞으실까요?
          </div>
          <div class="chat-msg-text">
            구매일자 : 2022/10/21(금) 15:30
            <br />
            <img
              src="/images/logo/channelbag2.webp"
              alt=""
              @error.once="onceImageErrored(400, 300)"
            />
            <br />
            <p style="font-size: 25px; font-weight: bold; color: black">
              CHANEL 19 맥시 핸드백
            </p>
            <p>램스킨, 골드 메탈, 실버 메탈, 루테늄 메탈</p>
            <p>블랙 AS1162 B04852 94305</p>
            <p>9,230,000 원*</p>
            <br />
            <button type="button" style="width: auto; height: 100; font-weight: bold">
              주문 내역으로 이동
            </button>
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
          <div class="chat-msg-date">Sent at 4:31pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">네 맞아요.</div>
          <div class="chat-msg-text">환불해주세요.</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/logo/channel.svg"
            alt=""
            data-user-popover="2"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 4:32pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            네 고객님 다시 한번 죄송하다는 말씀드리며 <br />
            바로 환불 진행해드리겠습니다.
          </div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/logo/channel.svg"
            alt=""
            data-user-popover="0"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 4:32pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            환불 처리 완료 되었으며 배송기사가 3일 이내로 도착해<br />
            상품을 수거할 예정입니다.
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
          <div class="chat-msg-date">Sent at 4:33pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">오! 정말 빠르네요</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/32.jpg"
            alt=""
            data-user-popover="28"
            @error.once="onceImageErrored(150)"
          />
          <div class="chat-msg-date">Sent at 4:39pm</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            This is getting funnier and funnier. You gotta love dat team
            <span role="img" aria-label="Smiling Face with Hearts">🥰</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
