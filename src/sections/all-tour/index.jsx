import Breadcrumb from '@/components/breadcrumb'
import BannerAllTour from './BannerAllTour'
import SliderTour from './SliderTour'
import GridCheckBox from './GridCheckBox'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import Aos from '@/components/Aos'

export default function AllTour({ dataTourPage, dataTours, typeOfTours, dataBestTrip }) {

  return (
    <Aos>
      <BannerAllTour dataTourPage={dataTourPage} />
      <div>
        <Breadcrumb
          type='section'
          divider
        >
          <BreadcrumbLink href={'/tours'}>All Tours</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <section className='mt-[2rem] md:mt-[3rem]'>
        <SliderTour type='alltour' dataBestTrip={dataBestTrip} />
      </section>
      <section className='section-pin md:pt-[4.19rem] mt-[4rem] md:bg-[#F0F0F0] rounded-t-[1.5rem]'>
        <GridCheckBox
          typeOfTours={typeOfTours}
          dataTours={dataTours}
        />
      </section>
    </Aos>
  )
}
