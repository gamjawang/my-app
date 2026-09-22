import { resolve } from 'path'

export type Product = {
  id: string
  name: string
  description: string
  likes: number
}

const products: Product[] = [
  { id: '1', name: '머그컵', description: '내가 애용하는 머그컵', likes: 3 },
  { id: '2', name: '스티커', description: '내가 좋아', likes: 6 },
  { id: '3', name: '종이', description: '나무로만듬', likes: 500 },
  { id: '4', name: '하늘', description: '푸르다', likes: 1 },
  { id: '5', name: '번개', description: '썬더썬더', likes: 30 },
]

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getProducts(): Promise<Product[]> {
  await delay(700)
  return products
}

export async function getProduct(id: string): Promise<Product | undefined> {
  await delay(400)
  return products.find((p) => p.id === id)
}

export async function likeProduct(id: string): Promise<number> {
  await delay(300)
  const product = products.find((p) => p.id === id)
  if (!product) return 0
  product.likes += 1
  return product.likes
}
