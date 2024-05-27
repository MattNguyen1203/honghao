import Destinations from '@/sections/destinations'
import getData from '@/lib/getData'
import {PAGE_DESTINATION_ID} from '@/lib/constants'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

export async function generateMetadata() {
  const result = await fetchMetaData('destination-page/')
  return getMeta(result, '/destination')
}

const page = async () => {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${PAGE_DESTINATION_ID}`)
  return <Destinations dataAcf={dataAcf} />
}

export default page