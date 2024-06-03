import React from 'react'
import './allDestinations.css'
import DiscoveryDestinations from './DiscoveryDestinations'
import Banner from './Banner'
import BannerMobile from '../common/banner'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
const Destinations = ({ dataAcf, dataListCat }) => {
  const dataBanner = dataAcf?.acf?.banner
  return (
    <main className=''>
      <section className='xmd:hidden'>
        <Banner dataBanner={dataBanner} />
      </section>
      <section className='md:hidden'>
        <BannerMobile
          mainImg={dataBanner?.main_image || '/imgs/common/banner.jpg'}
          mainText='/imgs/common/text.png'
          mainTextMb='/imgs/common/textMb.png'
        />
      </section>
      {/* <section className='xmd:hidden'><Breadcrumb divider /></section> */}
      <section className=''>
        <Breadcrumb divider >
          <BreadcrumbLink href='/destination'>Destination</BreadcrumbLink>
        </Breadcrumb>
      </section>
      <section className='lg:min-h-[90vh] md:min-h-[88vh] xmd:min-h-[130vh] md:mb-[2rem] '>
        <DiscoveryDestinations
          dataListCat={dataListCat}
          dataAcf={dataAcf?.acf}
        />
      </section>
    </main>
  )
}

export default Destinations
