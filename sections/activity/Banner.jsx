"use client"
import React from 'react'
import useStore from '@/app/(store)/store'
import Image from 'next/image';
import { Button } from '@/components/customCn/button';
import { cn } from '@/lib/utils';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules'
import "swiper/css";
import 'swiper/css/free-mode';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from "@/components/customCn/sheet"
import Breadcrumb from '@/components/breadcrumb';
const data = [
  { title: 'Experience', },
  { title: 'Food', },
  { title: 'Treaking', },
  { title: 'People', },
]

const SheetCp = ({ children }) => {
  const isMobile = useStore((state) => state.isMobile)
  const breakpoints = {
    767: {
      spaceBetween: 0,
      slidesPerView: 1.5
    },
  }
  return (
    <Sheet>
      <SheetTrigger>
        {children}
      </SheetTrigger>
      <SheetContent side={'bottom'} className='!bg-transparent'>
        <div className='  flex flex-col w-full xmd:rounded-tl-xl xmd:rounded-tr-xl xmd:overflow-hidden xmd:w-[23.4375rem] xmd:bg-white xmd:h-[20.4375rem]'>
          <div className=" relative xmd:w-[23.4375rem] xmd:space-x-[2.25rem] flex xmd:justify-center h-16 xmd:h-[4.75rem] ">
            {data?.map((d, i) => (
              <div
                style={{ left: isMobile ? null : `${7 * i}rem`, zIndex: data.length - i }}
                className={cn(` md:absolute group xmd:mt-4 z-1 md:hover:bg-orange-normal cursor-pointer xmd:hover:text-orange-normal hover:text-white duration-300 ease-linear bg-white xmd:text-greyscale-10 text-orange-dark text-[1.5rem] xmd:uppercase xmd:text-[0.875rem] xmd:font-bold activity xmd:shadow-no  font-black 
                xmd:leading-[1.2] leading-[1] flex justify-center items-center md:w-[10.81256rem] md:h-16 shrink-0 md:rounded-tr-2xl`, {
                  'md:pl-[3.5rem] ': i === 1,
                  'md:pl-[8rem] md:pr-[4.5rem]': i === 2,
                  'md:pl-[9.5rem] md:pr-[4rem]': i === 3,
                  'md:bg-orange-normal md:text-white xmd:text-orange-normal': i === 0,
                  'shadow-no': isMobile,
                  'shadow-right': !isMobile
                })}>
                <div className="xmd:flex xmd:flex-col xmd:items-start xmd:gap-y-[0.5rem]">

                  {d?.title}
                  <div className={(i !== 0 ? 'bg-transparent w-0' : 'w-full bg-orange-normal') + " md:hidden  h-[0.08rem] ease-linear duration-300 rounded-full  "}></div>
                </div>
              </div>
            ))}
          </div>
          <div className=" inline-flex z-10 justify-end items-center pr-0 pt-[2.4375rem] xmd:pt-[0.4375rem] xmd:pb-1 pb-10 bg-white">
            <Swiper
              breakpoints={{
                767: {
                  spaceBetween: 0,
                  slidesPerView: 2.5
                },
              }}
              slidesPerView={1.2}
              spaceBetween={20}
              className='!pl-10 xmd:!pl-2  !w-full '
              loop={false}
              modules={[FreeMode]}

            >
              {[0, 0, 0, 0, 0].map((d, i) => (
                <SwiperSlide key={i} className='' >
                  <Image priority alt="ảnh" src={'/imgs/activity/image-popup-banner.png'} width={1000} height={1000} className="xl:w-[98%] xmd:w-[19.25rem] xmd:h-[14.4375rem] w-[38.0625rem] md:h-[27.9375rem] rounded-[1.25rem]" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <SheetFooter className={''}>
          <SheetClose asChild className='absolute cursor-pointer top-0 right-5'>
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

const Banner = () => {

  return (
    <section className='relative xl:h-[100rem] overflow-hidden' >
      <Image priority alt="ảnh" src={'/imgs/activity/nature.png'} width={1600} height={1935} className=" xmd:hidden absolute h-full w-full" />
      <Image priority alt="ảnh" src={'/imgs/activity/nature-mobi.png'} width={1600} height={1935} className=" md:hidden absolute h-full w-full" />

      <div className='xl:container relative xmd:h-[105rem] h-[100rem] xmd:mt-[5.3rem]'>
        {/* main title */}
        <Image priority alt="ảnh title web" src={'/imgs/activity/main_title.png'} width={840} height={355} className="absolute md:left-[3rem]  xl:left-[0rem]  left-[0rem] xmd:hidden top-[9rem] w-[52.3605rem] h-[22.1875rem]" />
        <Image priority alt="ảnh title mobi" src={'/imgs/activity/main-title-mobi.png'} width={840} height={355} className=" left-[5rem] xmd:mx-auto top-[9rem] md:hidden w-[20.9605rem] h-[8.65rem]" />
        <div className="md:hidden"><Breadcrumb /></div>
        <div className=' xmd:mx-[1rem]  md:absolute flex-col md:left-[3.5rem] xl:left-[0rem] left-[0rem] top-[32rem] items-start space-y-[2.0625rem]'>

          <div className=" md:w-[52.3125rem]  text-white xmd:text-[0.875rem] text-base font-normal leading-[150%] xmd:tracking-[0.00219rem] tracking-[0.005rem]">
            Ha Giang, nestled in the rugged mountains of northern Vietnam, beckons adventurers with its breathtaking scenery and vibrant cultural tapestry. From the towering peaks of the Dong Van Karst Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers an unforgettable journey through some of Vietnam's most awe-inspiring landscapes.
          </div>
          <div className=" flex items-start xmd:w-full xmd:space-x-[0.5rem] space-x-[1rem]">
            <Button className='xmd:!flex-1 xmd:!w-max xmd:shrink-0' icon >BOOK NOW</Button>
            <Button className='xmd:!flex-1 xmd:!w-max xmd:shrink-0' icon variant='outline_white'>All tour</Button>
          </div>
        </div>

        <Image priority alt="map" src={'/imgs/activity/map.png'} width={9950} height={9950} className="w-[57rem] left-[35%] xmd:hidden h-[82rem] absolute bottom-0" />

        <Image priority alt="map mobi" src={'/imgs/activity/map-mobi.png'} width={9950} height={9950} className=" mx-auto mt-[3.25rem] h-[55rem] px-[2rem] absolute top-[25.2rem] left-0 md:hidden" />
        {/* <div className="absolute xmd:top-[49.5rem] xmd:left-[3.4rem] w-[4.75rem] h-[6.25rem] xl:right-[31.3rem]  md:right-[38.7rem] top-[43.5rem]">
          <div className='relative border w-fit border-red-500'>
            <div className="inline-flex xmd:absolute left-0 xmd:top-0 relative flex-col items-center mt-[0.8rem]">
              <SheetCp>
                <Image priority alt="ảnh" src={'/imgs/activity/motobike-img-all.png'} width={120} height={200} className="cursor-pointer" />
              </SheetCp>

              <svg className='absolute left-[2.5rem] bottom-[2.5rem] circle size-[1.25rem] mr-[0.95rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
                <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
              </svg>
              <div className="absolute left-[2.5rem] bottom-[4.5rem] text-white bg-orange-normal 
              text-[0.875rem] font-medium leading-[1.2] tracking-[0.00875rem]
              inline-flex justify-center items-center gap-2.5 p-2.5 rounded-[1.25rem]">
                222
              </div>
            </div>
            <div className="left-[5rem] top-[4.5rem] absolute flex flex-col items-start xmd:space-y-[0.625rem] space-y-[1.2rem]">
              <div className=" text-linear text-[6.25rem] not-italic font-bold leading-[100%] uppercase xmd:text-[2.94194rem] relative">Motobike
                tour

              </div>
              <div className="flex md:w-[20.6875rem] items-start content-start gap-2 flex-wrap">
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border 
                xmd:py-[0.4375rem] xmd:px-[1.1875rem] px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  DU GIA
                </button>
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border 
                xmd:py-[0.4375rem] xmd:px-[1.1875rem] px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  DU GIA
                </button>
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border 
                xmd:py-[0.4375rem] xmd:px-[1.1875rem] px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  DU GIA
                </button>
              </div>
            </div>
            <div className="text-white bg-clip-border text-lg xmd:text-[0.52956rem] not-italic font-bold leading-[120%] flex flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4 
            absolute backdrop-blur-lg px-3 xmd:px-[0.353rem] py-1.5 xmd:py-[0.1765rem] rounded-3xl
            xmd:top-[9rem] xmd:left-[13rem] top-[14rem] left-[23rem]">
              Experience
            </div>




          </div>
        </div> */}
        {/* motobike */}

        <div className="absolute w-[4.75rem] h-[6.25rem] xmd:top-[43.2rem] xl:left-[-1rem] left-[3.4rem] top-[43.5rem]">
          <div className=' relative'>
            <div className=" absolute xmd:top-[6.4rem] xmd:left-[-1.5rem] md:left-[50.5rem] md:top-[-1rem] inline-flex flex-col items-center w-[8.75013rem]">
              <SheetCp>
                <Image priority alt="ảnh" src={'/imgs/activity/motobike-img-all.png'} width={120} height={200} className="w-[4.75rem] cursor-pointer h-[4.55rem]" />
              </SheetCp>
              <svg className='circle size-[2.25rem] mr-[0.95rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
                <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
              </svg>
            </div>
            <div className="xmd:top-[10rem] xmd:left-[5.5rem] md:top-[3rem] md:left-[58rem] absolute flex flex-col items-start xmd:space-y-[0.75rem] space-y-[1.2rem]">
              <div className='relative'>
                <div className=" text-linear  text-[6.25rem] not-italic font-bold leading-[100%] uppercase xmd:text-[2.94194rem] relative">
                  Motobike
                  tour
                </div>
                <div className="absolute xmd:bottom-[0.5rem] xmd:left-[8rem] md:bottom-[.9rem] md:left-[17rem] text-white w-fit z-[500] bg-clip-border text-lg not-italic font-bold leading-[120%] flex 
                flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4  backdrop-blur-lg xmd:px-[0.353rem] xmd:text-[0.52956rem] xmd:py-[0.1765rem] px-3 py-1.5 rounded-3xl">

                  Experience
                </div>
              </div>
              <div className="flex xmd:w-[14.6875rem] w-[20.6875rem] items-start content-start gap-2 flex-wrap">
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border 
                xmd:py-[0.4375rem] xmd:px-[1.1875rem] px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  DU GIA
                </button>
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border 
                xmd:py-[0.4375rem] xmd:px-[1.1875rem] px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  DU GIA
                </button>
                <br />
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border 
                xmd:py-[0.4375rem] xmd:px-[1.1875rem] px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  DU GIA
                </button>

              </div>
            </div>
            <div className="absolute xmd:top-[5.6rem] xmd:left-[2.8rem] md:left-[55rem] md:top-[-2rem] text-white bg-orange-normal 
            text-[0.875rem] font-medium leading-[1.2] tracking-[0.00875rem]
            inline-flex justify-center items-center gap-2.5 p-2.5 rounded-[1.25rem]">
              222
            </div>




          </div>
        </div>
        {/* hiking */}
        <div className="absolute w-[4.75rem] h-[6.25rem] xl:left-[-4.1rem]  left-[-0.2rem] top-[63.5rem]">
          <div className=' relative '>
            <div className=" absolute top-[5rem] left-[14.2rem] md:left-[31rem] md:top-[7rem] inline-flex flex-col items-center w-[8.75013rem]">
              <SheetCp>
                <Image priority alt="ảnh" src={'/imgs/activity/motobike-img-all.png'} width={120} height={200} className="w-[4.75rem] cursor-pointer h-[4.55rem]" />
              </SheetCp>
              <svg className='circle size-[2.25rem] mr-[0.95rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
                <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
              </svg>
            </div>
            <div className="xmd:top-[4.5rem] left-[3.5rem] top-[3rem] absolute flex flex-col items-start xmd:space-y-[0.75rem] space-y-[1.2rem]">
              <div>
                <div className=" text-linear  text-[6.25rem] not-italic font-bold leading-[100%] uppercase xmd:text-[2.94194rem] relative">hiking
                </div>
                <div className="text-white w-fit z-[500] bg-clip-border text-lg not-italic font-bold leading-[120%] flex 
                flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4  backdrop-blur-lg xmd:px-[0.353rem] xmd:text-[0.52956rem] xmd:py-[0.1765rem] px-3 py-1.5 rounded-3xl">

                  Experience
                </div>
              </div>
              <div className="flex xmd:w-[14.6875rem] w-[20.6875rem] items-start content-start gap-2 flex-wrap">
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border 
                xmd:py-[0.4375rem] xmd:px-[1.1875rem] px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  DU GIA
                </button>
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border 
                xmd:py-[0.4375rem] xmd:px-[1.1875rem] px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  DU GIA
                </button>
                <br />
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border 
                xmd:py-[0.4375rem] xmd:px-[1.1875rem] px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  DU GIA
                </button>

              </div>
            </div>
            <div className="absolute left-[18.4rem] top-[4.2rem] md:left-[36rem] md:top-[6rem] text-white bg-orange-normal 
            text-[0.875rem] font-medium leading-[1.2] tracking-[0.00875rem]
            inline-flex justify-center items-center gap-2.5 p-2.5 rounded-[1.25rem]">
              222
            </div>




          </div>
        </div>
        <div className="absolute xl:right-[3rem] md:right-[10rem] xmd:bottom-[9rem] bottom-[10.5rem] md:w-[38.0625rem] text-white xmd:text-left xmd:container text-right text-base xmd:text-[0.875rem] not-italic font-normal leading-[150%] xmd:tracking-[0.00219rem]  tracking-[0.005rem]">
          Embark on an unforgettable journey to Ha Giang, where breathtaking landscapes and vibrant cultures await you. Explore the majestic mountains, winding roads, and terraced rice fields while immersing yourself in the rich traditions of the local ethnic communities. Let our guided tours lead you through this mesmerizing region, filled with authentic experiences and hidden gems waiting to be discovered. Join us in Ha Giang and create memories that will last a lifetime
        </div>
      </div>
    </section>
  )
}

export default Banner
