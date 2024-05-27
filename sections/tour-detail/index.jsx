import React from 'react'
import './tour-detail.css'
import Breadcrumb from '@/components/breadcrumb'
import Banner from './Banner'
import FaqAboutTrip from './FaqAboutTrip'
import StepByStep from '../blog-detail/StepByStep'
import StepByStepRes from '../blog-detail/StepByStepRes'
import OurTeam from '@/layouts/team'
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
      <StepByStep />
      <StepByStepRes />
      <section>
        <FaqAboutTrip />
      </section>

      <OurTeam />
    </main>
  )
}

export default TourDetail
