import Image from 'next/image'
import React from 'react'
import { Button } from '../customCn/button'
// import {Button} from '../ui/button'

const ItemTour = () => {
  return (
    <div className='h-[29.5625rem] rounded-[1.5rem] relative overflow-hidden group'>
      <div className='w-full h-full before:size-full before:absolute before:top-0 before:left-0 before:bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]'>
        <Image
          src='/imgs/itemTour/demo.jpg'
          alt=''
          width={400}
          height={500}
          className='w-full h-full cover'
        />
      </div>

      <div className='flex flex-col h-[13rem] group-hover:h-full transition-all duration-500 justify-between absolute bottom-0 left-0 w-full '>
        {/* top */}
        <div className='mb-[0.8rem] px-[1rem] py-[1.5rem]'>
          <div className='group-hover:hidden group-hover:opacity-0 opacity-100 pointer-events-none transition-all duration-300 flex mb-[1rem] items-center px-[0.75rem] py-[0.38rem] rounded-[1.5rem] border border-solid border-[rgba(255, 255, 255, 0.52)] bg-[rgba(255,255,255,0.20)] backdrop-blur-sm w-fit h-[2.25rem]'>
            <Image
              src='/imgs/itemTour/icon.svg'
              alt=''
              width={12}
              height={12}
              className='size-[1.5rem] mr-[0.5rem]'
            />
            <span className='text-1 tracking-[0.0125rem] text-greyscale-0/80'>
              4 Days 5 Nights
            </span>
          </div>

          <div className='flex items-center text-greyscale-0'>
            <div className='flex items-center mr-[1.25rem]'>
              <span className='text-15 font-medium mr-[0.44rem]'>$199</span>
              <span className='relative text-0875 tracking-[0.00219rem] border-b border-b-[#fff] pb-[0.12rem]'>
                Self - Driving
              </span>
            </div>

            <div className='flex items-center'>
              <span className='text-15 font-medium mr-[0.44rem]'>$199</span>
              <span className='relative text-0875 tracking-[0.00219rem] border-b border-b-[#fff] pb-[0.12rem]'>
                Self - Driving
              </span>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div>
          <h4 className='text-125 font-black text-greyscale-0 h-[3rem] line-clamp-2 px-[1rem]'>
            Ha Giang Loop tour: Itinerary in 4 Days 5 Nights Ha Giang Loop tour:
            Itinerary in 4 Days 5 NightsHa Giang Loop tour: Itinerary in 4 Days
            5 NightsHa Giang Loop tour: Itinerary in 4 Days 5 Nights
          </h4>

          <div className='px-[1rem] py-[1.5rem]'>
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
                Phòng Doom
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
                Xe Wave, Vision
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
              <span className='text-0875 font-bold text-greyscale-0 mx-[0.25rem] w-[5rem] flex'>
                Tour guide:
              </span>
              <span className='text-0875 tracking-[0.00875rem] text-greyscale-0 line-clamp-1'>
                01 local tour guide with good English
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
                Xe VIP, có trung chuyển sdhhhhhhhhhhhhhhhhhhhh
              </span>
            </div>
          </div>
          <Button
            icon
            variant='default'
            className='w-full rounded-t-none'
          >
            Book now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ItemTour
