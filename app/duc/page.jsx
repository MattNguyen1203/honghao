'use client'

import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useRef, useState} from 'react'
import Image from 'next/image'
import ItemCard from './ItemCard'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger)
}

export default function page() {
  const container = useRef(null)
  const listTourHome = useRef(null)
  const [index, setIndex] = useState(0)

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: container.current,
        start: 'top top',
        end: '+=1800',
        scrub: true,
        pin: true,
        markers: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          listTourHome.current.style.transform = `translateY(-${
            Number(self.progress.toFixed(3)) * 80
          }%)`
          if (Number(self.progress.toFixed(3)) <= 0.15) {
            setIndex(0)
          }
          if (
            Number(self.progress.toFixed(3)) > 0.15 &&
            Number(self.progress.toFixed(3)) < 0.4
          ) {
            setIndex(1)
          }
          if (
            Number(self.progress.toFixed(3)) >= 0.4 &&
            Number(self.progress.toFixed(3)) < 0.6
          ) {
            setIndex(2)
          }
          if (
            Number(self.progress.toFixed(3)) >= 0.6 &&
            Number(self.progress.toFixed(3)) < 0.8
          ) {
            setIndex(3)
          }
          if (Number(self.progress.toFixed(3)) >= 0.8) {
            setIndex(4)
          }
        },
      })
    },
    {scope: container},
  )

  return (
    <>
      <div className='h-[500px] bg-black'></div>
      <section
        ref={container}
        className='relative w-full h-screen bg-white'
      >
        <div className='container pt-[5.63rem] flex justify-between'>
          <div>
            <h3 className='font-extrabold text-1125 text-greyscale-80 opacity-40'>
              EXPLORE
            </h3>
            <h2 className='mt-[0.75rem] text-35 font-black text-greyscale-80'>
              BEST TRIPS FOR YOU
            </h2>
            <Image
              className='w-[29.3rem] h-[28.1rem] object-contain mt-[2.44rem]'
              src={'/home/map.png'}
              alt='map'
              width={500}
              height={500}
            />
            <div>{index}</div>
          </div>
          <div className='w-[47.3125rem]'>
            <div
              ref={listTourHome}
              id='list_tour_home'
              className='flex flex-col w-full h-fit space-y-[2rem]'
            >
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <ItemCard />
                ))}
            </div>
          </div>
        </div>
        <button
          style={{writingMode: 'vertical-rl'}}
          className='absolute space-y-[0.5rem] right-0 -translate-y-1/2 top-1/2 bg-orange-normal w-[3.4rem] h-[9.4rem] rotate-180 flex justify-center items-center text-white rounded-tr-[0.5rem] rounded-br-[0.5rem] text-0.875 font-extrabold'
        >
          All tour
          <IconArrowRight />
          {/* writing-mode: vertical-lr; */}
        </button>
      </section>
      <div className='h-[1500px] bg-black'></div>
    </>
  )
}

const IconArrowRight = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      className='mt-[0.5rem] rotate-180'
    >
      <path
        d='M10.125 6H0'
        stroke='white'
        strokeWidth='2'
      />
      <g filter='url(#filter0_i_9336_22678)'>
        <path
          d='M12 6L6 0.75L8.41379 6L6 11.25L12 6Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_i_9336_22678'
          x='6'
          y='0.75'
          width='26'
          height='14.5'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood
            floodOpacity='0'
            result='BackgroundImageFix'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset
            dx='20'
            dy='4'
          />
          <feGaussianBlur stdDeviation='50' />
          <feComposite
            in2='hardAlpha'
            operator='arithmetic'
            k2='-1'
            k3='1'
          />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect1_innerShadow_9336_22678'
          />
        </filter>
      </defs>
    </svg>
  )
}
