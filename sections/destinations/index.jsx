
import React from 'react'
import './allDestinations.css'
import DiscoveryDestinations from './DiscoveryDestinations'
import Banner from './Banner'
import BannerMobile from '../common/banner'
import Breadcrumb from '@/components/breadcrumb'
const Destinations = ({dataAcf}) => {
  const dataBanner=dataAcf?.acf?.banner
  return (
    <main csName='alldestinations bd'>
      <section className='xmd:hidden'><Banner dataBanner={dataBanner} /></section>
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
