import Image from 'next/image'
import React from 'react'

const Banner = ({ mainImg, mainText, mainTextMb }) => {
  return (
    <div className='w-full h-screen xmd:h-[21.04713rem] relative before:w-full before:h-[24.25rem] before:flex before:absolute before:bottom-0 before:left-0 before:bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)] before:z-10'>
      <Image
        src={mainImg}
        alt=''
        width={1600}
        height={728}
        className='w-full h-full object-cover'
      />
      <Image
        src={mainText}
        alt=''
        width={1600}
        height={728}
        className='w-[52.1105rem] h-[22.1875rem] object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex xmd:hidden'
      />

      <Image
        src={mainTextMb}
        alt=''
        width={1600}
        height={728}
        className='w-[18.09813rem] h-[7.55425rem] object-contain absolute top-1/2 left-[1.25rem] -translate-y-1/2 z-10 hidden xmd:flex'
      />
    </div>
  )
}

export default Banner
