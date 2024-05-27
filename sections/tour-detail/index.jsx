import React from 'react'
import './tour-detail.css'
import Breadcrumb from '@/components/breadcrumb'
import Banner from './Banner'
import FaqAboutTrip from './FaqAboutTrip'
import Booking from './Booking'
const TourDetail = () => {
  return (
    <main className='alldestinations '>
      <section>
        <Banner />
      </section>
      <section className='xmd:hidden'>
        <Breadcrumb
          type='section'
          divider
        />
      </section>
      <section>
        <Booking />
      </section>
      <section>
        <FaqAboutTrip />
      </section>
    </main>
  )
}

export default TourDetail
