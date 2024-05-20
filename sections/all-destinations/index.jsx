import SlideVideoTours from '@/components/slide-video-tour'
import React from 'react'
import './allDestinations.css'
import Breadcrumb from '@/components/breadcrumb'
import DiscoveryDestinations from './DiscoveryDestinations'
const AllDestinations = () => {
  return (
    <div className='alldestinations'>
      <section><SlideVideoTours /></section>
      <section><Breadcrumb divider /></section>
      {/* <section><DiscoveryDestinations /></section> */}

    </div>
  )
}

export default AllDestinations
