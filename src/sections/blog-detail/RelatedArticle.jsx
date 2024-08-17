'use client'
import Image from 'next/image'
import {Button} from '@/components/customCn/button'
import CardBlog from '@/sections/blog/CardBlog.jsx'
import Link from 'next/link'
import useStore from '@/app/(store)/store'
const RelatedArticle = ({dataRelate}) => {
  const {currentCategories, setCurrentCategories} = useStore((state) => state)

  return (
    <section className='relative md:mt-[4.5rem]  md:h-[60.18244rem] xmd:h-[31.1875rem] z-10'>
      <Image
        priority
        alt='ảnh'
        src={'/imgs/blogDetail/mountain.png'}
        width={1600}
        height={1000}
        className='z-[-1] xmd:hidden absolute w-full h-full'
      />
      <Image
        priority
        alt='ảnh'
        src={'/imgs/blogDetail/bg-start2-mobi.png'}
        width={380}
        height={430}
        className='w-full z-[-1]  h-[36.1875rem] absolute bottom-[-1rem] md:hidden'
      />

      <div className='xl:container flex flex-col items-center'>
        <div
          className='xmd:mt-[1rem] mt-[6rem] inline-flex z-10 justify-center items-center gap-2.5 px-[2.125rem] py-[0.8125rem]  xmd:py-[0.5rem] xmd:px-[1.25rem] rounded-[62.5rem]
      text-white bg-[rgba(252,248,247,0.05)] text-center xmd:text-[0.75rem] text-[0.78906rem] not-italic font-normal xmd:leading-[1.2] leading-4 tracking-[0.03125rem] uppercase
      '
        >
          OUR BLOG
        </div>
        <div className='mt-[3.3rem] xmd:w-full xmd:mt-[1.45rem] flex z-10 items-center xmd:justify-between xmd:space-x-[1.25rem] space-x-[1.75rem]'>
          <div className='flex items-center xmd:space-x-[0.56rem]  space-x-[1.875rem]'>
            <div className=' xmd:w-[2rem] w-[14.25813rem] h-[0.0625rem] bg-[rgba(217,217,217,0.28)]'></div>
            <svg
              className='size-[1.71rem]'
              xmlns='http://www.w3.org/2000/svg'
              width='29'
              height='29'
              viewBox='0 0 29 29'
              fill='none'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M3.37891 14.5502C4.31753 14.386 5.26074 14.2586 6.20306 14.1314C6.83648 14.0459 7.4695 13.9603 8.10044 13.8638C9.46448 13.655 10.8383 13.5369 12.2048 13.4195C12.4107 13.4018 12.6164 13.3841 12.8219 13.3661C14.3886 13.0552 15.9736 12.9404 17.5563 13.0229C19.1798 13.2048 20.7724 13.72 22.2779 14.5502V14.9449C20.7724 15.7751 19.1798 16.2903 17.5563 16.4722C15.9736 16.5548 14.3886 16.4399 12.8219 16.129C11.2524 15.9917 9.68286 15.8201 8.10044 15.6313C6.51801 15.4426 4.94846 15.2195 3.37891 14.9449V14.5502ZM19.165 26.286C19.4143 25.7042 19.6882 25.147 19.9612 24.5916C20.0827 24.3445 20.204 24.0977 20.3229 23.8493C20.7089 23.0428 21.1463 22.2706 21.6094 21.5155C21.778 21.2408 21.9176 20.9387 22.0548 20.6416C22.2948 20.1224 22.5277 19.6185 22.8959 19.3019C23.5919 18.7287 24.3938 18.4257 25.2117 18.4267L25.3789 18.667C25.3708 19.7578 25.12 20.8209 24.6585 21.7215C24.3979 22.3088 23.9616 22.6449 23.5248 22.9814C23.3363 23.1266 23.1476 23.2719 22.9731 23.4375C22.3942 23.9866 21.8024 24.5186 21.1977 25.0334C20.5931 25.5482 19.9755 26.0458 19.3195 26.5091L19.165 26.286ZM20.6186 3.66711C20.2282 3.32652 19.8388 2.98678 19.4224 2.67578L19.2423 2.89887C19.5897 3.75687 19.9628 4.58055 20.3487 5.38707C20.7347 6.1936 21.1464 6.98296 21.5581 7.75516C21.6822 7.98798 21.7911 8.23954 21.9 8.491C22.1522 9.07351 22.4042 9.65553 22.8446 10.0031C23.518 10.6236 24.3161 10.9585 25.1346 10.9641L25.3147 10.741C25.3278 9.64787 25.0996 8.57376 24.6586 7.6522C24.4213 7.16101 24.0434 6.85035 23.6541 6.53029C23.4314 6.34719 23.2049 6.161 22.999 5.9362C22.4329 5.31843 21.8797 4.73499 21.2622 4.22019C21.0444 4.0386 20.8313 3.85273 20.6186 3.66711Z'
                fill='white'
              />
            </svg>
          </div>
          <h2 className='text-greyscale-5 xmd:text-[2rem] xmd:font-black xmd:leading-[1.2] xmd:tracking-[0.005rem] opacity-80'>
            Related Articles
          </h2>
          <div className='flex items-center xmd:space-x-[0.56rem]  space-x-[1.875rem]'>
            <svg
              className='size-[1.71rem]'
              xmlns='http://www.w3.org/2000/svg'
              width='29'
              height='29'
              viewBox='0 0 29 29'
              fill='none'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M3.37891 14.5502C4.31753 14.386 5.26074 14.2586 6.20306 14.1314C6.83648 14.0459 7.4695 13.9603 8.10044 13.8638C9.46448 13.655 10.8383 13.5369 12.2048 13.4195C12.4107 13.4018 12.6164 13.3841 12.8219 13.3661C14.3886 13.0552 15.9736 12.9404 17.5563 13.0229C19.1798 13.2048 20.7724 13.72 22.2779 14.5502V14.9449C20.7724 15.7751 19.1798 16.2903 17.5563 16.4722C15.9736 16.5548 14.3886 16.4399 12.8219 16.129C11.2524 15.9917 9.68286 15.8201 8.10044 15.6313C6.51801 15.4426 4.94846 15.2195 3.37891 14.9449V14.5502ZM19.165 26.286C19.4143 25.7042 19.6882 25.147 19.9612 24.5916C20.0827 24.3445 20.204 24.0977 20.3229 23.8493C20.7089 23.0428 21.1463 22.2706 21.6094 21.5155C21.778 21.2408 21.9176 20.9387 22.0548 20.6416C22.2948 20.1224 22.5277 19.6185 22.8959 19.3019C23.5919 18.7287 24.3938 18.4257 25.2117 18.4267L25.3789 18.667C25.3708 19.7578 25.12 20.8209 24.6585 21.7215C24.3979 22.3088 23.9616 22.6449 23.5248 22.9814C23.3363 23.1266 23.1476 23.2719 22.9731 23.4375C22.3942 23.9866 21.8024 24.5186 21.1977 25.0334C20.5931 25.5482 19.9755 26.0458 19.3195 26.5091L19.165 26.286ZM20.6186 3.66711C20.2282 3.32652 19.8388 2.98678 19.4224 2.67578L19.2423 2.89887C19.5897 3.75687 19.9628 4.58055 20.3487 5.38707C20.7347 6.1936 21.1464 6.98296 21.5581 7.75516C21.6822 7.98798 21.7911 8.23954 21.9 8.491C22.1522 9.07351 22.4042 9.65553 22.8446 10.0031C23.518 10.6236 24.3161 10.9585 25.1346 10.9641L25.3147 10.741C25.3278 9.64787 25.0996 8.57376 24.6586 7.6522C24.4213 7.16101 24.0434 6.85035 23.6541 6.53029C23.4314 6.34719 23.2049 6.161 22.999 5.9362C22.4329 5.31843 21.8797 4.73499 21.2622 4.22019C21.0444 4.0386 20.8313 3.85273 20.6186 3.66711Z'
                fill='white'
              />
            </svg>
            <div className=' xmd:w-[2rem] w-[14.25813rem] h-[0.0625rem] bg-[rgba(217,217,217,0.28)]'></div>
          </div>
        </div>
        <div className='z-20 xmd:mt-[1.89rem] mt-[3.8rem] xmd:container xmd:overflow-auto no-scrollbar xmd:w-full'>
          <div className=' flex items-start w-max xmd:space-x-[0.88rem] space-x-[1.4rem]'>
            {dataRelate?.map((p, i) => (
              <div key={i}>
                <CardBlog singlePost={p} />
              </div>
            ))}
          </div>
        </div>
        <div className='z-20 inline-flex items-center xmd:mt-[1.97rem] mt-[3rem] space-x-[1.3125rem]'>
          <div className='xmd:hidden h-[0.0625rem] rounded-full bg-[rgba(255,255,255,0.60)]'></div>
          <Link href={`/blog/${currentCategories}`}>
            <Button icon>see All blogs</Button>
          </Link>
          <div className='xmd:hidden h-[0.0625rem] rounded-full bg-[rgba(255,255,255,0.60)]'></div>
        </div>
      </div>
    </section>
  )
}

export default RelatedArticle
