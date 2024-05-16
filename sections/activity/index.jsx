
import React from 'react'
import Banner from './Banner'
import Discover from './Discover'
import Breadcrumb from '@/components/breadcrumb'

const index = () => {
  return (
    <div className='activity'>
      <Banner />
      <div className='xmd:hidden'><Breadcrumb /></div>
      <Discover />
      <div className='h-[2000px]'></div>
    </div>
  )
}

export default index

