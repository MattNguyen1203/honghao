"use client"
import React from 'react'
import Image from 'next/image'
import AccordionCustom from '../common/accordion'

const FaqAboutTrip = () => {
  const data = [
    { title: 'What is included or excluded?', content: 'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked.' },
    { title: 'How do I book and corfirm my trip?', content: 'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked.' },
    { title: 'What should I bring?', content: 'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked.' },
    { title: 'Travel insurance', content: 'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked.' },
    { title: 'How do I book and corfirm my trip?', content: 'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked.' },
    { title: 'What should I bring?', content: 'Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded mytations and was all hassle free. Our guide was absolutely amazing too. Have re-booked.' },
  ]
  return (
    <section className='flex justify-center'>
      <div className='flex mt-[5.63rem] xl:container xmd:hidden flex-col items-start space-y-[3rem]'>
        <div className="text-greyscale-80 w-full text-[3.5rem] not-italic font-black leading-[100%]">
          FAQ about the trip
        </div>
        <div className='flex items-start w-full  justify-between space-x-[4.68rem]'>

          <div className='w-[42.8125rem]'>

            <AccordionCustom data={data} />
          </div>
          <div className='relative bd w-[42.4485rem] h-[26.69638rem]'>
            <div className="size-[4rem] flex items-center justify-center rounded-full bg-opacity-30 bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.7734 13.5945L0.230469 27.187L0.23047 0.00195312L23.7734 13.5945Z" fill="white" />
              </svg>
            </div>

            <Image priority alt="ảnh" src={'/imgs/activity/video2.png'} width={700} height={700}
              className="w-[42.4485rem] h-[26.69638rem] shrink-0" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqAboutTrip
