"use client"
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from 'react'

const Banner = ({ mainImg, mainText, mainTextMb }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: function () {
        var maxWidth = 769
        return window.innerWidth < maxWidth
      }
    })
    AOS.refresh()
  }, [])
  return (
    <div className='w-full h-screen xmd:h-[21.04713rem] relative before:w-full before:h-[24.25rem] before:flex before:absolute before:bottom-0 before:left-0 before:bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)] before:z-10'>
      <h1 className='opacity-0 z-[-1] fixed top-0 left-0'>Contact Us</h1>
      <div
        className={` absolute top-0 left-0 w-full h-full bg-[#285137] opacity-95 transition-all duration-300 ${loaded ? '!opacity-0' : 'opacity-100'}`}
      ></div>
      <Image
        src={mainImg}
        alt='FAQ'
        width={1600}
        height={728}
        className='object-cover w-full h-full'
        onLoadingComplete={() => setLoaded(true)}
      />
      <Image
        data-aos="fade-up"
        data-aos-duration="550"
        src={mainText}
        alt='FAQ'
        width={1600}
        height={728}
        className='w-[52.1105rem] h-[22.1875rem] object-contain absolute top-[30%] left-[26%] z-10 flex xmd:hidden'
      />
      <Image
        src={mainTextMb}
        alt='FAQ'
        width={1600}
        height={728}
        className='w-[18.09813rem] h-[7.55425rem] object-contain absolute z-[500] top-1/2 left-[1.25rem] -translate-y-1/2 hidden xmd:flex'
      />
    </div>
  )
}

export default Banner
