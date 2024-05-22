"use client"
import React, { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import CardBlog from './CardBlog'
import ListStories from './ListStories'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
const Button = ({ children }) => {
  return (
    <div className='  flex justify-center items-center gap-2.5 px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] bg-[#fcf8f7]'>
      <div className="text-[#030922] text-center text-[0.78906rem] not-italic font-normal leading-4 tracking-[0.03125rem] uppercase">
        {children}
      </div>
    </div>
  )
}


const TitleBeauty = ({ children }) => {
  return (
    <div className="mt-[1.75rem] xmd:mt-[1.45rem] inline-flex z-10 items-center xmd:space-x-[1.25rem] space-x-[1.75rem]">
      <div className="flex items-center xmd:space-x-[0.56rem]  space-x-[1.875rem]">
        <div className=' xmd:w-[2rem] w-[14.25813rem] h-[0.0625rem] bg-[#D9D9D9]'></div>
        <svg className='size-[1.71rem]' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 13.9584C4.18862 13.7942 5.13183 13.6668 6.07415 13.5396C6.70758 13.4541 7.3406 13.3685 7.97153 13.272C9.33558 13.0632 10.7094 12.9451 12.0759 12.8277C12.2818 12.81 12.4875 12.7923 12.693 12.7744C14.2597 12.4634 15.8447 12.3486 17.4274 12.4311C19.0509 12.613 20.6435 13.1282 22.149 13.9584V14.3531C20.6435 15.1834 19.0509 15.6985 17.4274 15.8804C15.8447 15.963 14.2597 15.8481 12.693 15.5372C11.1235 15.3999 9.55395 15.2283 7.97153 15.0395C6.38911 14.8508 4.81955 14.6277 3.25 14.3531V13.9584ZM19.0361 25.6942C19.2854 25.1124 19.5593 24.5552 19.8323 23.9999C19.9538 23.7527 20.0751 23.5059 20.194 23.2575C20.58 22.451 21.0174 21.6788 21.4805 20.9237C21.6491 20.649 21.7887 20.3469 21.9259 20.0498C22.1659 19.5306 22.3988 19.0267 22.767 18.7101C23.463 18.1369 24.2649 17.8339 25.0828 17.8349L25.25 18.0752C25.2419 19.166 24.9911 20.2291 24.5296 21.1297C24.269 21.717 23.8327 22.0531 23.3959 22.3896C23.2074 22.5348 23.0187 22.6801 22.8442 22.8457C22.2653 23.3948 21.6735 23.9268 21.0688 24.4416C20.4642 24.9564 19.8466 25.4541 19.1906 25.9173L19.0361 25.6942ZM20.4897 3.07531C20.0993 2.73473 19.7099 2.39498 19.2935 2.08398L19.1134 2.30707C19.4608 3.16507 19.8339 3.98875 20.2198 4.79527C20.6058 5.6018 21.0175 6.39116 21.4292 7.16336C21.5533 7.39619 21.6622 7.64774 21.7711 7.8992C22.0233 8.48171 22.2753 9.06373 22.7157 9.41132C23.3891 10.0318 24.1872 10.3667 25.0057 10.3723L25.1858 10.1492C25.1989 9.05608 24.9707 7.98196 24.5297 7.0604C24.2924 6.56922 23.9145 6.25855 23.5252 5.93849C23.3025 5.75539 23.076 5.56921 22.8701 5.3444C22.304 4.72663 21.7508 4.14319 21.1333 3.62839C20.9155 3.4468 20.7024 3.26093 20.4897 3.07531Z" fill="#030922" />
        </svg>
      </div>
      {children}
      <div className="flex items-center xmd:space-x-[0.56rem]  space-x-[1.875rem]">
        <svg className='size-[1.71rem]' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9258 14.4617C21.2924 14.5474 20.6594 14.6328 20.0284 14.7294C18.6644 14.9381 17.2907 15.0562 15.9241 15.1737L15.9223 15.1738C15.717 15.1915 15.5118 15.2091 15.3069 15.2271C13.7403 15.5379 12.1553 15.6529 10.5725 15.5703C8.94914 15.3884 7.35652 14.8732 5.851 14.0429V13.6483C7.35652 12.818 8.94914 12.3028 10.5725 12.1209C12.1553 12.0383 13.7403 12.1533 15.3069 12.4641C16.8765 12.6015 18.4461 12.7731 20.0284 12.9618C21.6109 13.1506 23.1805 13.3737 24.75 13.6483V14.0429C23.8114 14.2072 22.8682 14.3345 21.9258 14.4617ZM8.96387 2.30706C8.71459 2.88894 8.44067 3.44616 8.16768 4.00147C8.0462 4.2486 7.92486 4.49542 7.806 4.7438C7.42005 5.55032 6.98264 6.32253 6.51949 7.07757C6.35094 7.35234 6.21136 7.65439 6.07408 7.95145C5.83413 8.47068 5.60123 8.97469 5.23298 9.29123C4.53705 9.86438 3.73513 10.1674 2.91725 10.1664L2.75 9.92616C2.75809 8.83529 3.00884 7.77219 3.47045 6.87165C3.73105 6.28433 4.1674 5.94817 4.60412 5.61173C4.79264 5.4665 4.98123 5.3212 5.15578 5.15564C5.73472 4.60651 6.32651 4.07455 6.93117 3.55975C7.53583 3.04495 8.15336 2.5473 8.80949 2.08398L8.96387 2.30706ZM7.51032 24.9259C7.9007 25.2666 8.29011 25.6063 8.70647 25.9173L8.88659 25.6942C8.53922 24.8362 8.16612 24.0125 7.78017 23.206C7.39421 22.3995 6.98252 21.6101 6.57083 20.8379C6.44671 20.6051 6.33778 20.3535 6.2289 20.1021C5.97666 19.5195 5.72463 18.9375 5.28431 18.5899C4.61089 17.9695 3.81275 17.6345 2.99429 17.629L2.81418 17.8521C2.80118 18.9452 3.02934 20.0193 3.4703 20.9409C3.70761 21.4321 4.08548 21.7427 4.47475 22.0628C4.69747 22.2459 4.92392 22.4321 5.12992 22.6569C5.69599 23.2747 6.2492 23.8581 6.86673 24.3729C7.08456 24.5545 7.29758 24.7403 7.51032 24.9259Z" fill="#030922" />
        </svg>
        <div className=' xmd:w-[2rem] w-[14.25813rem] h-[0.0625rem] bg-[#D9D9D9]'>
        </div>

      </div>
    </div>
  )
}

const StoriesBlog = () => {
  const data = [
    { title: 'All Blog', link: '/blog/categories/all-blog' },
    { title: 'Article', link: '/blog/categories/article' },
    { title: 'News', link: '/blog/categories/news' },
    { title: 'Tips', link: '/blog/categories/tips' },
    { title: 'Hagiang Friends', link: '/blog/categories/hangiang-friends' },
    { title: 'destination', link: '/blog/categories/destination' },
    { title: 'travel', link: '/blog/categories/travel' },
  ]
  const pathName = usePathname()
  return (
    <section>
      <div className="flex flex-col xmd:relative items-center gap-[3.9375rem]">

        <div className='flex flex-col items-center xmd:space-y-[1.5rem] space-y-[2.8125rem]'>
          <div className=' flex md:hidden flex-col items-center  xmd:space-y-[0.75rem]'>
            <TitleBeauty>
              <Button>OUR BLOG</Button>

            </TitleBeauty>
            <h2 className='text-greyscale-70 xmd:text-[1.5rem] xmd:font-black xmd:leading-[1.2] xmd:tracking-[0.005rem] opacity-80'>
              STORIES ABOUT  JOURNEYS OF JOY
            </h2>
          </div>

          <div className=' flex xmd:hidden flex-col items-center '>
            <Button>OUR BLOG</Button>
            <TitleBeauty>

              <h2 className='text-greyscale-70 font-londrina xmd:text-[2rem] xmd:font-black xmd:leading-[1.2] xmd:tracking-[0.005rem] opacity-80'>
                STORIES ABOUT  JOURNEYS OF JOY
              </h2>
            </TitleBeauty>
          </div>
          <div className=" xmd:space-y-[1.25rem] space-y-[4rem] w-fit flex justify-end flex-col items-center">
            <div className='xmd:w-screen xmd:overflow-auto xmd:no-scrollbar xmd:px-[1rem] '>
              <div className='flex items-start space-x-[0.94rem]'>
                {data?.map((d, i) => (

                  <Link href={`${d?.link}`} scroll={false} >
                    <div key={i} value={d?.title} className={cn('flex duration-200 ease-linear justify-center text-white bg-orange-normal items-center gap-2.5 px-[2.125rem] py-[0.8125rem] rounded-[62.5rem]',
                      !pathName?.includes(d?.link) || pathName.localeCompare(d?.link) ? 'bg-[#FCF8F7] text-black hover:bg-orange-normal hover:text-white' : ''
                    )}>
                      {/* <div className=''> */}
                      <div className="w-max font-medium text-center text-[0.78906rem] not-italic leading-4 tracking-[0.03125rem] uppercase">

                        {d?.title}
                      </div>
                      {/* </div> */}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <ListStories />
          </div>

        </div>
      </div>
    </section>
  )
}

export default StoriesBlog
