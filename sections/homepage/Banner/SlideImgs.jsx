'use client'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'

const listDotPosition = [
  {
    top: '19rem',
    right: '12.5rem',
  },
  {
    top: '17rem',
    right: '5.5rem',
  },
  {
    top: '21.5rem',
    right: '17.5rem',
  },
  {
    top: '13.5rem',
    right: '6.5rem',
  },
  {
    top: '27.5rem',
    right: '10.5rem',
  },
  {
    top: '28.5rem',
    right: '17.5rem',
  },
]

const moreThan6 = {
  top: '24.5rem',
  right: '14.5rem',
}

const SlideImgs = ({ animationCompleted, listImg = [] }) => {
  const slideImgRef = useRef()

  const [dotPositionIndex, setDotPositionIndex] = useState(0)
  useEffect(() => {
    if (animationCompleted && slideImgRef.current) {
      slideImgRef.current.autoplay.start()
    }
  }, [animationCompleted, slideImgRef])
  console.log(dotPositionIndex);
  return (
    <>
      <Swiper
        effect={'fade'}
        modules={[EffectFade, Autoplay]}
        autoplay={
          animationCompleted
            ? {
              delay: 3000,
              disableOnInteraction: false,
            }
            : false
        }
        onBeforeInit={(swiper) => {
          slideImgRef.current = swiper
        }}
        onSlideChange={(swiper) => {
          setDotPositionIndex(swiper.realIndex)
        }}
        className='w-[71rem] h-[35rem] tablet:h-[80rem] relative translate-y-[100vh] xlg:w-full xmd:h-[30rem] xlg:translate-y-[0]'
        id='homepage_banner-swiper'
      >
        {listImg?.map((item, index) => (
          <SwiperSlide
            key={index}
            className='select-none'
          >
            <Image
              priority
              alt={item?.image?.alt || 'hong hao travel'}
              src={item?.image?.url}
              width={1920}
              height={1080}
              className='w-full h-full object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className='h-full w-[27.3975rem] absolute top-0 right-0 translate-x-[50rem] z-30 xlg:hidden'
        id='homepage__banner-map'
      >
        <Image
          src='/imgs/home/bannerSlideMap.svg'
          alt='hong hao travel'
          width={1000}
          height={1000}
          className='object-contain w-[19.5rem] h-[24rem] absolute top-[10rem] right-[3rem] z-20'
        />
        <div className='w-full h-full absolute top-0 right-0 bg-[linear-gradient(90deg,rgba(9,42,27,0.00)_11.52%,#092A1B_89.04%)] z-10'></div>
        <Image
          src='/imgs/home/dot.svg'
          alt='hong hao travel'
          width={30}
          height={30}
          className={cn(
            'size-[1.5rem] absolute z-30 transition-all duration-500',
          )}
          style={{
            top: dotPositionIndex > 5 ? moreThan6.top : listDotPosition?.[dotPositionIndex]?.top,
            right: dotPositionIndex > 5 ? moreThan6.right : listDotPosition?.[dotPositionIndex]?.right,
          }}
        />
      </div>
    </>
  )
}

export default SlideImgs
