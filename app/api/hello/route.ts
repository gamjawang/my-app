import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: '/api/hello 에서응답하는json',
    week: 4,
  })
}
