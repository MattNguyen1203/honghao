'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/customCn/button'
import { cn } from '@/lib/utils'
const Banner = ({ dataBanner, dataBannerMobi }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className='relative xl:h-[100rem] overflow-hidden'>
      <h1 className='opacity-0 z-[-1] fixed top-0 left-0'>About us HongHao</h1>
      <div className={cn('absolute bottom-0 z-[5] left-0 w-full h-[139.375rem] xmd:h-[58.625rem] shrink-0 bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]',
        loaded ? ' opacity-100' : ' opacity-0'
      )}></div>
      <div
        className={` absolute top-0 left-0 z-[50] w-full h-[139.375rem]  bg-conicBanner opacity-100 transition-all duration-1000 xmd:duration-500 ${loaded ? '!opacity-0 pointer-events-none' : 'opacity-100'}`}
      ></div>
      <Image
        priority
        alt='ảnh'
        src={dataBanner?.image}
        width={1600}
        height={1935}
        className={cn(' xmd:hidden absolute z-0 object-cover h-full w-full', loaded ? '' : 'blur-lg xmd:blur-sm')}
        onLoadingComplete={() => setLoaded(true)}
      />

      <Image
        priority
        alt='ảnh'
        src={dataBannerMobi?.image}
        width={1600}
        height={1935}
        className={cn(' md:hidden object-cover absolute w-full h-[52.85963rem] shrink-0', loaded ? '' : 'blur-lg xmd:blur-sm')}
      />

      <div className='xl:container z-[6] relative xmd:h-[47.35963rem] md:left-[2rem] h-[100rem] xmd:mt-[4.63rem]'>
        {/* main title */}
        <Image
          data-aos="fade-up"
          data-aos-duration="900"
          priority
          alt='ảnh title web'
          src={dataBanner?.image_title_big}
          width={840}
          height={355}
          className=' xmd:ml-[1.5rem] brightness-110 xmd:-translate-y-[-3rem]  xmd:w-[19.098rem] xmd:h-[7.42925rem]  md:absolute md:left-[3rem]  xl:left-[0rem]  left-[0rem] top-[9rem] w-[57.44256rem] h-[22.1875rem]'
        />
        {/* <Image priority alt="ảnh title mobi" src={'/imgs/about/main-title-mobi.png'} width={840} height={355} className=" xmd:ml-[1.5rem] md:hidden w-[19.098rem] h-[7.42925rem]" /> */}
        <div className=' xmd:mt-[4.8rem] xmd:mx-[1rem]  md:absolute flex flex-col md:left-[3.5rem] xl:left-[0rem] left-[0rem] top-[32rem] items-start space-y-[2.0625rem]'>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className=' xmd:w-[19.9rem] max-h-[10rem] overflow-y-auto md:w-[52.3125rem] text-white xmd:text-[0.875rem] text-base font-normal leading-[150%] xmd:tracking-[0.00219rem] tracking-[0.005rem]'>
            {dataBanner?.desc_text}
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1100"
            className=' xmd:hidden flex items-start xmd:w-full xmd:space-x-[0.5rem] space-x-[1rem]'>
            <Button
              className='xmd:!flex-1 xmd:!w-max xmd:shrink-0'
              icon
            >
              BOOK NOW
            </Button>
            <Button
              className='xmd:!flex-1 xmd:!w-max xmd:shrink-0'
              icon
              variant='outline_white'
            >
              All tour
            </Button>
          </div>
        </div>

        <Image
          data-aos="fade-up"
          data-aos-duration="1200"
          priority
          alt='map'
          src={'/map2.png'}
          width={9950}
          height={9950}
          className='w-[57rem] left-[33%] xmd:hidden h-[82rem] absolute bottom-0'
        />

        <Image
          priority
          alt='map mobi'
          src={'/imgs/about/map-mobi.png'}
          width={9950}
          height={9950}
          className='absolute bottom-[0.6rem] left-0 md:hidden'
        />
        {/* 10000 */}
        <div className='absolute w-[4.75rem] h-[6.25rem] left-[0rem] top-[16.5rem] md:left-[2.27rem] xl:left-[-1.9rem] md:top-[51.5rem]'>
          <div className=' relative'>
            <div className=' absolute xmd:top-[11rem] xmd:left-[17.8rem] md:left-[50.5rem] md:top-[3rem] inline-flex flex-col items-center w-[8.75013rem]'>
              <svg
                className='circle xmd:size-[1.8rem] xmd:mt-[0.4rem] size-[2.25rem] mr-[0.95rem]'
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
              data-aos-duration="900" className='xmd:top-[7.5rem] xmd:left-[9rem]  md:left-[63rem] absolute flex flex-col items-end xmd:space-y-[0.75rem]'>
              <h2 className=' text-linear bg-[linear-gradient(180deg,#FFF_30.31%,rgba(255,255,255,0.00)_87.67%)] bg-clip-text font-tripsans text-[7.25rem] xmd:text-[3.5rem]  not-italic font-bold leading-[100%] uppercase relative'>
                {dataBanner?.info1}
              </h2>
              <div
                className='text-white w-fit z-[500] bg-clip-border text-lg not-italic font-bold leading-[120%] flex 
                flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4  backdrop-blur-lg xmd:text-[0.875rem] px-3 py-1.5 rounded-3xl'
              >
                Visitors experience
              </div>
            </div>
          </div>
        </div>
        {/* 13 year */}
        <div className='absolute w-[4.75rem] h-[6.25rem] xmd:left-[-2.6rem] xmd:bottom-[11rem] xl:left-[-3.6rem]  md:left-[-0.2rem] md:top-[65.5rem]'>
          <div className=' relative '>
            <div className=' absolute top-[12.5rem] left-[0.5rem] md:left-[30rem] md:top-[7rem] xl:left-[29.4rem] xl:top-[7rem] inline-flex flex-col items-center w-[8.75013rem]'>
              <svg
                className='circle xmd:size-[1.8rem] size-[2.25rem] mr-[0.95rem]'
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
              data-aos-duration="900" className='xmd:top-[4.5rem] left-[3.5rem] top-[4.3rem] absolute flex flex-col items-start xmd:space-y-[0.75rem] '>
              <div className=' text-linear bg-[linear-gradient(180deg,#FFF_30.31%,rgba(255,255,255,0.00)_87.67%)] bg-clip-text w-max text-[7.25rem] xmd:text-[3.5rem]  not-italic font-bold leading-[100%] uppercase relative'>
                {dataBanner?.info2}
              </div>
              <div
                className='text-white w-fit z-[500] bg-clip-border text-lg not-italic font-bold leading-[120%] flex 
                flex-col bg-[rgba(255,255,255,0.15)] items-start gap-4  backdrop-blur-lg  xmd:text-[0.875rem]  px-3 py-1.5 rounded-3xl'
              >
                Experience
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up"
          data-aos-duration="900" className='absolute xmd:hidden xl:right-[3rem] md:right-[10rem] xmd:bottom-[9rem] bottom-[16.19rem] md:w-[38.0625rem] text-white xmd:text-left xmd:container text-right text-base xmd:text-[0.875rem] not-italic font-normal leading-[150%] xmd:tracking-[0.00219rem]  tracking-[0.005rem]'>
          {dataBanner?.desc_text_bottom}
        </div>
      </div>
    </section>
  )
}

export default Banner
