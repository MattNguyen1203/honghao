'use client'
import React from 'react'
import Image from 'next/image'
import {cn} from '@/lib/utils'
import useStore from '@/app/(store)/store'
import Link from 'next/link'
const CardDestination = ({data}) => {
  const isMobile = useStore((state) => state.isMobile)
  return (
    <div
      className={cn(
        'relative cursor-pointer xmd:w-full xmd:h-[23.33775rem] w-[29.375rem] h-[31.875rem] rounded-[1.25rem] overflow-hidden',
        !isMobile ? 'group' : '',
      )}
    >
      <Link href={`/${data?.post_slug}`}>
        <Image
          priority
          alt='ảnh'
          src={data?.thumbnail || '/imgs/all-destinations/card.png'}
          width={500}
          height={500}
          className='group-hover:scale-110 absolute object-cover top-0 left-0 duration-500 ease-linear rounded-[1.25rem] size-full w-[29.375rem] h-[31.875rem] xmd:w-full xmd:h-[23.33775rem]'
        />
        <div className='relative group-hover:backdrop-blur-lg group-hover:bg-[rgba(255,255,255,0.1)] duration-500 ease-linear overflow-hidden flex items-center justify-center bg-[rgba(255,53,11,0.70)] z-50 xmd:top-[1rem] xmd:left-[1rem] top-[1.5rem] left-[1.5rem] w-36 xmd:w-[8.9375rem] xmd:h-[2.125rem] h-[2.375rem] shrink-0 backdrop-blur-lg rounded-3xl'>
          <div className='text-white text-center text-sm not-italic font-medium leading-[120%] tracking-[0.00875rem]'>
            Best destination
          </div>
          {/* vệt sáng */}
          <div className='absolute animated-button z-50 w-[3.80475rem] h-[5.10919rem] bg-card-des rotate-[-24.824deg] shrink-0 opacity-30'></div>
        </div>
        <div className='bg-card w-[25.5625rem] xmd:mx-auto xmd:w-[19.7375rem] group-hover:h-[12rem] xmd:h-[3.6875rem] h-[4.75rem] overflow-hidden z-50 absolute duration-500 ease-linear xmd:bottom-[1rem]  bottom-[2.5rem] left-1/2 -translate-x-1/2 inline-flex  flex-col items-start gap-[1rem] shrink-0 px-4 xmd:px-[0.75rem] xmd:py-[1.25rem] py-6 xmd:rounded-[1.19925rem] rounded-3xl'>
          <div className='flex justify-between items-center self-stretch'>
            <div className='text-white text-2xl xmd:text-[1.25rem]  not-italic font-extrabold leading-[120%] line-clamp-1 pr-[0.5rem]'>
              {data?.title}
            </div>
            <Image
              priority
              alt='ảnh'
              src={'/imgs/all-destinations/arrow-rosie.png'}
              width={20}
              height={20}
              className='arrowfr w-[1.5rem] object-cover h-[1.5rem] shrink-0'
            />
          </div>
          <div className='group-hover:h-fit h-0 duration-500 ease-linear md:w-[23.5625rem] text-white text-base not-italic font-normal leading-[150%] tracking-[0.005rem]'>
            {data?.description}
          </div>
        </div>
        {/* lớp phủ mờ */}
        <div className='bg-[rgba(0,0,0,0.40)] z-0  duration-500 ease-linear group-hover:opacity-100 opacity-0 absolute top-0 left-0 w-[29.375rem] h-[31.875rem] xmd:w-full xmd:h-[23.33775rem]'></div>
      </Link>
    </div>
  )
}

export default CardDestination
