import type { AxiosInstance } from 'axios'

export interface Message {
  chatId: string
  content: string
  contentType: '메세지' | '쿠폰' | '이벤트' | '이미지' | '시스템'
  createdAt: string
  sendBy: string
  source: string
}

export async function fetchMessages(
  api: AxiosInstance,
  conversationId: string
): Promise<{ messages: Message[] }> {
  const { data: messages } = await api.get<Message[]>(
    `/chatRoom/chats/Test1/${conversationId}`
  )
  return { messages }
}
