'use client'

import {useEffect, useRef, useState} from 'react'

export default function useClickOutSide() {
  const [isOutSide, setIsOutSide] = useState(false)
  const [isClick, setIsClick] = useState(false)
  const sideRef = useRef()
  useEffect(() => {
    if (typeof window === 'undefined') return
    document.addEventListener('click', handleClickOutSide, true)
    return () => document.removeEventListener('click', handleClickOutSide)
  }, [])

  const handleClickOutSide = (e) => {
    if (!sideRef?.current?.contains(e.target)) {
      //out side
      setIsOutSide(true)
      setIsClick((prev) => !prev)
    } else {
      //in side
      setIsOutSide(false)
      setIsClick((prev) => !prev)
    }
  }

  return [sideRef, isOutSide, isClick]
}
