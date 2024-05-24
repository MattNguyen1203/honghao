import Image from 'next/image'
import {cn} from '@/lib/utils'
import ClientSayPopup from './ClientSayItemPopup'
import {forwardRef} from 'react'

const ClientSayItem = forwardRef(
  (
    {
      direction,
      img,
      name,
      date,
      social,
      rate,
      content,
      className,
      canHover,
      hidden,
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn('absolute group', className)}
      >
        <button className='size-[1.66rem]'>
          <Image
            src={'/imgs/home/circle-dot.svg'}
            alt='circle dot icon'
            className='object-cover size-full'
            width={120}
            height={120}
          />
        </button>
        {direction === 'right' ? (
          <div
            className={cn(
              'absolute top-0 right-0 h-[15rem] w-[32rem] bg-transparent translate-x-full -translate-y-2/3 transition-400',
              {
                'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto':
                  canHover,
              },
            )}
          />
        ) : (
          <div
            className={cn(
              'absolute top-0 left-0 h-[15rem] w-[29.8rem] bg-transparent -translate-x-full -translate-y-1/2',
              {
                'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto':
                  canHover,
              },
            )}
          />
        )}
        <div
          className={cn('absolute transition-400', {
            'top-0 right-0 min-w-[14.25rem] min-h-[4.125rem] translate-x-[95%] -translate-y-full':
              direction === 'right',
            'min-w-[7.8rem] min-h-[1.56rem] top-0 left-0 -translate-x-[95%] -translate-y-[82%]':
              direction === 'left',
            'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto':
              canHover,
            'opacity-0 pointer-events-none': hidden,
          })}
        >
          <Image
            src={
              direction === 'right'
                ? '/imgs/home/line-2.svg'
                : '/imgs/home/line-1.svg'
            }
            alt='line'
            className='z-10 object-contain size-full'
            width={120}
            height={120}
          />
          <ClientSayPopup
            direction={direction}
            social={social}
            img={img}
            name={name}
            date={date}
            rate={rate}
            content={content}
          />
        </div>
      </div>
    )
  },
)

export default ClientSayItem
