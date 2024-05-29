import Blog from '@/sections/blog'
import React, {Suspense} from 'react'
import getData from '@/lib/getData'
import {PAGE_BLOG_ID} from '@/lib/constants'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'
export async function generateMetadata() {
  const result = await fetchMetaData('blog/')
  return getMeta(result, '/blog')
}
const page = async () => {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${PAGE_BLOG_ID}`)
  const dataCategorisAndFirstpost = await getData(
    `wp-json/okhub/v1/get-list-cat-and-first-posts?page=1&per_page=5`,
  )
  // const dataGetAllPostsByCategories = await getData(`wp-json/okhub/v1/get-posts-by-category/1?cat_id=3&page=1&posts_per_page=2`)
  return (
    <Suspense>
      <Blog
        data={dataAcf}
        dataGetAllPostsByCategories={dataCategorisAndFirstpost}
        dataCategorisAndFirstpost={dataCategorisAndFirstpost}
      />
    </Suspense>
  )
}

export default page
