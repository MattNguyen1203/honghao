import SliderTour from '@/sections/all-tour/SliderTour'

export default function TripsForYou({ dataBestTrip }) {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="900"
      className='w-full flex justify-center'>
      <SliderTour dataBestTrip={dataBestTrip} />
    </section>
  )
}
