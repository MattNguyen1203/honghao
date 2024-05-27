export default async function getData(api, port) {
  const res = await fetch(
    `${
      port === 'acf'
        ? process.env.NEXT_PUBLIC_API_ACF
        : port === 'custom'
        ? ''
        : process.env.NEXT_PUBLIC_API
    }${api}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {revalidate: 60},
    },
  )

  if (!res.ok) {
    return null
  }

  return res.json()
}
