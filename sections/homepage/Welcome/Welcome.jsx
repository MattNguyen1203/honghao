'use client'

import Image from 'next/image'
import React, {useEffect, useRef, useState} from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import SlideWelcome from './SlideWelcome'
import useStore from '@/app/(store)/store'

gsap.registerPlugin(ScrollTrigger)

const Welcome = ({data}) => {
  const parentRef = useRef()

  const isMobile = useStore((state) => state.isMobile)

  useEffect(() => {
    gsap.matchMedia().add('(min-width: 1024px)', () => {
      const otherAnimateTimeline = gsap.timeline({paused: true})
      otherAnimateTimeline
        .to(
          '#box-text',
          {
            top: '4rem',
          },
          '<',
        )
        .to(
          '#welcome_subText',
          {
            fontSize: '1rem',
          },
          '<',
        )
        .to(
          '#welcome_mainText',
          {
            width: '17.1875rem',
            height: '13.5rem',
            marginTop: '-3rem',
          },
          '<',
        )
        .to(
          '#box-img',
          {
            width: '100vw',
            height: '100vh',
            translateY: '0',
            duration: 2,
          },
          '<',
        )

      ScrollTrigger.create({
        trigger: parentRef.current,
        start: 'top 60%',
        scrub: 1,
        once: true,
        onEnter: () => otherAnimateTimeline.play(),
      })
    })
  }, [isMobile])

  return (
    <div
      className='min-w-screen min-h-screen xlg:min-w-full xlg:min-h-0 flex flex-col items-center mt-0 xmd:mt-[3rem] tablet:mt-[10rem] relative'
      ref={parentRef}
    >
      <div
        className='w-fit flex flex-col items-center absolute top-0 left-1/2 -translate-x-1/2 z-10 xlg:relative xlg:top-0 xlg:left-0 xlg:translate-x-0'
        id='box-text'
      >
        <div
          className='text-1125 xmd:text-0875 tablet:text-[2rem] font-bold leading-[1] text-greyscale-0/40 mb-[0.5rem]'
          id='welcome_subText'
        >
          {data?.subHeading}
        </div>
        <h2 className='text-green-light font-black xmd:text-[1.45rem]  tablet:text-[5rem]'>
          {data?.heading}
        </h2>
        <Image
          src='/imgs/home/beautiful.png'
          alt='hong hao travel'
          width={500}
          height={500}
          id='welcome_mainText'
          className='w-[23.875rem] h-[18.75rem] object-contain mt-[-1rem] xmd:w-[9rem] xmd:h-[7rem] tablet:w-[30rem] tablet:h-[20rem]'
        />
      </div>

      <div
        className='h-[29.8125rem] w-[53rem] translate-y-[12rem] xlg:translate-y-[0] xlg:w-full xmd:h-[13.183rem] xlg:h-[60rem] object-cover overflow-hidden'
        id='box-img'
      >
        <SlideWelcome listVid={data?.list_video} />
      </div>
    </div>
  )
}

export default Welcome
