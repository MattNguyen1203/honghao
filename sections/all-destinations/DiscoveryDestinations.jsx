"use client"
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import CardDestination from './CardDestination';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PaginationCustom from '@/components/paginationcustom';
gsap.registerPlugin(ScrollTrigger)
const DiscoveryDestinations = () => {

  const scrollRef = useRef()
  const pinRef = useRef()
  const pin2Ref = useRef()
  useEffect(() => {
    if (window.innerWidth > 768) {

      const ctx = gsap.context(() => {
        // ScrollTrigger cho phần tử đầu tiên
        ScrollTrigger.create({
          trigger: pinRef.current,
          pin: pinRef.current,
          start: "top 13%",
          end: () => `+=${scrollRef.current.offsetHeight} 80%`,
          toggleActions: "restart reverse reverse reverse",
          scrub: 1,
          markers: true,
          pinSpacing: false,
        });

        // ScrollTrigger cho phần tử thứ hai
        ScrollTrigger.create({
          trigger: pin2Ref.current,
          pin: pin2Ref.current,
          start: "-1% 13%",
          end: () => `+=${scrollRef.current.offsetHeight} 80%`,
          toggleActions: "restart reverse reverse reverse",
          scrub: 1,

          pinSpacing: false,
        });
      }, scrollRef);

      return () => ctx.revert();
    }

  }, []);

  return (
    <section className='relative mt-[2.63rem]'>
      <Image ref={pinRef} priority alt="ảnh" src={'/imgs/all-destinations/discover-desti.png'} width={1600} height={900} className="absolute w-full h-[49.25rem]" />
      <div ref={scrollRef} className=' xl:container flex xmd:flex-col justify-around'>
        <div ref={pin2Ref} className=" inline-flex flex-col mt-[1.4rem] w-fit items-start space-y-[1.5rem]">
          <div className="flex flex-col items-start space-y-[0.75rem]">
            <div className="text-green-dark-active opacity-40 text-lg not-italic font-extrabold leading-[100%]">
              DISCOVERY HA GIANG
            </div>
            <div className="text-green-normal-hover font-londrina text-[3.5rem] not-italic font-black leading-[100%]">
              DESTINATIONS
            </div>
          </div>
          <div className=" text-green-dark-active w-[27.5625rem] text-[1rem] not-italic font-normal tracking-[0.005rem] leading-[150%]">
            Ha Giang, nestled in the rugged mountains of northern Vietnam, beckons adventurers with its breathtaking scenery and vibrant cultural tapestry. From the towering peaks of the Dong Van Karst Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers an unforgettable journey through some of Vietnam's most awe-inspiring landscapes.
          </div>
        </div>
        <div>

          <div className="grid xmd:grid-cols-1 grid-cols-2 gap-[1.25rem] w-fit ">
            <CardDestination />
            <CardDestination />
            <CardDestination />
            <CardDestination />
            <CardDestination />
            <CardDestination />
            <CardDestination />
            <CardDestination />
          </div>
          <PaginationCustom />
        </div>
      </div>
    </section>
  )
}

export default DiscoveryDestinations
