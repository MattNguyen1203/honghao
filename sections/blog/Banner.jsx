import React from 'react'
import Image from 'next/image'
import Breadcrumb from '@/components/breadcrumb'
const Banner = ({ dataBanner, dataBannerMobi }) => {
  return (
    <section className='relative'>
      <Image priority alt="ảnh" src={dataBanner?.image} width={1600} height={730} className="w-full xmd:hidden" />
      <div className="absolute bottom-0 z-1 left-0 w-full h-[19.8125rem] shrink-0 bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]"></div>
      <Image priority alt="ảnh" src={dataBannerMobi?.image} width={1600} height={730} className="w-full md:hidden" />
      <div className="absolute xmd:top-[57%] top-[48%] left-[52%] -translate-x-1/2 -translate-y-1/2">
        <div className="md:hidden">
          <Breadcrumb />
        </div>
        <Image priority alt="ảnh" src={dataBanner?.image_title_big} width={1600} height={730} className="w-[28.8125rem] h-[13.9375rem] xmd:w-[13.52494rem] xmd:h-[5.575rem] shrink-0" />
        {/* <Image priority alt="ảnh" src={'/imgs/blog/main-title-mobi.png'} width={1600} height={730} className="md:hidden shrink-0" /> */}
      </div>
    </section>
  )
}

export default Banner
