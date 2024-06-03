'use client'
import {Button} from '@/components/customCn/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ThankYou = ({searchParams}) => {
  console.log('searchParams', searchParams)
  return (
    <section className=' bg-green-normal w-screen h-screen overflow-hidden'>
      <div className='container pt-[10rem] flex flex-col items-center justify-center text-greyscale-0'>
        <h2>Thank You For Booking Our Tour!</h2>
        <div className='flex items-center justify-center mt-[5rem]'>
          <div className='flex flex-col mr-[1rem]'>
            {/* <div className='text-3'>Hong Hao Travel</div> */}
            <Image
              src={'/imgs/home/bgThanks.jpg'}
              alt='hong hao travel'
              width={500}
              height={500}
              className='object-cover w-[40rem] h-[30rem] rounded-md'
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className=' text-3 font-semibold capitalize font-londrina'>
              Successful Payment !!!
            </div>
            <div className='mt-[2rem] text-125 font-semibold capitalize w-[60%] text-center text-greyscale-0/70 font-londrina'>
              Hope you have an enjoyable experience on this trip. We will
              contact you as soon as possible.
            </div>

            <Button className='mt-[3rem]'>
              <Link
                href='/'
                className='font-londrina tracking-[1.2px]'
              >
                Homepage
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThankYou
