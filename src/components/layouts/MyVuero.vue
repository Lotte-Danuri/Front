<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { usePanels } from '/@src/stores/panels'

import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
import { useDropdown } from '/@src/composable/useDropdown'
import { onceImageErrored } from '/@src/utils/via-placeholder'
import Image from '/@src/pages/components/accordion/image.vue'

export interface conversationData {
  id: number
  name: string
  role: string
  avatar: VAvatarProps
  lastMessage: string
  lastMessagePreview: string
}

// we are using static data here, but you might need to load those from your API
// to do so, this should be a ref<any[]>([]) and be populated when request is done
const conversations: conversationData[] = [
  {
    id: 1,
    name: 'Channel',
    role: '이충현 매니저',
    avatar: {
      picture: '/images/logo/channel.svg',
    },
    lastMessage: '20m',
    lastMessagePreview: '언제든 궁금하신점이 있으시면 물어봐 주세요.',
  },
  {
    id: 2,
    name: 'Gucci',
    role: 'Business Analyst',
    avatar: {
      picture: '/images/logo/Gucci.svg',
    },
    lastMessage: '24m',
    lastMessagePreview: '감사합니다 ^^',
  },
  {
    id: 3,
    name: '샤넬 안채영 매니저',
    role: '7 people are chatting',
    avatar: {
      color: 'h-purple',
      initials: '안',
    },
    lastMessage: '31m',
    lastMessagePreview: '오! 정말 빠르네요',
  },
  {
    id: 4,
    name: 'LuxON-프로모션',
    role: '이벤트',
    avatar: {
      picture: '/images/logo/logo_white.png',
    },
    lastMessage: '47m',
    lastMessagePreview: '롯데 면세점 x LuxON 면세 이벤트',
  },
  {
    id: 5,
    name: 'LuxON-고객센터',
    role: '고객센터',
    avatar: {
      picture: '/images/logo/logo_black.png',
    },
    lastMessage: '47m',
    lastMessagePreview: '안녕하세요. LuxON-고객센터 입니다...',
  },
  {
    id: 6,
    name: 'Hermes',
    role: 'Project Manager',
    avatar: {
      picture: '/images/logo/hermes.png',
    },
    lastMessage: '1h',
    lastMessagePreview: '감사합니다.',
  },
]

const panels = usePanels()
const selectedConversationId = ref(3)
const mobileConversationListOpen = ref(false)
const selectedConversation = computed(() => {
  const conversation = conversations.find(
    (item) => item.id === selectedConversationId.value
  )
  if (conversation) {
    return conversation
  }

  return conversations[0]
})

const dropdownElement1 = ref<HTMLElement>()
const dropdown1 = useDropdown(dropdownElement1)

const dropdownElement2 = ref<HTMLElement>()
const dropdown2 = useDropdown(dropdownElement2)

useHead({
  title: 'Messaging chat - Navbar - Vuero',
})
</script>

