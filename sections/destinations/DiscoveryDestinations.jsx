"use client"
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import CardDestination from './CardDestination';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PaginationCustom from '@/components/paginationcustom';
gsap.registerPlugin(ScrollTrigger)
const DiscoveryDestinations = () => {

  const pinRef = useRef()
  const pin2Ref = useRef()
  const pinRefMobi = useRef()
  const scrollRef = useRef()
  useEffect(() => {
    console.log('window.innerWidth', window.innerWidth)
    const ctx = gsap.context(() => {
      if (window.innerWidth > 768) {

        ScrollTrigger.create({
          trigger: pinRef.current,
          pin: pinRef.current,
          start: "top 0%",
          end: () => `+=${scrollRef.current.offsetHeight} 80%`,
          toggleActions: "restart reverse reverse reverse",
          scrub: 1,
          // markers: true,
          pinSpacing: false,
        });
        ScrollTrigger.create({
          trigger: pin2Ref.current,
          pin: pin2Ref.current,
          start: "-1% 0%",
          end: () => `+=${scrollRef.current.offsetHeight} 80%`,
          toggleActions: "restart reverse reverse reverse",
          scrub: 1,

          pinSpacing: false,
        });
      } else {
        ScrollTrigger.create({
          trigger: pinRefMobi.current,
          pin: pinRefMobi.current,
          start: "-210% 0%",
          end: () => `+=${scrollRef.current.offsetHeight} 80%`,
          toggleActions: "restart reverse reverse reverse",
          scrub: 1,
          markers: true,
          pinSpacing: false,
        });
      }

    }, scrollRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className='relative mt-[2.63rem]'>
      <Image ref={pinRef} priority alt="ảnh" src={'/imgs/all-destinations/discover-desti.png'} width={1600} height={900} className="absolute xmd:hidden z-[-1] w-full h-screen" />
      <Image ref={pinRefMobi} priority alt="ảnh" src={'/imgs/all-destinations/discover-desti-mobi.png'} width={1600} height={900} className="absolute md:hidden top-[41.53rem] z-[-1] w-full" />
      <Image priority alt="ảnh" src={'/imgs/all-destinations/sun-mobi.png'} width={1600} height={900} className="absolute size-[6.75181rem] top-[-1.6rem] left-[1.5rem] md:hidden z-[-1]" />
      <div ref={scrollRef} className='xmd:mx-[1rem] xmd:mt-[3.4rem] xl:w-[93rem] mx-auto xmd:space-y-[1.7rem] flex xmd:flex-col justify-around'>
        <div ref={pin2Ref} className=" inline-flex flex-col mt-[1.4rem] w-fit items-start space-y-[1.5rem]">
          <div className="flex flex-col items-start space-y-[0.75rem]">
            <div className="text-green-dark-active opacity-40 text-lg xmd:text-[0.875rem] not-italic font-extrabold xmd:leading-[120%] leading-[100%]">
              DISCOVERY HA GIANG
            </div>
            <h2 className="text-green-normal-hover text-[3.5rem] xmd:text-[2.5rem] not-italic font-black xmd:leading-[120%] leading-[100%]">
              DESTINATIONS
            </h2>
          </div>
          <div className=" text-green-dark-active md:w-[27.5625rem] text-[1rem] xmd:text-[0.875rem]  not-italic font-normal xmd:tracking-[0.00219rem] tracking-[0.005rem] leading-[150%]">
            Ha Giang, nestled in the rugged mountains of northern Vietnam, beckons adventurers with its breathtaking scenery and vibrant cultural tapestry. From the towering peaks of the Dong Van Karst Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers an unforgettable journey through some of Vietnam's most awe-inspiring landscapes.
          </div>
        </div>
        <div>

          <div className="grid xmd:grid-cols-1 grid-cols-2 gap-[1.25rem] w-fit xmd:w-full ">
            <CardDestination />
            <CardDestination />
            <CardDestination />
            <CardDestination />
            <CardDestination />
            <CardDestination />
            <CardDestination />
            <CardDestination />
          </div>
          {/* <div className="z-1"> */}

          <PaginationCustom />
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default DiscoveryDestinations
