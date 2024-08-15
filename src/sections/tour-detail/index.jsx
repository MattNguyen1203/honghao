// "use client"
import './tour-detail.css'
import Breadcrumb from '@/components/breadcrumb'
import Banner from './Banner'
import FaqAboutTrip from './FaqAboutTrip'
import StepByStep from './StepByStep'
import StepByStepRes from '@/sections/tour-detail/StepByStepRes'
import OurTeam from '@/layouts/team'
import Booking from './Booking'
import TripsForYou from '@/layouts/trip'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import Aos from '@/components/Aos'
import GsapWrap from '@/components/gsap-wrap/GsapWrap'
const TourDetail = ({
  data = {},
  dataPage = {},
  dataBestTrip = [],
  dataTourDetail = {},
}) => {
  return (
    <Aos className='alldestinations relative'>

      <section>

        <Banner
          dataAcf={data}
          dataTourDetail={dataTourDetail}
        />

      </section>
      <section className='xmd:hidden'>
        <Breadcrumb
          divider
          className=''
        >
          <BreadcrumbLink
            subLink
            href='/tour'
          >
            Tour
          </BreadcrumbLink>
          <BreadcrumbLink href={`/tours/${dataTourDetail?.detail_link}`}>
            {dataTourDetail?.title}
          </BreadcrumbLink>
        </Breadcrumb>
      </section>
      {/* <GsapWrap> */}

      <StepByStep
        dataAcf={data}
        dataTourDetail={dataTourDetail}
      />
      {/* </GsapWrap> */}
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
    </Aos>
  )
}

export default TourDetail
