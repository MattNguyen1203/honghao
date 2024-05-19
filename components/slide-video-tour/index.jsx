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
const SlideVideoTours
  = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(-1);
    const mainSwiper = useRef()
    const handleSlideChange = (swiper) => {
      const newIndex = swiper?.realIndex;
      setActiveIndex(newIndex);
    };

    useEffect(() => {
      mainSwiper?.current?.slideTo(activeIndex);
    }, [activeIndex]);
    return (
      <div className="relative w-[86.875rem] h-[44.75rem] bg-white flex justify-center items-center rounded-3xl">
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
          {images?.map((d, i) => (
            <SwiperSlide key={i} className='!flex !justify-center !items-center'>
              <Image priority alt="ảnh" src={d?.img} width={1500} height={1500} className="w-[83.875rem] rounded-[0.75rem] h-[41.75rem] " />
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
            className="activity mySwiper !pb-[3rem]  h-[41.75rem] "
            id="swiper_discover"
          >
            {images?.map((d, i) => (
              <SwiperSlide key={i}>
                <div className='relative'>

                  <Image priority alt="ảnh" src={d?.img} width={500} height={500} className={(i === activeIndex ? 'opacity-1 border border-white' : 'border-transparent border opacity-1') + " duration-500 ease-linear w-[10.875rem] h-[6.35rem] "} />
                  <div className={(i === activeIndex ? " bg-opacity-0 " : " bg-opacity-60 ") + ' bg-black absolute  duration-500 ease-linear top-0 left-0 size-full'}>

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
