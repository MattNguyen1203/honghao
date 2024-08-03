'use client'
import Image from 'next/image'
import { useState } from 'react'
import 'aos/dist/aos.css'
import { cn } from '@/lib/utils';
export default function BannerAllTour({ dataTourPage }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className='w-full h-[43.75rem] xmd:h-[21.04713rem] relative'>
      <h1 className='opacity-0 z-[-1] fixed top-0 left-0'>Ha Giang Our Tour</h1>
      <div
        className={` absolute top-0 left-0 z-[50] w-full h-full  bg-conicBanner opacity-100 transition-all duration-1000 xmd:duration-500 ${loaded ? '!opacity-0' : 'opacity-100'}`}
      ></div>
      <div className={cn('absolute transition-all duration-1000 xmd:duration-500 bottom-0 left-0 z-[1] w-full h-[70%] bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]',
        loaded ? ' opacity-100' : ' opacity-0'
      )}></div>
      <Image
        className={cn('size-full object-cover transition-all xmd:hidden duration-1000 xmd:duration-500 absolute top-0 left-0 bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]',
          loaded ? '' : 'blur-lg xmd:blur-sm'
        )}
        alt='ảnh banner all tour'
        src={dataTourPage?.banner?.image?.url}
        width={1600}
        height={436}
        onLoadingComplete={() => setLoaded(true)}
      />

      <Image
        className={cn('size-full object-cover transition-all md:hidden duration-1000 xmd:duration-500 absolute top-0 left-0 bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]',
          loaded ? '' : 'blur-lg xmd:blur-sm'
        )}
        alt='ảnh banner all tour'
        src={dataTourPage?.banner_mobile_copy?.banner_mobile?.url}
        width={1600}
        height={436}
        onLoadingComplete={() => setLoaded(true)}
      />
      <Image
        data-aos="fade-up"
        data-aos-duration="900"
        className='xmd:hidden absolute z-[5] object-contain right-[4.06rem] top-[20%] w-[24.4375rem] h-[24.75rem]'
        alt='image map'
        src={'/map.png'}
        width={391}
        height={396}
      />
      <Image
        data-aos="fade-up"
        data-aos-duration="1000"
        draggable='false'
        className='xmd:hidden absolute left-[8.31rem] z-[5] object-cover top-[30%] h-[19.6875rem] w-[52.1105rem]'
        alt='image title'
        src={dataTourPage?.banner?.image_title_big?.url}
        width={833.768}
        height={315}
      />
      <Image
        draggable='false'
        className='md:hidden brightness-125 absolute left-[1.25rem] z-[5] object-contain top-1/2 -translate-y-1/2 h-[7.6875rem] w-[20.1105rem]'
        alt='image title mobile'
        src={dataTourPage?.banner_mobile_copy?.image_title_big?.url}
        width={306.568}
        height={118.868}
      />
    </section>
  )
}
