'use client'

export default function NoticeError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <p>공지사항을 불러오지못했습니다</p>
      <p>임시적인 서버 문제일 수 있습니다</p>
      <button
        onClick={() => reset()}
        className="rounded-md border border-black/[.08] px-4 py-2 text-sm hover:bg-black/[.03] dark:border-white/[.145] dark:hover:bg-white/[.05]"
      >
        다시
      </button>
    </div>
  )
}
