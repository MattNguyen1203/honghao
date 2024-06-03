import Destinations from '@/sections/destinations'
import getData from '@/lib/getData'
import { PAGE_DESTINATION_ID } from '@/lib/constants'
import { fetchMetaData } from '@/lib/fetchMetadata'
import { getMeta } from '@/lib/getMeta'
import { Suspense } from 'react'

export async function generateMetadata() {
  const result = await fetchMetaData('destination-page/')
  return getMeta(result, '/destination')
}

const page = async () => {
  const getdDataAcf = await getData(
    `wp-json/acf/v3/pages/${PAGE_DESTINATION_ID}`,
  )
  const getDataListCat = await getData(
    `wp-json/okhub/v1/get-posts-by-category/1?cat_id=3&page=1&posts_per_page=4`,
  )

  const [dataAcf, dataListCat] = await Promise.all([
    getdDataAcf,
    getDataListCat,
  ])

  return (
    <Suspense>
      <Destinations
        dataAcf={dataAcf}
        dataListCat={dataListCat}
      />
    </Suspense>
  )
}

export default page
