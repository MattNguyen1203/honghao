import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen w-screen relative'>
      <Image
        src='/imgs/notfound.png'
        alt='honghao'
        width={1000}
        height={1000}
        className='absolute bottom-0 left-0 object-contain flex w-full h-auto z-10'
      />
      <div className='font-londrina text-[25rem] font-black'>404</div>
    </div>
  )
}

export default NotFound
