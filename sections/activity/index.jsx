
import React from 'react'
import Banner from './Banner'
import Discover from './Discover'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import './activity.css'
import Aos from '@/components/Aos'
const index = ({ data }) => {
  const dataBaner = data?.acf?.banner
  const dataDiscover = data?.acf?.discover
  const dataBanerMobi = data?.acf?.['banner-mobi']
  return (
    <Aos className='activity overflow-hidden'>
      <Banner dataBaner={dataBaner} dataBanerMobi={dataBanerMobi} />
      <div className='xmd:hidden'>
        <Breadcrumb divider >
          <BreadcrumbLink href='/activity'>Activity</BreadcrumbLink>
        </Breadcrumb></div>
      <Discover dataDiscover={dataDiscover} />
    </Aos>
  )
}

export default index

