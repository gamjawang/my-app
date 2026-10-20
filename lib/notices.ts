import dns from 'dns'

// // Node.js가 구글 Public DNS를 사용하도록 설정
dns.setServers(['8.8.8.8', '8.8.4.4'])
import { Notice as NoticeModel } from '@/models/Notice'
import { connectDB } from './mongodb'
// // import { title } from 'process'

export type Notice = {
  id: string
  title: string
  author: string
  content: string
  createdAt: string
}

type NoticeDocLike = {
  _id: unknown
  title: string
  author: string
  content: string
  createdAt?: Date
}

function toNotice(doc: NoticeDocLike): Notice {
  return {
    id: String(doc._id),
    title: doc.title,
    author: doc.author,
    content: doc.content,
    createdAt: (doc.createdAt ?? new Date()).toISOString().slice(0, 10),
  }
}

async function seedIfEmpty() {
  const count = await NoticeModel.countDocuments()
  if (count > 0) return

  await NoticeModel.insertMany([
    {
      title: '웹서버보안프로그래밍 개강 안내',
      author: '감자',
      content: '개강시작',
    },
    {
      title: '웹서버보안프로그래밍 개강 안내',
      author: '독감자',
      content: '개강시작',
    },
    {
      title: '웹서버보안프로그래밍 개강 안내',
      author: '똥감자',
      content: '개강시작',
    },
  ])
}

// const notices: Notice[] = [
//   {
//     id: '1',
//     title: '웹서버보안프로그래밍 개강 안내',
//     author: '감자',
//     content: '개강시작',
//     createdAt: '2026-09-01',
//   },
//   {
//     id: '2',
//     title: '웹서버보안프로그래밍 개강 안내',
//     author: '독감자',
//     content: '개강시작',
//     createdAt: '2026-09-01',
//   },
//   {
//     id: '3',
//     title: '웹서버보안프로그래밍 개강 안내',
//     author: '똥감자',
//     content: '개강시작',
//     createdAt: '2026-09-01',
//   },
// ]

// let nextId = 4

// function delay(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }

export async function getNotices(): Promise<Notice[]> {
  await connectDB()
  await seedIfEmpty()
  const docs = await NoticeModel.find().sort({ createdAt: -1 }).lean()
  return docs.map((doc) => toNotice(doc as NoticeDocLike))
  // await delay(600)
  // return [...notices].sort((a, b) => (a.id < b.id ? 1 : -1))
}

export async function getNotice(id: string): Promise<Notice | undefined> {
  await connectDB()
  try {
    const doc = await NoticeModel.findById(id).lean()
    return doc ? toNotice(doc as NoticeDocLike) : undefined
  } catch (error) {
    console.log(error)
    return undefined
  }
  // await delay(400)
  // return notices.find((n) => n.id === id)
}

export async function createNotice(input: {
  title: string
  author: string
  content: string
}): Promise<Notice> {
  await connectDB()
  const doc = await NoticeModel.create(input)
  return toNotice(doc)

  // await delay(300)
  // const notice: Notice = {
  //   id: String(nextId++),
  //   title: input.title,
  //   author: input.author,
  //   content: input.content,
  //   createdAt: new Date().toISOString().slice(0, 10),
  // }
  // notices.push(notice)
  // return notice
}
