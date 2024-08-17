'use client'

import BikeAnimationMb from '@/components/bikeAnimateMb'
import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'
import StepByStepTourDt from './StepByStepTourDt'
import {cn} from '@/lib/utils'

// import {dataSLides} from './data'

export default function StepByStepRes({dataAcf, dataTourDetail, dataPage}) {
  const [seeLess, setSeeLess] = useState(true)
  if (typeof window !== 'undefined' && window?.innerWidth >= 1024) return null
  const dataSLides = dataAcf?.dataSLides || []

  return (
    <div className=''>
      <button
        onClick={() => setSeeLess(!seeLess)}
        className='flex w-full xmd:mt-[1.5rem] md:hidden justify-center items-center gap-[0.25rem]'
      >
        <div className='text-[color:var(--Orange-Normal,#E64827)] transition-all text-sm not-italic font-extrabold leading-[150%] tracking-[0.00219rem]'>
          {seeLess ? 'SEE LESS' : 'SEE MORE'}
        </div>
        <svg
          className='w-[0.49956rem] h-[0.83356rem] shrink-0'
          xmlns='http://www.w3.org/2000/svg'
          width='12'
          height='8'
          viewBox='0 0 12 8'
          fill='none'
        >
          <path
            d='M6.02485 3.65534L2.86071 6.81934C2.70011 6.9801 2.50368 7.0603 2.27145 7.0603C2.03924 7.0603 1.8429 6.98008 1.68232 6.81934L1.19395 6.33113C1.03342 6.17062 0.953125 5.97417 0.953125 5.74203C0.953125 5.50989 1.03342 5.31352 1.19395 5.15276L5.43232 0.907935C5.59293 0.747307 5.78934 0.666992 6.02159 0.666992C6.25385 0.666992 6.45009 0.747284 6.61077 0.907935L10.8491 5.15274C11.0097 5.3135 11.09 5.50984 11.09 5.742C11.09 5.97417 11.0097 6.1706 10.8491 6.33111L10.3609 6.81931C10.2004 6.98008 10.005 7.06028 9.77488 7.06028C9.54491 7.06028 9.34741 6.98006 9.18249 6.81931L6.02485 3.65534Z'
            fill='#E64827'
          />
        </svg>
      </button>
      <div
        className={`${
          !seeLess && 'h-0 overflow-hidden'
        } transition-all duration-500`}
      >
        <div className='tablet:hidden xmd:hidden transition-all w-[33.75rem] flex items-center flex-shrink-0 xlg:w-full xlg:px-[1.41rem]'>
          <Image
            className='w-[33.75rem] h-[42rem] xlg:h-[30.625rem] object-contain xlg:w-full'
            src={dataSLides?.[0]?.imgStep?.url || ''}
            alt='map2'
            width={300}
            height={400}
          />
        </div>
        <StepByStepTourDt dataSLides={dataSLides} />
        <div className='transition-all tablet:hidden absolute h-[70rem] *:h-full'>
          <BikeAnimationMb />
        </div>
        <div className='transition-all w-full pt-[6rem] relative z-10 pb-[0.94rem] h-fit  lg:hidden tablet:container'>
          <div className='absolute bottom-0 bg-[#13341c]  w-full left-0 tablet:hidden'></div>
          <div className='flex items-center xmd:px-[0.75rem]'>
            <IconOclock className='size-[1.5rem] mr-[0.37rem] md:size-[2.5rem]' />
            <span className='text-[1rem] font-bold leading-normal text-white tablet:text-[#2e2e2e] md:text-[2rem]'>
              Time
            </span>
            <span className='size-[0.2rem] md:size-[0.4rem] rounded-full block bg-greyscale-5 ml-[0.7rem] mr-[0.5rem]'></span>
            <span className='tablet:text-[#2e2e2e] text-greyscale-5 text-[1rem] font-normal leading-[1.2] tracking-[0.0125rem] md:text-[2rem]'>
              {dataAcf?.intermediate}
            </span>
          </div>
          <h2 className='tablet:text-[#2e2e2e] xmd:px-[0.75rem] font-black text-white mt-[0.75rem] mb-[0.65rem] tracking-[0.00375rem] text-[1.5rem] md:text-[3rem] md:my-[1rem]'>
            {dataTourDetail?.title}
          </h2>
          <div className='flex items-center xmd:px-[0.75rem] space-x-[1.25rem]'>
            <div className='flex items-center whitespace-nowrap'>
              <span className='text-orange-normal mr-[0.44rem] text-[1.5rem] font-medium leading-[1.2] md:text-[2.5rem]'>
                {dataPage?.don_vị}
                {dataAcf?.gia?.self_driving}
              </span>
              <span className='tablet:text-[#2e2e2e] block font-normal text-white border-b border-solid border-b-white leading-normal tracking-[0.00219rem] text-[0.875rem] md:text-[1.875rem]'>
                Self - Driving
              </span>
            </div>
            <div className='flex items-center whitespace-nowrap'>
              <span className=' text-orange-normal mr-[0.44rem] text-[1.5rem] font-medium leading-[1.2] md:text-[2.5rem]'>
                {dataPage?.don_vị}
                {dataAcf?.gia?.self_driving}
              </span>
              <span className='tablet:text-[#2e2e2e] block font-normal text-white border-b border-solid border-b-white leading-normal tracking-[0.00219rem] text-[0.875rem] md:text-[1.875rem]'>
                Local driver
              </span>
            </div>
          </div>
          <div className='flex bg-[#13341c] p-[2rem] rounded-[1rem] xmd:px-[0.75rem] xmd:pb-[1rem] flex-col md:space-y-[2rem] space-y-[1rem] mt-[1.5rem]'>
            {dataSLides?.map((item, index) => (
              <div key={index}>
                <ItemCardInfo
                  item={item}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
const ItemCardInfo = ({item, index}) => {
  const itemRef = useRef()

  const handleOpen = () => {
    if (itemRef.current.offsetHeight > 0) {
      itemRef.current.style.height = 0 + 'px'
    } else {
      itemRef.current.style.height = itemRef.current.scrollHeight + 'px'
    }
  }

  return (
    <article
      onClick={handleOpen}
      className='md:min-h-[10.875rem] rounded-[1.5rem] bg-[#F5F5F5] p-[1.88rem] xlg:p-[2rem] xmd:p-[1rem] xlg:rounded-[0.75rem] relative'
    >
      <h3 className='text-[1.25rem] font-extrabold leading-[1.2] text-greyscale-80 xlg:text-[2rem] xmd:text-[1rem] xlg:tracking-[0.0125rem] xmd:w-[14.8125rem] xlg:w-[80%]'>
        {item?.title}
      </h3>
      <div
        ref={itemRef}
        className={cn(
          'text-greyscale-50  xmd:overflow-hidden transition-all duration-500 text-[0.875rem] font-normal leading-[1.2] tracking-[0.00875rem] mt-[1.12rem] xlg:leading-normal xlg:tracking-[0.00219rem xlg:text-[1.5rem] xmd:text-[0.875rem] xmd:mt-[1.12rem] xlg:mt-[1.5rem]',
          index !== 0 && 'xmd:h-0',
        )}
        dangerouslySetInnerHTML={{__html: item?.descriptions_text}}
      />
      <div className='lg:hidden rounded-[1.5rem] bg-[#E6E6E6] w-[4.625rem] h-[1.625rem] text-[0.75rem] font-normal leading-[1.2] tracking-[0.00375rem] flex justify-center items-center absolute top-[1rem] right-[1rem] text-greyscale-50 md:w-[8rem] md:h-[2.5rem] md:text-[1.5rem]'>
        ( {item?.distance} )
      </div>
    </article>
  )
}
const IconOclock = ({className = ''}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
    >
      <path
        d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
        fill='#E64827'
      />
      <path
        d='M15.7106 15.9298C15.5806 15.9298 15.4506 15.8998 15.3306 15.8198L12.2306 13.9698C11.4606 13.5098 10.8906 12.4998 10.8906 11.6098V7.50977C10.8906 7.09977 11.2306 6.75977 11.6406 6.75977C12.0506 6.75977 12.3906 7.09977 12.3906 7.50977V11.6098C12.3906 11.9698 12.6906 12.4998 13.0006 12.6798L16.1006 14.5298C16.4606 14.7398 16.5706 15.1998 16.3606 15.5598C16.2106 15.7998 15.9606 15.9298 15.7106 15.9298Z'
        fill='white'
      />
    </svg>
  )
}
