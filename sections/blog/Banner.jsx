"use client"
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
const Banner = ({ dataBanner, dataBannerMobi }) => {

  const [loaded, setLoaded] = useState(false);

  return (
    <section className='relative'>
      <h1 className='opacity-0 z-[-1] fixed top-0 left-0'>Blog</h1>
      <div
        className={` absolute top-0 left-0 w-full h-full z-50  bg-conicBanner opacity-100 transition-all duration-1000 xmd:duration-500 ${loaded ? '!opacity-0 pointer-events-none' : 'opacity-100'}`}
      ></div>
      <Image
        id="banner-image"
        priority
        alt='ảnh'
        layout="responsive"
        src={dataBanner?.image}
        width={1600}
        height={730}
        className={cn(`fade-in object-cover w-full h-[50rem] xmd:hidden transition-all duration-1000 xmd:duration-500`,
          loaded ? '' : 'blur-lg'
        )}
        onLoadingComplete={() => setLoaded(true)}
      />
      <div className={cn('object-cover absolute bottom-0  transition-all duration-1000 xmd:duration-500 left-0 w-full xmd:h-[15rem] h-[35.375rem] shrink-0 bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]',
        loaded ? ' opacity-100' : ' opacity-0'
      )}></div>
      <Image
        priority
        alt='ảnh'
        src={dataBannerMobi?.image}
        width={1600}
        height={730}
        className={cn('w-full md:hidden object-cover', loaded ? '' : 'blur-sm')}
        onLoadingComplete={() => setLoaded(true)}
      />
      <div className='absolute xmd:space-y-[-0.7rem] object-cover z-[20] xmd:top-[57%] top-[48%] left-[52%] -translate-x-1/2 -translate-y-1/2'>
        <div className='md:hidden xmd:mr-3'>
          <Breadcrumb isBanner>
            <BreadcrumbLink
              isBanner
              href='/blog'
            >
              Blog
            </BreadcrumbLink>
          </Breadcrumb>
        </div>
        <Image
          data-aos="fade-up"
          data-aos-duration="900"
          priority
          alt='ảnh'
          src={dataBanner?.image_title_big}
          width={1600}
          height={730}
          className='object-contain brightness-110 z-[60] w-[28.8125rem] h-[13.9375rem] mx-auto xmd:w-[15.52494rem] xmd:h-[5.575rem] shrink-0'
        />
        {/* <Image priority alt="ảnh" src={'/imgs/blog/main-title-mobi.png'} width={1600} height={730} className="md:hidden shrink-0" /> */}
      </div>
    </section>
  )
}

export default Banner
