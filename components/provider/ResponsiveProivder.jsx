'use client'

import {useEffect} from 'react'
import useStore from '@/app/(store)/store'

export default function ResponsiveProvider({children}) {
  const setIsMobile = useStore((state) => state.setIsMobile)
  useEffect(() => {
    const userAgent =
      typeof navigator === 'undefined' ? '' : navigator.userAgent
    const mobileCheck =
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent,
      )
    setIsMobile(mobileCheck)
  }, [])
  return children
}
