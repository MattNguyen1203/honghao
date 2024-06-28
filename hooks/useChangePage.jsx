'use client'

import { useParams, useSearchParams } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const useChangePage = () => {
  const params = useParams()
  const searchParams = useSearchParams()
  useGSAP(() => {
    gsap.to(window, { duration: 0.8, scrollTo: 0 })
  }, [params, searchParams])
}
export default useChangePage
