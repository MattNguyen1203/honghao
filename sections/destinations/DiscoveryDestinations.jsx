'use client'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import CardDestination from './CardDestination'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PaginationV2 from '@/components/pagination'
import { useSearchParams } from 'next/navigation'
import getData from '@/lib/getData'
import { Skeleton } from '@/components/ui/skeleton'
import { useGSAP } from '@gsap/react'
import AOS from 'aos'
import 'aos/dist/aos.css'
gsap.registerPlugin(ScrollTrigger)
const data = Array(5).fill(0)
const DiscoveryDestinations = ({ dataListCat, dataAcf }) => {
  const firstTimeRef = useRef(true)
  const [listDestination, setListDestination] = useState({
    posts: dataListCat?.posts,
    pagination: dataListCat?.pagination,
  })
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams()
  const currentPage = searchParams.get('page')

  const pinRef = useRef()
  const pin2Ref = useRef()
  const pinRefMobi = useRef()
  const scrollRef = useRef()
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (listDestination?.posts?.length < 3) return
      if (window.innerWidth > 768) {
        ScrollTrigger.create({
          trigger: scrollRef.current,
          pin: pinRef.current,
          start: 'top 10%',
          end: () => `+=${scrollRef.current.offsetHeight} 100%`,
          scrub: true,
          markers: true,
          pinSpacing: false,
        })
        ScrollTrigger.create({
          trigger: scrollRef.current,
          pin: pin2Ref.current,
          start: 'top 10%',
          end: () => `+=${scrollRef.current.offsetHeight} 100%`,
          scrub: 1,
          pinSpacing: false,
        })
      } else {
        ScrollTrigger.create({
          trigger: pinRefMobi.current,
          pin: pinRefMobi.current,
          start: '-210% 0%',
          end: () => `+=${scrollRef.current.offsetHeight} -1000%`,
          toggleActions: 'restart reverse reverse reverse',
          scrub: 1,
          markers: true,
          pinSpacing: false,
          onUpdate: (self) => {
            if (self.isActive) {
              pinRefMobi.current.style.position = 'fixed'
              pinRefMobi.current.style.top = 'auto'
              pinRefMobi.current.style.bottom = '0'
              pinRefMobi.current.style.left = '0'
              pinRefMobi.current.style.right = '0'
              pinRefMobi.current.style.zIndex = '1000'
            } else {
              pinRefMobi.current.style.position = ''
              pinRefMobi.current.style.top = ''
              pinRefMobi.current.style.bottom = ''
              pinRefMobi.current.style.left = ''
              pinRefMobi.current.style.right = ''
              pinRefMobi.current.style.zIndex = ''
            }
          },
        })
      }
    }, scrollRef)

    return () => ctx.revert()
  }, [listDestination])

  const container = useRef(null);
  const listContainer = useRef(null);

  // useGSAP(
  //   () => {
  //     if (!container.current) return
  //     let mm = gsap.matchMedia()
  //     mm.add('(min-width: 1024px)', () => {
  //       const lengthTour = data.length
  //       const percent = 100 - 100 / lengthTour
  //       ScrollTrigger.create({
  //         trigger: container.current,
  //         start: 'top top',
  //         end: () => `+=${scrollRef.current.offsetHeight} 100%`,
  //         pin: true,
  //         anticipatePin: 1,
  //         scrub: true,
  //         markers: true,
  //         onUpdate: (self) => {
  //           let precentCurrent = Number(self.progress.toFixed(3)) * percent
  //           listContainer.current.style.transform = `translateY(-${precentCurrent}%)`
  //           if (
  //             Math.floor(precentCurrent / (percent / lengthTour)) < lengthTour
  //           ) {
  //             setIndex(Math.floor(precentCurrent / (percent / lengthTour)))
  //           }
  //         },
  //       })
  //     })
  //   },
  //   { scope: container },
  // )


  useEffect(() => {
    if (firstTimeRef.current) {
      firstTimeRef.current = false
    } else {
      const fetchData = async () => {
        setIsLoading(true)
        const res = await getData(
          `wp-json/okhub/v1/get-posts-by-category/1?cat_id=3&page=${currentPage}&posts_per_page=4`,
        )
        setListDestination(res)
        setIsLoading(false)
      }

      fetchData()
    }
  }, [currentPage])

  return (
    <section ref={container} className='relative mt-[2.63rem]'>
      <Image
        ref={pinRef}
        priority
        alt='ảnh'
        src={'/imgs/all-destinations/discover-desti.png'}
        width={1600}
        height={900}
        className='absolute xmd:hidden top-0 left-0 z-[-1] object-cover w-full h-[94vh]'
      />
      <Image
        ref={pinRefMobi}
        priority
        alt='ảnh'
        src={'/imgs/all-destinations/discover-desti-mobi.png'}
        width={1600}
        height={900}
        className='absolute md:hidden top-[41.53rem] z-[-1] w-full'
      />
      <Image
        priority
        alt='ảnh'
        src={'/imgs/all-destinations/sun-mobi.png'}
        width={1600}
        height={900}
        className='absolute size-[6.75181rem] top-[-1.6rem] left-[1.5rem] md:hidden z-[-1]'
      />
      <div
        // data-aos="fade-up"
        // data-aos-duration="750"
        ref={scrollRef}
        className='xmd:mx-[1rem] xmd:mt-[3.4rem] xl:w-[93rem] mx-auto xmd:space-y-[1.7rem] flex xmd:flex-col justify-around'
      >
        <div

          ref={pin2Ref}
          className=' inline-flex flex-col xmd:mt-[0.7rem] mt-[1.4rem] w-fit items-start space-y-[1.5rem]'
        >
          <div

            className='flex flex-col items-start space-y-[0.75rem]'>
            <div

              className='xmd:hidden text-green-dark-active opacity-40 text-lg xmd:text-[0.875rem] not-italic font-extrabold xmd:leading-[120%] leading-[100%]'>
              Discovery Ha Giang
            </div>
            <div className='md:hidden xmd:translate-y-[-0.3rem] uppercase text-green-dark-active opacity-40 text-lg xmd:text-[0.875rem] not-italic font-extrabold xmd:leading-[120%] leading-[100%]'>
              Start With
            </div>
            <h2 className='text-green-normal-hover text-[3.5rem] xmd:text-[2.5rem] not-italic font-black xmd:leading-[120%] leading-[100%]'>
              {dataAcf?.header}
            </h2>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: dataAcf?.description }}
            className=' text-green-dark-active md:w-[27.5625rem] text-[1rem] xmd:text-[0.875rem]  not-italic font-normal xmd:tracking-[0.00219rem] tracking-[0.005rem] leading-[150%]'
          ></div>
        </div>
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="750"
            id='destination-cards'
            ref={listContainer}
            className='grid list-container xmd:grid-cols-1 grid-cols-2 gap-[1.25rem] w-fit xmd:w-full '
          >
            {isLoading
              ? new Array(2).fill().map((item, index) => (
                <Skeleton
                  className='xmd:w-full xmd:h-[23.33775rem] w-[29.375rem] h-[31.875rem] rounded-[1.25rem] overflow-hidden'
                  key={index}
                />
              ))
              : listDestination?.posts?.map((item, index) => {
                return (
                  <div
                    key={index}>
                    <CardDestination data={item} />
                  </div>
                )
              })}
          </div>

          <PaginationV2
            href='#destination-cards'
            pagination={listDestination?.pagination}
          />
        </div>
      </div>
    </section>
  )
}

export default DiscoveryDestinations


// < section ref = { container } className = 'relative mt-[2.63rem]' >
//   <Image priority alt="ảnh" src={'/images/'} width={10} height={10} className="w-full h-full" />
//   <div className="">
//     list card column
//   </div>
// </>