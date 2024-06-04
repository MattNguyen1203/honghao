import {FORM_API} from '@/lib/constants'

export async function POST(req) {
  const body = await req.json()
  const formdata = new FormData()
  formdata.append('entry.335637933', body?.username)
  formdata.append('entry.1417657903', body?.email)
  formdata.append('entry.516066790', body?.phone)
  formdata.append('entry.513250024', body?.typeoftour)
  formdata.append('entry.531591585', body?.choosedays)
  formdata.append('entry.1318177335', body?.message)
  formdata.append('entry.596297400', body?.pickup)
  formdata.append('entry.737203426', body?.droff)
  formdata.append('entry.1683072828', body?.dob)
  formdata.append('entry.1967653042', body?.enddate)
  formdata.append('entry.571877462', body?.address)
  formdata.append('entry.1295571760', body?.destination)
  formdata.append('entry.954465883', body?.totalPax)
  formdata.append('entry.681687580', body?.titleTour)
  formdata.append('entry.842974294', body?.totalPrice)
  formdata.append('entry.750534916', body?.paxValueLocal)
  formdata.append('entry.1182103187', body?.paxValueSelf)
  formdata.append('entry.477674361', body?.status)
  formdata.append('entry.1097212440', body?.orderId)
  formdata.append('entry.1525979444', body?.method)

  const requestOptions = {
    method: 'POST',
    body: formdata,
  }

  const responsive = await fetch(FORM_API, requestOptions)

  const data = await responsive.text()
  return Response.json(data)
}
