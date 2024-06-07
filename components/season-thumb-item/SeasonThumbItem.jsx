import {cn} from '@/lib/utils'
import Image from 'next/image'

export default function SeasonThumbItem({
  handleOnClick,
  active,
  isMobile,
  item,
  title,
}) {
  return (
    <div
      className={cn(
        'relative bg-[linear-gradient(180deg,rgba(125,125,125,0.50)_20%,rgba(255,255,255,0.20)_80%)] min-w-fit pt-[0.5rem] pb-[0.44rem] md:pb-2 rounded-[0.7rem] flex flex-col items-center space-y-1 transition-400 cursor-pointer overflow-hidden thumb-item flex-none px-4 md:px-3.5 transition-400 border',
        {
          'bg-elevation-30 thumb-item-mobile': isMobile,
          'border-greyscale-0/20': !isMobile,
          'border-[#ED1C24]': active && isMobile,
        },
      )}
      onClick={handleOnClick}
    >
      {!isMobile && (
        <>
          <div
            className={cn(
              'absolute w-full h-full top-0 left-0 !mt-0 transition-600 bg-[linear-gradient(180deg,rgba(255,255,255,0.50)_0%,rgba(255,255,255,0.05)_100%)]',
              {
                'opacity-0': !active,
              },
            )}
            // style={{
            //   background:
            //     'linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.05) 100%)',
            // }}
          />
          <div
            className={cn(
              'absolute w-full h-full top-0 left-0 !mt-0 transition-600 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.01)_100%)]',
              {
                'opacity-0': active,
              },
            )}
            // style={{
            //   background:
            //     'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.01) 100%)',
            // }}
          />
        </>
      )}
      {isMobile && (
        <div
          className={cn(
            'absolute w-full h-full top-0 left-0 !mt-0 transition-400',
            {
              'opacity-0': !active,
            },
          )}
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(230, 72, 39, 0.06) 100%)',
          }}
        />
      )}
      <div
        className={cn(
          'text-center text-1 tablet:text-15 font-extrabold leading-1.2 tracking-0.0125 font-tripsans opacity-90 uppercase',
          {
            'text-greyscale-80': isMobile,
            'text-greyscale-0': !isMobile,
          },
        )}
      >
        {title}
      </div>
      <p
        className={cn(
          'text-0.75 tablet:text-1125 text-center font-tripsans leading-1.2 tracking-0.00375 opacity-70 font-normal',
          {
            'text-greyscale-80': isMobile,
            'text-greyscale-0': !isMobile,
          },
        )}
      >
        Degree
      </p>
      <strong
        className={cn(
          'font-tripsans text-0.75 tablet:text-15 font-extrabold leading-1.2 tracking-0.00375 opacity-80',
          {
            'text-greyscale-80': isMobile,
            'text-greyscale-0': !isMobile,
          },
        )}
      >
        {item?.temp}
      </strong>
      {!isMobile ? (
        <Image
          src={'/imgs/home/cloud-with-raining.svg'}
          alt='cloud with raining'
          className='size-[0.875rem] tablet:size-[1.5rem]'
          width={120}
          height={120}
        />
      ) : (
        <Image
          src={'/imgs/home/cloud-with-raining-mobile.svg'}
          alt='cloud with raining'
          className='size-[0.875rem] tablet:size-[1.5rem]'
          width={120}
          height={120}
        />
      )}
      <p
        className={cn(
          'font-tripsans text-0.75 tablet:text-125 font-extrabold leading-1.2 tracking-0.00375 opacity-80',
          {
            'text-greyscale-80': isMobile,
            'text-greyscale-0': !isMobile,
          },
        )}
      >
        {item?.rain} mm
      </p>
    </div>
  )
}
