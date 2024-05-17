"use client"
import NavigationCustom from '@/components/navigationcustom'
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation } from 'swiper/modules'
import React, { useState, useRef } from 'react'
import "swiper/css";
import CardOurTeam from './CardOurTeam';
import Image from 'next/image'
const TeamSlide = () => {
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
  return <div className='relative w-[65.0625rem]'>
    <div className="w-[64.0625rem] xmd:hidden left-[0.5rem] absolute top-[12rem]">
      <NavigationCustom
        white={true}
        indexSlider={3}
        length={5}
        handlePrevSlide={handlePrevSlide}
        handleNextSlide={handleNextSlide}
        outline={true}
      /></div>
    <Swiper
      breakpoints={{
        767: {
          speed: 1100
        }
      }}
      ref={swiperRef}
      slidesPerView={3.5}
      onSlideChange={handleSlideChange}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper
      }}
      speed={1000}
      loop={'true'}
      modules={[Navigation]}
      className=''

    >
      {new Array(5).fill(0)?.map((d, i) => (

        <SwiperSlide key={i} className='!pb-[4rem] xmd:!pl-[0.8rem]'>
          < CardOurTeam />
        </SwiperSlide>
      ))}
    </Swiper>
  </div >
}

export default TeamSlide

