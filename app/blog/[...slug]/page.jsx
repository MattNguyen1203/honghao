import Blog from '@/sections/blog'
import React from 'react'
import getData from '@/lib/getData'
import { PAGE_BLOG_ID } from '@/lib/constants'
const page = async ({ params, searchParams }) => {
  console.log({ searchParams })
  const dataAcf = await getData(`wp-json/acf/v3/pages/${PAGE_BLOG_ID}`)
  const dataCategorisAndFirstpost = await getData(`wp-json/okhub/v1/get-list-cat-and-first-posts?per_page=8`)
  const CateCurrent = dataCategorisAndFirstpost?.categories.find((c) => c.slug === params.slug[0])
  const dataGetAllPostsByCategories = await getData(`wp-json/okhub/v1/get-posts-by-category/1?cat_id=${CateCurrent?.id}&page=1&posts_per_page=8`)


  return <Blog data={dataAcf} dataGetAllPostsByCategories={dataGetAllPostsByCategories} dataCategorisAndFirstpost={dataCategorisAndFirstpost} />
}

export default page
