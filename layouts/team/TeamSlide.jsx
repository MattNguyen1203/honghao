'use client'

import NavigationCustom from '@/components/navigationcustom'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules'
import React, {useState, useRef} from 'react'
import 'swiper/css'
import CardOurTeam from './CardOurTeam'
import {cn} from '@/lib/utils'

const TeamSlide = ({darkTheme}) => {
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
        ref={swiperRef}
        slidesPerView={3.3}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        speed={1000}
        loop={'true'}
        modules={[Navigation]}
        className=' w-[62.0625rem]'
      >
        {new Array(5).fill(0)?.map((d, i) => (
          <SwiperSlide
            key={i}
            className='!pb-[4rem] xmd:!pl-[0.8rem]'
          >
            <CardOurTeam darkTheme={darkTheme} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={cn(
          'w-32 h-[28.5rem] z-10 absolute top-0 right-[0rem] shrink-0 bg-[linear-gradient(90deg,rgba(255,255,255,0)_1.95%,#fff_94.2%)]',
          {
            'bg-[linear-gradient(90deg,rgba(19,40,25,0.00)_1.95%,#132819_94.2%)]':
              darkTheme,
          },
        )}
      ></div>
    </div>
  )
}

export default TeamSlide
