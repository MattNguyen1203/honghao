'use client'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import AccordionCustom from '../common/accordion'
import useStore from '@/app/(store)/store'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from '@/components/customCn/dialog'

const DialogCp = ({ children, data, video }) => {
  const videoRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const isTablet = useStore((state) => state.isTablet)
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Video play error:', error)
      })
    } else if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isOpen])

  return (
    <Dialog
      className='Dialogclass'
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>
        <div onClick={() => setIsOpen(true)}>{children}</div>
      </DialogTrigger>
      {isOpen && (
        <DialogContent className='!w-max'>
          <video
            className='w-[82rem] rounded-3xl'
            controls
            ref={videoRef}
          >
            <source
              src={video}
              type='video/mp4'
            />
          </video>
          <DialogClose
            onClick={() => setIsOpen(false)}
            className='absolute top-[0rem] -right-[4rem]'
          >
            <div className='w-[3.25rem] rounded-full flex items-center justify-center h-[3.25rem] shrink-0 bg-[rgba(217,217,217,0.40)] backdrop-blur-[2px]'>
              <svg
                className='size-[1.5rem]'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </DialogClose>
        </DialogContent>
      )}
    </Dialog>
  )
}

const FaqAboutTrip = ({ dataAcfPage, videoAndImage }) => {
  return (
    <section className='flex justify-center'>
      <div className='flex mt-[5.63rem] xl:container xmd:hidden flex-col items-start space-y-[3rem]'>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className='text-greyscale-80 w-full text-[3.5rem] not-italic font-black leading-[100%]'>
          FAQ about the trip
        </div>
        <div className='flex items-start w-full  justify-between space-x-[4.68rem]'>
          <div data-aos="fade-up"
            data-aos-duration="900" className='w-[42.8125rem]'>
            <AccordionCustom data={dataAcfPage} />
          </div>
          <div data-aos="fade-up"
            data-aos-duration="900" className='relative w-[42.4485rem] h-[26.69638rem]'>
            {/* <div className='size-[4rem] flex items-center justify-center rounded-full bg-opacity-30 bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
              <svg
                width='24'
                height='28'
                viewBox='0 0 24 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M23.7734 13.5945L0.230469 27.187L0.23047 0.00195312L23.7734 13.5945Z'
                  fill='white'
                />
              </svg>
            </div> */}
            <DialogCp
              data={[1, 1, 1, 1, 1]}
              video={videoAndImage?.video_faq?.url}
            >
              <Image
                priority
                alt='ảnh'
                src={videoAndImage?.image_video?.url}
                width={700}
                height={700}
                className='w-[42.4485rem] cursor-pointer h-[26.69638rem] rounded-[1.25rem] shrink-0'
              />
              <div className='w-full h-full cursor-pointer absolute top-0 left-0 duration-200 transition-all group-hover:bg-black bg-transparent group-hover:bg-opacity-30 z-50'></div>

              <div className=' group/start'>
                <svg
                  className='size-[3.125rem] group-hover/start:scale-75 z-[51] duration-500 transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                  xmlns='http://www.w3.org/2000/svg'
                  width='50'
                  height='50'
                  viewBox='0 0 50 50'
                  fill='none'
                >
                  <g clip-path='url(#clip0_8679_8307)'>
                    <circle
                      className='group-hover/start:fill-orange-normal fill-transparent  duration-500 transition-all'
                      cx='25'
                      cy='25'
                      r='24.375'
                      transform='matrix(-1 0 0 1 50 0)'
                      stroke='white'
                      stroke-width='1.25'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_8679_8307'>
                      <rect
                        width='50'
                        height='50'
                        rx='25'
                        transform='matrix(-1 0 0 1 50 0)'
                        fill='white'
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  className='size-[1.5rem] z-[51] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M19.5 10.6603C20.1667 11.0452 20.1667 12.0074 19.5 12.3923L6 20.1865C5.33333 20.5714 4.5 20.0903 4.5 19.3205L4.5 3.73205C4.5 2.96225 5.33333 2.48112 6 2.86602L19.5 10.6603Z'
                    fill='white'
                  />
                </svg>
              </div>
            </DialogCp>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqAboutTrip
