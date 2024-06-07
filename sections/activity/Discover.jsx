'use client'
import React, { useRef, useState, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FreeMode, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import useStore from '@/app/(store)/store'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import { useSearchParams, useRouter } from 'next/navigation'
gsap.registerPlugin(ScrollTrigger)

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from '@/components/customCn/sheet'
const data2 = [
  { param: 'Experience', title: 'Experience' },
  { param: 'Food', title: 'Food' },
  { param: 'Treaking', title: 'Treaking' },
  { param: '', title: 'People' },
]

const SheetCp = ({ children, dataMenu, isLearnMore }) => {
  const isMobile = useStore((state) => state.isMobile)
  const [currenImages, setCurrenImages] = useState('')
  const listsImageCurrent = dataMenu.find(
    (l, i) => l?.param === currenImages
  )?.lists_image
  const listsImageMoreCurrent = dataMenu.find(
    (l, i) => l?.param === currenImages)?.lists_more_image
  const router = useRouter()
  const breakpoints = {
    767: {
      spaceBetween: 0,
      slidesPerView: 1.5,
    },
  }
  const scrollToElement = (d) => {
    if (d !== '') {
      setCurrenImages(d)
    } else {
      setCurrenImages('')

    }
  }
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent
        side={'bottom'}
        className='!bg-transparent'
      >
        <div className='  flex flex-col w-full xmd:rounded-tl-xl xmd:rounded-tr-xl xmd:overflow-hidden xmd:w-[23.4375rem] xmd:bg-white xmd:h-[20.4375rem]'>
          <div className=' relative xmd:w-[23.4375rem] xmd:space-x-[2.25rem] flex xmd:justify-center h-16 xmd:h-[4.75rem] '>
            {dataMenu?.map((d, i) => (
              <div
                onClick={() => scrollToElement(d?.param)}
                style={{
                  left: isMobile ? null : `${7 * i}rem`,
                  zIndex: dataMenu?.length - i,
                }}
                className={cn(
                  ` md:absolute group xmd:mt-4 z-1 md:hover:bg-orange-normal cursor-pointer xmd:hover:text-orange-normal hover:text-white duration-300 ease-linear bg-white xmd:text-greyscale-10 text-orange-dark text-[1.5rem] xmd:uppercase xmd:text-[0.875rem] xmd:font-bold activity xmd:shadow-no  font-black 
                xmd:leading-[1.2] leading-[1] flex justify-center items-center md:w-[10.81256rem] md:h-16 shrink-0 md:rounded-tr-2xl`,
                  {
                    'md:pl-[3.5rem] ': i === 1,
                    'md:pl-[8rem] md:pr-[4.5rem]': i === 2,
                    'md:pl-[9.5rem] md:pr-[4rem]': i === 3,
                    'md:bg-orange-normal md:text-white xmd:text-orange-normal':
                      currenImages === d?.param,
                    'shadow-no': isMobile,
                    'shadow-right': !isMobile,
                  },
                )}
              >
                <div className='xmd:flex xmd:flex-col xmd:items-start xmd:gap-y-[0.5rem]'>
                  {d?.label}
                  <div className={((currenImages !== (d?.param)) ? 'bg-transparent w-0' : 'w-full bg-orange-normal') + " md:hidden  h-[0.08rem] ease-linear duration-300 rounded-full  "}></div>
                </div>
              </div>
            ))}
          </div>
          <div className=' inline-flex z-10 justify-end items-center pr-0 pt-[2.4375rem] xmd:pt-[0.4375rem] xmd:pb-1 pb-10 bg-white'>
            <Swiper
              breakpoints={{
                767: {
                  spaceBetween: 0,
                  slidesPerView: 2.5,
                },
              }}
              speed={500}
              slidesPerView={1.2}
              spaceBetween={20}
              className='!pl-10 xmd:!pl-2  !w-full '
              loop={false}
              modules={[FreeMode]}
            >
              {(isLearnMore ? listsImageMoreCurrent : listsImageCurrent)?.map((d, i) => (
                <SwiperSlide key={i} className=' overflow-hidden' >
                  <Image priority alt="ảnh" src={d?.url} width={1500} height={1500} className="xl:w-[98%] object-cover xmd:w-[19.25rem] xmd:h-[14.4375rem] w-[38.0625rem] h-[27.9375rem] rounded-[1.25rem]" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <SheetFooter className={'xmd:hidden'}>
          <SheetClose
            asChild
            className='absolute top-0 cursor-pointer right-5'
          >
            <div className=' flex items-center justify-center rounded-full size-[3.25rem] shrink-0 bg-[rgba(217,217,217,0.20)] backdrop-blur-[2px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18'
                  stroke='#A9A9A9'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
const Video = ({ children, dataMenu }) => {
  return (
    <div className='relative  xmd:w-[19.25rem]  xmd:h-[14.4375rem] w-[26.375rem] h-[17.625rem] group scale-[0.99]  overflow-hidden rounded-xl cursor-pointer'>
      <SheetCp

        dataMenu={dataMenu}
      >
        {children}
        <div className='w-full h-full absolute top-0 left-0 duration-200 transition-all group-hover:bg-black bg-transparent group-hover:bg-opacity-30 z-50'></div>

        <div className=' group/start'>
          <svg
            className='size-[3.125rem] group-hover/start:scale-75 z-[51] duration-500 transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill='none'
          >
            <g clipPath='url(#clip0_8679_8307)'>
              <circle
                className='group-hover/start:fill-orange-normal fill-transparent  duration-500 transition-all'
                cx='25'
                cy='25'
                r='24.375'
                transform='matrix(-1 0 0 1 50 0)'
                stroke='white'
                strokeWidth='1.25'
              />
            </g>
            <defs>
              <clipPath id='clip0_8679_8307'>
                <rect
                  width='50'
                  height='50'
                  rx='25'
                  transform='matrix(-1 0 0 1 50 0)'
                  fill='white'
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className='size-[1.5rem] z-[51] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M19.5 10.6603C20.1667 11.0452 20.1667 12.0074 19.5 12.3923L6 20.1865C5.33333 20.5714 4.5 20.0903 4.5 19.3205L4.5 3.73205C4.5 2.96225 5.33333 2.48112 6 2.86602L19.5 10.6603Z'
              fill='white'
            />
          </svg>
        </div>
      </SheetCp>
    </div>
  )
}
const ImageBig = ({ children }) => {
  return (
    <div className='relative w-[35.6875rem] h-[23.8125rem] group scale-[0.99]  overflow-hidden rounded-xl cursor-pointer'>
      {children}
    </div>
  )
}
const ImageNormal = ({ children }) => {
  return (
    <div className='relative xmd:w-[19.25rem] xmd:h-[14.4375rem] w-[26.375rem] h-[17.625rem] group scale-[0.99]  overflow-hidden rounded-xl cursor-pointer'>
      {children}
    </div>
  )
}
const ImageSmall = ({ children }) => {
  return (
    <div className='relative w-[18.375rem] h-[12.25rem] group scale-[0.99]  overflow-hidden rounded-xl cursor-pointer'>
      {children}
    </div>
  )
}
const Discover = ({ dataDiscover }) => {
  const isMobile = useStore((state) => state.isMobile)
  const [currenImages, setCurrenImages] = useState('')
  const searchParams = useSearchParams()

  const listsImageCurrent = dataDiscover?.lists_tabs?.find(
    (l, i) => l?.param === currenImages,
  )?.lists_image
  const listsImageMoreCurrent = dataDiscover?.lists_tabs?.find(
    (l, i) => l?.param === currenImages,
  )?.lists_more_image
  const imgRef = useRef()
  const scrollRef = useRef()
  const menuRef = useRef()
  const imagesRef = useRef()
  const imgRefMobi = useRef()
  // img mobi
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: 0,
        repeatDelay: 0,
        scrollTrigger: {
          pinSpacing: false,
          trigger: imgRefMobi.current,
          pin: imgRefMobi.current,
          start: '5% 0%',
          end: () => `+=${scrollRef.current.offsetWidth + '500px'}`,
          toggleActions: 'restart reverse reverse reverse',
          // markers: true,
          scrub: 1,
        },
      })
    }, imgRefMobi)
    return () => ctx.revert()
  }, [])
  // img web
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: 0,
        repeatDelay: 0,
        scrollTrigger: {
          pinSpacing: false,
          trigger: imgRef.current,
          pin: imgRef.current,
          start: '0% 0%',
          end: () => `+=${scrollRef.current.offsetWidth} 30%`,
          toggleActions: 'restart reverse reverse reverse',
          // markers: true,
          scrub: 1,
        },
      })
    }, imgRef)
    return () => ctx.revert()
  }, [])
  const scrollToElement = (d) => {
    if (d !== '') {
      setCurrenImages(d)
    } else {
      setCurrenImages('')

    }
    const element = imagesRef.current
    if (element && !isMobile) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 200
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }
  return (
    <section className='relative w-full'>
      <Image
        ref={imgRef}
        priority
        alt='ảnh'
        src={'/imgs/activity/pattern-white.png'}
        width={1600}
        height={1400}
        className='absolute object-cover image xmd:hidden w-full top-0 shrink-0'
      />
      <div className='relative border border-transparent w-full '>
        <Image
          ref={imgRefMobi}
          priority
          alt='ảnh'
          src={'/imgs/activity/mountain.png'}
          width={1600}
          height={1400}
          className='absolute image md:hidden top-[5rem] object-cover'
        />
        <div className='w-full container md:hidden flex justify-center items-center mt-[2.87rem]'>
          <Image
            priority
            alt='ảnh'
            src={'/imgs/activity/sun.png'}
            width={1600}
            height={1400}
            className=' size-[10.5rem] object-cover'
          />
        </div>

        <div
          ref={scrollRef}
          className='w-full'
        >
          <h2 className='xmd:absolute top-[9rem] xmd:ml-[0rem] xxl:ml-[5rem] xmd:text-center xmd:left-1/2 xmd:-translate-x-1/2 md:w-[65.25rem] xmd:w-[21.4375rem] xl:mx-auto h2 xmd:text-[1.5rem] text-green-normal xmd:tracking-[0.00375rem] md:mt-[12.25rem]'>
            {dataDiscover?.main_desc}
          </h2>

          <div ref={menuRef} className=" xmd:mt-[5rem] md:z-[1000] mt-[1.75rem] w-full h-[6.25rem] flex justify-center items-center shrink-0">
            <div className="inline-flex h-[2.0625rem] justify-end items-start space-x-[2.25rem] shrink-0">
              {dataDiscover?.lists_tabs?.map((d, i) => (
                <div
                  onClick={() => scrollToElement(d?.param)}
                  key={i}
                  className='z-10 flex group cursor-pointer flex-col justify-end items-start gap-4'
                >
                  <div
                    className={
                      (currenImages === d?.param
                        ? 'text-orange-normal'
                        : 'text-greyscale-10 ') +
                      ' group-hover:text-orange-normal text-[0.875rem] font-bold leading-[1.2] uppercase ease-linear duration-300'
                    }
                  >
                    {d?.label}
                  </div>
                  <div
                    className={
                      (currenImages === d?.param
                        ? ' w-full bg-orange-normal'
                        : 'bg-transparent w-0') +
                      ' group-hover:bg-orange-normal group-hover:w-full h-[0.08rem] ease-linear duration-300 rounded-full  '
                    }
                  ></div>
                </div>
              ))}
            </div>
          </div>

          <div className='md:hidden w-full'>
            <Swiper
              modules={[Navigation]}
              className=''
              spaceBetween={0}
              initialSlide={0}
              speed={550}
              slidesPerView={1.2}
              loop={false}
            >
              {listsImageCurrent?.map((d, i) => (
                <SwiperSlide className={(i === 0 ? "!pl-[0.7rem]" : "!pl-[0.3rem]") + " !flex  !items-end !justify-end"}>
                  {i === 0 && !isMobile &&
                    <Video
                      setCurrenImages={setCurrenImages}
                      currenImages={currenImages}
                      dataMenu={dataDiscover?.lists_tabs}
                      listsImageCurrent={listsImageCurrent}>
                      <Image priority alt="ảnh" src={d?.url} width={1600} height={1400}
                        className=" !h-full absolute top-0 bottom-0 left-0 object-cover" />
                    </Video>
                  }

                  {i === 0 && !isMobile && (
                    <Video
                      dataMenu={dataDiscover?.lists_tabs}
                      listsImageCurrent={listsImageCurrent}
                    >
                      <Image
                        priority
                        alt='ảnh'
                        src={d?.image}
                        width={1600}
                        height={1400}
                        className=' !h-full absolute top-0 bottom-0 left-0 object-cover'
                      />
                    </Video>
                  )}
                  {i !== 0 && !isMobile && (
                    <ImageNormal>

                      <Image priority alt="ảnh" src={d?.url} width={1600} height={1400}
                        className=" w-full h-full object-cover" />
                    </ImageNormal>)}
                  {isMobile &&
                    <ImageNormal>

                      <Image priority alt="ảnh" src={d?.url} width={1600} height={1400}
                        className=" w-full h-full object-cover" />
                    </ImageNormal>}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div id='acivity_lists_image' ref={imagesRef} className="z-9 md:space-y-[4rem] xmd:mt-[1.75rem] flex flex-col justify-center w-full items-center">

            <div className="mx-auto xmd:hidden md:mt-[2rem] w-[81.5rem] grid grid-cols-2 space-x-[3.81rem] cursor-pointer">
              <div className="space-y-[4.69rem] flex flex-col justify-end items-end">
                <Video dataMenu={dataDiscover?.lists_tabs} listsImageCurrent={listsImageCurrent}>
                  {listsImageCurrent?.[0] && <Image priority alt="ảnh" src={listsImageCurrent[0]?.url} width={1000} height={1000} className=" object-cover group-hover:scale-110 w-full !h-full absolute top-0 bottom-0 left-0 duration-500 transition-all  cursor-pointer " />}
                </Video>
                <ImageBig>
                  {listsImageCurrent?.[1] && <Image priority alt="ảnh" src={listsImageCurrent[1]?.url} width={1000} height={1000} className=" object-cover group-hover:scale-110 w-full h-full duration-500 transition-all  cursor-pointer " />}
                </ImageBig>
                <ImageNormal>
                  {listsImageCurrent?.[2] && <Image priority alt="ảnh" src={listsImageCurrent[2]?.url} width={1000} height={1000} className=" object-cover group-hover:scale-110 w-full h-full duration-500 transition-all  cursor-pointer " />}
                </ImageNormal>
                <ImageBig>
                  {listsImageCurrent?.[3] && <Image priority alt="ảnh" src={listsImageCurrent[3]?.url} width={1000} height={1000} className=" object-cover group-hover:scale-110 w-full h-full duration-500 transition-all  cursor-pointer " />}
                </ImageBig>
                <ImageSmall>
                  {listsImageCurrent?.[4] && <Image priority alt="ảnh" src={listsImageCurrent[4]?.url} width={1000} height={1000} className=" object-cover group-hover:scale-110 w-full h-full duration-500 transition-all  cursor-pointer " />}
                </ImageSmall>
              </div>
              <div className='space-y-[4.62rem] mt-[5.8rem]'>
                <ImageNormal>
                  {listsImageCurrent?.[5] && <Image priority alt="ảnh" src={listsImageCurrent[5]?.url} width={1000} height={1000} className=" object-cover group-hover:scale-110 w-full h-full duration-500 transition-all  cursor-pointer " />}
                </ImageNormal>
                <ImageBig>
                  {listsImageCurrent?.[6] && <Image priority alt="ảnh" src={listsImageCurrent[6]?.url} width={1000} height={1000} className=" object-cover group-hover:scale-110 w-full h-full duration-500 transition-all  cursor-pointer " />}
                </ImageBig>
                <div className='space-x-[4.69rem] flex items-start'>
                  <ImageSmall>
                    {listsImageCurrent?.[7] && <Image priority alt="ảnh" src={listsImageCurrent[7]?.url} width={1000} height={1000} className=" object-cover group-hover:scale-110 w-full h-full duration-500 transition-all  cursor-pointer " />}
                  </ImageSmall>
                  <ImageSmall>
                    {listsImageCurrent?.[8] && <Image priority alt="ảnh" src={listsImageCurrent[8]?.url} width={1000} height={1000} className=" object-cover group-hover:scale-110 w-full h-full duration-500 transition-all  cursor-pointer " />}
                  </ImageSmall>
                </div>
                <ImageBig>
                  {listsImageCurrent?.[9] && <Image priority alt="ảnh" src={listsImageCurrent[9]?.url} width={1000} height={1000} className=" object-cover group-hover:scale-110 w-full h-full duration-500 transition-all  cursor-pointer " />}
                </ImageBig>
                <div className='space-x-[4.69rem] flex items-start'>
                  <ImageSmall>
                    {listsImageCurrent?.[10] && <Image priority alt="ảnh" src={listsImageCurrent[10]?.url} width={1000} height={1000} className=" object-cover group-hover:scale-110 w-full h-full duration-500 transition-all  cursor-pointer " />}
                  </ImageSmall>
                  <ImageSmall>
                    {listsImageCurrent?.[11] && <Image priority alt="ảnh" src={listsImageCurrent[11]?.url} width={1000} height={1000} className=" object-cover group-hover:scale-110 w-full h-full duration-500 transition-all  cursor-pointer " />}
                  </ImageSmall>
                </div>
              </div>
            </div>

            <SheetCp
              isLearnMore={true}
              dataMenu={dataDiscover?.lists_tabs}
              listsImageCurrent={listsImageMoreCurrent}
            >
              <div className='text-[0.875rem] mb-[1rem] hover:bg-orange-hover duration-300 ease-linear hover:text-white text-greyscale-40 font-semibold leading-[1.2] text-greyscaletext-40 uppercase flex h-11 justify-center items-center gap-2 border  border-grey-grey-100 px-5 py-2.5 rounded-lg border-solid'>
                Lear more
              </div>
            </SheetCp>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discover
