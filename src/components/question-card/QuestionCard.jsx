'use client'

import {useState} from 'react'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import useStore from '@/app/(store)/store'

export default function QuestionCard({title, content}) {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useStore((state) => state.isMobile)
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouuseLeave={() => setIsOpen(fasle)}
      className='relative rounded-[1rem] md:rounded-3xl bg-[#F8EAE4] h-[16.75rem] md:h-[21.75rem] px-[1.31rem] py-[1.75rem] md:p-8 overflow-hidden flex-none xmd:w-[16.8125rem]'
    >
      {!isMobile && (
        <>
          <h3
            className={cn(
              'absolute text-greyscale-80 font-tripsans leading-1.2 w-[17rem] bottom-8 left-8 text-2.75 font-bold transition-400',
              {
                'translate-y-full': isOpen,
              },
            )}
          >
            {title}
          </h3>
          <button
            className={cn(
              'absolute flex flex-row items-center justify-center rounded-[0.5rem] top-8 right-8 size-12 bg-orange-normal transition-400',
              {
                'translate-x-full': isOpen,
              },
            )}
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={'/imgs/faq/question-section/plus.svg'}
              alt='plus icon'
              className='size-6'
              width={120}
              height={120}
            />
          </button>
          <div
            className={cn(
              'absolute top-0 left-0 w-full h-full z-10 bg-[#F9F8F7] p-8 transition-400',
              {
                'opacity-0 pointer-events-none': !isOpen,
                'opacity-100 pointer-events-auto': isOpen,
              },
            )}
          >
            <div className='flex flex-row items-start'>
              <strong className='text-black font-tripsans font-bold leading-1.2 text-1.125 mb-6'>
                {title}
              </strong>
              <button
                className='ml-auto'
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src={'/imgs/faq/question-section/x-mark.svg'}
                  alt='close'
                  className='size-4'
                  width={120}
                  height={120}
                />
              </button>
            </div>
            <div className='h-[14.3125rem] overflow-auto answer-container pr-[0.31rem] '>
              <p className='text-greyscale-50 font-tripsans lead-1.375 tracking-[0.02rem]'>
                {content}
              </p>
            </div>
          </div>
        </>
      )}
      {isMobile && (
        <>
          <h3 className='text-greyscale-80 text-1.5 font-tripsans font-bold leading-1.2 mb-3'>
            {title}
          </h3>
          <div className='h-[8.9rem] overflow-auto pr-[0.31rem]'>
            <p className='text-greyscale-50 font-tripsans leading-1.5 tracking-0.00219'>
              {content}
            </p>
          </div>
        </>
      )}
    </div>
  )
}
