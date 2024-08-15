'use client'
import {cn} from '@/lib/utils'
import Link from 'next/link'
import useStore from '@/app/(store)/store'
export default function BreadcrumbLink({href, subLink, children, isBanner}) {
  const {isMobile} = useStore((state) => state)

  const truncateText = (text, maxLength) => {
    return text?.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text
  }
  return (
    <>
      <svg
        className={cn(
          `w-[0.25rem] h-[0.5rem] `,
          isBanner ? 'stroke-white' : 'stroke-orange-normal',
          subLink ? '!stroke-greyscale-10' : '',
        )}
        xmlns='http://www.w3.org/2000/svg'
        width='5'
        height='8'
        viewBox='0 0 5 8'
        fill='none'
      >
        <path
          d='M1 1L4 4L1 7'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <Link
        href={href || '/'}
        className={cn(
          ` md:text-greyscale-80 text-0.875 text-sm not-italic font-normal leading-[150%] tracking-0.00219`,
          isBanner ? 'text-white' : 'text-greyscale-40',
          subLink ? '!text-greyscale-10' : '',
        )}
      >
        <div className='line-clamp-1'>
          {isMobile ? truncateText(children, 20) : children}
        </div>
      </Link>
    </>
  )
}
