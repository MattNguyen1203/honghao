import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, {useEffect, useRef} from 'react'
gsap.registerPlugin(ScrollTrigger)

const CloudAnimate = () => {
  const imageRef = useRef()
  useEffect(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: '30% center',
      },
      left: '0',
      duration: 3,
    })
  }, [])
  return (
    <div
      className='absolute right-[-50rem] top-0'
      ref={imageRef}
    >
      <Image
        src='/imgs/home/animate.png'
        alt='hong hao travel'
        width={1000}
        height={1000}
        className='w-screen h-[44.375rem] object-contain xmd:hidden xlg:right-0 z-0'
      />
      <Image
        src='/imgs/home/cloud.png'
        alt='hong hao travel'
        width={500}
        height={500}
        className='absolute top-[1rem] left-1/2 animate-cloud delay-300 opacity-30 tablet:hidden'
      />
      <Image
        src='/imgs/home/cloud2.png'
        alt='hong hao travel'
        width={500}
        height={500}
        className='absolute top-[2rem] left-1/2 animate-cloud2 tablet:hidden'
      />
    </div>
  )
}

export default CloudAnimate
