'use client'
import React, { useEffect, useRef } from 'react'
function ScrollUp() {
  const arrowRef = useRef()

  useEffect(() => {
    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('click', (e) => {
        if (e.target === arrowRef?.current) {
          handleClick()
        }
      })
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('click', handleClick)
      }
    }
  }, [])

  const triangleRef = useRef(null)

  useEffect(() => {
    const triangle = triangleRef.current
    if (triangle && triangle.getBBox().width > 0) {
      const length = triangle.getTotalLength() + 1
      triangle.style.strokeDasharray = length
      triangle.style.strokeDashoffset = length

      const handleScroll = () => {
        const scrollPercent =
          (document.body.scrollTop + document.documentElement.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)
        const draw = length * scrollPercent
        triangle.style.strokeDashoffset = length - draw
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  return (
    <div         ref={arrowRef} className='relative cursor-pointer'>
      <svg
        id='mySVG'
        className='w-[3.375rem] h-[3.375rem] pointer-events-none z-[9]'
        width='54'
        height='54'
        viewBox='0 0 54 54'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          ref={triangleRef}
          id='triangle'
          cx='27'
          cy='27'
          r='25.5'
          stroke='#E64827'
          strokeWidth='3'
        />
      </svg>
      <svg
        className='scrollUp absolute pointer-events-none  md:top-[50%] xl:top-[50%] z-[9]  left-0'
        xmlns='http://www.w3.org/2000/svg'
        width='54'
        height='54'
        viewBox='0 0 54 54'
        fill='none'
      >
        <path

          d='M27 16L37 32L27 27L17 32L27 16Z'
          fill='#E64827'
        />
      </svg>
    </div>
  )
}

export default ScrollUp
