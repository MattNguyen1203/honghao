'use client'
import useStore from '@/app/(store)/store'
import React, {useEffect, useState} from 'react'
import Nav from '../nav'
import NavDropdown from '../dropdown'

const WrapNav = () => {
  const setIsMobile = useStore((state) => state.setIsMobile)
  const isMobile = useStore((state) => state.isMobile)

  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    const userAgent =
      typeof navigator === 'undefined' ? '' : navigator.userAgent
    const mobileCheck =
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent,
      )

    setIsMobile(mobileCheck)
  }, [])

  return (
    <div className='w-full'>
      <Nav setOpenNav={setOpenNav} />
      <NavDropdown
        setOpenNav={setOpenNav}
        openNav={openNav}
      />
    </div>
  )
}

export default WrapNav
