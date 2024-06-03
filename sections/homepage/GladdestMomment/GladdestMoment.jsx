'use client'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useRef, useState} from 'react'
import Image from 'next/image'
import {Draggable} from 'gsap/Draggable'
import InertiaPlugin from 'gsap/InertiaPlugin'
import ICMapSmall from '@/components/icons/ICMapSmall'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable, InertiaPlugin)
}
export default function GladdestMoment({dataGallery}) {
  const container = useRef(null)
  const slideRef = useRef(null)
  const tweenRef = useRef(null)
  const [isAnimationEnd, setIsAnimationEnd] = useState(false)

  if (typeof window !== 'undefined' && window?.innerWidth <= 1024) return null
  useGSAP(
    () => {
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
    <section
      ref={container}
      className='w-full h-fit mt-[-5rem] pb-[0.8rem] xlg:hidden z-20 relative'
    >
      <div className='mb-[3rem] flex justify-between items-center w-[calc(100%-16.665rem)] ml-auto'>
        <h2 className='tetx-[3.5rem] font-black leading-[1] text-[#222] font-londrina whitespace-nowrap'>
          {dataGallery?.heading}
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
          <p
            dangerouslySetInnerHTML={{__html: dataGallery?.description}}
            className='text-[0.875rem] font-normal leading-[1.2] tracking-[0.00875rem] text-[#262626] ml-[2.13rem]'
          ></p>
        </div>
      </div>

      <div className='relative w-full h-fit'>
        <Image
          className='absolute top-[20.435rem] left-[8.3325rem] -translate-y-full -translate-x-1/2 w-[5rem] h-[33.8125rem] object-cover z-[100]'
          src={'/home/ourgallery.svg'}
          alt='text svg'
          width={100}
          height={800}
        />
        <div className='absolute top-0 left-0 h-[21.125rem] w-[21.5rem] flex z-[99]'>
          <div className='w-full bg-white'></div>
          <div className='h-full w-[6.5rem] bg-[linear-gradient(270deg,rgba(255,255,255,0.00)_36.51%,#FFF_92.5%)]'></div>
        </div>
        <div className='relative w-full overflow-hidden h-[43rem] container_slide'>
          <div
            ref={slideRef}
            className='flex flex-col h-[43rem] absolute top-0 left-0 space-y-[0.75rem]'
          >
            <div className='flex space-x-[0.75rem] pl-[16.665rem]'>
              {dataGallery?.gallery_top?.map((img, index) => (
                <ItemGallery
                  key={index}
                  index={index}
                  img={img}
                />
              ))}
              <div className='w-[10rem] flex justify-center items-center'>
                <Link
                  href='/activity'
                  className='size-[7.625rem] relative group rounded-full lg:hover:bg-[#E64828] transition-all duration-200 flex justify-center items-center'
                >
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
                </Link>
              </div>
            </div>
            <div
              id='slide_item_2'
              className='flex space-x-[0.75rem]'
            >
              {dataGallery?.gallery_bottom?.map((img, index) => (
                <ItemGallery
                  key={index}
                  index={index}
                  img={img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const ItemGallery = ({index, img}) => {
  return (
    <div className='item_slide w-[33.33rem] flex-shrink-0 h-[21.125rem] relative group'>
      <Image
        className='object-cover size-full rounded-[1rem]'
        src={img?.url || ''}
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
