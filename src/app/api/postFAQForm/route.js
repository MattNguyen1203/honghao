import {FORM_FAQ_API} from '@/lib/constants'

export async function POST(req) {
  const body = await req.json()
  const formData = new FormData()
  formData.append('entry.1190877216', body.name)
  formData.append('entry.851090568', body.phone)
  formData.append('entry.571575564', body.email)
  formData.append('entry.502542779', body.message)
  const requestOptions = {
    method: 'POST',
    body: formData,
  }

  const responsive = await fetch(FORM_FAQ_API, requestOptions)

  const data = await responsive.text()
  return Response.json(data)
}
