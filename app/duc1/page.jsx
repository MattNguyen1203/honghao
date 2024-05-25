'use client'

import {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Mousewheel} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import {dataSLides} from './_components/data'

export default function page() {
  const swiperRef = useRef(null)
  const swiper2Ref = useRef(null)

  const [indexSlider, setIndexSlider] = useState(0)
  // const [indexSlider2, setIndexSlider2] = useState(0)

  useEffect(() => {
    const medium = Math.ceil(dataSLides?.length / 2)
    if (swiperRef.current) {
      const swiper = swiperRef.current
      swiper.on('slideChangeTransitionEnd', () => {
        const previousIndex = swiper.previousIndex
        const currentIndex = swiper.activeIndex
        // handle down
        if (previousIndex < currentIndex && currentIndex >= medium) {
          handleNextSlide()
        }
        // handle up
        if (previousIndex > currentIndex && currentIndex >= medium - 1) {
          handlePrevSlide()
        }
      })
    }
  }, [])

  const handleNextSlide = () => {
    swiper2Ref.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiper2Ref.current?.slidePrev()
  }

  const handleSlideChange = (swiper) => {
    if (swiper.realIndex < dataSLides?.length) {
      setIndexSlider(swiper.realIndex)
    }
  }

  // const handleSlideChange2 = (swiper) => {
  //   setIndexSlider2(swiper.realIndex)
  // }

  const handleClickDistrict = (index) => {
    const swiper = swiperRef.current
    swiper.slideTo(index + 1, 500)
  }

  return (
    <>
      <section className='h-[500px] bg-black'></section>
      <div className='w-full h-fit bg-black px-[0.75rem]'>
        <div className='flex items-center'>
          <IconOclock className='size-[1.5rem] mr-[0.37rem] md:size-[2.5rem]' />
          <span className='text-[1rem] font-bold leading-normal text-white md:text-[2rem]'>
            Time
          </span>
          <span className='size-[0.2rem] md:size-[0.4rem] rounded-full block bg-greyscale-5 ml-[0.7rem] mr-[0.5rem]'></span>
          <span className='text-greyscale-5 text-[1rem] font-normal leading-[1.2] tracking-[0.0125rem] md:text-[2rem]'>
            3 Days / 4 Night
          </span>
        </div>
        <h2 className='font-black text-white mt-[0.75rem] mb-[0.65rem] tracking-[0.00375rem] text-[1.5rem] md:text-[3rem] md:my-[1rem]'>
          Schedule tour: 3 Days 4 Nights
        </h2>
        <div className='flex items-center space-x-[1.25rem]'>
          <div className='flex items-center whitespace-nowrap'>
            <span className='text-orange-normal mr-[0.44rem] text-[1.5rem] font-medium leading-[1.2] md:text-[2.5rem]'>
              $169
            </span>
            <span className='block font-normal text-white border-b border-solid border-b-white leading-normal tracking-[0.00219rem] text-[0.875rem] md:text-[1.875rem]'>
              Self - Driving
            </span>
          </div>
          <div className='flex items-center whitespace-nowrap'>
            <span className='text-orange-normal mr-[0.44rem] text-[1.5rem] font-medium leading-[1.2] md:text-[2.5rem]'>
              $199
            </span>
            <span className='block font-normal text-white border-b border-solid border-b-white leading-normal tracking-[0.00219rem] text-[0.875rem] md:text-[1.875rem]'>
              Local driver
            </span>
          </div>
        </div>
        <div className='flex flex-col md:space-y-[2rem] space-y-[1rem] mt-[1.5rem]'>
          {dataSLides?.map((item, index) => (
            <ItemCardInfo
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
      <section className='relative flex w-full h-screen bg-white lg:pl-[2.25rem] xlg:h-fit'>
        {/* map */}
        <div className='w-[33.75rem] flex items-center flex-shrink-0 xlg:w-full xlg:px-[1.41rem]'>
          <Image
            className='w-[33.75rem] h-[42rem] xlg:h-[30.625rem] object-contain xlg:w-full'
            src={dataSLides?.[indexSlider]?.imgStep}
            alt='map2'
            width={300}
            height={400}
          />
        </div>
        {/* map */}
        <div className='ml-[3rem] flex items-center w-full xlg:hidden'>
          <div className='bg-[#FAFAFA] h-[90vh] w-full rounded-tl-[2rem] rounded-bl-[2rem] shadow-[-206px_319px_106px_0px_rgba(13,48,33,0.00),-132px_204px_97px_0px_rgba(13,48,33,0.01),-33px_51px_61px_0px_rgba(13,48,33,0.09),-8px_13px_33px_0px_rgba(13,48,33,0.10)] overflow-y-auto relative pt-[2.63rem] pl-[3.19rem]'>
            <div className='flex items-center'>
              <IconOclock className='size-[1.5rem] mr-[0.37rem]' />
              <span className='text-[1rem] font-bold leading-normal text-greyscale-80'>
                Time
              </span>
              <span className='size-[0.3rem] rounded-full block bg-greyscale-20 ml-[0.7rem] mr-[0.5rem]'></span>
              <span className='text-greyscale-20 text-[1rem] font-normal leading-[1.2] tracking-[0.0125rem]'>
                3 Days / 4 Night
              </span>
            </div>
            <div className='flex items-center justify-between mt-[0.75rem] pr-[4.81rem]'>
              <h2 className='text-[2rem] font-black leading-[1] font-londrina text-greyscale-80'>
                Schedule tour: 3 Days 4 Nights
              </h2>
              <div className='flex items-center space-x-[1.25rem]'>
                <div className='flex items-center whitespace-nowrap'>
                  <span className='text-orange-normal text-[1.5rem] font-bold leading-[1.2] mr-[0.44rem]'>
                    $169
                  </span>
                  <span className='block font-normal border-b border-solid text-greyscale-80 border-greyscale-80'>
                    Self - Driving
                  </span>
                </div>
                <div className='flex items-center whitespace-nowrap'>
                  <span className='text-orange-normal text-[1.5rem] font-bold leading-[1.2] mr-[0.44rem]'>
                    $199
                  </span>
                  <span className='block font-normal border-b border-solid text-greyscale-80 border-greyscale-80'>
                    Local driver
                  </span>
                </div>
              </div>
            </div>
            <div className='w-full h-[65vh] mt-[2.25rem] flex justify-between pr-[4.81rem]'>
              {/* col left */}
              <div className='w-[8.2rem] relative h-full mr-[2.19rem] flex-shrink-0'>
                <div className='absolute top-0 right-[-1.78rem] w-[14.32rem] h-full'>
                  <span className='text-[1rem] font-extrabold leading-[1.2] tracking-[0.0125rem] text-greyscale-80 block text-center'>
                    Pick up at :
                  </span>
                  <span className='block text-center mt-[0.25rem] text-[0.75rem] font-normal leading-[1.2] tracking-[0.00375rem]'>
                    {dataSLides?.[0]?.district}
                  </span>
                  <div className='flex mt-[0.81rem] h-full overflow-hidden relative'>
                    <Swiper
                      direction={'vertical'}
                      slidesPerView={'auto'}
                      spaceBetween={0}
                      mousewheel={true}
                      autoHeight={true}
                      slideToClickedSlide={true}
                      // onSlideChange={handleSlideChange2}
                      onBeforeInit={(swiper) => {
                        swiper2Ref.current = swiper
                      }}
                      modules={[Mousewheel]}
                      className='size-full'
                    >
                      {Array(dataSLides?.length - 1)
                        .fill(0)
                        .map((_, index) => (
                          <SwiperSlide
                            className='w-full h-[9.125rem]'
                            key={index}
                          >
                            <div className='flex justify-center'>
                              <div className='h-[9.125rem] w-[2px] bg-[#C5C5C5]/50 relative'>
                                <div
                                  className={`${
                                    indexSlider >= index + 1
                                      ? 'bg-[#23704D] delay-500'
                                      : 'bg-[#C5C5C5]/80'
                                  }  size-[0.375rem] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 z-10 transition-all duration-200`}
                                ></div>
                                <div
                                  className={`${
                                    indexSlider >= index + 1 ? 'h-full' : 'h-0'
                                  } absolute top-0 z-[5] left-0 w-full bg-[#23704D] transition-all duration-500`}
                                ></div>
                                <div
                                  onClick={() => handleClickDistrict(index)}
                                  className='cursor-pointer absolute -right-[0.63rem] bottom-0 translate-y-1/2 z-10 flex flex-col translate-x-full'
                                >
                                  <IconMarker
                                    className='size-[1.5rem]'
                                    isActive={indexSlider >= index + 1}
                                  />
                                  <span className='text-[0.875rem] font-extrabold leading-normal text-greyscale-20 whitespace-nowrap cursor-pointer'>
                                    {dataSLides?.[index + 1]?.district}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      <SwiperSlide className='w-full h-[9.125rem]'>
                        <div className='flex justify-center item_end'>
                          <div className='h-[9.125rem] w-[2px]relative'></div>
                        </div>
                        <div
                          style={{
                            transform: `translate(-150%,-${
                              (dataSLides?.length - 1 - indexSlider) * 9.125
                            }rem)`,
                          }}
                          className='absolute top-0 z-20 transition-all duration-500 size-fit left-1/2 '
                        >
                          <Image
                            className='object-contain'
                            src={'/home/motor1.png'}
                            alt='motor'
                            width={30}
                            height={30}
                            quality={95}
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              {/* col right */}
              <Swiper
                direction={'vertical'}
                slidesPerView={'auto'}
                spaceBetween={0}
                mousewheel={true}
                autoHeight={true}
                slideToClickedSlide={true}
                onSlideChange={handleSlideChange}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper
                }}
                modules={[Mousewheel]}
                className='w-full !h-[65vh] !mx-0'
              >
                {dataSLides?.map((item, index) => (
                  <SwiperSlide
                    className='w-full h-fit pb-[1.62rem] cursor-pointer'
                    key={index}
                  >
                    <ItemCardInfo item={item} />
                  </SwiperSlide>
                ))}
                <SwiperSlide className='w-full min-h-[10.875rem] pointer-events-none'></SwiperSlide>
                <SwiperSlide className='w-full min-h-[10.875rem] pointer-events-none'></SwiperSlide>
                <SwiperSlide className='w-full min-h-[10.875rem] pointer-events-none'></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className='h-screen bg-black'></section>
    </>
  )
}
const IconOclock = ({className = ''}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
    >
      <path
        d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
        fill='#E64827'
      />
      <path
        d='M15.7106 15.9298C15.5806 15.9298 15.4506 15.8998 15.3306 15.8198L12.2306 13.9698C11.4606 13.5098 10.8906 12.4998 10.8906 11.6098V7.50977C10.8906 7.09977 11.2306 6.75977 11.6406 6.75977C12.0506 6.75977 12.3906 7.09977 12.3906 7.50977V11.6098C12.3906 11.9698 12.6906 12.4998 13.0006 12.6798L16.1006 14.5298C16.4606 14.7398 16.5706 15.1998 16.3606 15.5598C16.2106 15.7998 15.9606 15.9298 15.7106 15.9298Z'
        fill='white'
      />
    </svg>
  )
}

const ItemCardInfo = ({item}) => {
  return (
    <article className='min-h-[10.875rem] rounded-[1.5rem] bg-[#F5F5F5] p-[1.88rem] xlg:p-[2rem] xmd:p-[1rem] xlg:rounded-[0.75rem] relative'>
      <h3 className='text-[1.25rem] font-extrabold leading-[1.2] text-greyscale-80 xlg:text-[2rem] xmd:text-[1rem] xlg:tracking-[0.0125rem] xmd:w-[14.8125rem] xlg:w-[80%]'>
        {item?.title}
      </h3>
      {item?.descriptions?.map((des, idx) => (
        <div
          className='text-greyscale-50 text-[0.875rem] font-normal leading-[1.2] tracking-[0.00875rem] mt-[1.12rem] xlg:leading-normal xlg:tracking-[0.00219rem xlg:text-[1.5rem] xmd:text-[0.875rem] xmd:mt-[1.12rem] xlg:mt-[1.5rem]'
          key={idx}
          dangerouslySetInnerHTML={{__html: des}}
        />
      ))}
      <div className='lg:hidden rounded-[1.5rem] bg-[#E6E6E6] w-[4.625rem] h-[1.625rem] text-[0.75rem] font-normal leading-[1.2] tracking-[0.00375rem] flex justify-center items-center absolute top-[1rem] right-[1rem] text-greyscale-50 md:w-[8rem] md:h-[2.5rem] md:text-[1.5rem]'>
        ( {item?.distance} )
      </div>
    </article>
  )
}
const IconMarker = ({className = '', isActive = false}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
    >
      <path
        d='M20.6211 8.45C19.5711 3.83 15.5411 1.75 12.0011 1.75C12.0011 1.75 12.0011 1.75 11.9911 1.75C8.46107 1.75 4.42107 3.82 3.37107 8.44C2.20107 13.6 5.36107 17.97 8.22107 20.72C9.28107 21.74 10.6411 22.25 12.0011 22.25C13.3611 22.25 14.7211 21.74 15.7711 20.72C18.6311 17.97 21.7911 13.61 20.6211 8.45Z'
        fill={isActive ? '#E64827' : '#C5C5C5'}
      />
      <path
        d='M12.0016 13.4602C13.7413 13.4602 15.1516 12.0499 15.1516 10.3102C15.1516 8.57046 13.7413 7.16016 12.0016 7.16016C10.2619 7.16016 8.85156 8.57046 8.85156 10.3102C8.85156 12.0499 10.2619 13.4602 12.0016 13.4602Z'
        fill='white'
      />
    </svg>
  )
}
