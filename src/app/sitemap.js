import getData from '@/lib/getData'

export default async function sitemap() {
  const getListCate = getData(
    `wp-json/okhub/v1/get-list-cat-and-first-posts?per_page=0`,
  )

  const getListPost = getData(
    `wp-json/okhub/v1/get-list-cat-and-first-posts?page=1&per_page=100`,
  )
  const getListTour = getData(`wp-json/okhub/v1/tours?page=1&per_page=100`)

  const [listCate, listPost, listTour] = await Promise.all([
    getListCate,
    getListPost,
    getListTour,
  ])

  const listCateArr = listCate?.categories?.map((item) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${item.slug}`,
    lastModified: new Date(),
    priority: 0.9,
  }))

  const listPostArr = listPost?.posts?.map((item) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/${item?.post_slug}`,
    lastModified: new Date(),
    priority: 1,
  }))
  const listTourArr = listTour?.tours?.map((item) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/${item?.detail_link}`,
    lastModified: new Date(),
    priority: 1,
  }))

  const listPage = [
    {
      url: process.env.NEXT_PUBLIC_DOMAIN,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/about-us`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/tours`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/destinations`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/faq`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/contact-us`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/activity`,
      lastModified: new Date(),
      priority: 1,
    },
  ]

  return [...listCateArr, ...listPostArr, ...listTourArr, ...listPage]
}
