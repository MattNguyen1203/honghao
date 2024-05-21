"use client"
import React, { useRef, useState, useEffect } from 'react'
import { FreeMode, Navigation, Autoplay, Thumbs, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { cn } from '@/lib/utils';
const data =
  [
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
    }
  ]
const images = [
  { img: '/imgs/activity/video.png' },
  { img: '/imgs/activity/video2.png' },
  { img: '/imgs/activity/video3.png' },
  { img: '/imgs/activity/video4.png' },
  { img: '/imgs/activity/video5.png' },
  { img: '/imgs/activity/video.png' },
  { img: '/imgs/activity/video2.png' },
  { img: '/imgs/activity/video3.png' },
  { img: '/imgs/activity/video4.png' },
  { img: '/imgs/activity/video5.png' },
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
const SlideVideoTours
  = ({ type }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(-1);
    const mainSwiper = useRef()
    const checkIsBanner = type === 'banner'
    const imagesToUse = checkIsBanner ? images2 : images;
    const handleSlideChange = (swiper) => {
      const newIndex = swiper?.realIndex;
      setActiveIndex(newIndex);
    };

    useEffect(() => {
      mainSwiper?.current?.slideTo(activeIndex);
    }, [activeIndex]);
    return (
      <div className={cn("relative w-[86.875rem] h-[44.75rem] bg-white flex justify-center items-center rounded-3xl",
        checkIsBanner ? 'w-full h-[43.75rem] rounded-none' : ''
      )}>
        <svg className='activity arrowfr size-[3.3rem]  absolute right-[17rem] top-[53%] z-[100] -translate-y-1/2' xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
          <path d="M38 27L22 37L27 27L22 17L38 27Z" fill="white" />
        </svg>
        <Swiper
          // ref={mainSwiper}
          onBeforeInit={(swiper) => {
            mainSwiper.current = swiper
          }}
          pagination={{
            clickable: true,
          }}
          allowTouchMove={false}
          speed={1500}
          effect={'fade'}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, EffectFade]}
          className=''
        >
          {imagesToUse?.map((d, i) => (
            <SwiperSlide key={i} className='!flex !justify-center !items-center'>
              <Image priority alt="ảnh" src={d?.img} width={1500} height={1500} className={cn("w-[83.875rem] rounded-[0.75rem] h-[41.75rem] ",
                checkIsBanner ? 'w-full h-[43.75rem] rounded-none' : ''
              )} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='absolute z-[100] right-[6rem]'>
          <Swiper
            allowTouchMove={false}
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
            loop
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={1500}
            centeredSlides
            slidesPerView={6}
            watchSlidesProgress={true}
            modules={[FreeMode, Autoplay, Navigation, Thumbs]}
            onSlideChange={handleSlideChange}
            // onSwiper={setThumbsSwiper}
            className={cn("slide-video-tour mySwiper !pb-[3rem]  h-[41.75rem] ", checkIsBanner ? 'h-[43.75rem]' : '')}
            id="swiper_discover"
          >
            {imagesToUse?.map((d, i) => (
              <SwiperSlide key={i}>
                <div className={cn('relative rounded-[0.75rem] overflow-hidden duration-500  border-[2px] ease-linear  w-[10.875rem] h-[6.35rem]',
                  i === activeIndex ? 'opacity-1 border-white' : 'border-transparent'
                )}>

                  <Image priority alt="ảnh" src={d?.img} width={500} height={500} className={cn("  rounded-[0.75rem] duration-500 ease-linear size-full ",
                    // i === activeIndex ? 'opacity-1 border-white' : 'border-transparent'
                  )
                  } />
                  <div className={(i === activeIndex ? " bg-opacity-0" : " bg-opacity-40 ") + ' rounded-[0.75rem] bg-black absolute  duration-500 ease-linear top-0 left-0 size-full'}>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    )
  }
export default SlideVideoTours
