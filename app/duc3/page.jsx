'use client'

import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useRef, useState} from 'react'
import Image from 'next/image'
import {Draggable} from 'gsap/Draggable'
import InertiaPlugin from 'gsap/InertiaPlugin'
import 'swiper/css'
import 'swiper/css/free-mode'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable, InertiaPlugin)
}

import ICMapSmall from '@/components/icons/ICMapSmall'
import SlideInfinity from './SlideInfinity'
import SlideInfinity2 from './SlideInfinity2'
import SlideInfinity3 from './SlideInfinity3'

export default function page() {
  const container = useRef(null)
  const slideRef = useRef(null)
  const tweenRef = useRef(null)
  const [isAnimationEnd, setIsAnimationEnd] = useState(false)

  useGSAP(
    () => {
      console.log(slideRef.current.style.width)

      Draggable.create(slideRef.current, {
        type: 'x',
        inertia: true,
        bounds: '.container_slide', // giới hạn drag
      })

      // auto slide
      tweenRef.current = gsap
        .to(slideRef.current, {
          x:
            -1 *
            (document.getElementById('slide_item_2').offsetWidth +
              8 -
              window.innerWidth),
          repeat: 0,
          duration: 10,
          ease: 'linear',
          onComplete: () => {
            // handle slide run completed
            setIsAnimationEnd(true)
          },
        })
        .timeScale(1)

      // Hàm xử lý khi hover vào
      const handleMouseEnter = () => {
        tweenRef.current.pause()
      }

      // Hàm xử lý khi bỏ hover
      const handleMouseLeave = () => {
        tweenRef.current.resume()
      }

      const slideElement = slideRef.current
      slideElement.addEventListener('mouseenter', handleMouseEnter)
      slideElement.addEventListener('mouseleave', handleMouseLeave)
    },
    {scope: container},
  )

  return (
    <>
      <div className='flex items-center justify-center w-full h-screen'>
        <div className='w-full h-fit space-y-[0.5rem]'>
          <SlideInfinity3 />
          <SlideInfinity />
          <SlideInfinity2 />
        </div>
      </div>
      <div className='h-[500px] bg-black flex justify-center items-center'>
        <div className='w-[33.33rem] flex justify-center items-center'>
          <div className='size-[7.625rem] relative group rounded-full lg:hover:bg-[#E64828] transition-all duration-200 flex justify-center items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='122'
              height='122'
              viewBox='0 0 122 122'
              fill='none'
              className='absolute top-0 left-0 animate-spin size-full'
            >
              <circle
                cx='61'
                cy='61'
                r='60.25'
                stroke='#E64828'
                strokeWidth='1.5'
                strokeDasharray='4 4'
                className='transition-all duration-200 lg:group-hover:stroke-white'
              />
            </svg>
            <div className='text-orange-normal text-[0.875rem] font-bold leading-[1.2] uppercase relative overflow-hidden text-transparent'>
              DISCOVERY
              <span className='text-orange-normal text-[0.875rem] font-bold leading-[1.2] uppercase absolute top-0 left-0 group-hover:-translate-y-full transition-all duration-300'>
                DISCOVERY
              </span>
              <span className='text-white text-[0.875rem] font-bold leading-[1.2] uppercase absolute bottom-0 left-0 translate-y-full group-hover:translate-y-0 transition-all duration-300'>
                DISCOVERY
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={container}
        className='w-full h-fit mt-[3.81rem]'
      >
        <div className='mb-[3rem] flex justify-between items-center w-[calc(100%-16.665rem)] ml-auto'>
          <h2 className='tetx-[3.5rem] font-black leading-[1] text-[#222] font-londrina whitespace-nowrap'>
            THE GLADDEST MOMENT
          </h2>
          <div className='size-[6.5625rem] relative'>
            <Image
              className={`${
                isAnimationEnd ? 'animate-spin' : ''
              } object-cover size-full`}
              src={'/home/text-circle-box-map.svg'}
              alt='text circle box map'
              width={100}
              height={100}
            />

            <ICMapSmall className='size-[2.375rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
          </div>
          <div className='w-[42.6875rem] h-[4.9375rem] bg-[linear-gradient(90deg,rgba(255,255,255,0.00)_-48.55%,rgba(12,140,30,0.14)_100%)] flex items-center'>
            <p className='text-[0.875rem] font-normal leading-[1.2] tracking-[0.00875rem] text-[#262626] ml-[2.13rem]'>
              Don't hesitate to pick up your backpack and go. When you reach
              your destination and <br /> see all the beautiful things in sight,
              you will know that your efforts were worth it
            </p>
          </div>
        </div>

        <div className='relative w-full h-fit'>
          <Image
            className='absolute top-[20.435rem] left-[8.3325rem] -translate-y-full -translate-x-1/2 w-[5rem] h-[33.8125rem] object-cover z-[99]'
            src={'/home/ourgallery.svg'}
            alt='text svg'
            width={100}
            height={800}
          />
          <div className='absolute top-0 left-0 h-[21.125rem] w-[21.5rem] flex z-[60]'>
            <div className='w-full bg-white'></div>
            <div className='h-full w-[6.5rem] bg-[linear-gradient(270deg,rgba(255,255,255,0.00)_36.51%,#FFF_92.5%)]'></div>
          </div>
          <div className='relative w-full overflow-hidden h-[43rem] container_slide'>
            <div
              ref={slideRef}
              className='flex flex-col h-[43rem] absolute top-0 left-0 space-y-[0.75rem]'
            >
              <div className='flex space-x-[0.75rem] pl-[16.665rem]'>
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <ItemGallery
                      key={index}
                      index={index}
                    />
                  ))}
                <div className='w-[10rem] flex justify-center items-center'>
                  <div className='size-[7.625rem] relative group rounded-full lg:hover:bg-[#E64828] transition-all duration-200 flex justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='122'
                      height='122'
                      viewBox='0 0 122 122'
                      fill='none'
                      className='absolute top-0 left-0 animate-spin size-full'
                    >
                      <circle
                        cx='61'
                        cy='61'
                        r='60.25'
                        stroke='#E64828'
                        strokeWidth='1.5'
                        strokeDasharray='4 4'
                        className='transition-all duration-200 lg:group-hover:stroke-white'
                      />
                    </svg>
                    <div className='text-orange-normal text-[0.875rem] font-bold leading-[1.2] uppercase relative overflow-hidden text-transparent'>
                      DISCOVERY
                      <span className='text-orange-normal text-[0.875rem] font-bold leading-[1.2] uppercase absolute top-0 left-0 group-hover:-translate-y-full transition-all duration-300'>
                        DISCOVERY
                      </span>
                      <span className='text-white text-[0.875rem] font-bold leading-[1.2] uppercase absolute bottom-0 left-0 translate-y-full group-hover:translate-y-0 transition-all duration-300'>
                        DISCOVERY
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id='slide_item_2'
                className='flex space-x-[0.75rem]'
              >
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <ItemGallery
                      key={index}
                      index={index}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const ItemGallery = ({index}) => {
  return (
    <div className='item_slide w-[33.33rem] flex-shrink-0 h-[21.125rem] relative group'>
      <Image
        className='object-cover size-full rounded-[1rem]'
        src={
          index % 2 === 0 ? '/imgs/home/demo-2_.jpg' : '/imgs/home/demo-3_.png'
        }
        alt='demo'
        width={400}
        height={300}
      />
      <div className='size-[6.5625rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 lg:group-hover:opacity-100 transition-all duration-200'>
        <Image
          className={`animate-spin object-cover size-full brightness-100 invert`}
          src={'/home/text-circle-box-map.svg'}
          alt='text circle box map'
          width={100}
          height={100}
        />

        <ICMapSmall
          fill='#FFFFFF80'
          className='size-[2.375rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
    </div>
  )
}
