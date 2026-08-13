import { readdirSync } from "fs"
import { join } from "path"
import { NextResponse } from "next/server"

export async function GET() {
  const dir = join(process.cwd(), "public/images/carousel")
  const files = readdirSync(dir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
  return NextResponse.json(files.map(f => `/images/carousel/${f}`))
}
