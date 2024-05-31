'use client'
import React, {useRef, useState, useEffect} from 'react'
import {
  FreeMode,
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  Thumbs,
  EffectFade,
} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import useStore from '@/app/(store)/store'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import {cn} from '@/lib/utils'
const SlideVideoTours = ({type, data, mainImage}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(3)
  const isMobile = useStore((state) => state.isMobile)
  const mainSwiper = useRef()
  const subSwiper = useRef(null)
  const checkIsBanner = type === 'banner'

  const div1Ref = useRef(null);
  const div2Refs = useRef([]);
  const div3Ref = useRef(null);
  const [distance, setDistance] = useState({ top: 0, left: 0 });

  const handleSlideChange = (swiper) => {
    const newIndex = swiper?.realIndex
    setActiveIndex(newIndex)
  }
  const handleSlide = (index) => {
    const div3 = div3Ref.current;
    const div1 = div1Ref.current;
    const div2 = div2Refs.current[index];
    if (div1 && div2 && div3) {
      const rect1 = div1.getBoundingClientRect();
      const rect2 = div2.getBoundingClientRect();

      const distanceTop = (rect2.top - rect1.top);
      const distanceLeft = (rect2.left - rect1.left);
      setDistance({ top: distanceTop, left: distanceLeft });
      div3.style.top = window.innerWidth < 1024 ? `${distanceTop +10}px` : `${distanceTop + 20}px`;
      // div3.style.left = `${distanceLeft - 100}px`;
    }
    setActiveIndex(index)
  }
  useEffect(() => {
    mainSwiper?.current?.slideTo(activeIndex)
  }, [activeIndex])



  const handleMouseLeave = () => {
    const div3 = div3Ref.current;
    if (div3) {
      div3.style.top = '20%';
    }
  };



  return (
    <div
      ref={div1Ref}
      className={cn(
        'xmd:w-[23.40656rem] xmd:h-fit relative w-[86.875rem] h-[44.75rem] bg-white flex xmd:flex-col justify-center items-center rounded-3xl',
        checkIsBanner ? 'w-full h-[43.75rem] rounded-none' : '',
      )}
    >
      <svg
        ref={div3Ref}
        className={cn(

          ' xmd:hidden activity arrowfr size-[3.3rem] duration-300 transition-all  absolute right-[17rem] z-[100] -translate-y-1/2',
          checkIsBanner ? ' top-[55%]' : ' top-[20%]',
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
        <>
          <div className='xmd:hidden absolute top-0 left-0 size-full bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]'></div>
          <Image
            priority
            alt='ảnh'
            src={mainImage}
            width={1500}
            height={1500}
            className={cn(
              ' w-[83.875rem] rounded-[0.75rem] h-[41.75rem] object-cover',
              checkIsBanner
                ? 'w-full h-[43.75rem] xmd:w-[23.40656rem] xmd:h-[20.93544rem] rounded-none'
                : '',
            )}
          />
        </>
      )}
      {!checkIsBanner && (
        <Swiper
          ref={mainSwiper}
          onBeforeInit={(swiper) => {
            mainSwiper.current = swiper
          }}
          loop={true}
          effect={'fade'}
          spaceBetween={10}
          freemode={true}
          onSlidesChange={handleSlideChange}
          navigation={false}
          thumbs={{swiper: thumbsSwiper}}
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
                    ' w-[83.875rem] rounded-[0.75rem] h-[41.75rem] object-cover ',
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
      <div
        onMouseLeave={handleMouseLeave}
        className='md:absolute md:w-[10.875rem] xmd:mt-[0.2rem] z-[80] xmd:w-[23.4375rem] xmd:h-[6.35rem] right-[6rem] top-1/2 -translate-y-1/2'>
        <Swiper
          ref={subSwiper}
          onBeforeInit={(swiper) => {
            subSwiper.current = swiper
          }}
          breakpoints={{
            767: {
              direction: 'vertical',
              slidesPerView: 6,
            },
          }}
          onSlideChange={handleSlideChange}
          allowTouchMove={checkIsBanner ? false : true}
          direction={'horizontal'}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          centeredSlides={checkIsBanner ? true : false}
          mousewheel={true}
          speed={checkIsBanner ? 1500 : 1500}
          // initialSlide={3}
          slidesPerView={2.12}
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs, Autoplay, Mousewheel]}
          className={cn(
            'slide-video-tour mySwiper',
            checkIsBanner
              ? 'md:h-[43.75rem] pointer-events-none !pt-[3.3rem]'
              : 'h-[41.75rem] ',
          )}
          id='swiper_discover'
        >
          {data?.map((d, i) => {
            const img1 = d?.url
            return (
              <SwiperSlide
                key={i}
                className={cn(' ', checkIsBanner ? '' : 'cursor-pointer')}
              >
                <div
                  ref={el => div2Refs.current[i] = el}
                  onClick={() => handleSlide(i)}
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
                      '  rounded-[0.75rem] duration-500 ease-linear size-full object-cover',
                    )}
                  />
                  <div
                    className={
                      (i === activeIndex
                        ? ' bg-opacity-0'
                        : ' bg-opacity-40 ') +
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
