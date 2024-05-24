export default async function getData(api, revalidate = 60) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${api}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {revalidate},
  })

  if (!res.ok) {
    return null
  }

  return res.json()
}
