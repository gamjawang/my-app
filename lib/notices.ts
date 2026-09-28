export type Notice = {
  id: string
  title: string
  author: string
  content: string
  createdAt: string
}

const notices: Notice[] = [
  {
    id: '1',
    title: '웹서버보안프로그래밍 개강 안내',
    author: '감자',
    content: '개강시작',
    createdAt: '2026-09-01',
  },
  {
    id: '2',
    title: '웹서버보안프로그래밍 개강 안내',
    author: '독감자',
    content: '개강시작',
    createdAt: '2026-09-01',
  },
  {
    id: '3',
    title: '웹서버보안프로그래밍 개강 안내',
    author: '똥감자',
    content: '개강시작',
    createdAt: '2026-09-01',
  },
]

let nextId = 4

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getNotices(): Promise<Notice[]> {
  await delay(600)
  return [...notices].sort((a, b) => (a.id < b.id ? 1 : -1))
}

export async function getNotice(id: string): Promise<Notice | undefined> {
  await delay(400)
  return notices.find((n) => n.id === id)
}

export async function createNotice(input: {
  title: string
  author: string
  content: string
}): Promise<Notice> {
  await delay(300)
  const notice: Notice = {
    id: String(nextId++),
    title: input.title,
    author: input.author,
    content: input.content,
    createdAt: new Date().toISOString().slice(0, 10),
  }
  notices.push(notice)
  return notice
}
