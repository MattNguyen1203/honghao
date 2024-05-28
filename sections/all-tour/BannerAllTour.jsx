'use client'

import Image from 'next/image'

export default function BannerAllTour() {
  return (
    <section className='w-full h-[43.75rem] xmd:h-[21.04713rem] relative'>
      <Image
        className='size-full object-cover absolute top-0 left-0'
        alt='ảnh banner all tour'
        src={'/imgs/all-tour/Banners.jpg'}
        width={1600}
        height={436}
      />
      <Image
        className='xmd:hidden absolute top-1/2 object-cover right-[4.06rem] -translate-y-1/2 w-[24.4375rem] h-[24.75rem]'
        alt='image map'
        src={'/imgs/all-tour/Map.png'}
        width={391}
        height={396}
      />
      <Image
        draggable='false'
        className='xmd:hidden absolute left-[8.31rem] object-cover top-1/2 -translate-y-1/2 h-[19.6875rem] w-[52.1105rem]'
        alt='image title'
        src={'/imgs/all-tour/title.png'}
        width={833.768}
        height={315}
      />
      <Image
        draggable='false'
        className='md:hidden absolute left-[1.25rem] object-cover top-1/2 -translate-y-1/2 h-[7.42925rem] w-[19.1605rem]'
        alt='image title'
        src={'/imgs/all-tour/title-mb.png'}
        width={306.568}
        height={118.868}
      />
    </section>
  )
}
