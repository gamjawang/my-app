export default function ProductsLoading() {
  return (
    <div className="mx-auto max-w-2xl flex-1 pa-8 py-16">
      <div className="mb-8 h-7 w-64 animate-pulse rounded bg-black/[0.6] dark:bg-white/[0.8]">
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-16 animate-pulse rounded-lg bg-black dark:bg-white/[0.6]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
