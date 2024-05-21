'use client'

import Image from 'next/image'

export default function BannerAllTour() {
  return (
    <section className='w-full h-[43.75rem] relative'>
      <Image
        className='size-full object-cover absolute top-0 left-0'
        alt='ảnh banner all tour'
        src={'/imgs/all-tour/Banners.jpg'}
        width={1600}
        height={436}
      />
      <Image
        className='absolute top-1/2 object-cover right-[4.06rem] -translate-y-1/2 w-[24.4375rem] h-[24.75rem]'
        alt='image map'
        src={'/imgs/all-tour/Map.png'}
        width={391}
        height={396}
      />
      <Image
        className='absolute left-[8.31rem] object-cover top-1/2 -translate-y-1/2 h-[19.6875rem] w-[52.1105rem]'
        alt='image title'
        src={'/imgs/all-tour/title.png'}
        width={833.768}
        height={315}
      />
    </section>
  )
}