<template>
  <MinimalLayout>
    <div class="chat-app-wrapper" style="height: 80%">
      <!--Header-->
      <div class="chat-app-header">
        <img
          class="chat-msg-img"
          src="/images/logo/logo_white.png"
          alt=""
          width="100"
          height="38"
        />
      </div>

      <!--Chat app wrapper-->
      <div class="wrapper">
        <!--Conversation List-->
        <WebappConversationList
          v-model:conversationId="selectedConversationId"
          :mobile-conversation-list-open="mobileConversationListOpen"
          :conversations="conversations"
          @toggle-mobile-csonversation="
            mobileConversationListOpen = !mobileConversationListOpen
          "
        />

        <!--Conversation messages-->
        <div class="chat-area is-active" data-simplebar>
          <!--Conversation 1-->
          <WebappConversation1
            :class="[selectedConversationId === 1 && 'is-active']"
            @toggle-mobile-csonversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 2-->
          <WebappConversation2
            :class="[selectedConversationId === 2 && 'is-active']"
            @toggle-mobile-csonversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 3-->
          <WebappConversation3
            :class="[selectedConversationId === 3 && 'is-active']"
            @toggle-mobile-csonversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 4-->
          <WebappConversation4
            :class="[selectedConversationId === 4 && 'is-active']"
            @toggle-mobile-csonversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 5-->
          <WebappConversation5
            :class="[selectedConversationId === 5 && 'is-active']"
            @toggle-mobile-csonversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 6-->
          <WebappConversation6
            :class="[selectedConversationId === 6 && 'is-active']"
            @toggle-mobile-csonversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 7-->
          <WebappConversation7
            :class="[selectedConversationId === 7 && 'is-active']"
            @toggle-mobile-csonversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 8-->
          <WebappConversation8
            :class="[selectedConversationId === 8 && 'is-active']"
            @toggle-mobile-csonversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 9-->
          <WebappConversation9
            :class="[selectedConversationId === 9 && 'is-active']"
            @toggle-mobile-csonversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 10-->
          <WebappConversation10
            :class="[selectedConversationId === 10 && 'is-active']"
            @toggle-mobile-csonversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <!--Conversation 11-->
          <WebappConversation11
            :class="[selectedConversationId === 11 && 'is-active']"
            @toggle-mobile-csonversation="
              mobileConversationListOpen = !mobileConversationListOpen
            "
          />

          <div class="chat-area-footer" style="width: 70%; bottom: 70px; z-index: 1">
            <div class="add-emoji">
              <div class="button">
                <i aria-hidden="true" class="iconify" data-icon="feather:image"></i>
              </div>
            </div>
            <input
              type="text"
              placeholder="Type something here..."
              aria-label="Add new message"
            />
            <div class="add-emoji">
              <div class="button">
                <i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MinimalLayout>
</template>

<style lang="scss">
/* ==========================================================================
1. Variables / Wrapper / Header
========================================================================== */

// TODO
$theme-bg-color: var(--white);
$input-bg: #f8f8fa;
$input-chat-color: #a2a2a2;
$border-color: #000;
$body-color: #273346;
$chat-text-bg: #f1f2f6;
$msg-date: #c0c7d2;
$msg-hover-bg: rgb(238 242 244 / 40%);
$active-conversation-bg: linear-gradient(
  to right,
  rgb(238 242 244 / 40%) 0%,
  rgb(238 242 244 / 0%) 100%
);
$overlay-bg: linear-gradient(
  to bottom,
  rgb(255 255 255 / 0%) 0%,
  rgb(255 255 255 / 100%) 65%,
  rgb(255 255 255 / 100%) 100%
);
$overlay-bg-dark: linear-gradient(
  to bottom,
  rgb(255 255 255 / 0%) 0%,
  hsl(var(--dark-sidebar-h) var(--dark-sidebar-s) var(--dark-sidebar-l) / 100%) 65%,
  hsl(var(--dark-sidebar-h) var(--dark-sidebar-s) var(--dark-sidebar-l) / 100%) 100%
);

