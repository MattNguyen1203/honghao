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
      <Image priority alt="ảnh" src={'/imgs/about/nature.jpg'} width={1600} height={1935}
        className=" xmd:hidden absolute z-0 h-full w-full" />
      <div className="absolute xmd:hidden bottom-0 z-1 left-0 w-full h-[139.375rem] shrink-0 bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]"></div>

      <Image priority alt="ảnh" src={'/imgs/about/nature-mobi.jpg'} width={1600} height={1935} className=" md:hidden absolute w-full h-[49.35963rem] shrink-0" />


      <div className='xl:container relative xmd:h-[42.35963rem] md:left-[2rem] h-[100rem] xmd:mt-[6.9rem]'>
        {/* main title */}
        <Image priority alt="ảnh title web" src={'/imgs/about/main_title.png'} width={840} height={355} className="absolute md:left-[3rem]  xl:left-[0rem]  left-[0rem] xmd:hidden top-[9rem] w-[57.44256rem] h-[22.1875rem]" />
        <Image priority alt="ảnh title mobi" src={'/imgs/about/main-title-mobi.png'} width={840} height={355} className=" xmd:ml-[1.5rem] md:hidden w-[19.098rem] h-[7.42925rem]" />
        <div className=' xmd:mt-[1.8rem] xmd:mx-[1rem]  md:absolute flex flex-col md:left-[3.5rem] xl:left-[0rem] left-[0rem] top-[32rem] items-start space-y-[2.0625rem]'>

          <div className=" md:w-[52.3125rem] xmd:ml-[0.5rem] text-white xmd:text-[0.875rem] text-base font-normal leading-[150%] xmd:tracking-[0.00219rem] tracking-[0.005rem]">
            Ha Giang, nestled in the rugged mountains of northern Vietnam, beckons adventurers with its breathtaking scenery and vibrant cultural tapestry. From the towering peaks of the Dong Van Karst Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers an unforgettable journey through some of Vietnam's most awe-inspiring landscapes.
          </div>
          <div className=" xmd:hidden flex items-start xmd:w-full xmd:space-x-[0.5rem] space-x-[1rem]">
            <Button className='xmd:!flex-1 xmd:!w-max xmd:shrink-0' icon >BOOK NOW</Button>
            <Button className='xmd:!flex-1 xmd:!w-max xmd:shrink-0' icon variant='outline_white'>All tour</Button>
          </div>
        </div>

        <Image priority alt="map" src={'/imgs/activity/map.png'} width={9950} height={9950} className="w-[57rem] left-[33%] xmd:hidden h-[82rem] absolute bottom-0" />

        <Image priority alt="map mobi" src={'/imgs/about/map-mobi.png'} width={9950} height={9950} className="absolute bottom-[0.6rem] left-0 md:hidden" />
        {/* 10000 */}
        <div className="absolute w-[4.75rem] h-[6.25rem] left-[-0.2rem] top-[13rem] md:left-[2.27rem] xl:left-[-1.9rem] md:top-[51.5rem]">
          <div className=' relative'>
            <div className=" absolute xmd:top-[11rem] xmd:left-[17.8rem] md:left-[50.5rem] md:top-[3rem] inline-flex flex-col items-center w-[8.75013rem]">
              <svg className='circle xmd:size-[1.8rem] size-[2.25rem] mr-[0.95rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
                <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
              </svg>
            </div>
            <div className="xmd:top-[7.5rem] xmd:left-[9rem]  md:left-[63rem] absolute flex flex-col items-end xmd:space-y-[0.75rem]">
              <h2 className=" text-linear font-tripsans text-[7.25rem] xmd:text-[3.5rem]  not-italic font-bold leading-[100%] uppercase relative">10.000
              </h2>
              <div className="text-white w-fit z-[500] bg-clip-border text-lg not-italic font-bold leading-[120%] flex 
                flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4  backdrop-blur-lg xmd:text-[0.875rem] px-3 py-1.5 rounded-3xl">

                Visitors experience
              </div>
            </div>
          </div>
        </div>
        {/* 13 year */}
        <div className="absolute w-[4.75rem] h-[6.25rem] xmd:left-[-2.6rem] xmd:bottom-[11rem] xl:left-[-3.6rem]  md:left-[-0.2rem] md:top-[65.5rem]">
          <div className=' relative '>
            <div className=" absolute top-[12.5rem] left-[0.5rem] md:left-[30rem] md:top-[7rem] xl:left-[29.4rem] xl:top-[7rem] inline-flex flex-col items-center w-[8.75013rem]">
              <svg className='circle xmd:size-[1.8rem] size-[2.25rem] mr-[0.95rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
                <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
              </svg>
            </div>
            <div className="xmd:top-[4.5rem] left-[3.5rem] top-[4.3rem] absolute flex flex-col items-start xmd:space-y-[0.75rem] ">
              <div className=" text-linear w-max text-[7.25rem] xmd:text-[3.5rem]  not-italic font-bold leading-[100%] uppercase relative">13 year
              </div>
              <div className="text-white w-fit z-[500] bg-clip-border text-lg not-italic font-bold leading-[120%] flex 
                flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4  backdrop-blur-lg  xmd:text-[0.875rem]  px-3 py-1.5 rounded-3xl">

                Experience
              </div>
            </div>




          </div>
        </div>
        <div className="absolute xmd:hidden xl:right-[3rem] md:right-[10rem] xmd:bottom-[9rem] bottom-[10.5rem] md:w-[38.0625rem] text-white xmd:text-left xmd:container text-right text-base xmd:text-[0.875rem] not-italic font-normal leading-[150%] xmd:tracking-[0.00219rem]  tracking-[0.005rem]">
          Embark on an unforgettable journey to Ha Giang, where breathtaking landscapes and vibrant cultures await you. Explore the majestic mountains, winding roads, and terraced rice fields while immersing yourself in the rich traditions of the local ethnic communities. Let our guided tours lead you through this mesmerizing region, filled with authentic experiences and hidden gems waiting to be discovered. Join us in Ha Giang and create memories that will last a lifetime
        </div>
      </div>
    </section>
  )
}

export default Banner
