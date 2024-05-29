'use client'

import {Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'
import ItemTour from '@/components/itemtour'
import Image from 'next/image'

export default function SliderTour({type, dataBestTrip}) {
  const isAllTourPage = type === 'alltour'

  console.log('dataBestTrip', dataBestTrip)
  return (
    <div className='container mt-[4.38rem] xmd:mt-[2rem] xmd:!px-0'>
      <span className='xmd:container xmd:mb-[0.75rem] text-1125 xmd:text-0875 xmd:text-greyscale-60 font-extrabold text-greyscale-80 opacity-[0.4]'>
        EXPLORE
      </span>
      {isAllTourPage ? (
        <h2 className='text-3 xmd:text-25 font-black text-greyscale-80'>
          BEST TRIPS <br className='md:hidden' /> FOR YOU
        </h2>
      ) : (
        <h2 className='text-3 xmd:text-25 font-black text-green-normal-hover xmd:text-greyscale-80'>
          TRIPS FOR YOU
        </h2>
      )}

      <div className='relative w-full mt-[3.56rem] xmd:mt-[2rem]'>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={12}
          navigation={{
            prevEl: '.prev_banner',
            nextEl: '.next_banner',
          }}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          modules={[Navigation]}
          className='mySwiper xmd:!px-[0.75rem]'
        >
          {dataBestTrip?.map((e, index) => (
            <SwiperSlide
              className='xmd:!w-[16.0175rem] xmd:!h-[23.33956rem]'
              key={index}
            >
              <ItemTour
                className={'xmd:!h-[23.33956rem]'}
                data={e}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='prev_banner xmd:hidden absolute top-1/2 -translate-y-1/2 left-[-3.12rem]'>
          <Image
            className='size-[2.5rem]'
            alt='prev banner'
            src={'/imgs/all-tour/prev.svg'}
            width={40}
            height={40}
          />
        </div>
        <div className='next_banner xmd:hidden absolute top-1/2 -translate-y-1/2 right-[-3.12rem]'>
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
