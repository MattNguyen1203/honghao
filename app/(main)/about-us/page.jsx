import About from '@/sections/about'
import getData from '@/lib/getData'
import {PAGE_ABOUT_US_ID} from '@/lib/constants'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

export async function generateMetadata() {
  const result = await fetchMetaData('about-us/')
  return getMeta(result, '/about-us')
}

export default async function page() {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${PAGE_ABOUT_US_ID}`)
  return <About data={dataAcf} />
}
