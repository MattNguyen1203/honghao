'use client'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import useStore from '@/app/(store)/store'
gsap.registerPlugin(ScrollTrigger)
const Nav = ({ setOpenNav, dataContacts }) => {
  const { checkOpenBookNow, checkOpenBookNow2 } = useStore(state => state)
  const headerRef = useRef()
  const [isTransparent, setIsTransparent] = useState(true)
  const [isHidden, setIsHidden] = useState(false)


  // useEffect(() => {
  //   if (checkOpenBookNow || (checkOpenBookNow2)) {

  //     setIsHidden(true)
  //     setIsTransparent(false)
  //   } else {
  //     if (checkOpenBookNow2 !== 0) {

  //       setIsHidden(false)
  //       setIsTransparent(true)
  //     }
  //   }
  // }, [checkOpenBookNow2, checkOpenBookNow])

  useEffect(() => {
    ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {


        if (self.direction === 1 || checkOpenBookNow || checkOpenBookNow2 !== -1) {
          setIsHidden(true)
          setIsTransparent(false)
          // Khi cuộn xuống
        } else if (self.direction === -1) {
          // Khi cuộn lên
          setIsHidden(false)
          setIsTransparent(true)
        }
        if (self.scroll() > 10) {
          setIsTransparent(false)
        }
      },
    })
  }, [checkOpenBookNow, checkOpenBookNow2])


  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed top-0 left-0 z-[1001] py-[1.5rem] px-[5rem] xmd:px-[1.25rem] xmd:py-[0.5rem] flex w-full justify-between items-center transtion-all duration-500',
        isHidden ? '-translate-y-[100%]' : 'translate-y-0',
        isTransparent ? 'bg-transparent' : 'bg-greyscale-0 shadow-md',
      )}
    >
      <Link
        href='/'
        className='flex'
      >
        <Image
          src={
            isTransparent ? dataContacts?.logo_white?.url : dataContacts?.logo_black?.url
          }
          alt='Hồng Hào travel'
          width={500}
          height={500}
          className='w-[9.625rem] h-[3.1875rem] object-contain xmd:w-[7.1875rem] xmd:h-[2.5625rem] tablet:w-[12rem] tablet:h-[5rem]'
        />
      </Link>

      <div
        className={cn(
          'w-fit p-[0.5rem] xmd:py-[0.25rem] pr-[1rem] rounded-[1.5rem] md:bg-orange-normal xmd:border border-solid border-greyscale-0 flex items-center cursor-pointer',
          isTransparent ? 'md:bg-orange-normal' : 'bg-orange-normal',
        )}
        onClick={() => setOpenNav(true)}
      >
        <Image
          src='/imgs/common/menu.svg'
          alt='Hồng Hào travel'
          width={50}
          height={50}
          className='size-[2.0625rem] object-contain mr-[0.44rem] tablet:size-[4rem]'
        />
        <span
          className={cn(
            'text-125 tablet:text-175 xmd:text-1 font-bold text-greyscale-0 uppercase',
          )}
        >
          Menu
        </span>
      </div>
    </header>
  )
}

export default Nav
