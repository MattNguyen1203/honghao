"use client"
import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FreeMode, Navigation, Autoplay, Thumbs, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose
} from "@/components/dialog"
gsap.registerPlugin(ScrollTrigger)
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

const DialogCp = ({ children }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiper = useRef()
  const handleSlideChange = (swiper) => {
    const newIndex = swiper?.realIndex;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (mainSwiper) {
      console.log({ mainSwiper })
      mainSwiper?.current?.slideTo(activeIndex);
    }
  }, [activeIndex]);
  return (
    <Dialog>
      <DialogTrigger >
        {children}
      </DialogTrigger>
      <DialogContent className="">
        <div className="relative w-[86.875rem] h-[44.75rem] bg-white flex justify-center items-center rounded-3xl">
          <svg className='absolute right-[16rem] top-1/2 z-[100] -translate-y-1/2' xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
            <path d="M38 27L22 37L27 27L22 17L38 27Z" fill="white" />
          </svg>
          {/* <Image priority alt="ảnh" src={'/activity/video.png'} width={1500} height={1000} className="w-[83.875rem] h-[41.75rem] shrink-0 rounded-xl " /> */}
          <Swiper
            ref={mainSwiper}
            onBeforeInit={(swiper) => {
              mainSwiper.current = swiper
            }}
            pagination={{
              clickable: true,
            }}
            effect={'fade'}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, EffectFade]}
            className=''
          >
            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((d, i) => (
              <SwiperSlide key={i} className='!flex !justify-center !items-center'>
                {/* {i}{activeIndex} */}
                {i % 2 === 0 && <Image priority alt="ảnh" src={'/activity/video.png'} width={1500} height={1500} className="w-[83.875rem] h-[41.75rem] " />}
                {i % 2 === 1 && <Image priority alt="ảnh" src={'/activity/video2.png'} width={1500} height={1500} className="w-[83.875rem] h-[41.75rem] " />}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='absolute z-[100] right-[5rem]'>
            <Swiper
              onSwiper={setThumbsSwiper}

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
              speed={3000}
              centeredSlides
              slidesPerView={6}
              watchSlidesProgress={true}
              modules={[FreeMode, Autoplay, Navigation, Thumbs]}
              onSlideChange={handleSlideChange}
              className="mySwiper !pb-[3rem]  h-[41.75rem] "
              id="swiper_discover"
            >
              {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((d, i) => (
                <SwiperSlide key={i}>
                  <Image priority alt="ảnh" src={'/activity/video2.png'} width={500} height={500} className={(i === activeIndex ? 'opacity-1 border border-white' : 'border-transparent border opacity-60') + " duration-500 ease-linear w-[10.875rem] h-[6.35rem] "} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
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

const Video = ({ children }) => {
  return (
    <div className="relative w-[26.375rem] h-[17.625rem] group scale-[0.99]  overflow-hidden rounded-xl cursor-pointer">
      {children}
      <div className="w-full h-full absolute top-0 left-0 duration-200 transition-all group-hover:bg-black bg-transparent group-hover:bg-opacity-30 z-50"></div>
      <DialogCp>
        <div className=" group/start">
          <svg className='size-[3.125rem] group-hover/start:scale-75 z-[51] duration-500 transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <g clip-path="url(#clip0_8679_8307)">
              <circle className='group-hover/start:fill-orange-normal fill-transparent  duration-500 transition-all' cx="25" cy="25" r="24.375" transform="matrix(-1 0 0 1 50 0)" stroke="white" stroke-width="1.25" />
            </g>
            <defs>
              <clipPath id="clip0_8679_8307">
                <rect width="50" height="50" rx="25" transform="matrix(-1 0 0 1 50 0)" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg className='size-[1.5rem] z-[51] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19.5 10.6603C20.1667 11.0452 20.1667 12.0074 19.5 12.3923L6 20.1865C5.33333 20.5714 4.5 20.0903 4.5 19.3205L4.5 3.73205C4.5 2.96225 5.33333 2.48112 6 2.86602L19.5 10.6603Z" fill="white" />
          </svg>
        </div>
      </DialogCp>

    </div>
  )
}
const ImageBig = ({ children }) => {
  return (
    <div className="relative w-[35.6875rem] h-[23.8125rem] group scale-[0.99]  overflow-hidden rounded-xl cursor-pointer">
      {children}
    </div>
  )
}
const ImageNormal = ({ children }) => {
  return (
    <div className="relative w-[26.375rem] h-[17.625rem] group scale-[0.99]  overflow-hidden rounded-xl cursor-pointer">
      {children}
    </div>
  )
}
const ImageSmall = ({ children }) => {
  return (
    <div className="relative w-[18.375rem] h-[12.25rem] group scale-[0.99]  overflow-hidden rounded-xl cursor-pointer">
      {children}
    </div>
  )
}
const Discover = () => {

  const imgRef = useRef()
  const scrollRef = useRef()
  const menuRef = useRef()
  const imagesRef = useRef()
  useEffect(() => {

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: 0, repeatDelay: 0,
        scrollTrigger: {
          pinSpacing: false,
          trigger: imgRef.current,
          pin: imgRef.current,
          start: "0% 0%",
          end: () => `+=${scrollRef.current.offsetWidth}`,
          toggleActions: "restart reverse reverse reverse",
          // markers: true,
          scrub: 1,
        }
      });

    }, imgRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: 0, repeatDelay: 0,
        scrollTrigger: {
          trigger: menuRef.current,
          pin: true,
          pinSpacing: false,
          start: "0% -0.001%",
          // end: "+=3000",
          end: () => `+=${scrollRef.current.offsetWidth}`,
          toggleActions: "restart reverse reverse reverse",
          // markers: true,
          scrub: 1,
          onToggle: self => {
            if (self.isActive) {
              gsap.to(menuRef.current, {
                boxShadow: "90px 128px 44px 0px rgba(66, 72, 66, 0.00), 57px 82px 40px 0px rgba(66, 72, 66, 0.01), 32px 46px 34px 0px rgba(66, 72, 66, 0.05), 14px 20px 25px 0px rgba(66, 72, 66, 0.09), 4px 5px 14px 0px rgba(66, 72, 66, 0.10)",
                backgroundColor: 'white', duration: 0
              });
            } else {
              gsap.to(menuRef.current, {
                boxShadow: 'none',
                backgroundColor: '', duration: 0
              });
            }
          }
        }
      });

    }, menuRef)
    return () => ctx.revert()
  }, [])


  return (
    <section className='relative border border-transparent w-full xl:container'>
      <Image ref={imgRef} priority alt="ảnh" src={'/activity/pattern-white.png'} width={1600} height={1400}
        className="absolute image top-0 h-[49.0625rem] shrink-0" />
      <div ref={scrollRef} className=' mx-auto containter'>
        <h2 className="w-[65.25rem] mx-auto  text-green-normal mt-[12.25rem] ml-[5rem]">
          Discover the raw beauty of Ha Giang through our immersive tours, where every twist of the road unveils a new panorama of awe-inspiring landscapes.
        </h2>

        <div ref={menuRef} className="z-10 mt-[1.75rem] w-full h-[5.25rem] flex justify-center items-center shrink-0">
          <div className="inline-flex h-[2.0625rem] justify-end items-start space-x-[2.25rem] shrink-0">
            {data?.map((d, i) => (
              <div key={i} className="flex group cursor-pointer flex-col justify-end items-start gap-4">
                <div className={(i !== 0 ? 'text-greyscale-10' : 'text-orange-normal') + " group-hover:text-orange-normal text-[0.875rem] font-bold leading-[1.2] uppercase ease-linear duration-300"}>
                  {d?.title}
                </div>
                <div className={(i !== 0 ? 'bg-transparent w-0' : 'w-full bg-orange-normal') + " group-hover:bg-orange-normal group-hover:w-full h-[0.08rem] ease-linear duration-300 rounded-full  "}></div>
              </div>
            ))}
          </div>
        </div>

        <div ref={imagesRef} className="z-9 space-y-[4rem] flex flex-col justify-center w-full items-center">

          <div className="mx-auto w-[81.5rem] grid grid-cols-2 space-x-[3.81rem] cursor-pointer">
            <div className="space-y-[4.69rem] flex flex-col justify-end items-end">
              <Video>
                <Image priority alt="ảnh" src={'/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
              </Video>
              <ImageBig>
                <Image priority alt="ảnh" src={'/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
              </ImageBig>
              <ImageNormal>
                <Image priority alt="ảnh" src={'/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
              </ImageNormal>
              <ImageBig>
                <Image priority alt="ảnh" src={'/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
              </ImageBig>
              <ImageSmall>
                <Image priority alt="ảnh" src={'/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
              </ImageSmall>
            </div>
            <div className="space-y-[4.62rem] mt-[5.8rem]">

              <ImageNormal>
                <Image priority alt="ảnh" src={'/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
              </ImageNormal>
              <ImageBig>
                <Image priority alt="ảnh" src={'/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
              </ImageBig>
              <div className="space-x-[4.69rem] flex items-start">

                <ImageSmall>
                  <Image priority alt="ảnh" src={'/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                </ImageSmall>
                <ImageSmall>
                  <Image priority alt="ảnh" src={'/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                </ImageSmall>
              </div>
              <ImageBig>
                <Image priority alt="ảnh" src={'/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
              </ImageBig>
              <div className="space-x-[4.69rem] flex items-start">

                <ImageSmall>
                  <Image priority alt="ảnh" src={'/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                </ImageSmall>
                <ImageSmall>
                  <Image priority alt="ảnh" src={'/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                </ImageSmall>
              </div>


            </div>

          </div>
          <div className="text-[0.875rem] font-semibold leading-[1.2] text-greyscaletext-40 uppercase flex h-11 justify-center items-center gap-2 border border-grey-grey-100 px-5 py-2.5 rounded-lg border-solid">
            Lear more
          </div>
        </div>

      </div>

    </section>
  )
}

export default Discover
