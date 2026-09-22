import Link from 'next/link'
import { getProducts } from '@/lib/products'
import React from 'react'
export default async function ProductsPage() {
  const products = await getProducts()
  return (
    <div className="mx-auto max-w-2xl flex-1 px-8 py-16">
      <h1 className="mb-8 text-2xl font-semibold text-black dark:text-zinc-50">
        상품목록 (Server components + 비동기 데이터 패칭)
      </h1>
      <ul className="flex flex-col gap-4">
        {products.map((p) => (
          <li key={p.id}>
            <Link
              href={`/products/${p.id}`}
              className="block rounded-lg border border-black/[.08] px-5 py-4 transition-colors hover:bg-black/[.03] dark:border-white/[.145] dark:hover:bg-white/5"
            >
              <p className="font-medium text-black dark:text-zinc-50">
                {p.name}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {p.description} · 좋아요 {p.likes}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
