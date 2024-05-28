'use client'

import useStore from '@/app/(store)/store'
import {useState} from 'react'

import ItemTour from '@/components/itemtour'
import PaginationCustom from '@/components/paginationcustom'
import CheckBox from './CheckBox'
import {usePathname, useRouter} from 'next/navigation'
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog'

const dataFiter = [
  {title: 'PREMIUM', slug: 'premium'},
  {title: 'BEST BUDGET', slug: 'best-budget'},
  {title: 'STANDARD', slug: 'standard'},
]

export default function GridCheckBox() {
  const isMobile = useStore((state) => state.isMobile)
  const [isAllTour, setIsAllTour] = useState(true)
  const router = useRouter()
  const pathName = usePathname()
  const handleFilterAll = () => {
    setIsAllTour(true)
    router.push(pathName, {
      scroll: false,
    })
  }
  return (
    <div className='xmd:relative container flex xmd:flex-col justify-between items-start md:space-x-[2.62rem] mb-[4rem]'>
      {!isMobile && (
        <div
          className={`xmd:hidden py-[1.9375rem] px-[1.875rem] h-fill mb-[6.4rem] overflow-hidden sticky top-[8rem] rounded-[1rem] bg-white`}
        >
          <span className='text-1 font-bold text-greyscale-80'>
            TYPE OF TOUR
          </span>
          <hr className='bg-[#C5C5C5] h-[0.0625rem] w-[17rem] my-[1.25rem]' />
          <div className='space-y-[0.75rem]'>
            <div
              onClick={handleFilterAll}
              className='flex justify-start items-center space-x-[0.375rem]'
            >
              <input
                checked={isAllTour}
                type='checkbox'
                className='accent-[#E64828]'
              />
              <span className='text-0875 font-medium text-greyscale-80'>
                ALL TOUR
              </span>
            </div>
            {dataFiter?.map((e, index) => (
              <CheckBox
                length={dataFiter?.length}
                setIsAllTour={setIsAllTour}
                item={e}
                key={index}
              />
            ))}
          </div>
        </div>
      )}

      {isMobile && (
        <div className='md:hidden flex justify-between items-center mb-[1.25rem] w-full'>
          <span className='text-0875 font-extrabold text-greyscale-30'>
            9 TOUR
          </span>
          <Dialog>
            <DialogTrigger asChild>
              <button className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  viewBox='0 0 25 25'
                  fill='none'
                >
                  <path
                    d='M14.5 15.4326C14.5 15.9849 14.9477 16.4326 15.5 16.4326C16.0523 16.4326 16.5 15.9849 16.5 15.4326C16.5 14.8803 16.0523 14.4326 15.5 14.4326C14.9477 14.4326 14.5 14.8803 14.5 15.4326Z'
                    stroke='#E64827'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M8.5 15.4326C8.5 15.9849 8.94772 16.4326 9.5 16.4326C10.0523 16.4326 10.5 15.9849 10.5 15.4326C10.5 14.8803 10.0523 14.4326 9.5 14.4326C8.94772 14.4326 8.5 14.8803 8.5 15.4326Z'
                    stroke='#E64827'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M14.5 9.43262C14.5 9.9849 14.9477 10.4326 15.5 10.4326C16.0523 10.4326 16.5 9.9849 16.5 9.43262C16.5 8.88033 16.0523 8.43262 15.5 8.43262C14.9477 8.43262 14.5 8.88033 14.5 9.43262Z'
                    stroke='#E64827'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M8.5 9.43262C8.5 9.9849 8.94772 10.4326 9.5 10.4326C10.0523 10.4326 10.5 9.9849 10.5 9.43262C10.5 8.88033 10.0523 8.43262 9.5 8.43262C8.94772 8.43262 8.5 8.88033 8.5 9.43262Z'
                    stroke='#E64827'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <span className='text-0875 font-extrabold text-greyscale-80'>
                  TYPE OF TOUR
                </span>
              </button>
            </DialogTrigger>
            <DialogContent
              noIcon
              className='sm:max-w-fit bottom-0 top-auto translate-y-0 rounded-[1rem]'
            >
              <span className='text-1 font-bold text-greyscale-80'>
                TYPE OF TOUR
              </span>
              <hr className='bg-[#C5C5C5] h-[0.0625rem] w-[17rem] my-[1.25rem]' />
              <div className='space-y-[0.75rem]'>
                <div
                  onClick={handleFilterAll}
                  className='flex justify-start items-center space-x-[0.375rem]'
                >
                  <input
                    checked={isAllTour}
                    type='checkbox'
                    className='accent-[#E64828]'
                  />
                  <span className='text-0875 font-medium text-greyscale-80'>
                    ALL TOUR
                  </span>
                </div>
                {dataFiter?.map((e, index) => (
                  <CheckBox
                    length={dataFiter?.length}
                    setIsAllTour={setIsAllTour}
                    item={e}
                    key={index}
                  />
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
      <div className='mb-[2rem] xmd:w-full'>
        <div className='grid grid-cols-3 xmd:w-full xmd:grid-cols-1 md:gap-x-[1.25rem] xmd:gap-y-[0.75rem] gap-y-[2.5rem]'>
          {new Array(9).fill(0).map((e, index) => (
            <ItemTour key={index} />
          ))}
        </div>
        <PaginationCustom />
      </div>
    </div>
  )
}
