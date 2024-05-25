import Breadcrumb from '@/components/breadcrumb'
import BannerAllTour from './BannerAllTour'
import SliderTour from './SliderTour'
import GridCheckBox from './GridCheckBox'

export default function AllTour() {
  return (
    <main>
      <BannerAllTour />
      <div>
        <Breadcrumb type='section' divider />
      </div>
      <section>
        <SliderTour />
      </section>
      <section className='md:pt-[4.19rem] mt-[3rem] md:bg-[#F0F0F0] rounded-t-[1.5rem]'>
        <GridCheckBox />
      </section>
    </main>
  )
}
