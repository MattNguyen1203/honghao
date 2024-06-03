'use client'

import {Button} from '@/components/customCn/button'
import Image from 'next/image'
import Link from 'next/link'
import React, {useRef} from 'react'

import MotoAnimate from './motoAnimate'
import CloudAnimate from './CloudAnimate'
import Welcome from '../Welcome/Welcome'

const About = ({dataAbout}) => {
  const nextSectionRef = useRef()

  const handleScrollDown = () => {
    nextSectionRef.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <section className='w-full bg-[linear-gradient(180deg,#122718_50%,rgba(18,39,24,0.80)_70%,#122718_100%)] relative'>
      <Image
        src='/imgs/home/bg3.jpg'
        alt=''
        width={2000}
        height={500}
        className='w-full h-full absolute top-0 left-0 z-[-1] object-cover'
      />

      <div className='w-full relative z-[40]'>
        <Image
          src='/imgs/home/moutain.svg'
          alt=''
          width={2000}
          height={500}
          className='absolute top-[-2rem] xmd:top-[-1rem] left-0'
        />
        <Image
          src='/imgs/home/moto.svg'
          alt=''
          width={30}
          height={30}
          className='w-[2.6rem] h-[2.13rem] absolute top-[-3.8rem] left-[6.5rem] z-[2] lg:hidden'
        />
        <Image
          src='/imgs/home/bg2.svg'
          alt=''
          width={2000}
          height={500}
          className='absolute bottom-0 left-0 opacity-5 flex xmd:hidden'
        />

        <Image
          src='/imgs/home/bg2Mb.svg'
          alt=''
          width={500}
          height={300}
          className='absolute top-[3rem] left-0 opacity-100 hidden xmd:flex'
        />

        <div className='relative z-100 w-[65.5rem] xmd:w-full pt-[10rem] xmd:pt-[3rem] mx-auto flex flex-col items-center'>
          <Image
            src='/imgs/home/logo.png'
            alt='hong hao travel'
            width={100}
            height={100}
            className='w-[7rem] h-[8.3125rem] xmd:w-[4.5rem] xmd:h-[5.35rem] mb-[4rem] object-contain tablet:w-[14rem] tablet:h-[16rem]'
          />

          <div
            dangerouslySetInnerHTML={{
              __html: dataAbout?.about_us?.content || '',
            }}
            className='*:text-center md:w-[53.75rem] md:px-0 px-[1.5rem] text-35 xmd:text-15 font-black font-londrina text-greyscale-0/80 mb-[4rem] xmd:mb-[1.56rem] text-center leading-[100%]'
          ></div>

          <div className='flex space-x-[0.75rem] xmd:space-[0.5rem] tablet:space-[1.5rem] mb-[6.3rem] xmd:mb-[2.8rem] xmd:flex-wrap items-center justify-center'>
            {dataAbout?.about_us?.infos?.map((item, index) => (
              <div
                className='group hover:bg-orange-normal overflow-hidden transition-all duration-500 rounded-full relative size-[10.75rem] tablet:size-[16rem] xmd:size-[6rem] flex items-center justify-center text-0875 xmd:text-[0.5rem] tablet:text-[1.5rem] tablet:tracking-0 xmd:leading-[1.2] font-bold uppercase text-greyscale-0 p-[1.5rem] xmd:p-[1rem] xmd:tracking-[0] text-center'
                key={index}
              >
                <div className='animate-spin flex size-full rounded-full border border-dashed border-greyscale-0 absolute top-0 left-0'></div>
                <div className='relative overflow-hidden w-full h-[2.125rem]'>
                  <span className='text-center group-hover:translate-y-[-200%] xlg:!-translate-y-1/2 -translate-y-1/2 transition-all duration-500 absolute top-1/2 left-0 w-full'>
                    {item?.text}
                  </span>
                  <span className='xlg:hidden translate-y-[100%] group-hover:-translate-y-1/2 xlg:!-translate-y-1/2 transition-all duration-500 absolute top-1/2 left-0 w-full'>
                    {item?.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className='flex flex-col items-center xmd:hidden'>
            <span className='mb-[1.81rem] text-0875 tablet:text-175 text-greyscale-0/90 font-bold tracking-[0.00875rem] uppercase'>
              EXPLORE YOUR JOURNEY WITH US
            </span>
            <Image
              src='/imgs/home/explore.svg'
              alt='hong hao travel'
              width={50}
              height={50}
              className='size-[3.0625rem]'
              onClick={() => handleScrollDown()}
            />
          </div>
        </div>
      </div>

      <div
        ref={nextSectionRef}
        className='pl-[6.75rem] tablet:pl-[4rem] tablet:pb-[5rem] xmd:px-[1rem] flex relative pb-[20.87rem] xmd:pb-[2.5rem] pt-[5rem] xmd:pt-[2.5rem]'
      >
        <div className='w-[38.8125rem] xmd:w-full relative z-10'>
          <div className='xmd:flex hidden text-0875 text-greyscale-0/40 font-bold tracking-[0.00875rem] mb-[0.8rem]'>
            START WITH
          </div>
          <h2 className='text-greyscale-0 mb-[3.5rem] xmd:mb-[2rem] xmd:text-25 xmd:w-3/4'>
            {dataAbout?.section_3?.heading || ''}
          </h2>

          <p
            dangerouslySetInnerHTML={{
              __html: dataAbout?.section_3?.description,
            }}
            className='text-greyscale-10 text-1 tablet:text-175 tablet:mb-[2rem] tablet:leading-normal tablet:tracking-0 xmd:text-0875 tracking-[0.005rem] mb-[1rem] xmd:tracking-[0.00219rem] xmd:leading-normal'
          ></p>

          <ul className='mb-[2rem]'>
            {dataAbout?.section_3?.list_strength?.map((item, index) => (
              <li
                key={index}
                className='flex items-center mb-[0.75rem]'
              >
                <Image
                  src='/imgs/home/tick.svg'
                  alt='hong hao travel'
                  width={20}
                  height={20}
                  className='size-[1rem] object-contain'
                />
                <span className='text-1 tablet:text-15 tablet:tracking-0 xmd:text-0875 tablet:leading-normal text-greyscale-5 font-bold ml-[0.5rem]'>
                  {item?.text || ''}
                </span>
              </li>
            ))}
          </ul>

          <div className='flex'>
            <Button
              icon
              variant='default'
              className='w-fit xmd:w-[10.21875rem] py-[1rem] px-[2rem] mr-[1rem]'
            >
              <Link
                href={'/about-us'}
                className='flex'
              >
                About Us
              </Link>
            </Button>

            <Link href='/tours'>
              <Button
                icon
                variant='outline_white'
                className='w-fit xmd:w-[10.21875rem]'
              >
                All tour
              </Button>
            </Link>
          </div>
        </div>

        <CloudAnimate />
        <MotoAnimate />
      </div>
      <Welcome data={dataAbout?.section_video} />
    </section>
  )
}

export default About
