import type { AxiosInstance } from 'axios'

export interface Chung {
    chatId: string,
    contentType: string,
    content: string,
    sendBy: string,
    source: string,
    createdAt: string
}

export async function fetchMessages(
  api: AxiosInstance,
  conversationId: number,
  start = 0,
  limit = 20
): Promise<{ messages: Message[]; count: number }> {
  let count = 0

  const { data: messages, headers } = await api.get<Message[]>(
    `/api/conversations/${conversationId}/messages?_start=${start}&_limit=${limit}`
  )

  if ('X-Total-Count' in headers) {
    count = parseInt(headers['X-Total-Count'])
  }

  return { messages, count }
}
