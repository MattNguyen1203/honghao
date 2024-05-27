import Blog from '@/sections/blog'
import React from 'react'
import getData from '@/lib/getData'
import {PAGE_BLOG_ID} from '@/lib/constants'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

export async function generateMetadata(params) {
  const result = await fetchMetaData('blog/')
  return getMeta(result, `/blog/${params.slug}`)
}

const page = async () => {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${PAGE_BLOG_ID}`)
  return <Blog data={dataAcf} />
}

export default page
