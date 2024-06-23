import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/customCn/button'
import Link from 'next/link'
const StartPlanning = ({ dataStartPlanning, dataCommon }) => {
  return (
    <div className='w-full md:h-[48.875rem] mt-[3rem] relative'>
      <Image
        priority
        alt='ảnh'
        src={'/imgs/blogDetail/bg-start.png'}
        width={1601}
        height={801}
        className='w-full h-full xmd:hidden'
      />
      <Image
        priority
        alt='ảnh'
        src={'/imgs/blogDetail/bg-start-mobi.png'}
        width={380}
        height={430}
        className='w-full z-[-500] md:hidden'
      />

      <div className='absolute flex justify-center w-full md:-translate-y-1/2 xmd:top-[3.6rem] top-1/2'>
        <div

          data-aos="fade-up"
          data-aos-duration="1400" className='relative  flex items-center md:space-x-[2.3rem] h-full container w-full'>
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className='md:relative p-[0rem] xmd:hidden'>
            <Image
              data-aos="fade-up"
              data-aos-duration="1200"
              priority
              alt='ảnh xoay'
              src={'/imgs/blogDetail/xoay1.png'}
              width={250}
              height={250}
              className=' absolute z-50 xmd:size-[5.51563rem] circular-infinity xmd:top-[-6.5rem] top-[-4rem] xmd:right-[1.5rem] md:left-[-4rem] size-[12rem]'
            />

            <Image
              data-aos="fade-up"
              data-aos-duration="900"
              priority
              alt='ảnh'
              src={dataStartPlanning?.image}
              width={1101}
              height={651}
              className='rounded-[1.5rem] xmd:hidden md:w-[65.45rem] h-[40.02563rem]'
            />
          </div>
          <div className='flex flex-col mx-auto items-center'>
            <h2 data-aos="fade-up"
              data-aos-duration="900" className='md:w-[27.5rem] xmd:text-[1.5rem] mb-[2.26rem] xmd:mb-[0.75rem] md:h-[6.4375rem] tablet:!h-auto shrink-0 text-greyscale-70 text-center not-italic xmd:!font-black font-[400] xmd:tracking-[0.00875rem] xmd:leading-[1.2]'>
              {dataStartPlanning?.main_text}
            </h2>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className='w-[20.3125rem] md:h-[4.875rem] xmd:mb-[2rem] mb-[2.38rem] shrink-0 text-greyscale-20 text-center text-base xmd:text-[0.875rem] xmd:leading-[1.5] not-italic font-normal leading-[150%] tracking-[0.005rem]'>
              {dataStartPlanning?.sub_text}
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1100"
              className='inline-flex items-start space-x-[0.5625rem]'>
              <Button
                href={'/tours'}
                className='xmd:w-[8.9375rem]'
                variant='outline'
              >
                <Link href='/tours'>Our tours</Link>
              </Button>
              <Button
                icon
                className='xmd:w-[8.9375rem]'
              >
                <Link href={`tel:${dataCommon?.contact_info?.phone}`}>
                  Call us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartPlanning
