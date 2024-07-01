import React from 'react'
import './allDestinations.css'
import DiscoveryDestinations from './DiscoveryDestinations'
import Banner from './Banner'
import BannerMobile from '../common/banner'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import Aos from '@/components/Aos'
const Destinations = ({ dataAcf, dataListCat }) => {
  const dataBanner = dataAcf?.acf?.banner
  const text = dataBanner?.image_title_big?.url
  const textMobile = dataBanner?.image_title_big_mobile?.url
  return (
    <Aos className={'alldestinations'}>
      <section className='xmd:hidden'>
        <Banner dataBanner={dataBanner} />
      </section>
      <section className='md:hidden'>
        <BannerMobile
          mainImg={dataBanner?.main_image?.url || '/imgs/common/banner.jpg'}
          mainText={text}
          mainTextMb={textMobile}
        />
      </section>
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
    </Aos>
  )
}

export default Destinations
