'use server'

import { likeProduct as likeProductInDd } from '@/lib/products'
import { revalidatePath } from 'next/cache'

export async function likePriductAction(id: string) {
  const newLikes = await likeProductInDd(id)
  revalidatePath('/products/${id}')
  return newLikes
}
