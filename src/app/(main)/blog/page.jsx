import Blog from '@/sections/blog'
import React, {Suspense} from 'react'
import getData from '@/lib/getData'
import {GLOBAL_PAGE_ID, PAGE_BLOG_ID} from '@/lib/constants'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'
export async function generateMetadata() {
  const result = await fetchMetaData('blog/')
  return getMeta(result, '/blog')
}
const getDataAcf = async () => {
  return getData(`wp-json/acf/v3/pages/${PAGE_BLOG_ID}`)
}
const getDataCommon = async () => {
  return getData(`wp-json/acf/v3/pages/${GLOBAL_PAGE_ID}`)
}
const getDataCategorisAndFirstpost = async () => {
  return getData(
    `wp-json/okhub/v1/get-list-cat-and-first-posts?page=1&per_page=8`,
  )
}
const page = async () => {
  const [dataAcf, dataCategorisAndFirstpost, dataCommon] = await Promise.all([
    getDataAcf(),
    getDataCategorisAndFirstpost(),
    getDataCommon(),
  ])

  return (
    <Suspense>
      <Blog
        dataCommon={dataCommon?.acf}
        data={dataAcf}
        // dataGetAllPostsByCategories={dataCategorisAndFirstpost}
        dataCategorisAndFirstpost={dataCategorisAndFirstpost}
      />
    </Suspense>
  )
}

export default page
