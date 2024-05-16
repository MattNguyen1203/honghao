import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/button'
const StartPlanning = () => {
  return (
    <div className='w-full h-[48.875rem] mt-[3rem] relative'>
      <Image priority alt="ảnh" src={'/imgs/blogDetail/bg-start.png'} width={1601} height={801} className="w-full h-full" />
      <div className='absolute flex justify-center w-full -translate-y-1/2 top-1/2'>
        <div className="relative flex items-center space-x-[2.3rem] h-full  xl:container w-full">
          <div className="relative">
            <Image priority alt="ảnh xoay" src={'/imgs/blogDetail/xoay.png'} width={250} height={250} className=" absolute circular-infinity top-[-4em] left-[-4rem] size-[12rem]" />

            <Image priority alt="ảnh" src={'/imgs/blogDetail/nature.png'} width={1101} height={651} className="p-[3rem] w-[65.45rem] h-[40.02563rem]" />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="w-[27.5rem] mb-[2.26rem] h-[6.4375rem] shrink-0 text-greyscale-70 text-center not-italic !font-light ">
              Start planning your
              journey of joy
            </h2>
            <div className="w-[20.3125rem] h-[4.875rem] mb-[2.38rem] shrink-0 text-greyscale-20 text-center text-base not-italic font-normal leading-[150%] tracking-[0.005rem]">
              Experience the raw beauty of Hà Giang with our immersive travel adventu a truly unique and authentic experience.

            </div>
            <div className="inline-flex items-start space-x-[0.5625rem]">
              <Button variant='outline'>Our tours</Button>
              <Button icon>Call us</Button>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default StartPlanning
