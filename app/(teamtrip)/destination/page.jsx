import Destinations from '@/sections/destinations'
import getData from '@/lib/getData'
import { PAGE_DESTINATION_ID } from '@/lib/constants'
const page = async() => {
    const dataAcf = await getData(`wp-json/acf/v3/pages/${PAGE_DESTINATION_ID}`)
    
  return <Destinations dataAcf={dataAcf} />
}

export default page
