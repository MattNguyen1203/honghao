import AllTour from '@/sections/all-tour'
import React, { Suspense } from 'react'
import { fetchMetaData } from '@/lib/fetchMetadata'
import { getMeta } from '@/lib/getMeta'
import getData from '@/lib/getData'
export async function generateMetadata() {
  const result = await fetchMetaData('tours/')
  return getMeta(result, '/tours')
}
export default async function page() {
  const dataTours = await getData(`wp-json/okhub/v1/tours?page=1&per_page=9`)
  const typeOfTours = await getData(`wp-json/okhub/v1/get-list-tax-by-slug?slug=type-of-tour&page=1&per_page=100`)
  return (
    <Suspense>
      <AllTour typeOfTours={typeOfTours} dataTours={dataTours} />
    </Suspense>
  )
}
