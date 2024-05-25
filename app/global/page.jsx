'use client'
import BikeAnimation from '@/components/bikeAnimate'
import ItemTour from '@/components/itemtour'
import React from 'react'
import Banner from '@/sections/common/banner'
import AccordionCustom from '@/sections/common/accordion'
import Breadcrumb from '@/components/breadcrumb'
import IndexHome from '@/components/form/IndexForm'
import HomeForm from '@/components/form/HomeForm'

const page = () => {
  const data = new Array(5).fill(0)
  return (
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
      <section className='container bg-black space-y-[2rem]'>
        <HomeForm />
        <HomeForm isTourDetail />
      </section>
    </div>
  )
}

export default page
