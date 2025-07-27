import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

export async function POST() {
  const filePath = path.join(process.cwd(), 'public', 'sounds', 'hello.mp3')
  const fileBuffer = await fs.readFile(filePath)

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'audio/wav',
      'Content-Length': fileBuffer.length.toString(),
    },
  })
}
