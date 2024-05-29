import SliderTour from '@/sections/all-tour/SliderTour'

export default function TripsForYou({dataBestTrip}) {
  return (
    <section className='w-full flex justify-center'>
      <SliderTour dataBestTrip={dataBestTrip} />
    </section>
  )
}
