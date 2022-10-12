import type { AxiosInstance } from 'axios'

export interface Category {
  id: number
  name: string
  lastMessage: string
  unreadMessages: boolean
  avatar: string
}

export async function fetchCategorys(
  api: AxiosInstance
): Promise<{ categorys: Category[]; count: number }> {
  let count = 0

  const { data: categorys, headers } = await api.get<Category[]>(`/api/products`)

  if ('X-Total-Count' in headers) {
    count = parseInt(headers['X-Total-Count'])
  }

  return { categorys, count }
}
