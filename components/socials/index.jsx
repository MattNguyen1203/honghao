'use server'
import getData from '@/lib/getData'
import Socials from './Socials'
import {GLOBAL_PAGE_ID} from '@/lib/constants'

const WrapSocials = async () => {
  const getDataAcf = await getData(`wp-json/acf/v3/pages/${GLOBAL_PAGE_ID}`)

  const getTypeofTour = await getData(
    `wp-json/okhub/v1/get-list-tax-by-slug?slug=type-of-tour`,
  )
  const getListTime = await getData(
    `wp-json/okhub/v1/get-list-tax-by-slug?slug=time`,
  )
  const getListTours = await getData(`wp-json/okhub/v1/tours`)

  const [listTypeofTour, listTime, listTours, dataAcf] = await Promise.all([
    getTypeofTour,
    getListTime,
    getListTours,
    getDataAcf,
  ])

  return (
    <Socials
      dataAcf={dataAcf?.acf}
      listTypeofTour={listTypeofTour}
      listTime={listTime}
      listTours={listTours}
    />
  )
}
export default WrapSocials
