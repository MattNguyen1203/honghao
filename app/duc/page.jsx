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
  console.log('🚀 ~ page ~ index:', index)
  let mm = gsap.matchMedia()

  mm.add('(min-width: 1025px)', () => {
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
  })

  return (
    <>
      <div className='h-[500px] bg-black'></div>
      <section
        ref={container}
        className='relative w-full lg:h-screen bg-white'
      >
        <div className='lg:container subContainer xmd:!px-0 tablet:!px-0 pt-[5.63rem] flex justify-between xmd:flex-col tablet:flex-col xmd:mb-[1.5rem] lg:space-x-[0.75rem]'>
          <div className='xmd:mb-[2rem] xmd:pl-[0.75rem]'>
            <h3 className='text-1125 xmd:text-0875 font-extrabold xmd:text-greyscale-60 text-greyscale-80 opacity-40'>
              EXPLORE
            </h3>
            <h2 className='mt-[0.75rem] text-35 xmd:text-25 font-black text-greyscale-80 tablet:mb-[2rem]'>
              BEST TRIPS <br className='md:hidden' /> FOR YOU
            </h2>
            <Image
              className='xmd:hidden tablet:hidden w-[29.3rem] h-[28.1rem] object-contain mt-[2.44rem]'
              src={'/home/map.png'}
              alt='map'
              width={500}
              height={500}
            />
            {/* <div>{index}</div> */}
          </div>
          <div className='hidden_scrollbar lg:w-[47.3125rem] tablet:h-[50rem] w-full lg:h-auto h-[23.33956rem] tablet:relative xmd:relative tablet:overflow-x-auto xmd:overflow-x-auto'>
            <div
              ref={listTourHome}
              id='list_tour_home'
              className='flex lg:flex-col lg:w-full w-fit h-fit lg:space-y-[2rem] lg:space-x-0 space-x-[0.75rem] lg:static absolute tablet:overflow-x-auto xmd:overflow-x-auto top-0 left-0 lg:pl-0 pl-[0.75rem]'
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
          className='top-0 translate-y-1/2 absolute space-y-[0.5rem] right-0 lg:-translate-y-1/2 lg:top-1/2 bg-orange-normal lg:w-[3.4rem] lg:h-[9.4rem] w-[2.125rem] h-[7.9rem] rotate-180 flex justify-center items-center text-white rounded-tr-[0.5rem] rounded-br-[0.5rem] text-0.875 font-extrabold'
        >
          All tour
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
          {/* writing-mode: vertical-lr; */}
        </button>
      </section>
      <div className='h-[1500px] bg-black'></div>
    </>
  )
}
