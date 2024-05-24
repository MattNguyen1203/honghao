'use client'
import React, {useEffect} from 'react'
import Banner from './Banner/Banner'
import About from './About/About'
import './homepage.css'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
const Homepage = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#homepage__banner',
      pin: true,
      start: 'top top',
      pinSpacing: false,
    })
  }, [])
  return (
    <div>
      <Banner />
      <About />
    </div>
  )
}

export default Homepage
