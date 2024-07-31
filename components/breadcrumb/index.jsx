"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({ divider, className, isBanner, children }) => {
  return (
    <>
      <div
        className={cn(


          ' line-clamp-3 flex flex-col items-start gap-5 mx-auto md:h-14 kKao4-container  xmd:pb-2 pt-2 md:pt-5',
          className
        )}
      >
        <div className={cn('flex flex-row items-center w-full space-x-2', isBanner ? '!pl-0 !justify-center' : '')}>
          <Link
            href='/'
            className='flex items-center space-x-[0.25rem]'
          >
            <Image
              src={'/layouts/breadcrumb/home.svg'}
              alt='home page'
              className='size-4'
              width={120}
              height={120}
            />
            <div className='text-greyscale-10 text-0.875 text-sm not-italic font-normal leading-[150%] tracking-0.00219'>
              Home
            </div>
          </Link>
          {children}
        </div>
      </div>
      {divider && <div className='w-full h-[0.0625rem] bg-greyscale-10/30'></div>}
    </>
  )
}

export default Breadcrumb
