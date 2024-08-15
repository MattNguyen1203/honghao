import AllTour from '@/sections/all-tour'
import React, { Suspense } from 'react'
import { fetchMetaData } from '@/lib/fetchMetadata'
import { getMeta } from '@/lib/getMeta'
import getData from '@/lib/getData'
import { TOURS_ID } from '@/lib/constants'
export async function generateMetadata() {
  const result = await fetchMetaData('tours/')
  return getMeta(result, '/tours')
}
const getDatatourPage = async () => {
  return getData(`/pages/${TOURS_ID}`, 'acf')
}
export default async function page() {
  const dataTours = await getData(`wp-json/okhub/v1/tours?page=1&per_page=9`)
  const typeOfTours = await getData(
    `wp-json/okhub/v1/get-list-tax-by-slug?slug=type-of-tour&page=1&per_page=100`,
  )

  const dataBestTrip = await getData(
    `wp-json/okhub/v1/get_field_best_trip_by_page?page_id=${TOURS_ID}`,
  )
  const dataTourPage = (await getDatatourPage())?.acf
  return (
    <Suspense>
      <AllTour
        dataTourPage={dataTourPage}
        typeOfTours={typeOfTours}
        dataTours={dataTours}
        dataBestTrip={dataBestTrip}
      />
    </Suspense>
  )
}
