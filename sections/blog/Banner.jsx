import React from 'react'
import Image from 'next/image'
import Breadcrumb from '@/components/breadcrumb'
const Banner = () => {
  return (
    <section className='relative'>
      <Image priority alt="ảnh" src={'/imgs/blog/banner.jpg'} width={1600} height={730} className="w-full xmd:hidden" />
      <Image priority alt="ảnh" src={'/imgs/blog/banner-mobi.jpg'} width={1600} height={730} className="w-full md:hidden" />
      <div className="absolute xmd:top-[57%] top-[48%] left-[52%] -translate-x-1/2 -translate-y-1/2">
        <div className="md:hidden">
          <Breadcrumb />
        </div>
        <Image priority alt="ảnh" src={'/imgs/blog/main-title.png'} width={1600} height={730} className="w-[28.8125rem] xmd:hidden h-[13.9375rem] shrink-0" />
        <Image priority alt="ảnh" src={'/imgs/blog/main-title-mobi.png'} width={1600} height={730} className="md:hidden shrink-0" />
      </div>
    </section>
  )
}

export default Banner
