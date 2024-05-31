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
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
const TourDetail = ({data, dataPage, dataBestTrip, dataTourDetail, slug}) => {
  return (
    <main className='alldestinations '>
      <section>
        <Banner
          dataAcf={data}
          dataTourDetail={dataTourDetail}
        />
      </section>
      <section className='xmd:hidden'>
        <Breadcrumb
          type='section'
          divider
        >
          <BreadcrumbLink href={`/tours/${slug}`}>{slug}</BreadcrumbLink>
        </Breadcrumb>
      </section>
      <StepByStep
        dataAcf={data}
        dataTourDetail={dataTourDetail}
      />
      <StepByStepRes
        dataAcf={data}
        dataTourDetail={dataTourDetail}
      />
      <section>
        <Booking
          data={data}
          dataTourDetail={dataTourDetail}
          dataPage={dataPage}
        />
      </section>
      <section>
        <FaqAboutTrip
          dataAcfPage={dataPage?.faq}
          videoAndImage={dataPage?.video_and_image}
        />
      </section>

      <OurTeam />
      <TripsForYou dataBestTrip={dataBestTrip} />
    </main>
  )
}

export default TourDetail
