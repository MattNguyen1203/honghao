import React from 'react'
import Activity from '@/sections/activity/index'
import getData from '@/lib/getData'
import { PAGE_ACTIVITY_ID } from '@/lib/constants'
const page = async() => {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${PAGE_ACTIVITY_ID}`)
  return <Activity data={dataAcf} />
}

export default page
