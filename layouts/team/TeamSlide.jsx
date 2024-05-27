'use client'

import NavigationCustom from '@/components/navigationcustom'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules'
import React, {useState, useRef} from 'react'
import 'swiper/css'
import CardOurTeam from './CardOurTeam'
import {cn} from '@/lib/utils'

const TeamSlide = ({darkTheme, data}) => {
  const swiperRef = useRef(null)
  const [indexSlider, setIndexSlider] = useState(0)

  const handleSlideChange = (swiper) => {
    setIndexSlider(swiper.realIndex)
  }

  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }

  return (
    <div className='relative flex items-center justify-center w-full'>
      <div className=' xmd:hidden w-[58rem] absolute top-[12rem]'>
        <NavigationCustom
          white={true}
          indexSlider={3}
          length={5}
          handlePrevSlide={handlePrevSlide}
          handleNextSlide={handleNextSlide}
          outline={true}
        />
      </div>
      <Swiper
        breakpoints={{
          767: {
            speed: 1100,
          },
        }}
        spaceBetween={0}
        ref={swiperRef}
        slidesPerView={3.2}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        speed={500}
        loop={'true'}
        modules={[Navigation]}
        className=' xmd:w-[60.0625rem] w-[62.0625rem] xmd:!pl-[1rem] md:!pl-[1rem]'
      >
        {data?.map((item, i) => (
          <SwiperSlide
            key={i}
            className='!pb-[4rem]'
          >
            <CardOurTeam data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={cn(
          'w-32 h-[28.5rem] z-10 absolute top-0 right-0 ',
          darkTheme
            ? 'bg-[linear-gradient(90deg,rgba(19,40,25,0.00)_1.95%,#132819_94.2%)]'
            : 'bg-[linear-gradient(90deg,rgba(255,255,255,0)_1.95%,#fff_94.2%)]',
        )}
      ></div>
    </div>
  )
}

export default TeamSlide
