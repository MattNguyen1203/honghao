'use client'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Aos = ({ children, className }) => {
  useEffect(() => {
    AOS.init({
      // duration: 800,
      once: true,
      disable: function () {
        var maxWidth = 769
        return window.innerWidth < maxWidth
      }
    })
    AOS.refresh()
  }, [])
  return (
    <main className={className}> {children}</main>
  )
}

export default Aos