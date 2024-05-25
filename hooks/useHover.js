import {useEffect, useRef, useState} from 'react'

export const useHover = () => {
  const [isHover, setIsHover] = useState(false)
  const hoverRef = useRef(null)
  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHover(true)
    }
    const handleMouseLeave = () => {
      setIsHover(false)
    }
    hoverRef.current?.addEventListener('mouseenter', handleMouseEnter)
    hoverRef.current?.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      hoverRef.current?.removeEventListener('mouseenter', handleMouseEnter)
      hoverRef.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])
  return [hoverRef, isHover]
}
