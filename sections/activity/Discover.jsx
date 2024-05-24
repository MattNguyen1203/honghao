"use client"
import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FreeMode, Navigation, Autoplay, Thumbs, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import useStore from '@/app/(store)/store'
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
} from "@/components/customCn/dialog"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from "@/components/customCn/sheet"
import SlideVideoTours from '@/components/slide-video-tour';
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
const DialogCp = ({ children }) => {
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
    <Dialog className='Dialogclass'>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="">
        <SlideVideoTours />
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
const SheetCp = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger>
        {children}
      </SheetTrigger>
      <SheetContent side={'bottom'} className='!bg-white'>
        <div className='  flex flex-col w-full xmd:rounded-tl-xl xmd:rounded-tr-xl xmd:overflow-hidden  xmd:bg-white'>
          <div className="xmd:w-[23.4375rem] xmd:h-[16.5625rem] inline-flex z-10 justify-end items-center pr-0 pt-[2.4375rem] xmd:pt-[0.4375rem] xmd:pb-1 pb-10 bg-white">
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
      </SheetContent>
      /imgs</Sheet>
  )
}
const Video = ({ children }) => {
  return (
    <div className="relative  xmd:w-[19.25rem]  xmd:h-[14.4375rem] w-[26.375rem] h-[17.625rem] group scale-[0.99]  overflow-hidden rounded-xl cursor-pointer">
      {children}
      <div className="w-full h-full absolute top-0 left-0 duration-200 transition-all group-hover:bg-black bg-transparent group-hover:bg-opacity-30 z-50"></div>
      <div className='xmd:hidden'>
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
      <div className='md:hidden'>

        <SheetCp>
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
        </SheetCp>
      </div>

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
    <div className="relative xmd:w-[19.25rem] xmd:h-[14.4375rem] w-[26.375rem] h-[17.625rem] group scale-[0.99]  overflow-hidden rounded-xl cursor-pointer">
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
  const isMobile = useStore((state) => state.isMobile)
  const imgRef = useRef()
  const scrollRef = useRef()
  const menuRef = useRef()
  const imagesRef = useRef()
  const imgRefMobi = useRef()
  // img mobi
  useEffect(() => {

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: 0, repeatDelay: 0,
        scrollTrigger: {
          pinSpacing: false,
          trigger: imgRefMobi.current,
          pin: imgRefMobi.current,
          start: "5% 0%",
          end: () => `+=${scrollRef.current.offsetWidth}`,
          toggleActions: "restart reverse reverse reverse",
          // markers: true,
          scrub: 1,
        }
      });

    }, imgRefMobi)
    return () => ctx.revert()
  }, [])
  // img web
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
  // menu
  useEffect(() => {
    if (window.innerWidth > 768) {
      gsap.set(menuRef.current, {
        boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
        backgroundColor: 'transparent'
      });
      const ctx = gsap.context(() => {

        const tl = gsap.timeline({
          repeat: 0, repeatDelay: 0,
          scrollTrigger: {
            trigger: menuRef.current,
            pin: true,
            pinSpacing: false,
            start: "0% -0.001%",
            // markers: true,
            end: () => `+=${scrollRef.current.offsetWidth}`,
            // toggleActions: "restart reverse reverse reverse",
            scrub: 1,
            // onToggle: self => {

            //   if (self.isActive) {
            //     gsap.to(menuRef.current, {
            //       boxShadow: "90px 128px 44px 0px rgba(66, 72, 66, 0.00), 57px 82px 40px 0px rgba(66, 72, 66, 0.01), 32px 46px 34px 0px rgba(66, 72, 66, 0.05), 14px 20px 25px 0px rgba(66, 72, 66, 0.09), 4px 5px 14px 0px rgba(66, 72, 66, 0.10)",
            //       backgroundColor: 'white', duration: 1,
            //       transitionTimingFunction: 'linear'
            //     });
            //   } else {
            //     gsap.to(menuRef.current, {
            //       boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",duration: 1,
            //       backgroundColor: 'transparent',
            //       transitionTimingFunction: 'linear'
            //     });
            //   }
            // },
            onUpdate: (self) => {
              if (self.progress > 0) {
                gsap.to(menuRef.current, {
                  boxShadow: "90px 128px 44px 0px rgba(66, 72, 66, 0.00), 57px 82px 40px 0px rgba(66, 72, 66, 0.01), 32px 46px 34px 0px rgba(66, 72, 66, 0.05), 14px 20px 25px 0px rgba(66, 72, 66, 0.09), 4px 5px 14px 0px rgba(66, 72, 66, 0.10)",
                  backgroundColor: 'white',
                  duration: 0.7,
                  transitionTimingFunction: 'linear'
                });
              } else {
                gsap.to(menuRef.current, {
                  boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
                  duration: 0.7,
                  backgroundColor: 'transparent',
                  transitionTimingFunction: 'linear'
                });
              }
            }
          }
        });


      }, menuRef)
      return () => ctx.revert()

    }
  }, [])
  console.log({ isMobile })
  return (
    <section className='relative w-full'>
      <Image ref={imgRef} priority alt="ảnh" src={'/imgs/activity/pattern-white.png'} width={1600} height={1400}
        className="absolute image xmd:hidden w-full top-0 h-[49.0625rem] shrink-0" />
      <div className="relative border border-transparent w-full ">


        <Image ref={imgRefMobi} priority alt="ảnh" src={'/imgs/activity/mountain.png'} width={1600} height={1400}
          className="absolute image md:hidden top-[5rem] " />
        <div className='w-full md:hidden flex justify-center items-center mt-[2.87rem]'>
          <Image priority alt="ảnh" src={'/imgs/activity/sun.png'} width={1600} height={1400}
            className=" size-[10.5rem] " />
        </div >

        <div ref={scrollRef} className='w-full'>
          <h2 className="xmd:absolute top-[9rem] xmd:ml-[0rem] xxl:ml-[5rem] xmd:text-center xmd:left-1/2 xmd:-translate-x-1/2 md:w-[65.25rem] xmd:w-[21.4375rem] xl:mx-auto h2 xmd:text-[1.5rem] text-green-normal xmd:tracking-0.00375 md:mt-[12.25rem]">
            Discover the raw beauty of Ha Giang through our immersive tours, where every twist of the road unveils a new panorama of awe-inspiring landscapes.
          </h2>

          <div ref={menuRef} className=" xmd:mt-[5rem] md:z-10 mt-[1.75rem] w-full h-[5.25rem] flex justify-center items-center shrink-0">
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

          <div className="md:hidden w-full">
            <Swiper
              modules={[Navigation]}
              className='container'
              spaceBetween={0}
              slidesPerView={1.2}
              loop={false}
            >
              {[1, 1, 1, 1, 1, 1].map((d, i) => (
                <SwiperSlide className={(i === 0 ? "!pl-[0.7rem]" : "!pl-[0.3rem]") + " !flex  !items-end !justify-end"}>
                  {i === 0 &&
                    <Video>
                      <Image priority alt="ảnh" src={'/imgs/activity/video2.png'} width={1600} height={1400}
                        className="  !h-full absolute top-0 left-0 " />
                    </Video>
                  }
                  {i !== 0 &&
                    <ImageNormal>

                      <Image priority alt="ảnh" src={'/imgs/activity/video2.png'} width={1600} height={1400}
                        className=" w-full h-full" />
                    </ImageNormal>}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div ref={imagesRef} className="z-9 md:space-y-[4rem] xmd:mt-[1.75rem] flex flex-col justify-center w-full items-center">

            <div className="mx-auto xmd:hidden md:mt-[2rem] w-[81.5rem] grid grid-cols-2 space-x-[3.81rem] cursor-pointer">
              <div className="space-y-[4.69rem] flex flex-col justify-end items-end">
                <Video>
                  <Image priority alt="ảnh" src={'/imgs/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                </Video>
                <ImageBig>
                  <Image priority alt="ảnh" src={'/imgs/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                </ImageBig>
                <ImageNormal>
                  <Image priority alt="ảnh" src={'/imgs/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                </ImageNormal>
                <ImageBig>
                  <Image priority alt="ảnh" src={'/imgs/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                </ImageBig>
                <ImageSmall>
                  <Image priority alt="ảnh" src={'/imgs/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                </ImageSmall>
              </div>
              <div className="space-y-[4.62rem] mt-[5.8rem]">

                <ImageNormal>
                  <Image priority alt="ảnh" src={'/imgs/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                </ImageNormal>
                <ImageBig>
                  <Image priority alt="ảnh" src={'/imgs/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                </ImageBig>
                <div className="space-x-[4.69rem] flex items-start">

                  <ImageSmall>
                    <Image priority alt="ảnh" src={'/imgs/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                  </ImageSmall>
                  <ImageSmall>
                    <Image priority alt="ảnh" src={'/imgs/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                  </ImageSmall>
                </div>
                <ImageBig>
                  <Image priority alt="ảnh" src={'/imgs/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                </ImageBig>
                <div className="space-x-[4.69rem] flex items-start">

                  <ImageSmall>
                    <Image priority alt="ảnh" src={'/imgs/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                  </ImageSmall>
                  <ImageSmall>
                    <Image priority alt="ảnh" src={'/imgs/activity/video.png'} width={500} height={500} className=" group-hover:scale-110 w-full h-full duration-500 ease-linear  cursor-pointer " />
                  </ImageSmall>
                </div>


              </div>
            </div>
            <button className="text-[0.875rem] hover:bg-orange-hover duration-300 ease-linear hover:text-white text-greyscale-40 font-semibold leading-[1.2] text-greyscaletext-40 uppercase flex h-11 justify-center items-center gap-2 border  border-grey-grey-100 px-5 py-2.5 rounded-lg border-solid">
              Lear more
            </button>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Discover
