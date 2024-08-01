'use client'
import ScrollUp from '@/components/scroll-to-top/ScrollUp'
import {
  DialogClose,
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/customCn/dialogFormhome'
import HomeForm from '@/components/form/HomeForm'
import useStore from '@/app/(store)/store'
import { useState } from 'react'
import Image from 'next/image'
const Socials = ({ dataAcf, listTypeofTour, listTime, listTours }) => {
  const { openbookNow, setCheckOpenBookNow, setOpenBooknow } =
    useStore((state) => state)
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a className=' animate-bounce-gmail' href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }
  function convertInternationalToLocal(phoneNumber) {
    if (phoneNumber.startsWith('+84')) {
      return '0' + phoneNumber.slice(3);
    }
    return phoneNumber;
  }
  // console.log('dataAcf', dataAcf?.contact_info);
  return (
    <div className='fixed     z-[50] xmd:bottom-[5.2rem] bottom-[3.7rem] xmd:right-[0.5rem] right-[1.5rem] flex flex-col items-center xmd:space-y-[0.5rem] space-y-[1rem]'>
      <div className='w-[3.125rem]  animate-bounce rounded-full flex justify-center items-center h-[3.125rem] shrink-0 bg-[#e64827]'>
        <Dialog
          onOpenChange={(open) => setCheckOpenBookNow(open)}
          open={openbookNow ? true : undefined}
        >
          <DialogTrigger asChild>
            <div
              data-aos='fade-up'
              data-aos-duration='900'
              className='text-[color:var(--Gray-Scale-0,#FFF)] cursor-pointer text-center text-[0.625rem] not-italic font-black leading-[0.8125rem] tracking-[0.03125rem]'
            >
              BOOK NOW
            </div>
          </DialogTrigger>
          <DialogContent className=' sm:max-w-fit xmd:w-full max-h-[85vh] !overflow-x-hidden xmd:overflow-y-scroll'>
            <HomeForm
              listLocation={dataAcf}
              listTypeofTour={listTypeofTour}
              listTime={listTime}
              listTours={listTours?.tours}
            // setCheckOpenBookNow={setCheckOpenBookNow}
            />
          </DialogContent>
        </Dialog>
      </div>
      {/* Call me bb */}
      <a
        data-aos='fade-up'
        data-aos-duration='1000'
        href={`https://wa.me/${convertInternationalToLocal(dataAcf?.contact_info?.phone)}`}
        target='_blank'
        className='cursor-pointer'
      >
        <div className='relative cursor-pointer'>
          <div className='w-[3.625rem] z-5 pingCall  flex justify-center items-center h-[3.625rem] shrink-0 blur-none rounded-[6.25rem] bg-[rgba(255,255,255,0.15)]'></div>
          <svg
            className='size-[3.3rem] absolute left-[0.7rem] top-[-0.25rem] shrink-0'
            xmlns='http://www.w3.org/2000/svg'
            width='58'
            height='56'
            viewBox='0 0 58 56'
            fill='none'
          >
            <path
              d='M0.902344 54.1085L3.5994 44.2727C1.93967 41.3965 1.06266 38.1242 1.06266 34.7859C1.06266 24.3183 9.58763 15.8027 20.0458 15.8027C25.1287 15.8027 29.891 17.7831 33.4745 21.3666C37.058 24.9501 39.0289 29.7218 39.0289 34.7953C39.0289 45.2629 30.504 53.7785 20.0458 53.7785H20.0364C16.8584 53.7785 13.7369 52.9769 10.9644 51.468L0.902344 54.1085Z'
              fill='#E64827'
            />
            <path
              d='M0.214844 54.7943L3.00621 44.6096C1.28989 41.6296 0.375158 38.2441 0.384589 34.7832C0.384589 23.9384 9.21133 15.1211 20.0561 15.1211C25.3182 15.1211 30.2597 17.1675 33.9658 20.883C37.6813 24.5985 39.7277 29.54 39.7183 34.7927C39.7183 45.6375 30.8915 54.4548 20.0467 54.4548H20.0373C16.7461 54.4548 13.5115 53.6249 10.6353 52.0595L0.214844 54.7943ZM11.1257 48.4948L11.7198 48.8532C14.2282 50.3432 17.1045 51.1259 20.0373 51.1353H20.0467C29.0526 51.1353 36.3894 43.808 36.3894 34.7927C36.3894 30.4264 34.6919 26.3243 31.6082 23.2311C28.5245 20.138 24.4129 18.4406 20.0467 18.4406C11.0314 18.4406 3.69462 25.7679 3.69462 34.7832C3.69462 37.8669 4.55277 40.8752 6.19364 43.4779L6.58028 44.1003L4.92998 50.1263L11.1257 48.4948Z'
              fill='white'
            />
            <path
              d='M15.1321 26.5515C14.7643 25.7311 14.3777 25.7122 14.0287 25.7028C13.7458 25.6934 13.4158 25.6934 13.0857 25.6934C12.7557 25.6934 12.2276 25.816 11.7749 26.3063C11.3223 26.7967 10.0586 27.9849 10.0586 30.4085C10.0586 32.8226 11.8221 35.1614 12.0672 35.4914C12.3124 35.8215 15.4716 40.9421 20.4602 42.913C24.6095 44.5539 25.4582 44.2239 26.3541 44.139C27.2594 44.0541 29.2586 42.9508 29.6736 41.8003C30.0791 40.6498 30.0791 39.669 29.9565 39.4616C29.8339 39.2541 29.5038 39.1315 29.0134 38.8863C28.5231 38.6411 26.1089 37.4529 25.6563 37.2832C25.2036 37.1134 24.8736 37.038 24.5529 37.5284C24.2229 38.0187 23.2798 39.1221 22.9969 39.4521C22.714 39.7822 22.4217 39.8199 21.9313 39.5747C21.4409 39.3295 19.8567 38.8109 17.98 37.1323C16.5183 35.8309 15.5282 34.2183 15.2452 33.728C14.9623 33.2376 15.217 32.9735 15.4621 32.7283C15.679 32.5114 15.9525 32.1531 16.1977 31.8702C16.4429 31.5873 16.5278 31.3798 16.6881 31.0498C16.8484 30.7197 16.7729 30.4368 16.6504 30.1916C16.5278 29.9464 15.5659 27.5228 15.1321 26.5515Z'
              fill='white'
            />
            <g filter='url(#filter0_d_9373_13708)'>
              <circle
                cx='42'
                cy='16'
                r='6'
                fill='#17E268'
              />
            </g>
            <defs>
              <filter
                id='filter0_d_9373_13708'
                x='26'
                y='0'
                width='32'
                height='32'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood
                  floodOpacity='0'
                  result='BackgroundImageFix'
                />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset />
                <feGaussianBlur stdDeviation='5' />
                <feComposite
                  in2='hardAlpha'
                  operator='out'
                />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.305882 0 0 0 0 0.94902 0 0 0 0 0.25098 0 0 0 0.6 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_9373_13708'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow_9373_13708'
                  result='shape'
                />
              </filter>
            </defs>
          </svg>
          <div className='absolute z-10 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-[3.125rem] h-[3.125rem] shrink-0 blur-none rounded-[6.25rem] border-[4px] border-[rgba(255,255,255,0.15)]'></div>
        </div>
      </a>
      <Mailto email={dataAcf?.contact_info?.email} subject="Hello" body="Hello HongHao">
        <Image
          data-aos='fade-up'
          data-aos-duration='900'
          priority alt="ảnh" src={'/home/gmail.svg'} width={50} height={50} className="size-[3.625rem]" />
      </Mailto>

      <div
        data-aos='fade-up'
        data-aos-duration='900'
      >
        <ScrollUp />
      </div>
    </div>
  )
}

export default Socials
