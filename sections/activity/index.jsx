
import React from 'react'
import Banner from './Banner'
import Discover from './Discover'
import Breadcrumb from '@/components/breadcrumb'
import './activity.css'
const index = () => {
  return (
    <div className='activity overflow-x-hidden'>
      <Banner />
      <div className='xmd:hidden'><Breadcrumb divider /></div>
      <Discover />
    </div>
  )
}

export default index

