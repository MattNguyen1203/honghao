"use client"
import React from 'react'

import Image from 'next/image';
import { Button } from '@/components/button';
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
} from "@/components/sheet"
import Breadcrumb from '@/components/breadcrumb';

const Banner = () => {
  const data = [
    { title: 'Experience', },
    { title: 'Food', },
    { title: 'Treaking', },
    { title: 'People', },
  ]
  const src = "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100"
  return (
    <section className='bd relative xl:h-[100rem]' >
      <Image priority alt="ảnh" src={'/activity/nature.png'} width={1600} height={1935} className="object-cover xmd:hidden absolute h-full w-full" />
      <Image priority alt="ảnh" src={'/activity/nature-mobi.png'} width={1600} height={1935} className=" md:hidden absolute h-full w-full" />

      <div className='xl:container relative h-[100rem] xmd:mt-[3.3rem]'>
        {/* main title */}
        <Image priority alt="ảnh title web" src={'/activity/main_title.png'} width={840} height={355} className="absolute left-[5rem] xmd:hidden top-[9rem] w-[52.3605rem] h-[22.1875rem]" />
        <Image priority alt="ảnh title mobi" src={'/activity/main-title-mobi.png'} width={840} height={355} className=" left-[5rem] xmd:mx-auto top-[9rem] md:hidden w-[20.9605rem] h-[9.75rem]" />
        <div className="md:hidden"><Breadcrumb /></div>
        <div className='xmd:container inline-flex md:absolute  flex-col left-[5rem] top-[32rem] items-start space-y-[2.0625rem]'>

          <div className="md:w-[52.3125rem] text-white xmd:text-[0.875rem] text-base font-normal leading-[150%] xmd:tracking-[0.00219rem] tracking-[0.005rem]">
            Ha Giang, nestled in the rugged mountains of northern Vietnam, beckons adventurers with its breathtaking scenery and vibrant cultural tapestry. From the towering peaks of the Dong Van Karst Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers an unforgettable journey through some of Vietnam's most awe-inspiring landscapes.
          </div>
          <div className=" flex items-start xmd:w-full xmd:space-x-[0.5rem] space-x-[1rem]">
            <Button className='!flex-1 !w-max shrink-0' icon >BOOK NOW</Button>
            <Button className='!flex-1 !w-max shrink-0' icon variant='outline_white'>All tour</Button>
          </div>
        </div>
        <Image priority alt="map" src={'/activity/map.png'} width={9950} height={9950} className="w-[57rem] left-[35%] xmd:hidden h-[82rem] absolute bottom-0" />
        <Image priority alt="map mobi" src={'/activity/map-mobi.png'} width={9950} height={9950} className="object-cover w-[23.4375rem] md:hidden" />

        {/* motobike */}
        <div className="absolute w-[4.75rem] h-[6.25rem] xl:right-[32.8rem]  right-[38.7rem] top-[43.5rem]">
          <div className='relative'>
            <div className="inline-flex relative flex-col items-center mt-[0.8rem]">
              <Sheet>
                <SheetTrigger>
                  <Image priority alt="ảnh" src={'/activity/motobike-img-all.png'} width={120} height={200} className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent side={'bottom'} className='!bg-transparent'>
                  <div className='  flex flex-col w-full'>
                    <div className=" relative flex h-16">
                      {data?.map((d, i) => (
                        <div
                          style={{ left: `${7 * i}rem`, zIndex: data.length - i }}
                          className={cn(`absolute text-[1.5rem] font-bold leading-[1] flex justify-center items-center w-[10.81256rem] h-16 shrink-0 rounded-tr-2xl`, {
                            'pl-[3.5rem]': i === 1,
                            'pl-[8rem] pr-[4.5rem]': i === 2,
                            'pl-[9.5rem] pr-[4rem]': i === 3,
                            'bg-orange-normal text-white': i % 2 === 1,
                            'bg-white text-orange-dark': i % 2 !== 1,
                          })}>
                          {d?.title}
                        </div>
                      ))}
                    </div>
                    <div className=" inline-flex justify-end items-center pr-0 pt-[2.4375rem] pb-10 bg-white">
                      <Swiper
                        slidesPerView={'2.5'}
                        spaceBetween={0}
                        className='!pl-10  !w-full '
                        loop={false}
                        modules={[FreeMode]}
                        freeMode={true}
                      >
                        {[0, 0, 0, 0, 0].map((d, i) => (
                          <SwiperSlide key={i} className='' >
                            <Image priority alt="ảnh" src={'/activity/image-popup-banner.png'} width={1000} height={1000} className="xl:w-[98%] w-[38.0625rem] h-[27.9375rem] rounded-[1.25rem]" />
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

              <svg className='circle size-[1.25rem] mr-[0.95rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
                <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
              </svg>
              <div className="absolute left-[2.5rem] bottom-[4.5rem] text-white bg-orange-normal 
              text-[0.875rem] font-medium leading-[1.2] tracking-[0.00875rem]
              inline-flex justify-center items-center gap-2.5 p-2.5 rounded-[1.25rem]">
                222
              </div>
            </div>
            <div className="left-[5rem] top-[4.5rem] absolute flex flex-col items-start space-y-[1.2rem]">
              <div className=" text-linear relative">Motobike
                tour

              </div>
              <div className="flex w-[20.6875rem] items-start content-start gap-2 flex-wrap">
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  DU GIA
                </button>
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  DU GIA
                </button>
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  Ma phi leng
                </button>

              </div>
            </div>
            <div className="text-white bg-clip-border text-lg not-italic font-bold leading-[120%] flex flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4 absolute backdrop-blur-lg px-3 py-1.5 rounded-3xl top-[13rem] left-[24rem]">
              <div className=''>Experience</div>
            </div>




          </div>
        </div>
        {/* hiking */}
        <div className="absolute w-[4.75rem] h-[6.25rem] xl:left-[-3.3rem] left-[-0.2rem] top-[63.5rem]">
          <div className=' relative '>
            <div className=" absolute left-[31rem] top-[7rem] inline-flex flex-col items-center w-[8.75013rem]">
              <Sheet>
                <SheetTrigger>
                  <Image priority alt="ảnh" src={'/activity/motobike-img-all.png'} width={120} height={200} className="w-[4.75rem] cursor-pointer h-[4.55rem]" />
                </SheetTrigger>
                <SheetContent side={'bottom'} className='!bg-transparent'>
                  <div className='  flex flex-col w-full'>
                    <div className=" relative flex h-16">
                      {data?.map((d, i) => (
                        <div
                          style={{ left: `${7 * i}rem`, zIndex: data.length - i }}
                          className={cn(`absolute text-[1.5rem] font-bold leading-[1] flex justify-center items-center w-[10.81256rem] h-16 shrink-0 rounded-tr-2xl`, {
                            'pl-[3.5rem]': i === 1,
                            'pl-[8rem] pr-[4.5rem]': i === 2,
                            'pl-[9.5rem] pr-[4rem]': i === 3,
                            'bg-orange-normal text-white': i % 2 === 1,
                            'bg-white text-orange-dark': i % 2 !== 1,
                          })}>
                          {d?.title}
                        </div>
                      ))}
                    </div>
                    <div className=" inline-flex justify-end items-center pr-0 pt-[2.4375rem] pb-10 bg-white">
                      <Swiper
                        slidesPerView={'2.5'}
                        spaceBetween={0}
                        className='!pl-10  !w-full '
                        loop={false}
                        modules={[FreeMode]}
                        freeMode={true}
                      >
                        {[0, 0, 0, 0, 0].map((d, i) => (
                          <SwiperSlide key={i} className='' >
                            <Image priority alt="ảnh" src={'/activity/image-popup-banner.png'} width={1000} height={1000} className="xl:w-[98%] w-[38.0625rem] h-[27.9375rem] rounded-[1.25rem]" />
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
              <svg className='circle size-[1.25rem] mr-[0.95rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
                <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
              </svg>
            </div>
            <div className="left-[5rem] top-[3rem] absolute flex flex-col items-start space-y-[1.2rem]">
              <div>
                <div className=" text-[6.25rem] text-linear2 relative">hiking

                </div>
                <div className="text-white w-fit z-[500] bg-clip-border text-lg not-italic font-bold leading-[120%] flex flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4  backdrop-blur-lg px-3 py-1.5 rounded-3xl">

                  <div className=''>Experience</div>
                </div>
              </div>
              <div className="flex w-[20.6875rem] items-start content-start gap-2 flex-wrap">
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  DU GIA
                </button>
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  DU GIA
                </button>
                <button className="text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]">
                  Ma phi leng
                </button>

              </div>
            </div>
            <div className="absolute left-[36rem] top-[6rem] text-white bg-orange-normal 
            text-[0.875rem] font-medium leading-[1.2] tracking-[0.00875rem]
            inline-flex justify-center items-center gap-2.5 p-2.5 rounded-[1.25rem]">
              222
            </div>




          </div>
        </div>
        <div className="absolute xl:right-[3rem] right-[10rem] bottom-[10.5rem] w-[38.0625rem] text-white text-right text-base not-italic font-normal leading-[150%] tracking-[0.005rem]">
          Embark on an unforgettable journey to Ha Giang, where breathtaking landscapes and vibrant cultures await you. Explore the majestic mountains, winding roads, and terraced rice fields while immersing yourself in the rich traditions of the local ethnic communities. Let our guided tours lead you through this mesmerizing region, filled with authentic experiences and hidden gems waiting to be discovered. Join us in Ha Giang and create memories that will last a lifetime
        </div>
      </div>
    </section>
  )
}

export default Banner
