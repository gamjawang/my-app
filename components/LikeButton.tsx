'use client'
import { likePriductAction } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { useState, useTransition } from 'react'

export function LikeButton({
  id,
  initialLikes,
}: {
  id: string
  initialLikes: number
}) {
  const [likes, setLikes] = useState(initialLikes)
  const [isPending, startTransition] = useTransition()

  return (
    <Button
      variant="outline"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          const newLikes = await likePriductAction(id)
          setLikes(newLikes)
        })
      }}
    >
      {isPending ? '저장중...' : `좋아요 ${likes}`}
    </Button>
  )
}
