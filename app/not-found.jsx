import {Button} from '@/components/customCn/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen w-screen relative'>
      <Image
        src='/imgs/bg.webp'
        alt='honghao'
        width={1000}
        height={1000}
        className='absolute bottom-0 left-0 object-contain flex w-full h-auto z-10'
      />
      <div className='absolute top-[15rem] tablet:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[20] w-fit'>
        <div className='font-londrina text-[25rem] xmd:text-[10rem] font-black leading-[1] notfound-text text-center'>
          404
        </div>
        <div className='font-londrina text-25 tablet:text-35 xmd:text-15 font-black leading-[1] text-greyscale-80 text-center mb-[1rem] mt-[-5rem] xmd:mt-[-1rem]'>
          Oops! The page doesn't exist.
        </div>
        <div className='text-1 tablet:text-15 xmd:text-0875 font-medium leading-[1.2] tracking-[0.0125rem] text-greyscale-80/90 text-center mb-[1.25rem] w-[70%] xmd:w-full mx-auto'>
          We apologize for the inconvenience, but the page you are trying to
          reach is unavailable
        </div>

        <div className='flex w-[70%] mx-auto justify-center'>
          <Button
            variant='outline'
            className='mr-[1rem] '
          >
            <Link href='/contact-us'>cONTACT Us</Link>
          </Button>
          <Button>
            <Link href='/'> Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
