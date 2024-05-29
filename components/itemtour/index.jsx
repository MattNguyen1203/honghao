import Image from 'next/image'
import React from 'react'
import {Button} from '../customCn/button'
import {cn} from '@/lib/utils'
import Link from 'next/link'
const ItemTour = ({className, type, data}) => {
  return (
    <Link href={`/tours/${data?.detail_link}`}>
      <div
        className={cn(
          'h-[29.5625rem] xmd:h-[15rem] rounded-[1.5rem] relative overflow-hidden group cursor-pointer',
          className,
        )}
      >
        <div className='w-full h-full before:size-full before:absolute before:top-0 before:left-0 before:bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]'>
          <Image
            src='/imgs/itemTour/demo.jpg'
            alt=''
            width={400}
            height={500}
            className='w-full h-full object-cover '
          />
        </div>

        <div className='flex flex-col h-[11rem] xmd:h-full xmd:p-[1rem] group-hover:h-full ease-linear transition-all duration-300 justify-between xmd:justify-end absolute bottom-0 left-0 w-full '>
          {/* top */}
          <div className='mb-[0.8rem] px-[1rem] ease-linear transition-all duration-300 group-hover:pt-[0rem] pt-[1.5rem] xmd:p-0'>
            <div className='relative overflow-hidden  group-hover:opacity-0 opacity-100 pointer-events-none ease-linear transition-all duration-300 flex mb-[1rem] items-center px-[0.75rem] py-[0.38rem] xmd:py-[0.25rem] xmd:px-[0.5rem] rounded-[1.5rem] border border-solid border-[rgba(255, 255, 255, 0.52)] bg-[rgba(255,255,255,0.20)] backdrop-blur-sm w-fit group-hover:h-0 h-[2.25rem] xmd:h-fit'>
              <Image
                src='/imgs/itemTour/icon.svg'
                alt=''
                width={12}
                height={12}
                className='size-[1.5rem] xmd:size-[1rem] mr-[0.5rem]'
              />
              <span className='text-1 xmd:text-075 tracking-0.0125 text-greyscale-0/80'>
                {data?.time_data?.[0]?.name}
              </span>

              <div className='flex group-hover:h-0 h-[5.10919rem] w-[3.80475rem] rotate-[-24.824deg] bg-custom-gradient opacity-80 absolute top-[-1.28494rem] right-[-1.27806rem] animate-leftToRight'></div>
            </div>

            <div className='flex items-center text-greyscale-0'>
              <div className='flex items-center mr-[1.25rem]'>
                <span className='text-15 xmd:text-1125 font-medium mr-[0.44rem]'>
                  $199
                </span>
                <span className='relative text-0875  xmd:text-075 tracking-0.00219 border-b border-b-[#fff] pb-[0.12rem]'>
                  Self - Driving
                </span>
              </div>

              <div className='flex items-center'>
                <span className='text-15  xmd:text-1125 font-medium mr-[0.44rem]'>
                  $199
                </span>
                <span className='relative text-0875 xmd:text-075 tracking-0.00219 border-b border-b-[#fff] pb-[0.12rem]'>
                  Local driver
                </span>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div>
            <h4 className='text-125 xmd:text-1 font-black text-greyscale-0 h-[3rem] line-clamp-2 px-[1rem] xmd:p-0'>
              {data?.title}
            </h4>

            <div className='px-[1rem] py-[1.5rem] xmd:hidden'>
              <div className='flex items-center mb-[0.5rem]'>
                <Image
                  src='/imgs/itemTour/acc.svg'
                  alt=''
                  width={12}
                  height={12}
                  className='size-[1rem] mr-[0.38rem]'
                />
                <span className='text-0875 font-bold text-greyscale-0 mx-[0.25rem] w-[6rem]'>
                  Accomodation:
                </span>
                <span className='text-0875 tracking-[0.00875rem] text-greyscale-0 line-clamp-1'>
                  {data?.infos?.accomodation}
                </span>
              </div>

              <div className='flex items-center mb-[0.5rem]'>
                <Image
                  src='/imgs/itemTour/motobike.svg'
                  alt=''
                  width={12}
                  height={12}
                  className='size-[1rem] mr-[0.38rem]'
                />
                <span className='text-0875 font-bold text-greyscale-0 mx-[0.25rem] w-[4.5rem]'>
                  Motorbike:
                </span>
                <span className='text-0875 tracking-[0.00875rem] text-greyscale-0 line-clamp-1'>
                  {data?.infos?.motorbike}
                </span>
              </div>

              <div className='flex items-center mb-[0.5rem]'>
                <Image
                  src='/imgs/itemTour/tourguide.svg'
                  alt=''
                  width={12}
                  height={12}
                  className='size-[1rem] mr-[0.38rem]'
                />
                <span className='text-0875 font-bold text-greyscale-0 mx-[0.25rem] w-[6rem] flex'>
                  Tour guide:
                </span>
                <span className='text-0875 tracking-[0.00875rem] text-greyscale-0 line-clamp-1'>
                  {data?.infos?.tour_guide}
                </span>
              </div>

              <div className='flex items-center mb-[0.5rem]'>
                <Image
                  src='/imgs/itemTour/transport.svg'
                  alt=''
                  width={12}
                  height={12}
                  className='size-[1rem] mr-[0.38rem]'
                />
                <span className='text-0875 font-bold text-greyscale-0 mx-[0.25rem] w-[5rem]'>
                  Transport:
                </span>
                <span className='text-0875 tracking-[0.00875rem] text-greyscale-0 line-clamp-1'>
                  {data?.infos?.transport}
                </span>
              </div>
            </div>
            <Button
              icon
              variant='default'
              className='w-full rounded-t-none xmd:hidden'
            >
              Book now
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ItemTour
