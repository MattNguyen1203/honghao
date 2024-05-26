import Image from 'next/image'
import {cn} from '@/lib/utils'
import useStore from '@/app/(store)/store'
const CardOurTeam = () => {
  const isMobile = useStore((state) => state.isMobile)
  return (
    <div
      className={cn(
        `relative bg-white cursor-pointer overflow-hidden flex w-[17.6875rem] xmd:h-[26rem] 
      h-[28.5rem] flex-col  items-center justify-between xmd:space-y-[0.75rem] space-y-[1rem] pb-[0.6875rem] rounded-3xl 
      shadow-md
    `,
        !isMobile ? 'group' : '',
      )}
    >
      <div className=' w-[17.6875rem] h-[24.125rem] xmd:h-[21.83156rem]  group-hover:h-[20.3125rem] duration-500 ease-linear rounded-2xl overflow-hidden'>
        <Image
          priority
          alt='ảnh'
          src={'/imgs/common/team.png'}
          width={300}
          height={400}
          className='object-cover scale-110 md:group-hover:scale-100 duration-500 ease-linear rounded-2xl h-full w-full shrink-0'
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
          Mr. Thanh Nguyen
        </div>
        <div className='flex items-center self-stretch justify-center gap-3'>
          <div className='text-greyscale-80 text-center text-sm not-italic font-normal leading-[120%] tracking-[0.00875rem]'>
            Tour Leader
          </div>
          <div className='rounded-full size-[0.25rem] bg-greyscale-80'></div>
          <div className='text-greyscale-80 text-center text-sm not-italic font-normal leading-[120%] tracking-[0.00875rem]'>
            3 years EXP
          </div>
        </div>
        <div className='w-[15.75rem] group-hover:translate-y-[0rem] translate-y-[2rem] group-hover:h-[3.5rem]  overflow-hidden h-0 duration-500 ease-linear text-greyscale-30 text-center text-xs not-italic font-normal leading-[120%] tracking-[0.00375rem]'>
          “As a tour guide, my greatest joy is witnessing the wonder and awe on
          travelers' faces as they discover the hidden gems and cultural
          treasures of our destination”
        </div>
      </div>
    </div>
  )
}

export default CardOurTeam
// z
