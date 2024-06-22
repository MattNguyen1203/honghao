'use client'

import Image from 'next/image'
import AOS from 'aos'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
export default function BannerAllTour() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: function () {
        var maxWidth = 769
        return window.innerWidth < maxWidth
      }
    })
    AOS.refresh()
  }, [])
  return (
    <section className='w-full h-[43.75rem] xmd:h-[21.04713rem] relative'>
      <h1 className='opacity-0 z-[-1] fixed top-0 left-0'>Ha Giang Our Tour</h1>
      <div
        className={` absolute top-0 left-0 z-[50] w-full h-full bg-[#285137] opacity-95 transition-all duration-300 ${loaded ? '!opacity-0' : 'opacity-100'}`}
      ></div>
      <div className='absolute top-0 left-0 size-full bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]'></div>
      <Image
        className='size-full object-cover absolute top-0 left-0 bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]'
        alt='ảnh banner all tour'
        src={'/imgs/all-tour/Banners.jpg'}
        width={1600}
        height={436}
        onLoadingComplete={() => setLoaded(true)}
      />
      <Image
        data-aos="fade-up"
        data-aos-duration="700"
        className='xmd:hidden absolute object-contain right-[4.06rem] top-[20%] w-[24.4375rem] h-[24.75rem]'
        alt='image map'
        src={'/imgs/all-tour/Map.png'}
        width={391}
        height={396}
      />
      <Image
        data-aos="fade-up"
        data-aos-duration="700"
        draggable='false'
        className='xmd:hidden absolute left-[8.31rem] object-cover top-[30%] h-[19.6875rem] w-[52.1105rem]'
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
