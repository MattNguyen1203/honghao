"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
const Banner = ({ dataBanner, dataBannerMobi }) => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: function () {
        var maxWidth = 769
        return window.innerWidth < maxWidth
      }
    })
    AOS.refresh()
  }, [])

  return (
    <section className='relative'>
      <h1 className='opacity-0 z-[-1] fixed top-0 left-0'>Blog</h1>
      <div
        className={` absolute top-0 left-0 w-full h-full bg-[#285137] opacity-95 transition-all duration-300 ${loaded ? '!opacity-0' : 'opacity-100'}`}
      ></div>
      <Image
        id="banner-image"
        priority
        alt='ảnh'
        layout="responsive"
        src={dataBanner?.image}
        width={1600}
        height={730}
        className={`fade-in object-cover w-full h-[50rem] xmd:hidden duration-500 transition-all`}
        // onLoad={() => setLoaded(true)}
        onLoadingComplete={() => setLoaded(true)}
      />
      <div className='object-cover absolute bottom-0 z-[10] left-0 w-full xmd:h-[9rem] h-[35.375rem] shrink-0 bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]'></div>
      <Image
        priority
        alt='ảnh'
        src={dataBannerMobi?.image}
        width={1600}
        height={730}
        className='w-full md:hidden object-cover'
      />
      <div className='absolute object-cover xmd:top-[57%] top-[48%] left-[52%] -translate-x-1/2 -translate-y-1/2'>
        <div className='md:hidden'>
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
          data-aos-duration="550"
          priority
          alt='ảnh'
          src={dataBanner?.image_title_big}
          width={1600}
          height={730}
          className='object-cover z-[60] w-[28.8125rem] h-[13.9375rem] mx-auto xmd:w-[15.52494rem] xmd:h-[5.575rem] shrink-0'
        />
        {/* <Image priority alt="ảnh" src={'/imgs/blog/main-title-mobi.png'} width={1600} height={730} className="md:hidden shrink-0" /> */}
      </div>
    </section>
  )
}

export default Banner
