import {GOOGLE_KEY} from '@/lib/constants'

export async function POST(req) {
  const body = await req.json()

  const response = await fetch(
    `https://script.google.com/macros/s/${GOOGLE_KEY}/exec?id=${body.slug}`,
  )

  const data = await response.text()
  return Response.json(data)
}