.chat-app-wrapper {
  display: flex;
  flex-direction: column;
  background-color: $theme-bg-color;
  max-width: 1600px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;

  .chat-app-header {
    height: 80px;
    min-height: 80px;
    width: 100%;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    padding: 0 20px;

    .logo {
      width: 38px;
      flex-shrink: 0;
    }

    .search-bar {
      height: 80px;
      flex-grow: 2;
      z-index: 3;
      position: relative;
      margin-left: 280px;

      .field {
        height: 100%;
        width: 100%;

        .control {
          height: 100%;
          width: 100%;

          .form-icon {
            height: 80px;
            width: 80px;

            svg {
              height: 20px;
              width: 20px;
            }
          }

          .input {
            height: 100%;
            width: 100%;
            display: block;
            background-color: transparent;
            border: none;
            color: var(--body-color);
            font-family: var(--font);
            font-weight: 500;
            font-size: 15px;
            padding-left: 80px;
            padding-right: 80px;

            &:focus {
              box-shadow: none;
            }
          }
        }
      }
    }

    .user-settings {
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-left: auto;
      flex-shrink: 0;

      & > * + * {
        margin-left: 14px;
      }

      .user-dropdown {
        .is-trigger {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          cursor: pointer;

          .profile-avatar {
            position: relative;

            .avatar {
              display: block;
              width: 38px;
              height: 38px;
              border-radius: var(--radius-rounded);
            }

            .badge {
              position: absolute;
              right: -8px;
              bottom: 0;
              width: 20px;
              height: 20px;
              border: 2px solid var(--white);
              border-radius: var(--radius-rounded);
            }
          }

          svg {
            margin-left: 3px;
            width: 18px;
            height: 18px;
            color: var(--light-text);
            transition: all 0.3s; // transition-all test
          }
        }

        .dropdown-menu {
          top: 52px;
          border: 1px solid var(--fade-grey-dark-3);
          box-shadow: var(--light-box-shadow);
          border-radius: 8px;
          padding-top: 0;
          width: 180px;
          overflow: hidden;

          .dropdown-item {
            display: flex;
            align-items: center;
            font-family: var(--font);
            font-size: 0.9rem;
            padding: 8px 12px;
            color: var(--light-text);

            svg {
              margin-right: 8px;
              height: 16px;
              width: 16px;
              color: var(--light-text);
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
2. Wrapper / Header Dark mode
========================================================================== */

.is-dark {
  .chat-app-wrapper {
    .chat-app-header {
      background: var(--dark-sidebar-dark-2);
      border-color: var(--dark-sidebar-light-2);

      .search-bar {
        .field {
          .control {
            .input {
              color: var(--dark-dark-text);
            }
          }
        }
      }

      .user-settings {
        .user-dropdown {
          .dropdown-menu {
            border-color: var(--dark-sidebar-light-12);
          }
        }
      }
    }
  }
}

/* ==========================================================================
3. Chat Conversations
========================================================================== */

.chat-app-wrapper {
  .wrapper {
    width: 100%;
    display: flex;
    flex-grow: 1;
    overflow: hidden;

    .conversation-area {
      border-right: 1px solid $border-color;
      overflow-y: auto;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
      width: 340px;
      flex-shrink: 0;

      .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        flex-shrink: 0;
        background: $overlay-bg;
        height: 80px;
      }

      .conversation {
        display: flex;
        align-items: center;
        max-width: 100%;
        padding: 20px;
        cursor: pointer;
        transition: 0.2s;
        position: relative;

        &:hover,
        &:focus {
          background-color: $msg-hover-bg;
        }

        &.active {
          background: $active-conversation-bg;
          border-left: 4px solid var(--dark-dark-text);

          .conversation-detail {
            .conversation-username {
              font-weight: 600;
            }
          }
        }

        .v-avatar {
          margin-right: 12px;
        }

        .conversation-detail {
          overflow: hidden;
          font-family: var(--font);

          .conversation-username {
            font-family: var(--font-alt);
            color: var(--dark-text);
            font-weight: 500;
            font-size: 0.95rem;
          }

          .conversation-content {
            font-weight: 500;
            font-size: 0.9rem;
            display: flex;

            .conversation-message {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: var(--light-text);
              max-width: 170px;
            }

            .conversation-date {
              font-size: 0.9rem;
              color: var(--light-text);
              margin-left: 4px;

              &::before {
                content: '•';
                margin-right: 2px;
              }
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
4. Chat Conversations Dark mode
========================================================================== */

.is-dark {
  .chat-app-wrapper {
    .wrapper {
      .conversation-area {
        background: var(--dark-sidebar-light-4);
        border-color: var(--dark-sidebar-light-12);

        .overlay {
          background: $overlay-bg-dark;
        }

        .conversation {
          &:hover {
            background: var(--dark-sidebar-light-6);
          }

          &.active {
            background: var(--dark-sidebar-light-1);
            border-color: var(--primary);
          }

          .conversation-detail {
            .conversation-username {
              color: var(--dark-dark-text);
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
5. Chat messages
========================================================================== */

.chat-app-wrapper {
  .wrapper {
    .chat-area {
      position: relative;
      display: flex;
      flex-direction: column;
      min-height: calc(100vh - 80px);
      overflow-y: auto;
      overflow-x: hidden !important;
      flex-grow: 1;

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        flex-shrink: 0;
        background: $overlay-bg;
        height: 80px;
      }

      .chat-area-content {
        display: none;
        padding-bottom: 80px;
        animation: fadeInLeft 0.5s;

        &.is-active {
          display: block;
        }
      }

      .chat-area-header {
        display: flex;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        align-items: center;
        padding: 20px;
        background: var(--white);

        .trigger {
          padding: 8px;
          margin-right: 6px;
          border: none;
          background: none;

          svg {
            height: 20px;
            width: 20px;
          }
        }

        .chat-area-group {
          flex-shrink: 0;
          display: flex;
          margin-left: auto;

          * {
            border: 2px solid var(--white);
          }

          * + * {
            margin-left: -5px;
          }

          > span {
            width: 32px;
            height: 32px;
            background-color: var(--primary-light-48);
            color: var(--primary);
            border-radius: var(--radius-rounded);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.9rem;
            font-weight: 500;

            span {
              position: relative;
              top: -1px;
              left: -1px;
              line-height: 1;
              display: block;
              text-align: center;
              margin: 0;
              border: none;
            }
          }
        }

        .chat-area-profile {
          width: 32px;
          border-radius: var(--radius-rounded);
          object-fit: cover;
        }

        .chat-area-title {
          font-size: 1.1rem;
          font-family: var(--font-alt);
          color: var(--dark-text);
          font-weight: 700;
        }
      }

      .chat-area-main {
        flex-grow: 1;

        .chat-msg-img {
          height: 40px;
          width: 40px;
          border-radius: var(--radius-rounded);
          object-fit: cover;
        }

        .chat-msg-profile {
          flex-shrink: 0;
          margin-top: auto;
          margin-bottom: -20px;
          position: relative;
        }

        .chat-msg-date {
          position: absolute;
          left: calc(100% + 12px);
          bottom: 0;
          font-size: 12px;
          font-family: var(--font);
          font-weight: 500;
          color: $msg-date;
          white-space: nowrap;
        }

        .chat-msg {
          display: flex;
          padding: 0 20px 45px;

          .chat-msg-content {
            margin-left: 12px;
            max-width: 50%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .chat-msg-text {
            background-color: $chat-text-bg;
            padding: 15px;
            border-radius: 20px 20px 20px 0;
            line-height: 1.5;
            font-family: var(--font);
            font-size: 0.95rem;
            font-weight: 500;

            + .chat-msg-text {
              margin-top: 10px;
            }
          }
        }

        .chat-msg-text {
          color: var(--chat-text-color);
        }

        .owner {
          flex-direction: row-reverse;

          .chat-msg-content {
            margin-left: 0;
            margin-right: 12px;
            align-items: flex-end;
          }

          .chat-msg-text {
            background-color: var(--dark-dark-text);
            color: var(--white);
            border-radius: 20px 20px 0;
          }

          .chat-msg-date {
            left: auto;
            right: calc(100% + 12px);
          }
        }

        .chat-msg-text img {
          max-width: 300px;
          border-radius: 10px;
          width: 100%;
        }
      }

      .chat-area-footer {
        display: flex;
        border-top: 1px solid $border-color;
        padding: 10px 20px;
        align-items: center;
        background-color: $theme-bg-color;
        position: fixed;
        right: 0;
        margin: 0 auto;
        width: 80%;
        overflow-x: hidden;
        bottom: 0;
        left: 0;

        input {
          border: 1px solid transparent;
          color: var(--dark-dark-text);
          background-color: $input-bg;
          padding: 12px;
          border-radius: var(--radius-large);
          font-size: 15px;
          margin: 0 12px;
          width: 100%;
          transition: all 0.3s; // transition-all test

          &::placeholder {
            color: $input-chat-color;
          }

          &:focus {
            background: var(--white);
            border-color: var(--fade-grey-dark-3);
            box-shadow: var(--light-box-shadow);
          }
        }

        .add-content {
          &:hover {
            > div {
              .button {
                background: var(--fade-grey);

                svg {
                  color: var(--primary);
                }
              }
            }
          }

          > div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 42px;
            height: 42px;
          }

          .button {
            width: 28px;
            height: 28px;
            border-radius: var(--radius-rounded);
            border: none;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s; // transition-all test

            svg {
              color: var(--placeholder);
              stroke-width: 2px;
              height: 18px;
              width: 18px;
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;
            }
          }

          .dropdown-content {
            a {
              display: flex;
              align-items: center;

              svg {
                height: 18px;
                width: 18px;
                color: var(--muted-grey);
              }

              .meta {
                margin-left: 12px;

                span {
                  display: block;

                  &:first-child {
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: var(--dark-text);
                  }

                  &:nth-child(2) {
                    font-size: 0.9rem;
                    color: var(--muted-grey);
                  }
                }
              }
            }
          }
        }

        .add-emoji {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 28px;
          height: 42px;

          &:hover,
          &:focus {
            .button {
              background: var(--fade-grey);

              svg {
                color: var(--primary);
              }
            }
          }

          .button {
            width: 28px;
            height: 28px;
            border-radius: var(--radius-rounded);
            border: none;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s; // transition-all test

            svg {
              color: var(--placeholder);
              stroke-width: 2px;
              height: 18px;
              width: 18px;
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
6. Chat Messages Dark mode
========================================================================== */

.is-dark {
  .chat-app-wrapper {
    .wrapper {
      .chat-area {
        background: var(--dark-sidebar-light-10);
        border-color: var(--dark-sidebar-light-12);

        .chat-area-header {
          background: var(--dark-sidebar-light-10);

          .trigger {
            svg {
              color: var(--dark-dark-text);
            }
          }

          .chat-area-title {
            color: var(--dark-dark-text);
          }

          .chat-area-group {
            img {
              border-color: var(--dark-sidebar-light-10);
            }

            > span {
              border-color: var(--dark-sidebar-light-10);
              color: var(--primary-dark-5);
              background: var(--primary-light-20);
            }
          }
        }

        .chat-area-main {
          .chat-msg {
            &.owner {
              .chat-msg-content {
                .chat-msg-text {
                  background: var(--primary-dark-4);
                  color: var(--smoke-white);
                }
              }
            }

            .chat-msg-content {
              .chat-msg-text {
                background: var(--dark-sidebar-light-6);
                color: var(--dark-dark-text);
              }
            }
          }
        }

        .chat-area-footer {
          background: var(--dark-sidebar-light-10);
          border-color: var(--dark-sidebar-light-12);

          .add-content .dropdown {
            &:hover {
              > div > .button {
                background: var(--dark-sidebar-light-6) !important;

                svg {
                  color: var(--primary);
                }
              }
            }

            .dropdown-menu {
              .dropdown-content {
                .dropdown-item {
                  .meta span {
                    &:first-child {
                      color: var(--dark-dark-text);
                    }
                  }
                }
              }
            }
          }

          .add-emoji {
            &:hover {
              .button {
                background: var(--dark-sidebar-light-6) !important;

                svg {
                  color: var(--primary);
                }
              }
            }
          }

          input {
            background: var(--dark-sidebar-light-6);
            color: var(--dark-dark-text);

            &:focus {
              border-color: var(--dark-sidebar-light-12);
              background: var(--dark-sidebar-light-4);
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
7. Chat Details
========================================================================== */

.chat-app-wrapper {
  .wrapper {
    width: 100%;
    display: flex;
    flex-grow: 1;
    overflow: hidden;

    .detail-area {
      width: 340px;
      flex-shrink: 0;
      border-left: 1px solid $border-color;
      margin-left: auto;
      padding: 30px 30px 0;
      display: flex;
      flex-direction: column;
      overflow: auto;
      overflow-x: hidden;

      .chat-side-content {
        text-align: center;
        transition: all 0.3s; // transition-all test
        padding: 20px 10px;

        .user-pic {
          position: relative;
          max-width: 68px;
          margin: 0 auto;
        }

        .user-name {
          margin-top: 10px;
          font-family: var(--font-alt);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--dark-text);
        }

        .user-job-title {
          font-family: var(--font);
          color: var(--light-text);
        }

        .side-actions {
          padding: 12px 0;

          .button {
            color: var(--light-text);

            &:hover,
            &:focus {
              box-shadow: var(--light-box-shadow);
            }
          }
        }

        .detail-photos {
          margin-top: 30px;
          text-align: center;
          padding: 0 12px;

          .detail-photo-title {
            display: flex;
            align-items: center;
            font-weight: 400;
            font-size: 1rem;
            margin-bottom: 20px;
            color: var(--light-text);

            svg {
              width: 16px;
              margin-right: 8px;
            }
          }

          .detail-photo-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-column-gap: 6px;
            grid-row-gap: 6px;
            grid-template-rows: repeat(3, 60px);

            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
              border-radius: 8px;
              object-position: center;
            }
          }

          .view-more {
            display: block;
            color: var(--primary);
            font-weight: 600;
            font-size: 15px;
            margin: 25px 0;
          }
        }
      }
    }
  }
}

/* ==========================================================================
8. Chat Details Dark mode
========================================================================== */

.is-dark {
  .chat-app-wrapper {
    .wrapper {
      .detail-area {
        background: var(--dark-sidebar-light-4);
        border-color: var(--dark-sidebar-light-12);

        .chat-side-content {
          .user-name {
            color: var(--dark-dark-text);
          }

          .detail-photos {
            .view-more {
              color: var(--primary);
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
9. Media Queries
========================================================================== */

@media (max-width: 767px) {
  .chat-app-wrapper {
    .chat-app-header {
      .search-bar {
        display: none;
      }
    }

    .wrapper {
      .conversation-area {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        background: var(--white);
        z-index: 10;
        transform: translateX(-100%);
        transition: all 0.3s; // transition-all test

        &.is-active {
          transform: translateX(0);
        }
      }

      .chat-area {
        .chat-area-main {
          .chat-msg {
            .chat-msg-content {
              max-width: 100%;
            }
          }
        }

        .chat-area-footer {
          width: 100%;
          padding: 10px;
        }
      }

      .detail-area {
        display: none !important;
      }
    }
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .chat-app-wrapper {
    .chat-app-header {
      .search-bar {
        display: none;
      }
    }

    .wrapper {
      .conversation-area {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        background: var(--white);
        z-index: 10;
        transform: translateX(-100%);
        transition: all 0.3s; // transition-all test

        &.is-active {
          transform: translateX(0);
        }
      }

      .chat-area {
        .chat-area-footer {
          position: fixed;
          width: 100%;
        }
      }

      .detail-area {
        display: none !important;
      }
    }
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .chat-app-wrapper {
    .wrapper {
      .detail-area {
        display: none !important;
      }

      .chat-area {
        .chat-area-footer {
          width: calc(100% - 340px);
          margin-left: 340px;
        }
      }
    }
  }
}
</style>
