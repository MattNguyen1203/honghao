import Blog from '@/sections/blog'
import React from 'react'
import getData from '@/lib/getData'
import {PAGE_BLOG_ID} from '@/lib/constants'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

export async function generateStaticParams() {
  const dataDetailPost = await getData(
    `wp-json/okhub/v1/get-list-cat-and-first-posts?per_page=0`,
  )

  return dataDetailPost?.categories?.map((cate) => ({
    slug: [cate?.slug],
  }))
}

export async function generateMetadata({params: {slug}}) {
  const result = await fetchMetaData(`category/${slug?.[0]}/`)
  return getMeta(result, `/blog/${slug?.[0]}`)
}

const page = async ({params, searchParams}) => {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${PAGE_BLOG_ID}`)
  const dataCategorisAndFirstpost = await getData(
    `wp-json/okhub/v1/get-list-cat-and-first-posts?per_page=8`,
  )
  const CateCurrent = dataCategorisAndFirstpost?.categories.find(
    (c) => c.slug === params.slug[0],
  )
  const dataGetAllPostsByCategories = await getData(
    `wp-json/okhub/v1/get-posts-by-category/1?cat_id=${CateCurrent?.id}&page=1&posts_per_page=8`,
  )
  return (
    <Blog
      data={dataAcf}
      dataGetAllPostsByCategories={dataGetAllPostsByCategories}
      dataCategorisAndFirstpost={dataCategorisAndFirstpost}
    />
  )
}

export default page
