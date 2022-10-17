<script setup lang="ts">
const emit = defineEmits<{
  (e: 'toggleMobileConversation'): void
  (e: 'update:conversationId', value: string): void
}>()
const props = withDefaults(
  defineProps<{
    conversations?: any[]
    conversationId?: string
    mobileConversationListOpen?: boolean
  }>(),
  {
    conversations: () => [],
    conversationId: '',
  }
)
</script>

<template>
  <div
    :class="[props.mobileConversationListOpen && 'is-active']"
    class="conversation-area"
    data-simplebar
  >
    <!--Conversation-->
    <div
      v-for="conversation in props.conversations"
      :key="conversation.chatRoomId"
      class="conversation"
      :class="[props.conversationId === conversation.chatRoomId && 'active']"
      tabindex="0"
      @keydown.space.prevent="
        () => {
          emit('update:conversationId', conversation.chatRoomId)
          emit('toggleMobileConversation')
        }
      "
      @click="
        () => {
          emit('update:conversationId', conversation.chatRoomId)
          emit('toggleMobileConversation')
        }
      "
    >
      <VAvatar :initials="conversation.receiverId.charAt(0)" />
      <div class="conversation-detail">
        <div class="conversation-username">{{ conversation.receiverId }}</div>
        <div class="conversation-content">
          <span class="conversation-message">{{ conversation.lastChatContent }}</span>
          <span class="conversation-date">{{ conversation.lastChatCreatedAt }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
