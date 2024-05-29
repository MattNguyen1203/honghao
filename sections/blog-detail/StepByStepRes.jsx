'use client'

import BikeAnimationMb from '@/components/bikeAnimateMb'

// import {dataSLides} from './data'

export default function StepByStepRes({dataAcf}) {
  if (typeof window !== 'undefined' && window?.innerWidth >= 1024) return null
  const dataSLides = dataAcf?.dataSLides
  console.log(dataSLides)
  return (
    <>
      <div className='absolute'>
        <BikeAnimationMb />
      </div>
      <div className='w-full pt-[6rem] relative z-10 pb-[0.94rem] h-fit px-[0.75rem] lg:hidden'>
        <div className='absolute bottom-0 bg-[#13341c] h-[70%] w-full left-0'></div>
        <div className='flex items-center'>
          <IconOclock className='size-[1.5rem] mr-[0.37rem] md:size-[2.5rem]' />
          <span className='text-[1rem] font-bold leading-normal text-white md:text-[2rem]'>
            Time
          </span>
          <span className='size-[0.2rem] md:size-[0.4rem] rounded-full block bg-greyscale-5 ml-[0.7rem] mr-[0.5rem]'></span>
          <span className='text-greyscale-5 text-[1rem] font-normal leading-[1.2] tracking-[0.0125rem] md:text-[2rem]'>
            {dataAcf?.intermediate}
          </span>
        </div>
        <h2 className='font-black text-white mt-[0.75rem] mb-[0.65rem] tracking-[0.00375rem] text-[1.5rem] md:text-[3rem] md:my-[1rem]'>
          {dataAcf?.name_tour}
        </h2>
        <div className='flex items-center space-x-[1.25rem]'>
          <div className='flex items-center whitespace-nowrap'>
            <span className='text-orange-normal mr-[0.44rem] text-[1.5rem] font-medium leading-[1.2] md:text-[2.5rem]'>
              {dataAcf?.don_vi}
              {dataAcf?.gia?.self_driving}
            </span>
            <span className='block font-normal text-white border-b border-solid border-b-white leading-normal tracking-[0.00219rem] text-[0.875rem] md:text-[1.875rem]'>
              Self - Driving
            </span>
          </div>
          <div className='flex items-center whitespace-nowrap'>
            <span className='text-orange-normal mr-[0.44rem] text-[1.5rem] font-medium leading-[1.2] md:text-[2.5rem]'>
              {dataAcf?.don_vi}
              {dataAcf?.gia?.self_driving}
            </span>
            <span className='block font-normal text-white border-b border-solid border-b-white leading-normal tracking-[0.00219rem] text-[0.875rem] md:text-[1.875rem]'>
              Local driver
            </span>
          </div>
        </div>
        <div className='flex flex-col md:space-y-[2rem] space-y-[1rem] mt-[1.5rem]'>
          {dataSLides?.map((item, index) => (
            <ItemCardInfo
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  )
}
const ItemCardInfo = ({item}) => {
  return (
    <article className='min-h-[10.875rem] rounded-[1.5rem] bg-[#F5F5F5] p-[1.88rem] xlg:p-[2rem] xmd:p-[1rem] xlg:rounded-[0.75rem] relative'>
      <h3 className='text-[1.25rem] font-extrabold leading-[1.2] text-greyscale-80 xlg:text-[2rem] xmd:text-[1rem] xlg:tracking-[0.0125rem] xmd:w-[14.8125rem] xlg:w-[80%]'>
        {item?.title}
      </h3>
      {item?.descriptions?.map((des, idx) => (
        <div
          className='text-greyscale-50 text-[0.875rem] font-normal leading-[1.2] tracking-[0.00875rem] mt-[1.12rem] xlg:leading-normal xlg:tracking-[0.00219rem xlg:text-[1.5rem] xmd:text-[0.875rem] xmd:mt-[1.12rem] xlg:mt-[1.5rem]'
          key={idx}
          dangerouslySetInnerHTML={{__html: des?.descriptions_text}}
        />
      ))}
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
