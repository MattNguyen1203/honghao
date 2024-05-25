import {HOME_PAGE_ID} from '@/lib/constants'
import getData from '@/lib/getData'
import Homepage from '@/sections/homepage'
import React from 'react'
const page = async () => {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${HOME_PAGE_ID}`)
  return <Homepage dataAcf={dataAcf?.acf} />
}

export default page
