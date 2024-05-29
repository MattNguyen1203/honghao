import TourDetail from '@/sections/tour-detail'
import React from 'react'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'
import getData from '@/lib/getData'
import {GLOBAL_PAGE_ID} from '@/lib/constants'

export async function generateMetadata(params) {
  const result = await fetchMetaData(`tours/${params.slug}/`)
  return getMeta(result, `/tours/${params.slug}`)
}

export default async function page({params: {slug}}) {
  const dataAcf = await getData(`wp-json/acf/v3/tours/11`)
  const dataAcfPage = await getData(`wp-json/acf/v3/pages/${GLOBAL_PAGE_ID}`)

  const dataBestTrip = await getData(
    `wp-json/okhub/v1/tours?page=1&per_page=5&type-of-tour=best-budget`,
  )
  return (
    <>
      <TourDetail
        data={dataAcf?.acf}
        dataPage={dataAcfPage?.acf}
        dataBestTrip={dataBestTrip?.tours}
      />
    </>
  )
}
