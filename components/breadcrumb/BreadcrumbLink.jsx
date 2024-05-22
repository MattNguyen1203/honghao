import Link from 'next/link'

export default function BreadcrumbLink({href, children}) {
  return (
    <>
      <svg
        className='w-[0.25rem] h-[0.5rem] stroke-orange-normal'
        xmlns='http://www.w3.org/2000/svg'
        width='5'
        height='8'
        viewBox='0 0 5 8'
        fill='none'
      >
        <path
          d='M1 1L4 4L1 7'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
      <Link
        href={href}
        className='text-greyscale-40 line-clamp-1 md:text-greyscale-80 text-0.875 text-sm not-italic font-normal leading-[150%] tracking-0.00219'
      >
        {children}
      </Link>
    </>
  )
}
