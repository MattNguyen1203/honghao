import Image from 'next/image'
import WrapNav from './components/wrapnav'
import './nav.css'
import getData from '@/lib/getData'
import { GLOBAL_PAGE_ID } from '@/lib/constants'

export default async function Header() {
  const getDataAcf = getData(`wp-json/acf/v3/pages/${GLOBAL_PAGE_ID}`)
  const getBesttrip = getData(
    `wp-json/okhub/v1/get_field_best_trip_by_page?page_id=${GLOBAL_PAGE_ID}`,
  )

  const [dataAcf, dataBestTrip] = await Promise.all([getDataAcf, getBesttrip])

  const dataHeader = dataAcf?.acf?.header
  const dataContacts = dataAcf?.acf?.contact_info
  return (
    <WrapNav
      dataContacts={dataContacts}
      dataHeader={dataHeader}
      dataBestTrip={dataBestTrip}
    />
  )
}
