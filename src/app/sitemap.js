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
    url: `${process.env.DOMAIN}/blog/${item.slug}`,
    lastModified: new Date(),
    priority: 0.9,
  }))

  const listPostArr = listPost?.posts?.map((item) => ({
    url: `${process.env.DOMAIN}/${item?.post_slug}`,
    lastModified: new Date(),
    priority: 1,
  }))
  const listTourArr = listTour?.tours?.map((item) => ({
    url: `${process.env.DOMAIN}/${item?.detail_link}`,
    lastModified: new Date(),
    priority: 1,
  }))

  const listPage = [
    {url: process.env.DOMAIN, lastModified: new Date(), priority: 1},
    {
      url: `${process.env.DOMAIN}/about-us`,
      lastModified: new Date(),
      priority: 1,
    },
    {url: `${process.env.DOMAIN}/tours`, lastModified: new Date(), priority: 1},
    {
      url: `${process.env.DOMAIN}/destinations`,
      lastModified: new Date(),
      priority: 1,
    },
    {url: `${process.env.DOMAIN}/faq`, lastModified: new Date(), priority: 1},
    {
      url: `${process.env.DOMAIN}/contact-us`,
      lastModified: new Date(),
      priority: 1,
    },
    {url: `${process.env.DOMAIN}/blog`, lastModified: new Date(), priority: 1},
    {
      url: `${process.env.DOMAIN}/activity`,
      lastModified: new Date(),
      priority: 1,
    },
  ]

  return [...listCateArr, ...listPostArr, ...listTourArr, ...listPage]
}
