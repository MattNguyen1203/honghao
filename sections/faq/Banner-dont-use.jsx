"use client"
import Image from 'next/image'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
const Banner = ({ mainImg, mainText, mainTextMb, mainImgMobile }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={cn('w-full h-screen xmd:h-[21.04713rem] relative before:w-full  before:h-[24.25rem] before:flex before:absolute before:bottom-0 before:left-0 before:bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)] before:z-10',
      loaded ? ' opacity-100' : ' opacity-0'
    )}>
      <div
        className={` absolute top-0 left-0 z-[500] w-full h-full  bg-conicBanner opacity-100 transition-all duration-1000 xmd:duration-500 ${loaded ? '!opacity-0' : 'opacity-100'}`}
      ></div>
      <Image
        src={mainImg}
        alt='FAQ'
        width={1600}
        height={728}
        className={cn('object-cover w-full h-full xmd:hidden transition-all duration-1000 xmd:duration-500', loaded ? '' : 'blur-lg  xmd:blur-sm')}
        onLoadingComplete={() => setLoaded(true)}
      />
      <Image
        src={mainImgMobile}
        alt='FAQ'
        width={1600}
        height={728}
        className='object-cover w-full h-full md:hidden'
      />
      <Image
        // data-aos="fade-up"
        // data-aos-duration="550"
        src={mainText}
        alt='FAQ'
        width={1600}
        height={728}
        className='w-[52.1105rem] h-[22.1875rem] object-contain absolute top-[30] left-[30%] z-10 flex xmd:hidden'
      />
      <Image
        src={mainTextMb}
        alt='FAQ'
        width={1600}
        height={728}
        className='w-[18.09813rem] h-[7.55425rem] object-contain absolute top-1/2 left-[1.25rem] -translate-y-1/2 z-10 hidden xmd:flex'
      />
    </div>
  )
}

export default Banner
