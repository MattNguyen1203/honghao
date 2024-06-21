'use client'

import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useRef, useState} from 'react'
import Image from 'next/image'
import ItemCardBestTrip from './ItemCardBestTrip'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger)
}

export default function BestTrips({listBestTrip}) {
  const sectionRef = useRef(null)
  const listTourHome = useRef(null)
  const [index, setIndex] = useState(0)

  useGSAP(() => {
    const lengthTour = listBestTrip.length
    const scrollPerTour = 120
    const scrollLength = lengthTour * (window.innerHeight / 100) * scrollPerTour
    let mm = gsap.matchMedia()
    mm.add('(min-width: 1024px)', () => {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${scrollLength}`,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const index = Math.min(
              Math.max(Math.floor(self.progress / (1 / lengthTour)), 0),
              lengthTour - 1,
            )
            listTourHome.current.style.transform = `translateY(-${
              Math.min(
                Math.max(self.progress / (lengthTour / (lengthTour - 1)), 0),
                1 - 1 / lengthTour,
              ) * 100
            }%)`
            setIndex(index)
          },
        },
      })
    })
  })

  return (
    <section
      ref={sectionRef}
      className='relative w-full bg-white lg:h-screen pb-[8rem]'
    >
      <div className='lg:container subContainer xmd:!px-0 xmd:pt-[3rem] flex justify-between xmd:flex-col tablet:flex-col xmd:mb-[1.5rem] lg:space-x-[0.75rem]'>
        <div className='xmd:mb-[2rem] xmd:pl-[0.75rem] tablet:pl-[4rem]'>
          <h3 className='font-extrabold text-1125 xmd:text-0875 xmd:text-greyscale-60 text-greyscale-80 opacity-40 pt-[5.4rem]'>
            EXPLORE
          </h3>
          <h2 className='mt-[0.75rem] font-londrina xmd:leading-[1.2] text-35 xmd:text-25 font-black text-greyscale-80 tablet:mb-[2rem]'>
            BEST TRIPS <br className='md:hidden' /> FOR YOU
          </h2>
          <Image
            className='xmd:hidden tablet:hidden w-[29.3rem] h-[28.1rem] object-contain mt-[2.44rem]'
            src={listBestTrip?.[index]?.infos?.map_tour_image?.url}
            alt='map'
            width={500}
            height={500}
          />
        </div>
        <div className='hidden_scrollbar lg:w-[47.3125rem] h-auto w-full tablet:relative xmd:relative tablet:overflow-x-auto xmd:overflow-x-auto pt-[5.36rem] right-fucking-col'>
          <div
            ref={listTourHome}
            id='list_tour_home'
            className='xmd:translate-none flex lg:flex-col lg:w-full w-fit h-fit lg:static absolute tablet:overflow-x-auto xmd:overflow-x-auto top-0 left-0 lg:pl-0 pl-[0.75rem] xmd:pr-[0.75rem] lg:space-y-[3rem] tablet:space-x-[2rem] lg:space-x-0 space-x-[0.75rem]'
          >
            {listBestTrip?.map((item, index) => (
              <ItemCardBestTrip
                key={index}
                data={item}
              />
            ))}
          </div>
        </div>
      </div>
      <Link
        href='/tours'
        style={{writingMode: 'vertical-rl'}}
        className='top-0 xmd:top-[-1rem] translate-y-1/2 absolute space-y-[0.5rem] right-0 lg:-translate-y-1/2 lg:top-1/2 bg-orange-normal lg:w-[3.4rem] lg:h-[9.4rem] w-[2.125rem] h-[7.9rem] rotate-180 flex justify-center items-center text-white rounded-tr-[0.5rem] rounded-br-[0.5rem] text-0.875 font-extrabold'
      >
        All tour
        <IconArrowRight />
        {/* writing-mode: vertical-lr; */}
      </Link>
    </section>
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
