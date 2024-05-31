import React from 'react'
import Image from 'next/image';
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import Breadcrumb from '@/components/breadcrumb'
const Banner = ({ dataDetailPost }) => {
  return (
    <section className='h-[50rem] xmd:h-[23rem] bg-green-dark w-full'>
      <div className="flex flex-col items-center space-y-[4rem] xmd:space-y-[0.75rem] xmd:pt-[6rem] pt-[7.7rem]">
        <div className="xmd:hidden inline-flex justify-center items-center gap-2.5 px-[1.625rem] py-2 rounded-[6.25rem]
        text-[#030922] text-center bg-white text-[0.90088rem] not-italic font-normal leading-[1.625rem] tracking-[0.0625rem] uppercase
        ">HA GIANG FRIENDS</div>
        <div className='md:hidden '>
          <Breadcrumb className="!pl-0">
            <BreadcrumbLink isBanner subLink href='/blog'>Blog</BreadcrumbLink>
            <BreadcrumbLink isBanner href={`/blog/${dataDetailPost?.post_slug}`}>{dataDetailPost?.title}</BreadcrumbLink>
          </Breadcrumb>
        </div>
        <div className="flex flex-col items-center xmd:space-y-[1rem] space-y-[1.7rem]">

          <div className=' xmd:relative flex items-center xmd:items-start xmd:space-x-[0rem] space-x-[1.5rem] '>
            <svg className='xmd:absolute xmd:top-[0rem] xmd:left-[-1.9rem] xmd:size-[1.81875rem] size-[1.71875rem]' xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.17969 14.4584C4.11831 14.2942 5.06152 14.1668 6.00384 14.0396C6.63726 13.9541 7.27028 13.8685 7.90122 13.772C9.26526 13.5632 10.6391 13.4451 12.0056 13.3277C12.2115 13.31 12.4172 13.2923 12.6227 13.2744C14.1894 12.9634 15.7744 12.8486 17.3571 12.9311C18.9805 13.113 20.5732 13.6282 22.0787 14.4584V14.8531C20.5732 15.6834 18.9805 16.1985 17.3571 16.3804C15.7744 16.463 14.1894 16.3481 12.6227 16.0372C11.0532 15.8999 9.48364 15.7283 7.90122 15.5395C6.31879 15.3508 4.74924 15.1277 3.17969 14.8531V14.4584ZM18.9658 26.1942C19.2151 25.6124 19.489 25.0552 19.762 24.4999C19.8835 24.2527 20.0048 24.0059 20.1237 23.7575C20.5096 22.951 20.9471 22.1788 21.4102 21.4237C21.5787 21.149 21.7184 20.8469 21.8556 20.5498C22.0956 20.0306 22.3285 19.5267 22.6967 19.2101C23.3926 18.6369 24.1945 18.3339 25.0125 18.3349L25.1797 18.5752C25.1716 19.666 24.9208 20.7291 24.4593 21.6297C24.1987 22.217 23.7623 22.5531 23.3255 22.8896C23.1371 23.0348 22.9484 23.1801 22.7739 23.3457C22.195 23.8948 21.6032 24.4268 20.9985 24.9416C20.3939 25.4564 19.7763 25.9541 19.1202 26.4173L18.9658 26.1942ZM20.4193 3.57531C20.0289 3.23473 19.6395 2.89498 19.2232 2.58398L19.0431 2.80707C19.3905 3.66507 19.7636 4.48875 20.1495 5.29527C20.5355 6.1018 20.9472 6.89116 21.3588 7.66336C21.483 7.89619 21.5919 8.14774 21.7008 8.3992C21.953 8.98171 22.205 9.56373 22.6454 9.91132C23.3188 10.5318 24.1169 10.8667 24.9354 10.8723L25.1155 10.6492C25.1285 9.55608 24.9004 8.48196 24.4594 7.5604C24.222 7.06922 23.8442 6.75855 23.4549 6.43849C23.2322 6.25539 23.0057 6.06921 22.7997 5.8444C22.2337 5.22663 21.6805 4.64319 21.0629 4.12839C20.8451 3.9468 20.6321 3.76093 20.4193 3.57531Z" fill="white" />
            </svg>
            <h2 className='text-center xmd:w-[18.75rem] text-white xmd:!text-[2rem] xmd:leading-[1.2] xmd:font-black xmd:tracking-[0.005rem] !text-[3.5rem] font-normal !leading-[100%]'>Ha Giang Hotel Guide; Advice from the Experts</h2>
            <svg className='xmd:absolute xmd:top-[0rem] xmd:right-[-1.9rem] xmd:size-[1.81875rem] size-[1.71875rem]' xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8555 14.9617C22.2221 15.0474 21.5891 15.1328 20.9581 15.2294C19.5941 15.4381 18.2203 15.5562 16.8537 15.6737C16.6479 15.6914 16.4422 15.7091 16.2366 15.7271C14.67 16.0379 13.085 16.1529 11.5022 16.0703C9.87883 15.8884 8.28621 15.3732 6.78069 14.5429V14.1483C8.28621 13.318 9.87883 12.8028 11.5022 12.6209C13.085 12.5383 14.67 12.6533 16.2366 12.9641C17.8062 13.1015 19.3758 13.2731 20.9581 13.4618C22.5406 13.6506 24.1102 13.8737 25.6797 14.1483V14.5429C24.7411 14.7072 23.7979 14.8345 22.8555 14.9617ZM9.89356 2.80706C9.64428 3.38894 9.37035 3.94616 9.09737 4.50147C8.97588 4.7486 8.85455 4.99542 8.73569 5.2438C8.34974 6.05032 7.91232 6.82253 7.44918 7.57757C7.28063 7.85234 7.14105 8.15439 7.00377 8.45145C6.76382 8.97068 6.53092 9.47469 6.16266 9.79123C5.46674 10.3644 4.66483 10.6674 3.84693 10.6664L3.67969 10.4262C3.68778 9.33529 3.93853 8.27219 4.40014 7.37165C4.66074 6.78433 5.09708 6.44817 5.53381 6.11173C5.72232 5.9665 5.91092 5.8212 6.08547 5.65564C6.66441 5.10651 7.2562 4.57455 7.86086 4.05975C8.46552 3.54495 9.08305 3.0473 9.73917 2.58398L9.89356 2.80706ZM8.44002 25.4259C8.83038 25.7666 9.2198 26.1063 9.63616 26.4173L9.81628 26.1942C9.4689 25.3362 9.09581 24.5125 8.70986 23.706C8.3239 22.8995 7.91221 22.1101 7.50052 21.3379C7.37639 21.1051 7.26747 20.8535 7.15858 20.6021C6.90634 20.0195 6.65432 19.4375 6.214 19.0899C5.54058 18.4695 4.74243 18.1345 3.92398 18.129L3.74386 18.3521C3.73086 19.4452 3.95902 20.5193 4.39999 21.4409C4.6373 21.9321 5.01517 22.2427 5.40444 22.5628C5.62715 22.7459 5.85361 22.9321 6.05961 23.1569C6.62568 23.7747 7.17889 24.3581 7.79642 24.8729C8.01425 25.0545 8.22727 25.2403 8.44002 25.4259Z" fill="white" />
            </svg>
          </div>
          <div className="flex items-center space-x-[0.625rem]">
            <Image priority alt="ảnh" src={'/imgs/blogDetail/avatar.png'} width={20} height={20} className="size-[2.8125rem]" />
            <div className="flex w-[6.0075rem] h-[1.625rem] flex-col justify-center text-[#FCF8F7] text-center text-[0.8545rem] not-italic font-medium leading-[1.625rem] tracking-[0.0625rem] uppercase">
              Đức híu</div>
          </div>
        </div>
        <div className="flex w-[2.48625rem] h-[1.625rem] flex-col justify-center shrink-0 text-[#D9D9D9] text-center text-[0.76175rem] not-italic font-normal leading-[1.625rem] tracking-[0.03125rem] uppercase opacity-[0.9562]">
          4 Mar
        </div>

      </div>
      <div className="w-full h-[0.0625rem] xmd:mt-[1rem] mt-[2rem] bg-[rgba(217,217,217,0.60)] "></div>
    </section>
  )
}

export default Banner
