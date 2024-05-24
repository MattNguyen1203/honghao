'use client'

import React, {useEffect, useState} from 'react'
import Filter from './Filter'
import Image from 'next/image'
import gsap from 'gsap'
import useStore from '@/app/(store)/store'
import SlideImgs from './SlideImgs'

const Banner = () => {
  const isMobile = useStore((state) => state.isMobile)

  const [animationCompleted, setAnimationCompleted] = useState(false)

  useEffect(() => {
    gsap.matchMedia().add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({
        onComplete: () => {
          setAnimationCompleted(true) // Thay đổi state khi animation hoàn thành
        },
      })
      tl.to('#bannerHome_map1', {
        opacity: 0,
        duration: 1,
      })
        .to(
          '#home_box1',
          {
            translateX: '-15rem',
            duration: 2,
          },
          '<',
        )
        .to(
          '#home_box2',
          {
            translateY: '-10rem',
            duration: 2,
          },
          '<',
        )
        .to(
          '#home_box3',
          {
            translateX: '15rem',
            duration: 2,
          },
          '<',
        )
        .to('#bannerHome_map2', {
          scale: '20',
          duration: 2,
        })
        .to(
          '#home_box1',
          {
            translateX: '-25rem',
            duration: 1,
          },
          '<',
        )
        .to(
          '#home_box2',
          {
            translateY: '-20rem',
            duration: 1,
          },
          '<',
        )
        .to(
          '#home_box3',
          {
            translateX: '25rem',
            duration: 1,
          },
          '<',
        )
        .to(
          '#home_heading',
          {
            translateY: '-70vh',
            duration: 2,
          },
          '<',
        )
        .to(
          '#homepage_banner-swiper',
          {
            width: '100vw',
            height: '100vh',
            translateY: '0',
            duration: 1,
          },
          '<',
        )
        .to('#homepage__banner-map', {
          translateX: 0,
          duration: 1,
        })
    })
  }, [])
  return (
    <section
      className=''
      id='homepage__banner'
    >
      {isMobile ? (
        <div className='relative z-20 w-full h-full md:hidden flex'>
          <SlideImgs animationCompleted={true} />
        </div>
      ) : (
        <div className='w-screen h-screen bg-[#206545]/90 flex relative overflow-hidden xlg:hidden'>
          <Image
            src='/imgs/home/bannerBg.webp'
            alt='hong hao travel'
            width={2000}
            height={1000}
            className='w-full h-full absolute top-0 left-0 z-[-1]'
          />
          <div className='text-075 text-greyscale-0 font-bold tracking-[0.00938rem] absolute top-1/2 left-[1.87rem] rotate-90'>
            Hong Hao Travel
          </div>

          <div>
            <Image
              src='/imgs/home/bannerMap.webp'
              alt='hong hao travel'
              width={2000}
              height={1000}
              className='w-[30rem] h-32rem max-w-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] object-contain'
              id='bannerHome_map1'
            />

            <Image
              src='/imgs/home/BannerMap2.webp'
              alt='hong hao travel'
              width={2000}
              height={1000}
              className='w-[30rem] h-32rem max-w-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] object-contain'
              id='bannerHome_map2'
            />
          </div>

          {/* box animate */}

          <div
            id='home_box1'
            className='size-[0.625rem] border border-solid border-greyscale-0 rounded-full flex absolute top-1/2 left-[23.75rem]'
          ></div>
          <div
            id='home_box2'
            className='size-[0.625rem] border border-solid border-greyscale-0 rounded-full flex absolute top-[15.19rem] left-1/2'
          ></div>

          <div
            id='home_box3'
            className='size-[0.625rem] border border-solid border-greyscale-0 rounded-full flex absolute top-1/2 right-[23.75rem]'
          ></div>

          {/* heading */}
          <div
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] items-center justify-center flex flex-col'
            id='home_heading'
          >
            <span className='text-1125 font-bold text-greyscale-0/40'>
              GET READY
            </span>
            <h1 className='homepage_heading font-black w-[44.125rem] text-center'>
              DISCOVER <br /> HA GIANG LOOP
            </h1>
          </div>

          <Filter />

          <div className='absolute top-0 left-0 z-20 w-full h-full'>
            <SlideImgs animationCompleted={animationCompleted} />
          </div>
        </div>
      )}
    </section>
  )
}

export default Banner
