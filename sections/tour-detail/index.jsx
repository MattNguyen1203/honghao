"use client"
import React from 'react'
import './allDestinations.css'
import Breadcrumb from '@/components/breadcrumb'
import DiscoveryDestinations from './DiscoveryDestinations'
import Banner from './Banner'
import BannerMobile from '../common/banner'
const TourDetail = () => {
  return (
    <div className='alldestinations'>
      <section className='xmd:hidden'><Banner /></section>
      <section className='md:hidden'>

        <BannerMobile
          mainImg='/imgs/common/banner.jpg'
          mainText='/imgs/common/text.png'
          mainTextMb='/imgs/common/textMb.png'
        />
      </section>
      <section><Breadcrumb divider /></section>
      {/* <section><DiscoveryDestinations /></section> */}
      <section className='h-[1000px]'></section>
    </div>
  )
}

export default TourDetail
