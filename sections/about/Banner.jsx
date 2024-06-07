'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/customCn/button'

const Banner = ({ dataBanner, dataBannerMobi }) => {
  return (
    <section className='relative xl:h-[100rem] overflow-hidden'>
      <Image
        priority
        alt='ảnh'
        src={dataBanner?.image}
        width={1600}
        height={1935}
        className=' xmd:hidden absolute z-0 h-full w-full'
      />
      <div className='absolute bottom-0 z-[5] left-0 w-full h-[139.375rem] xmd:h-[58.625rem] shrink-0 bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]'></div>

      <Image
        priority
        alt='ảnh'
        src={dataBannerMobi?.image}
        width={1600}
        height={1935}
        className=' md:hidden absolute w-full h-[49.35963rem] shrink-0'
      />

      <div className='xl:container  z-[6] relative xmd:h-[42.35963rem] md:left-[2rem] h-[100rem] xmd:mt-[6.9rem]'>
        {/* main title */}
        <Image
          priority
          alt='ảnh title web'
          src={dataBanner?.image_title_big}
          width={840}
          height={355}
          className=' xmd:ml-[1.5rem]  xmd:w-[19.098rem] xmd:h-[7.42925rem]  md:absolute md:left-[3rem]  xl:left-[0rem]  left-[0rem] top-[9rem] w-[57.44256rem] h-[22.1875rem]'
        />
        {/* <Image priority alt="ảnh title mobi" src={'/imgs/about/main-title-mobi.png'} width={840} height={355} className=" xmd:ml-[1.5rem] md:hidden w-[19.098rem] h-[7.42925rem]" /> */}
        <div className=' xmd:mt-[1.8rem] xmd:mx-[1rem]  md:absolute flex flex-col md:left-[3.5rem] xl:left-[0rem] left-[0rem] top-[32rem] items-start space-y-[2.0625rem]'>
          <div className=' xmd:w-[20.9rem] md:w-[52.3125rem] mx-auto text-white xmd:text-[0.875rem] text-base font-normal leading-[150%] xmd:tracking-[0.00219rem] tracking-[0.005rem]'>
            {dataBanner?.desc_text}
          </div>
          <div className=' xmd:hidden flex items-start xmd:w-full xmd:space-x-[0.5rem] space-x-[1rem]'>
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
          priority
          alt='map'
          src={'/imgs/activity/map.png'}
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
        <div className='absolute w-[4.75rem] h-[6.25rem] left-[0rem] top-[13rem] md:left-[2.27rem] xl:left-[-1.9rem] md:top-[51.5rem]'>
          <div className=' relative'>
            <div className=' absolute xmd:top-[11rem] xmd:left-[17.8rem] md:left-[50.5rem] md:top-[3rem] inline-flex flex-col items-center w-[8.75013rem]'>
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
            <div className='xmd:top-[7.5rem] xmd:left-[9rem]  md:left-[63rem] absolute flex flex-col items-end xmd:space-y-[0.75rem]'>
              <h2 className=' text-linear bg-[linear-gradient(180deg,#FFF_30.31%,rgba(255,255,255,0.00)_87.67%)] bg-clip-text font-tripsans text-[7.25rem] xmd:text-[3.5rem]  not-italic font-bold leading-[100%] uppercase relative'>
                10.000
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
            <div className='xmd:top-[4.5rem] left-[3.5rem] top-[4.3rem] absolute flex flex-col items-start xmd:space-y-[0.75rem] '>
              <div className=' text-linear bg-[linear-gradient(180deg,#FFF_30.31%,rgba(255,255,255,0.00)_87.67%)] bg-clip-text w-max text-[7.25rem] xmd:text-[3.5rem]  not-italic font-bold leading-[100%] uppercase relative'>
                13 year
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
        <div className='absolute xmd:hidden xl:right-[3rem] md:right-[10rem] xmd:bottom-[9rem] bottom-[16.19rem] md:w-[38.0625rem] text-white xmd:text-left xmd:container text-right text-base xmd:text-[0.875rem] not-italic font-normal leading-[150%] xmd:tracking-[0.00219rem]  tracking-[0.005rem]'>
          {dataBanner?.desc_text}
        </div>
      </div>
    </section>
  )
}

export default Banner
