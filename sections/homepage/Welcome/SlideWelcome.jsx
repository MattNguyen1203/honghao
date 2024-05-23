import React, {useRef, useState} from 'react'
import {EffectFade} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import ItemVideo from './ItemVideo'
import 'swiper/css/effect-fade'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

const listVideo = ['tgbNymZ7vqY', '3Jr50aCJ5BA']
const SlideWelcome = () => {
  const [indexSlider, setIndexSlider] = useState(0)
  const swiperRef = useRef(null)

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
    <div className='w-full h-full relative'>
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        effect={'fade'}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[EffectFade]}
        className='w-full h-full'
      >
        {listVideo.map((item, index) => (
          <SwiperSlide className='relative'>
            <ItemVideo active={indexSlider === index} />
          </SwiperSlide>
        ))}
      </Swiper>

      {listVideo?.length > 1 && (
        <>
          <button
            onClick={handlePrevSlide}
            id='btn-left'
            className='p-[1.5rem] absolute left-[4.85rem] xmd:left-[1rem] top-1/2 -translate-y-1/2 brightness-0 invert z-50'
          >
            <Image
              className='object-contain tablet:size-[5rem] size-[2.5rem]'
              src={'/imgs/home/btn-left.svg'}
              alt='btn-slide'
              width={36}
              height={18}
            />
          </button>
          <button
            id='btn-right'
            onClick={handleNextSlide}
            className='p-[1.5rem] absolute right-[4.85rem] xmd:right-[1rem] top-1/2 -translate-y-1/2 z-50 brightness-0 invert'
          >
            <Image
              className='object-contain  tablet:size-[5rem] size-[2.5rem] rotate-180'
              src={'/imgs/home/btn-left.svg'}
              alt='btn-slide'
              width={36}
              height={18}
            />
          </button>
        </>
      )}
    </div>
  )
}

export default SlideWelcome
