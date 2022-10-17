import type { AxiosInstance } from 'axios'

export interface Conversation {
  chatRoomId: string
  lastChatContent: string
  lastChatCreatedAt: string
  valid: boolean
  roomType: string
  updateAt: string
  receiverId: string
  countNewChats: number
}

export async function fetchConversations(
  api: AxiosInstance,
  start = 0,
  limit = 20
): Promise<{ conversations: Conversation[]; count: number }> {
  let count = 0

  const { data: conversations, headers } = await api.get<Conversation[]>(
    `/api/conversations?_start=${start}&_limit=${limit}`
  )

  if ('X-Total-Count' in headers) {
    count = parseInt(headers['X-Total-Count'])
  }

  return { conversations, count }
}
