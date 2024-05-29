import React from 'react'
import './tour-detail.css'
import Breadcrumb from '@/components/breadcrumb'
import Banner from './Banner'
import FaqAboutTrip from './FaqAboutTrip'
import StepByStep from '../blog-detail/StepByStep'
import StepByStepRes from '../blog-detail/StepByStepRes'
import OurTeam from '@/layouts/team'
import Booking from './Booking'
import TripsForYou from '@/layouts/trip'
const TourDetail = ({data, dataPage, dataBestTrip}) => {

  return (
    <main className='alldestinations '>
      <section>
        <Banner dataAcf={data} />
      </section>
      <section className='xmd:hidden'>
        <Breadcrumb
          type='section'
          divider
        />
      </section>
      <StepByStep dataAcf={data} />
      <StepByStepRes dataAcf={data} />
      <section>
        <Booking />
      </section>
      <section>
        <FaqAboutTrip dataAcfPage={dataPage?.faq} videoAndImage={dataPage?.video_and_image} />
      </section>

      <OurTeam />
      <TripsForYou dataBestTrip={dataBestTrip} />
    </main>
  )
}

export default TourDetail
