import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/button'
const RelatedArticle = () => {
  return (
    <section className='relative mt-[4.5rem] h-[60.18244rem]'>
      <Image priority alt="ảnh" src={'/imgs/blogDetail/mountain.png'} width={1600} height={1000} className="z-[-1] absolute w-full h-full" />
      <div className="xl:container flex flex-col items-center">

        <div className="mt-[6rem] inline-flex z-10 justify-center items-center gap-2.5 px-[2.125rem] py-[0.8125rem] rounded-[62.5rem]
      text-white bg-[rgba(252,248,247,0.05)] text-center text-[0.78906rem] not-italic font-normal leading-4 tracking-[0.03125rem] uppercase
      ">
          OUR BLOG
        </div>
        <div className="mt-[3.3rem] inline-flex z-10 items-center space-x-[1.75rem]">
          <div className="flex items-center space-x-[1.875rem]">
            <div className='w-[14.25813rem] h-[0.0625rem] bg-[rgba(217,217,217,0.28)]'>

            </div>
            <svg className='size-[1.71rem]' xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.37891 14.5502C4.31753 14.386 5.26074 14.2586 6.20306 14.1314C6.83648 14.0459 7.4695 13.9603 8.10044 13.8638C9.46448 13.655 10.8383 13.5369 12.2048 13.4195C12.4107 13.4018 12.6164 13.3841 12.8219 13.3661C14.3886 13.0552 15.9736 12.9404 17.5563 13.0229C19.1798 13.2048 20.7724 13.72 22.2779 14.5502V14.9449C20.7724 15.7751 19.1798 16.2903 17.5563 16.4722C15.9736 16.5548 14.3886 16.4399 12.8219 16.129C11.2524 15.9917 9.68286 15.8201 8.10044 15.6313C6.51801 15.4426 4.94846 15.2195 3.37891 14.9449V14.5502ZM19.165 26.286C19.4143 25.7042 19.6882 25.147 19.9612 24.5916C20.0827 24.3445 20.204 24.0977 20.3229 23.8493C20.7089 23.0428 21.1463 22.2706 21.6094 21.5155C21.778 21.2408 21.9176 20.9387 22.0548 20.6416C22.2948 20.1224 22.5277 19.6185 22.8959 19.3019C23.5919 18.7287 24.3938 18.4257 25.2117 18.4267L25.3789 18.667C25.3708 19.7578 25.12 20.8209 24.6585 21.7215C24.3979 22.3088 23.9616 22.6449 23.5248 22.9814C23.3363 23.1266 23.1476 23.2719 22.9731 23.4375C22.3942 23.9866 21.8024 24.5186 21.1977 25.0334C20.5931 25.5482 19.9755 26.0458 19.3195 26.5091L19.165 26.286ZM20.6186 3.66711C20.2282 3.32652 19.8388 2.98678 19.4224 2.67578L19.2423 2.89887C19.5897 3.75687 19.9628 4.58055 20.3487 5.38707C20.7347 6.1936 21.1464 6.98296 21.5581 7.75516C21.6822 7.98798 21.7911 8.23954 21.9 8.491C22.1522 9.07351 22.4042 9.65553 22.8446 10.0031C23.518 10.6236 24.3161 10.9585 25.1346 10.9641L25.3147 10.741C25.3278 9.64787 25.0996 8.57376 24.6586 7.6522C24.4213 7.16101 24.0434 6.85035 23.6541 6.53029C23.4314 6.34719 23.2049 6.161 22.999 5.9362C22.4329 5.31843 21.8797 4.73499 21.2622 4.22019C21.0444 4.0386 20.8313 3.85273 20.6186 3.66711Z" fill="white" />
            </svg>
          </div>
          <h2 className='text-greyscale-5 opacity-80'>
            Related Articles
          </h2>
          <div className="flex items-center space-x-[1.875rem]">
          </div>
          <svg className='size-[1.71rem]' xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.37891 14.5502C4.31753 14.386 5.26074 14.2586 6.20306 14.1314C6.83648 14.0459 7.4695 13.9603 8.10044 13.8638C9.46448 13.655 10.8383 13.5369 12.2048 13.4195C12.4107 13.4018 12.6164 13.3841 12.8219 13.3661C14.3886 13.0552 15.9736 12.9404 17.5563 13.0229C19.1798 13.2048 20.7724 13.72 22.2779 14.5502V14.9449C20.7724 15.7751 19.1798 16.2903 17.5563 16.4722C15.9736 16.5548 14.3886 16.4399 12.8219 16.129C11.2524 15.9917 9.68286 15.8201 8.10044 15.6313C6.51801 15.4426 4.94846 15.2195 3.37891 14.9449V14.5502ZM19.165 26.286C19.4143 25.7042 19.6882 25.147 19.9612 24.5916C20.0827 24.3445 20.204 24.0977 20.3229 23.8493C20.7089 23.0428 21.1463 22.2706 21.6094 21.5155C21.778 21.2408 21.9176 20.9387 22.0548 20.6416C22.2948 20.1224 22.5277 19.6185 22.8959 19.3019C23.5919 18.7287 24.3938 18.4257 25.2117 18.4267L25.3789 18.667C25.3708 19.7578 25.12 20.8209 24.6585 21.7215C24.3979 22.3088 23.9616 22.6449 23.5248 22.9814C23.3363 23.1266 23.1476 23.2719 22.9731 23.4375C22.3942 23.9866 21.8024 24.5186 21.1977 25.0334C20.5931 25.5482 19.9755 26.0458 19.3195 26.5091L19.165 26.286ZM20.6186 3.66711C20.2282 3.32652 19.8388 2.98678 19.4224 2.67578L19.2423 2.89887C19.5897 3.75687 19.9628 4.58055 20.3487 5.38707C20.7347 6.1936 21.1464 6.98296 21.5581 7.75516C21.6822 7.98798 21.7911 8.23954 21.9 8.491C22.1522 9.07351 22.4042 9.65553 22.8446 10.0031C23.518 10.6236 24.3161 10.9585 25.1346 10.9641L25.3147 10.741C25.3278 9.64787 25.0996 8.57376 24.6586 7.6522C24.4213 7.16101 24.0434 6.85035 23.6541 6.53029C23.4314 6.34719 23.2049 6.161 22.999 5.9362C22.4329 5.31843 21.8797 4.73499 21.2622 4.22019C21.0444 4.0386 20.8313 3.85273 20.6186 3.66711Z" fill="white" />
          </svg>
          <div className='w-[14.25813rem] h-[0.0625rem] bg-[rgba(217,217,217,0.28)]'>

          </div>
        </div>
        <div className="mt-[3.8rem] flex items-start space-x-[1.4rem]">
          <div className=" shrink-0 rounded-2xl relative group overflow-hidden w-[44.25rem] h-[25.8125rem] cursor-pointer">
            <Image priority alt="ảnh" src={'/imgs/blogDetail/related.png'} width={500} height={500} className="z-10 duration-300 ease-linear size-full group-hover:scale-110 " />
            <div className="inline-flex absolute top-[1.5rem] left-[1.5rem] bg-[#FAF1EE] text-[#030922] text-sm not-italic font-normal leading-[1.2] tracking-[0.00875rem] flex-col justify-center items-center py-2.5 px-[1.1875rem] rounded-[2.0625rem]">
              <div className="w-max">
                ARTICLE
              </div>
            </div>
            <div className="absolute bottom-[1.87rem] left-[1.87rem] flex flex-col space-y-[0.5rem]">
              <div className="flex flex-col justify-center text-greyscale-5 text-xl not-italic font-extrabold leading-[120%]">
                Seychelles Hotel Guide; Advice from the Experts
              </div>
              <div className="flex  flex-col justify-center text-greyscale-5 text-xs not-italic font-normal leading-[120%] tracking-[0.00375rem]">
                Ngày 24, tháng 5, 2024
              </div>
            </div>
          </div>
          <div className=" shrink-0 rounded-2xl relative group overflow-hidden w-[44.25rem] h-[25.8125rem] cursor-pointer">
            <Image priority alt="ảnh" src={'/imgs/blogDetail/related.png'} width={500} height={500} className="z-10 duration-300 ease-linear size-full group-hover:scale-110 " />
            <div className="inline-flex absolute top-[1.5rem] left-[1.5rem] bg-[#FAF1EE] text-[#030922] text-sm not-italic font-normal leading-[1.2] tracking-[0.00875rem] flex-col justify-center items-center py-2.5 px-[1.1875rem] rounded-[2.0625rem]">
              <div className="w-max">
                ARTICLE
              </div>
            </div>
            <div className="absolute bottom-[1.87rem] left-[1.87rem] flex flex-col space-y-[0.5rem]">
              <div className="flex flex-col justify-center text-greyscale-5 text-xl not-italic font-extrabold leading-[120%]">
                Seychelles Hotel Guide; Advice from the Experts
              </div>
              <div className="flex  flex-col justify-center text-greyscale-5 text-xs not-italic font-normal leading-[120%] tracking-[0.00375rem]">
                Ngày 24, tháng 5, 2024
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex items-center mt-[3rem] space-x-[1.3125rem]">
          <div className="w-[37.5625rem] h-[0.0625rem] rounded-full bg-[rgba(255,255,255,0.60)]"></div>
          <Button icon>see All blogs</Button>
          <div className="w-[37.5625rem] h-[0.0625rem] rounded-full bg-[rgba(255,255,255,0.60)]"></div>

        </div>
      </div>

    </section>
  )
}

export default RelatedArticle
