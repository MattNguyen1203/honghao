"use client"
import React, { useState, useRef, useEffect } from 'react'
import useStore from '@/app/(store)/store'
import Image from 'next/image';
import { Button } from '@/components/customCn/button';
import { cn } from '@/lib/utils';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules'
import "swiper/css";
import 'swiper/css/free-mode';
import SlideVideoTours from '@/components/slide-video-tour';
import Breadcrumb from '@/components/breadcrumb';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose
} from "@/components/customCn/dialog"

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from "@/components/customCn/sheet"
import Link from 'next/link';
const data1 = [
  { title: 'Experience', },
  { title: 'Food', },
  { title: 'Treaking', },
  { title: 'People', },
]
const DialogCp = ({ children, data }) => {
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
    <Dialog className='Dialogclass '>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className=''>
        <SlideVideoTours data={data?.lists_image} />
        <DialogClose className='absolute top-[0rem] -right-[4rem]'>
          <div className="w-[3.25rem] rounded-full flex items-center justify-center h-[3.25rem] shrink-0 bg-[rgba(217,217,217,0.40)] backdrop-blur-[2px]">
            <svg className='size-[1.5rem]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

const SheetCp = ({ children, dataMoto }) => {
  const isMobile = useStore((state) => state.isMobile)
  const breakpoints = {
    767: {
      spaceBetween: 0,
      slidesPerView: 1.5
    },
  }
  console.log({ isMobile })
  return (
    <Sheet>
      <SheetTrigger>
        {children}
      </SheetTrigger>
      <SheetContent side={'bottom'} className='!bg-transparent'>
        <div className='  flex flex-col w-full xmd:justify-center xmd:rounded-tl-xl xmd:rounded-tr-xl xmd:overflow-hidden xmd:w-[23.4375rem] xmd:bg-white xmd:h-[17.0625rem]'>
          <div className=" inline-flex z-10 justify-end items-center pr-0 pt-[2.4375rem] xmd:pt-[0.4375rem] xmd:pb-1 pb-10 bg-white">
            <Swiper
              breakpoints={{
                767: {
                  spaceBetween: 0,
                  slidesPerView: 2.5
                },
              }}
              speed={500}
              slidesPerView={1.2}
              spaceBetween={30}
              className='!pl-10 xmd:!pl-4  !w-full '
              loop={false}
              modules={[FreeMode]}

            >
              {[0, 0, 0, 0, 0].map((d, i) => (
                <SwiperSlide key={i} className=' overflow-hidden' >
                  <Image priority alt="ảnh" src={'/imgs/activity/image-popup-banner.png'} width={1500} height={1500} className="xl:w-[98%] object-cover xmd:w-[19.25rem] xmd:h-[14.4375rem] w-[38.0625rem] h-[27.9375rem] rounded-[1.25rem]" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <SheetFooter className={'xmd:hidden'}>
          <SheetClose asChild className='absolute top-0 cursor-pointer right-5'>
            <div className=" flex items-center justify-center rounded-full size-[3.25rem] shrink-0 bg-[rgba(217,217,217,0.20)] backdrop-blur-[2px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
const Banner = ({ dataBaner, dataBanerMobi }) => {
  const dataMoto = dataBaner?.motobike
  const dataHiking = dataBaner?.hiking
  return (
    <section className='relative xl:h-[100rem] overflow-hidden' >
      <Image priority alt="ảnh" src={dataBaner?.image} width={1600} height={1935} className="z-[3] xmd:hidden absolute h-full w-full" />
      <div className="absolute bottom-0 z-[5] left-0 w-full h-[139.375rem] shrink-0 bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]"></div>
      <Image priority alt="ảnh" src={dataBanerMobi?.image} width={1600} height={1935} className=" md:hidden absolute h-full w-full" />
      <Image priority alt="ảnh" src={'/imgs/activity/islus.png'} width={1600} height={400} className="z-[6] xmd:hidden absolute bottom-0 w-full h-[24.47356rem]" />
      <Image priority alt="ảnh" src={'/imgs/activity/islus-mobi.png'} width={1600} height={400} className="z-[6] md:hidden absolute bottom-0 w-full h-[8.73438rem]" />
      <div className='container relative z-[7] xmd:h-[105rem] h-[100rem] xmd:mt-[5.3rem]'>
        <Image priority alt="ảnh title web" src={dataBaner?.image_title_big} width={840} height={355} className="  xmd:top-[9rem] xmd:w-[20.9605rem] xmd:h-[8.65rem] md:absolute md:left-[3rem]  xl:left-[0rem] top-[9rem] w-[52.3605rem] h-[22.1875rem]" />
        <div className="md:hidden"><Breadcrumb /></div>
        <div className=' md:absolute flex-col md:left-[3.5rem] xl:left-[0rem] left-[0rem] top-[32rem] items-start space-y-[2.0625rem]'>

          <div className="md:w-[52.3125rem] text-white xmd:text-[0.875rem] text-base font-normal leading-[150%] xmd:tracking-0.00219 tracking-[0.005rem]">
            Ha Giang, nestled in the rugged mountains of northern Vietnam, beckons adventurers with its breathtaking scenery and vibrant cultural tapestry. From the towering peaks of the Dong Van Karst Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers an unforgettable journey through some of Vietnam's most awe-inspiring landscapes.
          </div>
          <div className=" flex items-start xmd:w-full xmd:space-x-[0.5rem] space-x-[1rem]">
            <Button className='xmd:!flex-1 xmd:!w-max xmd:shrink-0' icon >BOOK NOW</Button>
            <Button className='xmd:!flex-1 xmd:!w-max xmd:shrink-0' icon variant='outline_white'>All tour</Button>
          </div>
        </div>

        <Image priority alt="map" src={'/imgs/activity/map.png'} width={9950} height={9950} className="w-[57rem] left-[35%] xmd:hidden h-[82rem] absolute bottom-0" />

        <Image priority alt="map mobi" src={'/imgs/activity/map-mobi.png'} width={9950} height={9950} className=" mx-auto mt-[3.25rem] h-[55rem] px-[2rem] absolute top-[25.2rem] left-0 md:hidden" />
        {/* motobike */}

        <div className="absolute w-[4.75rem] h-[6.25rem] top-[43.5rem] xmd:top-[43.2rem] xl:left-[-1rem] md:left-[-1.05rem] left-[2.8rem] ">
          <div className=' relative'>
            <div className=" absolute xmd:top-[6.4rem] xmd:left-[-1.5rem] md:left-[50.5rem] md:top-[-1rem] inline-flex flex-col items-center space-y-[0] w-[8.75013rem]">
              <div className='xmd:hidden'>
                <DialogCp data={dataMoto}>
                  <Image priority alt="ảnh" src={'/imgs/activity/motobike-img-all.png'} width={120} height={200} className="w-[4.75rem] cursor-pointer h-[4.55rem]" />
                </DialogCp>
              </div>
              <div className='md:hidden'>
                <SheetCp data={dataMoto}>
                  <Image priority alt="ảnh" src={'/imgs/activity/motobike-img-all.png'} width={120} height={200} className="w-[4.75rem] cursor-pointer h-[4.55rem]" />
                </SheetCp>
              </div>
              <svg className='circle size-[2.25rem] mr-[0.95rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
                <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
              </svg>
            </div>
            <div className="xmd:top-[10rem] xmd:left-[5.5rem] md:top-[3rem] md:left-[58rem] absolute flex flex-col items-start xmd:space-y-[0.75rem] space-y-[1.2rem]">
              <div className='relative'>
                <div className=" text-linear  text-[6.25rem] not-italic font-bold leading-[100%] uppercase xmd:text-[2.94194rem] relative">
                  {dataMoto?.label}
                </div>
                <div className="absolute xmd:bottom-[0.5rem] xmd:left-[8rem] md:bottom-[.9rem] md:left-[17rem] text-white w-fit bg-clip-border text-lg not-italic font-bold leading-[120%] flex 
                flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4  backdrop-blur-lg xmd:px-[0.353rem] xmd:text-[0.52956rem] xmd:py-[0.1765rem] px-3 py-1.5 rounded-3xl">

                  Experience
                </div>
              </div>
              <div className="flex xmd:w-[14.6875rem] w-[20.6875rem] items-start content-start gap-2 flex-wrap">
                {dataMoto?.lists_place?.map((d, i) => (
                  <Link href={`/${d?.link}`} key={i} className="">
                    <button className="hover:bg-orange-normal-hover duration-300 transition-all text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border 
                xmd:py-[0.4375rem] xmd:px-[1.1875rem] px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                      {d?.name_place}
                    </button>
                  </Link>
                ))}



              </div>
            </div>
            <div className="absolute xmd:top-[5.6rem] xmd:left-[2.8rem] md:left-[55rem] md:top-[-2rem] text-white bg-orange-normal 
            text-[0.875rem] font-medium leading-[1.2] tracking-[0.00875rem]
            inline-flex justify-center items-center gap-2.5 px-2.5 py-1.5 rounded-[1.25rem]">
              {dataMoto?.lists_image?.length}
            </div>




          </div>
        </div>
        {/* hiking */}
        <div className="absolute w-[4.75rem] h-[6.25rem] xl:left-[-4.1rem] md:left-[-4.1rem]  left-[-0.5rem] top-[63.5rem]">
          <div className='relative '>
            <div className=" absolute top-[5rem] left-[14.2rem] md:left-[31rem] md:top-[7rem] inline-flex flex-col items-center w-[8.75013rem]">
              <div className='xmd:hidden'>
                <DialogCp data={dataMoto}>
                  <Image priority alt="ảnh" src={'/imgs/activity/motobike-img-all.png'} width={120} height={200} className="w-[4.75rem] cursor-pointer h-[4.55rem]" />
                </DialogCp>
              </div>
              <div className='md:hidden'>
                <SheetCp data={dataMoto}>
                  <Image priority alt="ảnh" src={'/imgs/activity/motobike-img-all.png'} width={120} height={200} className="w-[4.75rem] cursor-pointer h-[4.55rem]" />
                </SheetCp>
              </div>
              <svg className='circle size-[2.25rem] mr-[0.95rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
                <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
              </svg>
            </div>
            <div className="xmd:top-[4.5rem] left-[3.5rem] top-[3rem] absolute flex flex-col items-start xmd:space-y-[0.75rem] space-y-[1.2rem]">
              <div>
                <div className=" text-linear  text-[6.25rem] not-italic font-bold leading-[100%] uppercase xmd:text-[2.94194rem] relative">
                  {dataHiking?.label}
                </div>
                <div className="text-white w-fit z-[500] bg-clip-border text-lg not-italic font-bold leading-[120%] flex 
                flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4  backdrop-blur-lg xmd:px-[0.353rem] xmd:text-[0.52956rem] xmd:py-[0.1765rem] px-3 py-1.5 rounded-3xl">

                  Experience
                </div>
              </div>
              <div className="flex xmd:w-[14.6875rem] w-[20.6875rem] items-start content-start gap-2 flex-wrap">
                {dataHiking?.lists_place?.map((d, i) => (
                  <Link href={`/${d?.link}`} key={i} className="">
                    <button className="hover:bg-orange-normal-hover duration-300 transition-all text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border 
                xmd:py-[0.4375rem] xmd:px-[1.1875rem] px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                      {d?.name_place}
                    </button>
                  </Link>
                ))}



              </div>
            </div>
            <div className="absolute left-[18.4rem] top-[4.2rem] md:left-[36rem] md:top-[6rem] text-white bg-orange-normal 
            text-[0.875rem] font-medium leading-[1.2] tracking-[0.00875rem]
            inline-flex justify-center items-center gap-2.5 px-2.5 py-1.5 rounded-[1.25rem]">
              {dataHiking?.lists_image?.length}
            </div>




          </div>
        </div>
        <div className="absolute xl:right-[3rem] md:right-[10rem] xmd:bottom-[9rem] bottom-[10.5rem] md:w-[38.0625rem] text-white xmd:text-left xmd:container text-right text-base xmd:text-[0.875rem] not-italic font-normal leading-[150%] xmd:tracking-0.00219  tracking-[0.005rem]">
          {dataBaner?.desc_text_bottom}
        </div>
      </div>
    </section>
  )
}

export default Banner
