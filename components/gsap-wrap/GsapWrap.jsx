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
  speed: 1.2,
  effects: true,
}
export default function GsapWrap({ children, isMobile }) {
  const pathname = usePathname()
  // useChangePage()
  useGSAP(() => {
    ScrollSmoother.create(scrollSmootherConfig)
  }, [])
  return (
    <div
      id='smooth-wrapper'
    > <div
      id='smooth-content'
    > {children} </div> </div>

  )
}
