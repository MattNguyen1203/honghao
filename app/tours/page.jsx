import AllTour from '@/sections/all-tour'
import React, {Suspense} from 'react'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

export async function generateMetadata() {
  const result = await fetchMetaData('tours/')
  return getMeta(result, '/tours')
}
export default function page() {
  return (
    <Suspense>
      <AllTour />
    </Suspense>
  )
}
