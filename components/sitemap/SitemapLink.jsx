import Link from 'next/link'

export default function SitemapLink({children, ...props}) {
  return (
    <Link
      {...props}
      className='text-1.125 hover:text-orange-normal transition-400'
    >
      {children}
    </Link>
  )
}
