<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'
import type { Message } from '/@src/utils/api/chat/messages'

const emit = defineEmits(['toggleMobileConversation'])
const props = defineProps<{
  message: Message
}>()
</script>


<template>
  <li>
    <!-- System messages -->
    <template v-if="props.message.contentType === '시스템'">
      <li class="divider-container">
        <div class="divider">
          <span>{{ props.message.content }}</span>
        </div>
      </li>
    </template>

    <!-- Text messages -->
    <template v-else-if="props.message.contentType === '메세지'">
      <div class="avatar">
        <img v-if="false" :src="props.message.sendBy" draggable="false" alt="" />
      </div>
      <div class="msg">
        <div class="msg-inner">
          <p>{{ props.message.content }}</p>
        </div>

        <time>
          {{ props.message.createdAt }}
        </time>
      </div>
    </template>

    <!-- Image messages -->
    <template v-else-if="props.message.contentType === '이미지'">
      <div class="avatar is-online">
        <img v-if="false" :src="props.message.sendBy" draggable="false" alt="" />
      </div>
      <div class="msg is-image">
        <div class="image-container">
          <VPhotosSwipe
            v-if="props.message.source"
            :items="[
              {
                src: props.message.source,
                thumbnail: props.message.source,
                w: 600,
                h: 400,
                alt: 'optional alt attribute for thumbnail image',
              },
            ]"
            thumbnail-radius="full"
          />
          <div class="image-overlay"></div>
          <div class="image-actions">
            <div class="actions-inner">
              <div class="action download">
                <span class="iconify" data-icon="feather:download"> </span>
              </div>
              <a
                :href="props.message.source"
                class="action messaging-popup"
                aria-label="Maximize"
              >
                <span class="iconify" data-icon="feather:maximize"> </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </li>
</template>

<style lang="scss">
/* ==========================================================================
4. Messages globals and variations
========================================================================== */

.msg {
  min-width: 50px;
  max-width: 40%;

  &.is-image {
    .image-container {
      position: relative;
      border-radius: 3px;

      &:hover,
      &:focus {
        .image-overlay {
          opacity: 0.45;
          pointer-events: none;
        }

        .image-actions {
          opacity: 1;

          .download {
            pointer-events: all;
          }
        }
      }

      figure {
        position: relative;
        display: block;
        border-radius: 3px;
        border: 4px solid var(--white);
        z-index: 1;
      }

      .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: var(--primary);
        border: 4px solid var(--white);
        border-radius: 3px;
        transition: all 0.3s; // transition-all test
        z-index: 2;
      }

      .image-actions {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s; // transition-all test
        z-index: 3;

        .actions-inner {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .action {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 40px;
            border-radius: var(--radius-rounded);
            background: var(--white);
            margin: 0 6px;
            cursor: pointer;
            transition: all 0.3s; // transition-all test

            &:hover {
              background: var(--success);

              svg {
                color: var(--smoke-white);
              }
            }

            svg {
              height: 18px;
              width: 18px;
              color: var(--success);
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;
            }
          }
        }
      }
    }
  }

  p {
    font-size: 0.8rem;
    margin: 0 0 0.2rem;
  }

  img {
    position: relative;
    display: block;
    width: 450px;
    border-radius: 5px;
    box-shadow: 0 0 3px var(--light-grey);
    transition: all 0.4s cubic-bezier(0.565, -0.26, 0.255, 1.41);
    cursor: default;
    -webkit-touch-callout: none;
    user-select: none;
  }
}

// Message queries
@media screen and (max-width: 800px) {
  .msg img {
    width: 300px;
  }
}

@media screen and (max-width: 550px) {
  .msg img {
    width: 200px;
  }
}
</style>
