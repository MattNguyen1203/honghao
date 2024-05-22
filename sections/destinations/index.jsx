
import React from 'react'
import './allDestinations.css'
import DiscoveryDestinations from './DiscoveryDestinations'
import Banner from './Banner'
import BannerMobile from '../common/banner'
import Breadcrumb from '@/components/breadcrumb'
const Destinations = () => {
  return (
    <main csName='alldestinations'>
      <section className='xmd:hidden'><Banner /></section>
      <section className='md:hidden'>

        <BannerMobile
          mainImg='/imgs/common/banner.jpg'
          mainText='/imgs/common/text.png'
          mainTextMb='/imgs/common/textMb.png'
        />
      </section>
      {/* <section className='xmd:hidden'><Breadcrumb divider /></section> */}
      <section className=''><Breadcrumb type='section' divider /></section>
      <section><DiscoveryDestinations /></section>
    </main>
  )
}

export default Destinations
