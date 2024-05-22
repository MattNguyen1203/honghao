"use client"
import React from 'react'
import './tour-detail.css'
import Breadcrumb from '@/components/breadcrumb'
import Banner from './Banner'
import FaqAboutTrip from './FaqAboutTrip'
const TourDetail = () => {
  return (
    <div className='alldestinations '>
      <section><Banner /></section>
      <section className='xmd:hidden'><Breadcrumb divider /></section>
      <section><FaqAboutTrip /></section>
    </div>
  )
}

export default TourDetail
