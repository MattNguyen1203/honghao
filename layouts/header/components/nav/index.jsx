import Image from 'next/image'
import React from 'react'

const Nav = ({setOpenNav}) => {
  return (
    <div className='py-[1.5rem] px-[5rem] xmd:px-[1.25rem] flex w-full justify-between items-center'>
      <Image
        src='/imgs/common/logo.png'
        alt='Hồng Hào travel'
        width={200}
        height={200}
        className='w-[9.625rem] h-[3.1875rem] object-contain xmd:w-[7.1875rem] xmd:h-[2.5625rem]'
      />

      <div
        className=' w-fit p-[0.5rem] pr-[1rem] rounded-[1.5rem] md:bg-orange-normal xmd:border border-solid border-greyscale-0 flex items-center cursor-pointer'
        onClick={() => setOpenNav(true)}
      >
        <Image
          src='/imgs/common/menu.svg'
          alt='Hồng Hào travel'
          width={50}
          height={50}
          className='size-[2.0625rem] object-contain mr-[0.44rem]'
        />
        <span className='text-125 xmd:text-1 font-bold text-greyscale-0 uppercase'>
          Menu
        </span>
      </div>
    </div>
  )
}

export default Nav
