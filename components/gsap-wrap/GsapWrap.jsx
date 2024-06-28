'use client'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'
import { usePathname } from 'next/navigation'
import useChangePage from '@/hooks/useChangePage'
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, ScrollToPlugin)
export const scrollSmootherConfig = {
  speed: 1,
  effects: false,
}
export default function GsapWrap({ children, isMobile }) {
  const pathname = usePathname()
  // useChangePage()
  useGSAP(() => {
    ScrollSmoother.create(scrollSmootherConfig)
  }, [pathname])
  return (
    <div
      id='smooth-wrapper'
    > <div
      id='smooth-content'
    > {children} </div> </div>

  )
}
