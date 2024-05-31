import Link from 'next/link'

export default function BreadcrumbLink({href, children ,isBanner}) {
  return (
    <>
      <svg
        className={`w-[0.25rem] h-[0.5rem] `,
       isBanner ?'stroke-white':'stroke-orange-normal'
      }
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
        href={href}
        className={
          ` line-clamp-1 md:text-greyscale-80 text-0.875 text-sm not-italic font-normal leading-[150%] tracking-0.00219`,
          isBanner ?'text-white':'text-greyscale-40'
        }
      >
        {children}
      </Link>
    </>
  )
}
