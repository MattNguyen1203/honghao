'use client'

import ClientSay from './ClientSay'
import OurTeam from '@/layouts/team'
import Season from './Season'
import './styles.css'
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
    <main>
      <Banner />
      <About />
      <div className='h-[50vh]' />
      <ClientSay />
      <OurTeam
        backgroundImage={'/imgs/home/backround-image-our-team.png'}
        backgroundImageMobile={'/imgs/home/bg-image-our-team-mobile.png'}
        darkTheme
        forHomePage
      />
      <Season />
    </main>
  )
}

export default Homepage
