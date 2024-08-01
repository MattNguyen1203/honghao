'use client'
import React, { useState, useRef, useEffect } from 'react'
import useStore from '@/app/(store)/store'
import Image from 'next/image'
import { Button } from '@/components/customCn/button'
import { cn } from '@/lib/utils'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import SlideVideoTours from '@/components/slide-video-tour'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from '@/components/customCn/dialog'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from '@/components/customCn/sheet'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
const data1 = [
  { title: 'Experience' },
  { title: 'Food' },
  { title: 'Treaking' },
  { title: 'People' },
]
const DialogCp = ({ children, data }) => {
  return (
    <Dialog className='Dialogclass '>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className=''>
        <SlideVideoTours data={data?.lists_image} />
        <DialogClose className='absolute top-[0rem] -right-[4rem]'>
          <div className='w-[3.25rem] rounded-full flex items-center justify-center h-[3.25rem] shrink-0 bg-[rgba(217,217,217,0.40)] backdrop-blur-[2px]'>
            <svg
              className='size-[1.5rem]'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

const SheetCp = ({ children, data }) => {
  const isMobile = useStore((state) => state.isMobile)
  const breakpoints = {
    767: {
      spaceBetween: 0,
      slidesPerView: 1.5,
    },
  }

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent
        side={'bottom'}
        className='!bg-transparent'
      >
        <div className='  flex flex-col w-full xmd:justify-center xmd:rounded-tl-xl xmd:rounded-tr-xl xmd:overflow-hidden xmd:w-[23.4375rem] xmd:bg-white xmd:h-[17.0625rem]'>
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
              spaceBetween={18}
              className='!pl-10 xmd:!pl-4  !w-full '
              loop={false}
              modules={[FreeMode]}
            >
              {data?.lists_image?.map((d, i) => (
                <SwiperSlide
                  key={i}
                  className=' overflow-hidden'
                >
                  <Image
                    priority
                    alt='ảnh'
                    src={d?.url}
                    width={1500}
                    height={1500}
                    className='xl:w-[98%] object-cover xmd:w-[19.25rem] xmd:h-[14.4375rem] w-[38.0625rem] h-[27.9375rem] rounded-[1.25rem]'
                  />
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
const Banner = ({ dataBaner, dataBanerMobi }) => {
  const dataMoto = dataBaner?.motobike
  const dataHiking = dataBaner?.hiking

  const { openbookNow, setOpenBooknow, setCheckOpenBookNow } = useStore(state => state)
  const [loaded, setLoaded] = useState(false);
  return (
    <section className='relative xl:h-[100rem] overflow-hidden'>
      <h1 className='opacity-0 z-[-1] fixed top-0 left-0'>Activity Ha Giang</h1>
      <div className={cn('object-cover transition-all z-[5] duration-1000 xmd:duration-500 absolute bottom-[0rem] left-0 w-full h-[119.375rem] shrink-0 bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_80%)]',
        loaded ? ' opacity-100' : ' opacity-0'
      )}></div>
      <div
        className={` absolute top-0 left-0 z-[50] w-full h-full  bg-conicBanner opacity-100 transition-all duration-1000 xmd:duration-500 ${loaded ? '!opacity-0 pointer-events-none' : 'opacity-100'}`}
      ></div>
      <Image
        priority
        alt='ảnh'
        src={dataBaner?.image?.url}
        width={1600}
        height={1935}
        className={cn('z-[3] xmd:hidden absolute h-full w-full transition-all duration-1000 xmd:duration-500',
          loaded ? '' : 'blur-lg'
        )}
        onLoadingComplete={() => setLoaded(true)}
      />

      <Image
        priority
        alt='ảnh'
        src={dataBanerMobi?.image?.url}
        width={1600}
        height={1935}
        className={cn('object-cover md:hidden absolute top-0 left-0 h-full w-full transition-all duration-1000 xmd:duration-500',
          loaded ? '' : 'blur-sm'
        )}
        onLoadingComplete={() => setLoaded(true)}
      />
      <Image
        priority
        alt='ảnh'
        src={'/imgs/activity/islus.png'}
        width={1600}
        height={400}
        className='z-[6] xmd:hidden absolute bottom-0 w-full '
      />
      <Image
        priority
        alt='ảnh'
        src={'/imgs/activity/islus-mobi.png'}
        width={1600}
        height={400}
        className='z-[6] md:hidden absolute bottom-0 w-full h-[8.73438rem]'
      />
      <div className='container relative z-[7] xmd:h-[105rem] h-[100rem] xmd:mt-[5.3rem]'>
        <Image
          data-aos="fade-up"
          data-aos-duration="900"
          priority
          alt='ảnh title web'
          src={dataBaner?.image_title_big?.url}
          width={840}
          height={355}
          className=' xmd:hidden xmd:w-[20.9605rem] xmd:h-[8.65rem] md:absolute tablet:left-[5rem]  lg:left-[0rem] top-[9rem] w-[52.3605rem] h-[22.1875rem]'
        />
        <Image
          priority
          alt='ảnh title web'
          src={dataBanerMobi?.image_title_big?.url}
          width={840}
          height={355}
          className='md:hidden brightness-110 xmd:w-[20.9605rem] xmd:h-[8.65rem] md:absolute tablet:left-[5rem]  lg:left-[0rem] top-[9rem] w-[52.3605rem] h-[22.1875rem]'
        />
        <div className='md:hidden xmd:-translate-y-[0.4rem]'>
          <Breadcrumb className='!pl-0'>
            <BreadcrumbLink
              isBanner
              href='/activity'
            >
              Activity
            </BreadcrumbLink>
          </Breadcrumb>
        </div>
        <div className=' md:absolute flex-col tablet:left-[5rem] lg:left-[0rem] left-[0rem] top-[32rem] items-start space-y-[2.0625rem]'>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className='md:w-[52.3125rem] text-white xmd:text-[0.875rem] text-base font-normal leading-[150%] xmd:tracking-0.00219 tracking-[0.005rem]'>
            {dataBaner?.desc_text}
          </div>
          <div data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1100"
            className=' flex items-start xmd:w-full xmd:space-x-[0.5rem] space-x-[1rem]'>
            <div
              className='xmd:!w-max xmd:!flex-1'
              href='/tours/book-now'
              onClick={() => {
                setOpenBooknow(true)
                setCheckOpenBookNow(true)

              }}
            >
              <Button
                className='xmd:!flex-1 xmd:!w-full xmd:shrink-0'
                icon
              >
                BOOK NOW
              </Button>
            </div>
            <Link
              className='xmd:!w-max xmd:!flex-1'
              href={'/tours'}
            >
              <Button
                className='xmd:!flex-1 xmd:!w-full xmd:shrink-0'
                icon
                variant='outline_white'
              >
                All tour
              </Button>
            </Link>
          </div>
        </div>

        <Image
          data-aos="fade-up"
          data-aos-duration="1200"
          priority
          alt='map'
          src={'/imgs/activity/map.png'}
          width={9950}
          height={9950}
          className='w-[57rem] left-[35%] xmd:hidden h-[82rem] absolute bottom-0'
        />

        <Image
          priority
          alt='map mobi'
          src={'/imgs/activity/map-mobi.png'}
          width={9950}
          height={9950}
          className=' mx-auto mt-[3.25rem] h-[55rem] px-[2rem] absolute top-[25.2rem] left-0 md:hidden'
        />

        {/* motobike */}

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className='absolute w-[4.75rem] h-[6.25rem] top-[43.5rem] xmd:top-[43.2rem] lg:left-[-1rem] tablet:left-[3.35rem] left-[2.8rem] '>
          <div className=' relative'>
            <div className=' absolute xmd:top-[6.4rem] xmd:left-[-1.5rem] md:left-[50.5rem] md:top-[-1rem] inline-flex flex-col items-center space-y-[0] w-[8.75013rem]'>
              <div className='xmd:hidden'>
                <DialogCp data={dataMoto}>
                  <Image
                    priority
                    alt='ảnh'
                    src={'/imgs/activity/motobike-img-all.png'}
                    width={120}
                    height={200}
                    className='w-[4.75rem] cursor-pointer h-[4.55rem]'
                  />
                </DialogCp>
              </div>
              <div className='md:hidden'>
                <SheetCp data={dataMoto}>
                  <Image
                    priority
                    alt='ảnh'
                    src={'/imgs/activity/motobike-img-all.png'}
                    width={120}
                    height={200}
                    className='w-[4.75rem] xmd:translate-y-[1rem]  cursor-pointer h-[4.55rem]'
                  />
                </SheetCp>
              </div>
              <svg
                className='circle size-[2.25rem] mr-[0.95rem]'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <circle
                  cx='10'
                  cy='10'
                  r='3.5'
                  fill='#E64827'
                  stroke='#E64827'
                />
                <circle
                  cx='10'
                  cy='10'
                  r='9.5'
                  stroke='#E64827'
                />
              </svg>
            </div>
            <div data-aos="fade-up"
              data-aos-delay="0"
              // data-aos-easing="linear"
              data-aos-duration="900" className='xmd:top-[11rem] xmd:left-[5.5rem] md:top-[3rem] md:left-[58rem] lg:left-[58.7rem] absolute flex flex-col items-start xmd:space-y-[0.75rem] space-y-[1.2rem]'>
              <div className='relative'>
                <div className=' text-linear1 text-[6.25rem] not-italic font-bold leading-[100%] uppercase xmd:text-[2.94194rem] relative'>
                  {dataMoto?.label}
                </div>
                <div
                  className='absolute xmd:bottom-[0.5rem] xmd:left-[8rem] md:bottom-[.9rem] md:left-[17rem] text-white w-fit bg-clip-border text-lg not-italic font-bold leading-[120%] flex 
                flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4  backdrop-blur-lg xmd:px-[0.353rem] xmd:text-[0.52956rem] xmd:py-[0.1765rem] px-3 py-1.5 rounded-3xl'
                >
                  Experience
                </div>
              </div>
              <div className='overflow-y-scroll scrollbar-dichvu xmd:max-h-[5.5rem] max-h-[18rem] flex xmd:w-[14.6875rem] w-[30.6875rem] items-start content-start gap-2 flex-wrap'>
                {dataMoto?.lists_place?.map((d, i) => (
                  <Link
                    href={`/${d?.link}`}
                    key={i}
                    className=''
                  >
                    <button
                      className='hover:bg-orange-normal-hover duration-300 transition-all text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border 
                xmd:py-[0.4375rem] xmd:px-[1.1875rem] px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]'
                    >
                      {d?.name_place}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
            <div
              className='absolute xmd:top-[7rem] xmd:left-[2.8rem] md:left-[55rem] md:top-[-1.7rem] text-white bg-orange-normal 
            text-[0.875rem] font-medium leading-[1.2] tracking-[0.00875rem]
            inline-flex justify-center items-center gap-2.5 px-2.5 py-1.5 rounded-[1.25rem]'
            >
              {dataMoto?.lists_image?.length}
            </div>
          </div>
        </div>
        {/* hiking */}
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className='absolute w-[4.75rem] h-[6.25rem] lg:left-[-3.6rem] tablet:left-[3rem]  left-[-0.7rem] top-[63.5rem]'>
          <div className='relative '>
            <div className=' absolute top-[5rem] left-[14.2rem] md:left-[28rem] lg:left-[30.5rem] md:top-[7rem] inline-flex flex-col items-center w-[8.75013rem]'>
              <div className='xmd:hidden'>
                <DialogCp data={dataMoto}>
                  <Image
                    priority
                    alt='ảnh'
                    src={'/imgs/activity/motobike-img-all.png'}
                    width={120}
                    height={200}
                    className='w-[4.75rem] cursor-pointer h-[4.55rem]'
                  />
                </DialogCp>
              </div>
              <div className='md:hidden'>
                <SheetCp data={dataMoto}>
                  <Image
                    priority
                    alt='ảnh'
                    src={'/imgs/activity/motobike-img-all.png'}
                    width={120}
                    height={200}
                    className='w-[4.75rem] xmd:translate-y-[1rem]  cursor-pointer h-[4.55rem]'
                  />
                </SheetCp>
              </div>
              <svg
                className='circle size-[2.25rem] mr-[0.95rem]'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <circle
                  cx='10'
                  cy='10'
                  r='3.5'
                  fill='#E64827'
                  stroke='#E64827'
                />
                <circle
                  cx='10'
                  cy='10'
                  r='9.5'
                  stroke='#E64827'
                />
              </svg>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              className='xmd:top-[4.5rem] xmd:left-[2rem] left-[3.5rem] top-[1rem] absolute flex flex-col items-start xmd:space-y-[0.75rem] space-y-[2.82rem]'>
              <div>
                <div className=' text-linear  text-[6.25rem] not-italic font-bold leading-[100%] uppercase xmd:text-[2.94194rem] relative'>
                  {dataHiking?.label}
                </div>
                <div
                  className='text-white w-fit z-[500] bg-clip-border text-lg not-italic font-bold leading-[120%] flex 
                flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4  backdrop-blur-lg xmd:px-[0.353rem] xmd:text-[0.52956rem] md:mt-[0.3rem] xmd:py-[0.1765rem] px-3 py-1.5 rounded-3xl'
                >
                  Experience
                </div>
              </div>
              <div className='flex overflow-y-scroll scrollbar-dichvu xmd:max-h-[8rem] max-h-[18rem] xmd:w-[13.6875rem] w-[28.6875rem] items-start content-start gap-2 flex-wrap'>
                {dataHiking?.lists_place?.map((d, i) => (
                  <Link
                    href={`/${d?.link}`}
                    key={i}
                    className=''
                  >
                    <button
                      className='hover:bg-orange-normal-hover duration-300 transition-all text-white text-center text-[0.78906rem] not-italic font-medium leading-4 tracking-[0.03125rem] uppercase flex justify-center items-center gap-2.5 border 
                xmd:py-[0.4375rem] xmd:px-[1.1875rem] px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] border-solid border-[rgba(255,255,255,0.40)]'
                    >
                      {d?.name_place}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
            <div
              className='absolute left-[18.4rem] top-[5.4rem] tablet:left-[32.5rem] lg:left-[35rem] md:top-[6.5rem] text-white bg-orange-normal 
            text-[0.875rem] font-medium leading-[1.2] tracking-[0.00875rem]
            inline-flex justify-center items-center gap-2.5 px-2.5 py-1.5 rounded-[1.25rem]'
            >
              {dataHiking?.lists_image?.length}
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className='xmd:pr-[0.75rem] absolute lg:right-[0rem] md:right-[8rem] xmd:bottom-[10rem] bottom-[10.5rem] md:w-[38.0625rem] text-white xmd:text-left text-right text-base xmd:text-[0.875rem] not-italic font-normal leading-[150%] xmd:tracking-0.00219  tracking-[0.005rem]'>
          {dataBaner?.desc_text_bottom}
        </div>
      </div>
    </section>
  )
}

export default Banner
