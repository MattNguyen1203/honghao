import TourDetail from '@/sections/tour-detail'
import React from 'react'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

export async function generateMetadata(params) {
  const result = await fetchMetaData(`tours/${params.slug}/`)
  return getMeta(result, `/tours/${params.slug}`)
}

const page = () => {
  return <TourDetail />
}

export default page
