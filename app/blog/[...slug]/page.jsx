import Blog from '@/sections/blog'
import React from 'react'
import getData from '@/lib/getData'
import { PAGE_BLOG_ID } from '@/lib/constants'
const page = async () => {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${PAGE_BLOG_ID}`)
  const dataCategorisAndFirstpost = await getData(`wp-json/okhub/v1/get-list-cat-and-first-posts?per_page=5`)
  const dataGetAllPostsByCategories = await getData(`wp-json/okhub/v1/get-posts-by-category/1?cat_id=3&page=1&posts_per_page=2`)


  return <Blog data={dataAcf} dataGetAllPostsByCategories={dataGetAllPostsByCategories} dataCategorisAndFirstpost={dataCategorisAndFirstpost} />
}

export default page
