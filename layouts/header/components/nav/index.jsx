import {cn} from '@/lib/utils'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useRef, useState} from 'react'
gsap.registerPlugin(ScrollTrigger)
const Nav = ({setOpenNav}) => {
  const headerRef = useRef()
  const [isTransparent, setIsTransparent] = useState(true)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === 1) {
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
  }, [])

  return (
    <div
      className={cn(
        'py-[1.5rem] px-[5rem] xmd:px-[1.25rem] xmd:py-[1rem] flex w-full justify-between items-center transtion-all duration-500',
        isHidden ? '-translate-y-[100%]' : 'translate-y-0',
        isTransparent ? 'bg-transparent' : ' bg-greyscale-0',
      )}
      ref={headerRef}
    >
      <Link
        href='/'
        className='flex'
      >
        <Image
          src={
            isTransparent ? '/imgs/common/logo.png' : '/imgs/nav/logoBlack.png'
          }
          alt='Hồng Hào travel'
          width={200}
          height={200}
          className='w-[9.625rem] h-[3.1875rem] object-contain xmd:w-[7.1875rem] xmd:h-[2.5625rem]'
        />
      </Link>

      <div
        className={cn(
          'w-fit p-[0.5rem] pr-[1rem] rounded-[1.5rem] md:bg-orange-normal xmd:border border-solid border-greyscale-0 flex items-center cursor-pointer',
          isTransparent ? 'md:bg-orange-normal' : 'bg-orange-normal',
        )}
        onClick={() => setOpenNav(true)}
      >
        <Image
          src='/imgs/common/menu.svg'
          alt='Hồng Hào travel'
          width={50}
          height={50}
          className='size-[2.0625rem] object-contain mr-[0.44rem]'
        />
        <span
          className={cn(
            'text-125 xmd:text-1 font-bold text-greyscale-0 uppercase',
          )}
        >
          Menu
        </span>
      </div>
    </div>
  )
}

export default Nav
