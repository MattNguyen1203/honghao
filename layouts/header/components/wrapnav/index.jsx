'use client'
import useStore from '@/app/(store)/store'
import React, {useEffect, useState, useRef} from 'react'
import Nav from '../nav'
import NavDropdown from '../dropdown'

const WrapNav = ({dataHeader}) => {
  const setIsMobile = useStore((state) => state.setIsMobile)
  const isMobile = useStore((state) => state.isMobile)
  const setIsTablet = useStore((state) => state.setIsTablet)

  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    // Breakpoints for mobile and tablet
    const MOBILE_MAX_WIDTH = 767 // Maximum width for mobile devices
    const TABLET_MAX_WIDTH = 1024 // Maximum width for tablet devices

    // Check for tablets using window.innerWidth
    const tabletCheck =
      window.innerWidth > MOBILE_MAX_WIDTH &&
      window.innerWidth <= TABLET_MAX_WIDTH

    // Check for mobile devices using window.innerWidth
    const mobileCheck = window.innerWidth <= MOBILE_MAX_WIDTH

    setIsMobile(mobileCheck)
    setIsTablet(tabletCheck)
  }, [])

  return (
    <div className='w-full'>
      <Nav setOpenNav={setOpenNav} />
      <NavDropdown
        setOpenNav={setOpenNav}
        openNav={openNav}
        dataHeader={dataHeader}
      />
    </div>
  )
}

export default WrapNav
