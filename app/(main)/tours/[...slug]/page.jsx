import TourDetail from '@/sections/tour-detail'
import React from 'react'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'
import getData from '@/lib/getData'
import {GLOBAL_PAGE_ID} from '@/lib/constants'
import {notFound} from 'next/navigation'

export async function generateMetadata({params: {slug}}) {
  const result = await fetchMetaData(`tours/${slug?.[0]}/`)
  return getMeta(result, `/tours/${slug?.[0]}`)
}

export async function generateStaticParams() {
  const dataTours = await getData(`wp-json/okhub/v1/tours?page=1&per_page=100`)

  return dataTours?.tours?.map((tour) => ({
    slug: [tour?.detail_link],
  }))
}

export default async function page({params: {slug}}) {
  const dataAcfPage = await getData(`wp-json/acf/v3/pages/${GLOBAL_PAGE_ID}`)
  const dataTourDetail = await getData(
    `wp-json/okhub/v1/get-tour-detail/${slug?.[0]}`,
  )
  const dataAcf = dataTourDetail
    ? await getData(`wp-json/acf/v3/tours/${dataTourDetail?.tour}`)
    : {}

  const dataBestTrip = await getData(
    `wp-json/okhub/v1/tours?page=1&per_page=5&type-of-tour=best-budget`,
  )

  if (!dataTourDetail) {
    return notFound()
  }
  return (
    <>
      <TourDetail
        data={dataAcf?.acf}
        dataPage={dataAcfPage?.acf}
        dataBestTrip={dataBestTrip?.tours}
        dataTourDetail={dataTourDetail}
      />
    </>
  )
}
