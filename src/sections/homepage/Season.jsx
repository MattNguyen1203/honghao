'use client'

import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import { Navigation, Thumbs, FreeMode } from 'swiper/modules'
import { useEffect, useRef, useState } from 'react'
import useStore from '@/app/(store)/store'
import SeasonThumbItem from '@/components/season-thumb-item/SeasonThumbItem'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import { getCurrentDate } from '@/lib/getCurrentDate'

const listMonth = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
]

export default function Season({ data, dataWeather }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const swiperRef = useRef(null)
  const swiperThumbMobileRef = useRef(null)
  const myRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const isMobile = useStore((state) => state.isMobile)
  // useGSAP(() => {
  //   gsap.to('.main-cloud', {
  //     x: '-8%',
  //     duration: 14,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: 'none',
  //   })
  //   gsap.to('.animate-cloud-1', {
  //     x: '100%',
  //     duration: 18,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: 'none',
  //   })
  //   gsap.to('.animate-cloud-2', {
  //     x: '-100%',
  //     duration: 18,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: 'none',
  //   })
  //   gsap.to('.animate-cloud-4', {
  //     x: '-100%',
  //     duration: 18,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: 'none',
  //   })
  // }, [])
  useGSAP(() => {
    const animations = [
      {
        selector: '.main-cloud',
        props: { x: '-8%', duration: 14, repeat: -1, yoyo: true, ease: 'none' },
      },
      {
        selector: '.animate-cloud-1',
        props: { x: '100%', duration: 18, repeat: -1, yoyo: true, ease: 'none' },
      },
      {
        selector: '.animate-cloud-2',
        props: { x: '-100%', duration: 18, repeat: -1, yoyo: true, ease: 'none' },
      },
      {
        selector: '.animate-cloud-4',
        props: { x: '-100%', duration: 18, repeat: -1, yoyo: true, ease: 'none' },
      },
    ]

    animations.forEach(({ selector, props }) => {
      gsap.to(selector, props)
    })
  }, [])
  // useEffect(() => {
  //   if (!isMobile) {
  //     const thumbItems = document.querySelectorAll('.thumb-item')
  //     console.log('thumbItems', thumbItems?.[0].getBoundingClientRect());
  //     const thumbItemWidth = thumbItems?.[0]?.offsetWidth
  //     const leftPosition = `calc(
  //       ${thumbItemWidth * activeIndex}px +
  //       ${thumbItems?.[1]?.getBoundingClientRect().left -
  //       thumbItems?.[0]?.getBoundingClientRect().left -
  //       thumbItemWidth
  //       }px * ${activeIndex} + ${thumbItemWidth / 2}px)`
  //     myRef.current.style.left = leftPosition
  //   }
  // }, [activeIndex, isMobile])

  useEffect(() => {
    if (!isMobile) {
      const thumbItems = document.querySelectorAll('.thumb-item')
      console.log('thumbItems', thumbItems?.[0]?.clientWidth);
      const thumbItemWidth = thumbItems?.[0]?.clientWidth
      const spacing = 16
      const leftPosition = `calc(${thumbItemWidth * activeIndex}px + ${spacing * activeIndex}px + ${thumbItemWidth / 2}px )`
      myRef.current.style.left = leftPosition
    }
  }, [activeIndex, isMobile])

  const handleOnClick = (index) => {
    setActiveIndex(index)
  }
  console.log(activeIndex);
  return (
    <>
      <div className='w-full h-[4rem] md:h-[13.5rem] z-10 relative bg-transparent -translate-y-full demo'>
        <Image
          src={'/imgs/home/cloud-flying-1.png'}
          alt='cloud flying (づ ◕‿◕ )づ'
          className='object-cover object-top min-w-[108vw] main-cloud'
          width={1920}
          height={1080}
          loading='lazy'
        />
        <div
          className='absolute bottom-0 left-0 z-20 w-full h-6 md:h-[6rem]'
          style={{
            background:
              'linear-gradient(0deg,#FFF 50%,rgba(255,255,255,0.00) 100%)',
          }}
        />
        <Image
          src={'/imgs/home/animate-cloud-1.png'}
          alt='animate cloud'
          className='animate-cloud-1 absolute -top-4 md:-top-6 left-0 md:left-[10%] z-10 w-[50rem] object-cover'
          width={1920}
          height={1080}
          loading='lazy'
        />
        <Image
          src={'/imgs/home/animate-cloud-2.png'}
          alt='animate cloud'
          className='animate-cloud-2 absolute top-0 md:top-5 right-0 z-10 w-[50rem] object-cover'
          width={1920}
          height={1080}
          loading='lazy'
        />
        <Image
          src={'/imgs/home/animate-cloud-4.png'}
          alt='animate cloud'
          className='animate-cloud-4 absolute top-0 md:top-4 right-0 md:right-[30%] z-10 w-[50rem] object-cover'
          width={1920}
          height={1080}
          loading='lazy'
        />
      </div>
      <section className='relative z-10 -translate-y-16 md:-translate-y-[13.5rem] -mb-12 md:-mb-[13.5rem]'>
        <div className='kKao4-container'>
          <Swiper
            slidesPerView={1}
            loop
            speed={400}
            navigation={{
              prevEl: '.prev-slide-season-btn',
              nextEl: '.next-slide-season-btn',
            }}
            modules={[Navigation, Thumbs]}
            className='slide-season'
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            thumbs={{ swiper: thumbsSwiper }}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item?.image?.url}
                  alt='hong hao travel'
                  className='object-cover w-full h-full'
                  width={1920}
                  height={1080}
                  loading='lazy'
                />
              </SwiperSlide>
            ))}

            <button className='hidden md:block absolute left-[4rem] top-1/2 -translate-y-1/2 z-10 prev-slide-season-btn group'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'
                className='group-hover:fill-orange-normal-hover transition-400'
              >
                <g clipPath='url(#clip0_8549_23525)'>
                  <circle
                    cx='20'
                    cy='20'
                    r='19.5'
                    transform='matrix(-1 0 0 1 40 0)'
                    className='stroke-white group-hover:stroke-orange-normal-hover transition-400'
                  />
                  <path
                    d='M13.5 20H27'
                    stroke='url(#paint0_linear_8549_23525)'
                    strokeWidth='2'
                  />
                  <g filter='url(#filter0_i_8549_23525)'>
                    <path
                      d='M12 20L20 27L16.7816 20L20 13L12 20Z'
                      fill='white'
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id='filter0_i_8549_23525'
                    x='12'
                    y='13'
                    width='28'
                    height='18'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                  >
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='BackgroundImageFix'
                      result='shape'
                    />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset
                      dx='20'
                      dy='4'
                    />
                    <feGaussianBlur stdDeviation='50' />
                    <feComposite
                      in2='hardAlpha'
                      operator='arithmetic'
                      k2='-1'
                      k3='1'
                    />
                    <feColorMatrix
                      type='matrix'
                      values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0'
                    />
                    <feBlend
                      mode='normal'
                      in2='shape'
                      result='effect1_innerShadow_8549_23525'
                    />
                  </filter>
                  <linearGradient
                    id='paint0_linear_8549_23525'
                    x1='26'
                    y1='20'
                    x2='15'
                    y2='20'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='white' />
                    <stop
                      offset='1'
                      stopColor='white'
                      stop-opacity='0'
                    />
                  </linearGradient>
                  <clipPath id='clip0_8549_23525'>
                    <rect
                      width='40'
                      height='40'
                      rx='20'
                      transform='matrix(-1 0 0 1 40 0)'
                      fill='white'
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className='hidden md:block absolute right-[4rem] top-1/2 -translate-y-1/2 z-10 next-slide-season-btn group'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'
                className='group-hover:fill-orange-normal-hover transition-400'
              >
                <g clipPath='url(#clip0_8549_23524)'>
                  <circle
                    cx='20'
                    cy='20'
                    r='19.5'
                    className='stroke-white group-hover:stroke-orange-normal-hover transition-400'
                  />
                  <path
                    d='M26.5 20H13'
                    stroke='url(#paint0_linear_8549_23524)'
                    strokeWidth='2'
                  />
                  <g filter='url(#filter0_i_8549_23524)'>
                    <path
                      d='M28 20L20 27L23.2184 20L20 13L28 20Z'
                      fill='white'
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id='filter0_i_8549_23524'
                    x='20'
                    y='13'
                    width='28'
                    height='18'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                  >
                    <feFlood
                      floodOpacity='0'
                      result='BackgroundImageFix'
                    />
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='BackgroundImageFix'
                      result='shape'
                    />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset
                      dx='20'
                      dy='4'
                    />
                    <feGaussianBlur stdDeviation='50' />
                    <feComposite
                      in2='hardAlpha'
                      operator='arithmetic'
                      k2='-1'
                      k3='1'
                    />
                    <feColorMatrix
                      type='matrix'
                      values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0'
                    />
                    <feBlend
                      mode='normal'
                      in2='shape'
                      result='effect1_innerShadow_8549_23524'
                    />
                  </filter>
                  <linearGradient
                    id='paint0_linear_8549_23524'
                    x1='14'
                    y1='20'
                    x2='25'
                    y2='20'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='white' />
                    <stop
                      offset='1'
                      stopColor='white'
                      stop-opacity='0'
                    />
                  </linearGradient>
                  <clipPath id='clip0_8549_23524'>
                    <rect
                      width='40'
                      height='40'
                      rx='20'
                      fill='white'
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div className='absolute top-3 left-3 md:top-9 md:left-9 md:w-[9.375rem] rounded-[0.44rem] md:rounded-[0.7rem] bg-[rgba(255,255,255,0.2)] px-[0.52rem] xmd:py-[0.45rem] md:pt-4 md:pb-2 flex md:flex-col md:space-y-3 z-10 items-center border-[0.5px] border-greyscale-0/40'>
              <span className='font-extrabold text-center font-tripsans text-1.23 md:text-2 text-greyscale-0 xmd:ml-[0.46rem]'>
                {parseInt(dataWeather?.main?.temp) - 273}°C
              </span>
              {dataWeather?.weather?.[0]?.main === 'Clear' ||
                dataWeather?.weather?.[0]?.id === 801 ? (
                <Image
                  src={'/imgs/home/sun.svg'}
                  alt='sun with cloud'
                  className='w-[2.3rem] h-[1.667rem] md:w-[3.73rem] md:h-[2.687rem] xmd:order-first'
                  width={120}
                  height={120}
                  loading='lazy'
                />
              ) : dataWeather?.weather?.[0]?.main === 'Clouds' ? (
                <Image
                  src={'/imgs/home/cloudy.svg'}
                  alt='sun with cloud'
                  className='w-[2.3rem] h-[1.667rem] md:w-[3.73rem] md:h-[2.687rem] xmd:order-first'
                  width={120}
                  height={120}
                  loading='lazy'
                />
              ) : (
                <Image
                  src={'/imgs/home/raining.svg'}
                  alt='sun with cloud'
                  className='w-[2.3rem] h-[1.667rem] md:w-[3.73rem] md:h-[2.687rem] xmd:order-first'
                  width={120}
                  height={120}
                  loading='lazy'
                />
              )}
              <p className='hidden md:block font-tripsans text-1.125 text-center text-greyscale-0'>
                {getCurrentDate()}
              </p>
            </div>


            {/* thumbs */}
            <div className='absolute bottom-[1.63rem] left-0 px-[2.5rem] w-full z-10 xmd:hidden'>
              <div className='relative w-full h-px mb-6 bg-greyscale-0/80'>
                <div
                  ref={myRef}
                  className='absolute top-0 -translate-x-1/2 flex flex-col items-center -translate-y-[98%] transition-400'
                >
                  <strong className='font-tripsans text-1 tablet:text-15 font-extrabold leading-1.2 tracking-0.0125 mb-[0.44rem] text-greyscale-0'>
                    Now
                  </strong>
                  <Image
                    src={'/imgs/home/arrow-up.svg'}
                    alt='arrow-up'
                    className='w-4 h-2'
                    width={120}
                    height={120}
                    loading='lazy'
                  />
                </div>
              </div>
              <div className='flex flex-row space-x-3.5'>
                {data?.map((item, i) => {
                  return (
                    <SeasonThumbItem
                      key={i}
                      handleOnClick={() => swiperRef.current?.slideTo(i)}
                      active={activeIndex === i}
                      isMobile={isMobile}
                      item={item}
                      title={listMonth?.[i]}
                    />
                  )
                })}
              </div>
            </div>
          </Swiper>
          <div className='z-10 w-full flex flex-row px-3 mt-4 space-x-3 overflow-auto flex-nowrap md:hidden'>
            {/* <Swiper
              slidesPerView={12}
              onSwiper={setThumbsSwiper}
              freeMode={true}
              spaceBetween={12}
              className='swiper-thumb-mobile'
              onBeforeInit={(swiper) => {
                swiperThumbMobileRef.current = swiper
              }}
              modules={[FreeMode, Thumbs]}
            > */}
            {data?.map((item, i) => {
              return (
                // <SwiperSlide key={i}>
                <SeasonThumbItem
                  item={item}
                  handleOnClick={() => swiperRef.current?.slideTo(i)}
                  index={i}
                  active={activeIndex === i}
                  isMobile={isMobile}
                  title={listMonth?.[i]}
                />
                // </SwiperSlide>
              )
            })}
            {/* </Swiper> */}
          </div>
        </div>
      </section>
    </>
  )
}
