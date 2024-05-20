import SlideVideoTours from '@/components/slide-video-tour'
import React from 'react'
import './allDestinations.css'
import Breadcrumb from '@/components/breadcrumb'
import DiscoveryDestinations from './DiscoveryDestinations'
import Banner from './Banner'
const AllDestinations = () => {
  return (
    <div className='alldestinations'>
      <section><Banner /></section>
      <section><Breadcrumb divider /></section>
      <section><DiscoveryDestinations /></section>
      <section className='h-[1000px]'></section>
    </div>
  )
}

export default AllDestinations
