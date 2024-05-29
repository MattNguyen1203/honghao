import OurTeam from '@/layouts/team'
import TripsForYou from '@/layouts/trip'
import {FAQ_ID, PAGE_DESTINATION_ID} from '@/lib/constants'
import getData from '@/lib/getData'
import {headers} from 'next/headers'

const listPageId = {
  destination: PAGE_DESTINATION_ID,
  faq: FAQ_ID,
}

export default async function TeamTripLayout({children}) {
  const pathnameRaw = headers().get('x-next-pathname')
  const pathName = pathnameRaw.split('/')[1]
  console.log('pathName', pathName)
  const dataBestTrip = await getData(
    `wp-json/okhub/v1/get_field_best_trip_by_page?page_id=${
      listPageId[pathName] || ''
    }`,
  )
  return (
    <main>
      {children}
      <OurTeam />
      <TripsForYou dataBestTrip={dataBestTrip} />
    </main>
  )
}
