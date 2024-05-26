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
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)
const Homepage = ({dataAcf, dataWeather}) => {
  useEffect(() => {
    gsap.matchMedia().add('(min-width: 1024px)', () => {
      ScrollTrigger.create({
        trigger: '#homepage__banner',
        pin: true,
        start: 'top top',
        pinSpacing: false,
      })
    })
  }, [])
  return (
    <main>
      <Banner dataBanner={dataAcf?.banner} />
      <About dataAbout={dataAcf} />
      <ClientSay dataReview={dataAcf?.client_say} />
      <div className='flex relative pb-[14.5rem] xmd:pb-[6rem] bg-[linear-gradient(180deg,#122718_7.6%,rgba(18,39,24,0.71)_43.62%,#122718_79.64%)] w-full h-fit'>
        <Image
          src='/imgs/home/bannerBg2.jpg'
          alt='hong hao travel'
          width={1920}
          height={1080}
          className='w-full h-full object-cover absolute top-0 left-0 z-[-1]'
        />
        <OurTeam darkTheme />
      </div>
      <Season data={dataAcf?.weather} dataWeather={dataWeather} />
    </main>
  )
}

export default Homepage
