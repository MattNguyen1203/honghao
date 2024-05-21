'use client'

import {Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'
import ItemTour from '@/components/itemtour'
import Image from 'next/image'

export default function SliderTour() {
  return (
    <div className='container mt-[4.38rem]'>
      <span className='text-1125 font-extrabold text-greyscale-80 opacity-[0.4]'>
        EXPLORE
      </span>
      <h1 className='text-3 font-black text-greyscale-80'>
        BEST TRIPS FOR YOU
      </h1>
      <div className='relative w-full mt-[3.56rem]'>
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          navigation={{
            prevEl: '.prev_banner',
            nextEl: '.next_banner',
          }}
          modules={[Navigation]}
          className='mySwiper'
        >
          {new Array(10).fill(0).map((e, index) => (
            <SwiperSlide key={index}>
              <ItemTour />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='prev_banner absolute top-1/2 -translate-y-1/2 left-[-3.12rem]'>
          <Image
            className='size-[2.5rem]'
            alt='prev banner'
            src={'/imgs/all-tour/prev.svg'}
            width={40}
            height={40}
          />
        </div>
        <div className='next_banner absolute top-1/2 -translate-y-1/2 right-[-3.12rem]'>
          <Image
            className='size-[2.5rem]'
            alt='next banner'
            src={'/imgs/all-tour/next.svg'}
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  )
}
