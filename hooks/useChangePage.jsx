'use client'

import { useParams, useSearchParams } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { usePathname } from 'next/navigation'
const useChangePage = () => {
  const pathName = usePathname()
  const dontShouldScroll = [
    { title: '/blog/hagiang-friend' },
    { title: '/blog' },
    { title: '/blog/article' },
    { title: '/blog/destination' },
    { title: '/blog/news' },
    { title: '/blog/tips' },
    { title: '/blog/travel' },

  ]
  const params = useParams()
  const searchParams = useSearchParams()
  useGSAP(() => {
    const shouldSkipScroll = dontShouldScroll.some(item => item.title === pathName);
    console.log('usecHang');
    if (!shouldSkipScroll) {
      gsap.to(window, { duration: 0, scrollTo: 0 });
    }
  }, [pathName])
}
export default useChangePage
