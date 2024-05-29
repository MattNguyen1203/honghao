'use client'
import React, { useRef, useState, useEffect } from 'react'
import {
  FreeMode,
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  Thumbs,
  EffectFade,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import useStore from '@/app/(store)/store'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { cn } from '@/lib/utils'
const data = [
  {
    title: 'people',
  },
  {
    title: 'Hiking',
  },
  {
    title: 'Discovery',
  },
  {
    title: 'Food',
  },
]
const images = [
  { img: '/imgs/activity/video.png' },
  { img: '/imgs/activity/video2.png' },
  { img: '/imgs/activity/video.png' },
  { img: '/imgs/activity/video4.png' },
  { img: '/imgs/activity/video2.png' },
  { img: '/imgs/activity/video.png' },
  { img: '/imgs/activity/video2.png' },
  { img: '/imgs/activity/video.png' },
  { img: '/imgs/activity/video4.png' },
  { img: '/imgs/activity/video2.png' },
]
const images2 = [
  { img: '/imgs/common/slidevideotour.png' },
  { img: '/imgs/common/slidevideotour1.png' },
  { img: '/imgs/common/slidevideotour2.png' },
  { img: '/imgs/common/SlideVideotour.png' },
  { img: '/imgs/common/slidevideotour1.png' },
  { img: '/imgs/common/slidevideotour2.png' },
  { img: '/imgs/common/slidevideotour.png' },
  { img: '/imgs/common/slidevideotour1.png' },
  { img: '/imgs/common/slidevideotour2.png' },
  { img: '/imgs/common/slidevideotour.png' },
]
const SlideVideoTours = ({ type, data, mainImage }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  const isMobile = useStore((state) => state.isMobile)
  const mainSwiper = useRef()
  const subSwiper = useRef()
  const checkIsBanner = type === 'banner'
  const imagesToUse = checkIsBanner ? images2 : images
  const handleSlideChange = (swiper) => {
    const newIndex = swiper?.realIndex
    setActiveIndex(newIndex)
  }
  useEffect(() => {
    mainSwiper?.current?.slideTo(activeIndex)
  }, [activeIndex])
  return (
    <div
      className={cn(
        'xmd:w-[23.40656rem] xmd:h-fit relative w-[86.875rem] h-[44.75rem] bg-white flex xmd:flex-col justify-center items-center rounded-3xl',
        checkIsBanner ? 'w-full h-[43.75rem] rounded-none' : '',
      )}
    >
      <svg
        className={cn('xmd:hidden activity arrowfr size-[3.3rem]  absolute right-[17rem] z-[100] -translate-y-1/2',
          checkIsBanner ? ' top-[55%]' : ' top-[45%]'
        )}
        xmlns='http://www.w3.org/2000/svg'
        width='54'
        height='54'
        viewBox='0 0 54 54'
        fill='none'
      >
        <path
          d='M38 27L22 37L27 27L22 17L38 27Z'
          fill='white'
        />
      </svg>

      {checkIsBanner && (
        <Image
          priority
          alt='ảnh'
          src={mainImage}
          width={1500}
          height={1500}
          className={cn(
            ' w-[83.875rem] rounded-[0.75rem] h-[41.75rem] ',
            checkIsBanner
              ? 'w-full h-[43.75rem] xmd:w-[23.40656rem] xmd:h-[20.93544rem] rounded-none'
              : '',
          )}
        />
      )}
      {!checkIsBanner && (
        <Swiper
          // ref={mainSwiper}
          onBeforeInit={(swiper) => {
            mainSwiper.current = swiper
          }}
          pagination={{
            clickable: true,
          }}
          allowTouchMove={false}
          speed={500}
          effect={'fade'}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, EffectFade]}
          className='xmd:w-full xmd:h-[20.93544rem]'
        >
          {data?.map((d, i) => {
            const img1 = d?.url
            return (
              <SwiperSlide
                key={i}
                className='!flex !justify-center !items-center'
              >
                <Image
                  priority
                  alt='ảnh'
                  src={img1}
                  width={1500}
                  height={1500}
                  className={cn(
                    ' w-[83.875rem] rounded-[0.75rem] h-[41.75rem] ',
                    checkIsBanner
                      ? 'w-full h-[43.75rem] xmd:w-[23.40656rem] xmd:h-[20.93544rem] rounded-none'
                      : '',
                  )}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}
      <div className='md:absolute xmd:mt-[0.2rem] z-[80] xmd:w-[23.4375rem] xmd:h-[6.35rem] right-[6rem]'>
        <Swiper
          breakpoints={{
            767: {
              direction: 'vertical',
              slidesPerView: 6,
            },
          }}
          allowTouchMove={true}
          direction={'horizontal'}
          loop={true}
          centeredSlides={true}
          autoplay={
            !checkIsBanner
              ? false
              : {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }
          }
          mousewheel={true}
          speed={checkIsBanner ? 1500 : 500}
          initialSlide={3}
          slidesPerView={2.12}
          watchSlidesProgress={true}
          modules={[Navigation, Autoplay, Thumbs, Pagination, Mousewheel]}
          onSlideChange={handleSlideChange}
          // onSwiper={setThumbsSwiper}
          className={cn(
            'slide-video-tour mySwiper    ',
            checkIsBanner ? 'md:h-[43.75rem] ' : 'h-[41.75rem]',
          )}
          id='swiper_discover'
        >
          {data?.map((d, i) => {
            const img1 = d?.url
            return (
              <SwiperSlide
                key={i}
                className={cn(' ', checkIsBanner ? '' : '')}
              >
                <div
                  className={cn(
                    'relative rounded-[0.75rem] overflow-hidden duration-500  border-[2px] ease-linear  w-[10.875rem] h-[6.35rem]',
                    i === activeIndex
                      ? 'opacity-1 border-white'
                      : 'border-transparent',
                  )}
                >
                  {/* <div>{i}{activeIndex}</div> */}
                  <Image
                    priority
                    alt='ảnh'
                    src={img1}
                    width={500}
                    height={500}
                    className={cn(
                      '  rounded-[0.75rem] duration-500 ease-linear size-full ',
                    )}
                  />
                  <div
                    className={
                      (i === activeIndex ? ' bg-opacity-0' : ' bg-opacity-40 ') +
                      ' rounded-[0.75rem] bg-black absolute  duration-500 ease-linear top-0 left-0 size-full'
                    }
                  ></div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
export default SlideVideoTours
