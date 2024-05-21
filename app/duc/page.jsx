'use client'

import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useRef, useState} from 'react'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger)
}

export default function page() {
  const container = useRef(null)
  const listTourHome = useRef(null)
  const [index, setIndex] = useState(0)
  console.log('🚀 ~ page ~ index:', index)
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
        <div className='container pt-[5.63rem] grid grid-cols-2'>
          <div>
            <h3>EXPLORE</h3>
            <h2 className='mt-[0.75rem]'>BEST TRIPS FOR YOU</h2>
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
                  <div
                    className='w-full h-[34.375rem] item_card'
                    key={index}
                  >
                    <Image
                      className='object-cover size-full'
                      src={'/home/card.png'}
                      alt='card'
                      width={500}
                      height={600}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <button
          style={{writingMode: 'vertical-rl'}}
          className='absolute right-0 -translate-y-1/2 top-1/2 bg-orange-normal w-[3.4rem] h-[9.4rem] rotate-180 flex justify-center items-center text-white'
        >
          All tour
          {/* writing-mode: vertical-lr; */}
        </button>
      </section>
      <div className='h-[1500px] bg-black'></div>
    </>
  )
}
