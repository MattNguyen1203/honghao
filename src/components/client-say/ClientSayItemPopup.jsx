import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function ClientSayPopup({
  direction,
  img,
  name,
  date,
  social,
  rate,
  content,
}) {
  return (
    <div
      className={cn(
        'relative flex flex-col gap-4 rounded-[1.5rem] overflow-hidden w-[19.4375rem] md:w-[22rem] xmd:bg-white/10 bg-[rgba(255,255,255,0.10)] md:backdrop-blur-[1rem] px-4 py-6 flex-none',
        {
          'absolute top-0 right-0 translate-x-full -translate-y-1/2':
            direction === 'right',
          'absolute top-0 left-0 -translate-x-full -translate-y-1/2':
            direction === 'left',
        },
      )}
    >
      <div className='hidden md:block absolute top-0 left-0 size-full bg-black/10 backdrop-blur-[16px] -z-10' />
      <div className='flex flex-row items-center'>
        <div className='flex items-center justify-center flex-none overflow-hidden rounded-full size-12'>
          <Image
            src={img}
            alt='client'
            className='object-cover size-full'
            width={120}
            height={120}
          />
        </div>
        <div className='flex flex-col space-y-[0.38rem] flex-none ml-5'>
          <strong className='text-greyscale-5 font-tripsans text-1.25 tablet:text-175 font-bold leading-1.2 line-clamp-1'>
            {name}
          </strong>
          <p className='text-greyscale-5 text-0.875 tablet:text-15 leading-1.2 tracking-0.00875 line-clamp-1'>
            {date}
          </p>
        </div>
        {social === 'tripadvisor' && (
          <div className='size-10 flex justify-center items-center bg-[#33E0A0] rounded-full ml-auto flex-none'>
            <Image
              src={'/imgs/home/tripadvisor.svg'}
              alt='tripadvisor'
              className='w-[1.685rem] h-[1.085rem]'
              width={120}
              height={120}
            />
          </div>
        )}
      </div>
      <div className='flex flex-row space-x-1'>
        {Array(rate)
          .fill(0)
          .map((_, i) => {
            return (
              <Image
                key={i}
                src={'/imgs/home/star.svg'}
                alt='star'
                className='size-4 tablet:size-[2rem]'
                width={120}
                height={120}
              />
            )
          })}
      </div>
      <div className='h-[6rem] tablet:h-[10rem] pr-[0.62rem] md:pr-4 overflow-y-auto content-container'>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className='content-container text-greyscale-5 text-0.875 tablet:text-15 leading-1.2 tracking-0.00875 opacity-90'
        ></div>
      </div>
    </div>
  )
}
