'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import StepByStepTourDt from '../tour-detail/StepByStepTourDt'
import { cn } from '@/lib/utils'
import index from '../activity'
// import {dataSLides} from './data'
import gsap from 'gsap'
import useStore from '@/app/(store)/store'
import ScrollTrigger from 'gsap/ScrollTrigger'
export default function StepByStep({ dataAcf, dataTourDetail }) {
  // console.log({ checkOpenBookNow });
  const swiperRef = useRef(null)
  const swiper2Ref = useRef(null)
  const [indexSlider, setIndexSlider] = useState(0)
  const dataSLides = dataAcf?.dataSLides || []
  const { setCheckOpenBookNow, checkOpenBookNow, setCheckOpenBookNow2, checkOpenBookNow2 } = useStore(state => state)

  console.log({ checkOpenBookNow });
  console.log({ checkOpenBookNow });

  useEffect(() => {
    if (divRef.current) {
      const tl = gsap.to(divRef.current, {
        scrollTrigger: {
          trigger: divRef.current,
          start: "top",
          end: "50%",
          scrub: true,
          // markers: true,
          pin: true,
        },
        duration: 1,
        ease: "power1.inOut",
      });

      // return () => {
      //   tl.kill();
      //   ScrollTrigger.kill();
      // };
    }
  }, []);

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

  const handleClickDistrict = (index) => {
    const swiper = swiperRef.current
    if (index == -1) {
      setIndexSlider(0)
      swiper.slideTo(0, 500)

    }
    else {
      setIndexSlider(index + 1)
      swiper.slideTo(index + 1, 500)
    }
  }

  const handleNextSlide = () => {
    swiper2Ref.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiper2Ref.current?.slidePrev()
  }

  const handleSlideChange = (swiper) => {
    if (swiper.realIndex < dataSLides?.length) {
      setIndexSlider(swiper.realIndex)
      // if (swiper.realIndex !== 0) {

      setCheckOpenBookNow2(swiper.realIndex)
      // }
    }
    // setIndexSlider(swiper.realIndex)

  }

  const [slidePositions, setSlidePositions] = useState([]);
  const bikeRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.slides.length > 0) {
      const swiperInstance = swiperRef.current;
      const positions = Array.from(swiperInstance.slides).map(slide => slide.offsetTop);
      setSlidePositions(positions);
    }
  }, [dataSLides]);
  useEffect(() => {
    if (bikeRef.current && slidePositions.length > 0 && indexSlider <= dataSLides?.length - 1) {
      bikeRef.current.style.top = `${slidePositions[indexSlider] - 15}px`;
    }
    // if (indexSlider !== 0) {
    //   setCheckOpenBookNow2(indexSlider)
    // }
  }, [indexSlider, slidePositions]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params) {

      if (indexSlider === 0 || indexSlider === dataSLides?.length - 1) {
        setTimeout(() => {

          swiperRef.current.params.mousewheel.releaseOnEdges = true;
          swiperRef.current.update();
        }, 1000)
      } else {
        swiperRef.current.params.mousewheel.releaseOnEdges = false;
        swiperRef.current.update();
      }

    }
  }, [indexSlider]);


  const divRef = useRef(null);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  // check box onsite
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '100px 0px 100px 0px',
        threshold: 1.0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  useEffect(() => {
    const boxSlide = document.querySelector('.box-slides');
    if (boxSlide) {
      boxSlide.style.pointerEvents = isVisible ? 'auto' : 'none';
    }
  }, [isVisible]);
  return (
    <section ref={divRef} className='relative flex w-full  pointer-events-auto h-screen bg-white lg:pl-[2.25rem] xlg:h-fit'>
      {/* map */}
      {/* <ScrollDetector /> */}
      <div data-aos="fade-up"
        data-aos-duration="900"
        className='xmd:hidden w-[33.75rem] flex items-center flex-shrink-0 xlg:w-full xlg:px-[1.41rem]'>
        <Image
          className='w-[33.75rem] h-[42rem] xlg:h-[30.625rem] object-contain xlg:w-full'
          src={indexSlider > dataSLides?.length - 1 ? (dataSLides?.[dataSLides?.length - 1]?.imgStep?.url || '') : (dataSLides?.[indexSlider]?.imgStep?.url || '')}
          alt='map2'
          width={800}
          height={800}
        />
      </div>

      {/* map */}
      <div data-aos="fade-up"
        data-aos-duration="900"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        className='ml-[3rem] flex items-center w-full xlg:hidden pb-[2rem]'>
        <div
          ref={ref}
          className='!overflow-hidden cursor-pointer bg-[#FAFAFA] h-[90vh] w-full rounded-tl-[2rem] rounded-bl-[2rem] shadow-[-206px_319px_106px_0px_rgba(13,48,33,0.00),-132px_204px_97px_0px_rgba(13,48,33,0.01),-50px_-10px_40px_0px_rgba(13,48,33,0.09),-8px_13px_33px_0px_rgba(13,48,33,0.10)] overflow-y-auto relative 
          pt-[2.63rem]
          '>
          {/* pl-[3.19rem] */}
          <div className='pl-[3.19rem] flex items-center'>
            <IconOclock className='size-[1.5rem] mr-[0.37rem]' />
            <span className='text-[1rem] font-bold leading-normal text-greyscale-80'>
              Time
            </span>
            <span className='size-[0.3rem] rounded-full block bg-greyscale-20 ml-[0.7rem] mr-[0.5rem]'></span>
            <span className='text-greyscale-20 text-[1rem] font-normal leading-[1.2] tracking-[0.0125rem]'>
              {dataAcf?.intermediate}
            </span>
          </div>
          <div className='pl-[3.19rem] flex items-center justify-between mt-[0.75rem] pr-[4.81rem]'>
            <h2 className='text-[2rem] font-black leading-[1] font-londrina text-greyscale-80'>
              {dataTourDetail?.title}
            </h2>
            <div className='flex items-center space-x-[1.25rem]'>
              <div className='flex items-center whitespace-nowrap'>
                <span className='text-orange-normal text-[1.5rem] font-bold leading-[1.2] mr-[0.44rem]'>
                  ${dataAcf?.gia?.self_driving}
                </span>
                <span className='block font-normal border-b border-solid text-greyscale-80 border-greyscale-80'>
                  Self - Driving
                </span>
              </div>
              <div className='flex items-center whitespace-nowrap'>
                <span className='text-orange-normal text-[1.5rem] font-bold leading-[1.2] mr-[0.44rem]'>
                  ${dataAcf?.gia?.local_driver}
                </span>
                <span className='block font-normal border-b border-solid text-greyscale-80 border-greyscale-80'>
                  Local driver
                </span>
              </div>
            </div>
          </div>
          <div


            className='w-full h-[70vh] box-slides transition-all duration-300 mt-[2.25rem] relative flex justify-between pr-[4.81rem]'>
            <div className=" absolute top-[-1.5rem] left-[3rem]">
              <span className=' text-[1rem] font-extrabold leading-[1.2] tracking-[0.0125rem] text-greyscale-80 block text-center'>
                Pick up at :
              </span>
              <span className='block text-center mt-[0.25rem] text-[0.75rem] font-normal leading-[1.2] tracking-[0.00375rem]'>
                {dataSLides?.[0]?.district}
              </span>
            </div>
            {/* col right */}
            <Swiper
              direction={'vertical'}
              slidesPerView={'auto'}
              spaceBetween={0}
              // mousewheel={true}
              autoHeight={true}
              slideToClickedSlide={true}
              onSlideChange={handleSlideChange}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper
              }}
              // centeredSlides
              mousewheel={{
                releaseOnEdges: false,
                forceToAxis: true,
                sensitivity: 0,
                threshold: -1000, // Ngưỡng di chuyển chuột (100 pixel)
              }}
              modules={[Mousewheel]}
              className={cn('w-full swiper box-slides !pl-[4.59rem] relative  transition-all duration-500 !mt-5 !mx-0',

                indexSlider > 0 ? '!pt-[10rem] ' : '!pt-[1.5rem]'
              )}
            >

              {dataSLides?.map((item, index) => (
                <SwiperSlide

                  className={cn('w-full flex  h-fit cursor-pointer')}
                  key={index}
                >
                  <div
                    className="flex pointer-events-none space-x-[7.87rem] relative">

                    <div className=" relative w-[2rem]">

                      {/* line */}
                      {dataSLides?.length - 1 !== index && <div className={`h-full bg-[#C5C5C5]/80 absolute z-[5] left-1/2 w-[0.2rem]  transition-all duration-1000`} >
                      </div>}
                      {/* line active */}
                      <div
                        className={cn(`${indexSlider >= index + 1 && indexSlider <= dataSLides?.length - 1 ? 'h-full' : ' h-0'}  absolute z-[5] left-1/2 w-[0.2rem] bg-[#23704D] transition-all duration-1000`,
                        )} ></div>
                      {/* dot */}
                      <div className={`${index <= indexSlider ? 'bg-[#23704D] delay-500' : 'bg-[#C5C5C5]/80'}  size-[0.675rem] rounded-full absolute top-0 left-[37%] z-50 transition-all duration-500`} >
                      </div>
                      {/* position */}
                      {index !== 0 && <div
                        onClick={() => handleClickDistrict(-1)}
                        className='cursor-pointer absolute left-[2rem] top-[-1rem] z-10 flex flex-col'
                      >
                        <IconMarker
                          className='size-[1.5rem]'
                          isActive={index <= indexSlider}
                        />
                        <span className={cn('text-[0.875rem] font-extrabold leading-normal text-greyscale-20 whitespace-nowrap cursor-pointer',

                          index <= indexSlider ? 'text-[#E64827]' : 'text-[#C5C5C5]'
                        )}>
                          {item?.district}
                        </span>
                      </div>}
                    </div>

                    <ItemCardInfo item={item} active={indexSlider === index} />
                  </div>
                </SwiperSlide>
              ))}
              {/* XE MÁY */}
              <SwiperSlide
                ref={bikeRef}
                className=' !absolute  !transition-all !duration-1000 left-[-2rem]'>
                <Image
                  className='  object-contain'
                  src={'/home/motor1.png'}
                  alt='motor'
                  width={30}
                  height={30}
                  quality={95}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section >
  )
}
const IconOclock = ({ className = '' }) => {
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

const ItemCardInfo = ({ item, active }) => {
  return (
    <article className={cn('min-h-[17.875rem] 2xl:min-h-[18.875rem] 3xl:min-h-[20.875rem] 4xl:!min-h-[24.875rem] mb-[2rem] xl:border-[3px] ease-out border-[2px] flex-1 duration-1000 transition-all rounded-[1.5rem] bg-[#F5F5F5] p-[1.88rem] xlg:p-[2rem] xmd:p-[1rem] xlg:rounded-[0.75rem] relative',
      active ? ' border-[#23704D]' : ' border-transparent'
    )}>
      <h3 className='text-[1.25rem] font-extrabold leading-[1.2] text-greyscale-80 xlg:text-[2rem] xmd:text-[1rem] xlg:tracking-[0.0125rem] xmd:w-[14.8125rem] xlg:w-[80%]'>
        {item?.title}
      </h3>
      <div
        className='text-greyscale-50 text-[0.875rem] font-normal leading-[1.2] tracking-[0.00875rem] mt-[1.12rem] xlg:leading-normal xlg:tracking-[0.00219rem xlg:text-[1.5rem] xmd:text-[0.875rem] xmd:mt-[1.12rem] xlg:mt-[1.5rem]'
        dangerouslySetInnerHTML={{ __html: item?.descriptions_text }}
      />
      <div className='lg:hidden rounded-[1.5rem] bg-[#E6E6E6] w-[4.625rem] h-[1.625rem] text-[0.75rem] font-normal leading-[1.2] tracking-[0.00375rem] flex justify-center items-center absolute top-[1rem] right-[1rem] text-greyscale-50 md:w-[8rem] md:h-[2.5rem] md:text-[1.5rem]'>
        ( {item?.distance} )
      </div>
    </article>
  )
}
const IconMarker = ({ className = '', isActive = false }) => {
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
        className=''
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
