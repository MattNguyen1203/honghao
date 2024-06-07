import {FORM_CONTACT_API} from '@/lib/constants'

export async function POST(req) {
  const body = await req.json()
  const formData = new FormData()
  formData.append('entry.1276228628', body.name)
  formData.append('entry.1750062698', body.phone)
  formData.append('entry.1369068052', body.email)
  formData.append('entry.7626765', body.contactSubject)
  formData.append('entry.907377509', body.message)
  formData.append('entry.1971401006', body.country)
  const requestOptions = {
    method: 'POST',
    body: formData,
  }

  const responsive = await fetch(FORM_CONTACT_API, requestOptions)

  const data = await responsive.text()
  return Response.json(data)
}
