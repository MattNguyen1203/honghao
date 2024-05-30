'use client'
import BikeAnimation from '@/components/bikeAnimate'
import ItemTour from '@/components/itemtour'
import React, {Suspense} from 'react'
import Banner from '@/sections/common/banner'
import AccordionCustom from '@/sections/common/accordion'
import Breadcrumb from '@/components/breadcrumb'
import HomeForm from '@/components/form/HomeForm'

const dataTourDetail = {
  titleTour: 'Ha Giang Loop tour',
  typeoftour: 'Itinerary',
  choosedays: {title: '3 days 2 night', day: 3},
}

const page = () => {
  const data = new Array(5).fill(0)
  return (
    <Suspense>
      <div className='mt-[20rem]'>
        <div className='w-[21.375rem] ml-[2rem]'>
          <ItemTour />
        </div>

        <div className='w-[42.8125rem]'>
          <AccordionCustom data={data} />
        </div>

        <Banner
          mainImg='/imgs/common/banner.jpg'
          mainText='/imgs/common/text.png'
          mainTextMb='/imgs/common/textMb.png'
        />

        <BikeAnimation />
        <Breadcrumb divider />
        <section className='container !p-0 bg-black space-y-[2rem]'>
          <HomeForm dataTourDetail={dataTourDetail} />
          <HomeForm
            isTourDetail
            dataTourDetail={dataTourDetail}
          />
        </section>
      </div>
    </Suspense>
  )
}

export default page
