import React, { Suspense } from 'react'
import Activity from '@/sections/activity/index'
import getData from '@/lib/getData'
import { PAGE_ACTIVITY_ID } from '@/lib/constants'
import { fetchMetaData } from '@/lib/fetchMetadata'
import { getMeta } from '@/lib/getMeta'

export async function generateMetadata() {
  const result = await fetchMetaData('activity-page/')
  return getMeta(result, '/activity')
}

const page = async () => {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${PAGE_ACTIVITY_ID}`)
  return (
    <Suspense>
      <Activity data={dataAcf} />
    </Suspense>
  )
}

export default page
