import About from '@/sections/about'
import getData from '@/lib/getData'
import { PAGE_ABOUT_US_ID } from '@/lib/constants'
export default async function page() {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${PAGE_ABOUT_US_ID}`)
  return <About data={dataAcf} />
}
