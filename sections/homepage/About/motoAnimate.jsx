'use client'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, {useEffect} from 'react'

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin)

const MotoAnimate = () => {
  useEffect(() => {
    const motionPathTimeline = gsap.timeline({paused: true})
    motionPathTimeline
      .from('#line_path', {
        drawSVG: '0%',
        duration: 3,
      })
      .to('#moto', {
        motionPath: {
          path: '#line_path',
          start: 0.1,
          end: 1,
          fromCurrent: true,
        },
        duration: 5,
        transformOrigin: '-50% -50%',
        opacity: 1,
      })
      .to('#animate', {
        opacity: 0,
        duration: 1,
      })

    ScrollTrigger.create({
      trigger: '#animate',
      start: 'top center',
      onEnter: () => motionPathTimeline.play(),
    })
  }, [])
  return (
    <div
      className='max-h-full absolute top-[-4rem] left-1/2 z-10 xlg:hidden'
      id='animate'
    >
      <div
        id='moto'
        className='opacity-0'
      >
        <Image
          src='/imgs/home/motobike.png'
          alt=''
          width={50}
          height={50}
          className='size-[5rem] -translate-x-[50%] rotate-[30deg]'
        />
      </div>

      <svg
        width='68'
        height='714'
        viewBox='0 0 68 714'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12.1582 1.89551C9.56033 24.1217 1.63281 54.4379 1.63281 76.8445C1.63281 94.6201 5.52653 113.236 2.49001 130.848C-1.15298 151.977 12.7991 186.622 24.8723 203.614C41.5076 227.027 56.6881 254.78 62.9698 283.047C67.5053 303.457 66.8678 323.635 63.7318 344.194C62.2826 353.694 63.8138 363.39 62.3031 372.957C60.6279 383.567 58.2166 394.057 56.1123 404.578C52.6306 421.987 46.8569 437.015 36.7778 451.915C29.2215 463.085 23.0426 472.206 22.1102 485.726C20.9194 502.992 12.5121 520.164 9.34756 537.253C6.60436 552.066 10.2048 566.045 10.2048 580.684C10.2048 603.727 8.36815 626.026 14.9669 648.022C21.4484 669.626 13.2051 691.359 15.3479 712.787'
          stroke='#E64827'
          stroke-width='2'
          stroke-linecap='round'
          id='line_path'
        />
      </svg>
    </div>
  )
}

export default MotoAnimate