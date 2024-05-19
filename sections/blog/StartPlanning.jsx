import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/customCn/button'
const StartPlanning = () => {
  return (
    <div className='w-full md:h-[48.875rem] mt-[3rem] relative'>
      <Image priority alt="ảnh" src={'/imgs/blogDetail/bg-start.png'} width={1601} height={801} className="w-full h-full xmd:hidden" />
      <Image priority alt="ảnh" src={'/imgs/blogDetail/bg-start-mobi.png'} width={380} height={430} className="w-full z-[-20] h-[26.3125rem] md:hidden" />

      <div className='absolute flex justify-center w-full md:-translate-y-1/2 xmd:top-[3.6rem] top-1/2'>
        <div className="relative flex items-center md:space-x-[2.3rem] h-full  xl:container w-full">
          <div className="md:relative">
            <Image priority alt="ảnh xoay" src={'/imgs/blogDetail/xoay1.png'} width={250} height={250} className=" absolute xmd:size-[5.51563rem] circular-infinity xmd:top-[-6.5rem] top-[-4rem] xmd:right-[1.5rem] md:left-[-4rem] size-[12rem]" />

            <Image priority alt="ảnh" src={'/imgs/blogDetail/nature.png'} width={1101} height={651} className="p-[3rem] xmd:hidden md:w-[65.45rem] h-[40.02563rem]" />
          </div>
          <div className="flex flex-col mx-auto items-center">
            <h2 className="md:w-[27.5rem] xmd:text-[1.5rem] mb-[2.26rem] xmd:mb-[0.75rem] md:h-[6.4375rem] shrink-0 text-greyscale-70 text-center not-italic xmd:!font-black xmd:tracking-[0.00875rem] xmd:leading-[1.2] !font-light ">
              Start planning your
              journey of joy
            </h2>
            <div className="w-[20.3125rem] md:h-[4.875rem] xmd:mb-[2rem] mb-[2.38rem] shrink-0 text-greyscale-20 text-center text-base xmd:text-[0.875rem] xmd:leading-[1.5] not-italic font-normal leading-[150%] tracking-[0.005rem]">
              Experience the raw beauty of Hà Giang with our immersive travel adventu a truly unique and authentic experience.

            </div>
            <div className="inline-flex items-start space-x-[0.5625rem]">
              <Button className='xmd:w-[8.9375rem]' variant='outline'>Our tours</Button>
              <Button icon className='xmd:w-[8.9375rem]'>Call us</Button>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default StartPlanning