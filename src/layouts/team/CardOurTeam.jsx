'use client'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import useStore from '@/app/(store)/store'
const CardOurTeam = ({ data }) => {
  const isMobile = useStore((state) => state.isMobile)
  return (
    <div
      className={cn(
        `relative bg-white cursor-pointer overflow-hidden flex  w-[17.6875rem] xmd:h-[26rem]
      h-[28.5rem] flex-col  items-center justify-between xmd:space-y-[0.75rem] space-y-[1rem] pb-[0.6875rem] rounded-3xl 
      shadow-md
    `,
        !isMobile ? 'group' : 'group',
      )}
    >
      <div className=' xmd:w-[17.7875rem] w-[17.6875rem] h-[24.125rem] xmd:h-[21.83156rem]  group-hover:h-[20.3125rem] duration-500 ease-linear rounded-3xl overflow-hidden'>
        <Image
          priority
          alt='ảnh'
          src={data?.img?.url || ''}
          width={300}
          height={400}
          className='object-cover xmd:translate-x-[0.01rem]  md:scale-[1.2] md:group-hover:scale-[1.1] duration-500 ease-linear rounded-2xl h-full w-full shrink-0'
        />
      </div>
      <div className='absolute right-[1.1rem] top-[0.6rem] group-hover:opacity-100 opacity-0 duration-500 '>
        <div className='relative'>
          <Image
            priority
            alt='ảnh'
            src={'/imgs/common/hong-hao-travel.png'}
            width={300}
            height={400}
            className='h-[4.2rem] w-[4rem] circular-infinity '
          />
          <Image
            priority
            alt='ảnh'
            src={'/imgs/common/map-xoay.png'}
            width={300}
            height={400}
            className='size-[2rem] absolute top-1/2 w-full h-full -translate-y-1/2 left-1/2 -translate-x-1/2'
          />
        </div>
      </div>
      <div className=' ease-linear  flex flex-col items-center justify-around space-y-[0.25rem] self-stretch'>
        <div className='text-orange-normal text-center text-base not-italic font-bold leading-[120%] tracking-[0.0125rem]'>
          {data?.name}
        </div>
        <div className='flex items-center self-stretch justify-center gap-3'>
          <div className='text-greyscale-80 text-center text-sm not-italic font-normal leading-[120%] tracking-[0.00875rem]'>
            {data?.position}
          </div>
          <div className='rounded-full size-[0.25rem] bg-greyscale-80'></div>
          <div className='text-greyscale-80 text-center text-sm not-italic font-normal leading-[120%] tracking-[0.00875rem]'>
            {data?.exp}
          </div>
        </div>
        <div className='w-[15.75rem] scrollbar-custom group-hover:translate-y-[0rem] translate-y-[2rem] group-hover:h-[4rem]  overflow-y-scroll h-0 duration-500 ease-linear text-greyscale-30 text-center text-xs not-italic font-normal leading-[120%] tracking-[0.00375rem]'>
          {data?.content}
        </div>
      </div>
    </div>
  )
}

export default CardOurTeam
