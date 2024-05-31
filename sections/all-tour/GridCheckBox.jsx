'use client'

import useStore from '@/app/(store)/store'
import {useEffect, useState} from 'react'
import useSWR from 'swr'
import ItemTour from '@/components/itemtour'
import PaginationCustom from '@/components/paginationcustom'
import CheckBox from './CheckBox'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog'
import {Skeleton} from '@/components/ui/skeleton'

export default function GridCheckBox({dataTours, typeOfTours}) {
  const isMobile = useStore((state) => state.isMobile)
  const tours = dataTours?.tours
  const pagination = dataTours?.pagination
  const typeTours = typeOfTours?.terms
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()

  const pageCurrent = searchParams.get('page')
  const deviceCurrent = searchParams.get('device')
  const {shouldFetch, setShouldFetch} = useStore((state) => state)
  const [isAllTour, setIsAllTour] = useState(true)
  const [dataToursClient, setDataToursClient] = useState([])
  const [paginationClient, setPaginationClient] = useState({})
  const [loading, setLoading] = useState(false)
  const [loadingButton, setLoadingButton] = useState(false)
  const [selectedTypes, setSelectedTypes] = useState('')
  // Extract device parameter from URL and set selectedTypes
  useEffect(() => {
    if (deviceCurrent) {
      setSelectedTypes(deviceCurrent.replace(/--/g, ','))

      setShouldFetch(true)
    }
  }, [deviceCurrent])

  const handleFilterAll = () => {
    setIsAllTour(true)
    router.push(pathName, {
      scroll: false,
    })
  }
  // hàm click checkbox
  const paramNew = new URLSearchParams(searchParams)
  const handleFilterDevicePc1 = (item) => {
    const containsStandard = searchParams?.get('device')?.includes(item?.slug)
    if (!searchParams.get('device')) {
      paramNew.set('device', item?.slug)
      paramNew.set('page', 1)
      router.push(pathName + '?' + paramNew.toString(), {
        scroll: false,
      })
    } else if (!containsStandard) {
      paramNew.set('device', deviceCurrent + '--' + item?.slug)
      router.push(pathName + '?' + paramNew.toString(), {
        scroll: false,
      })
    } else if (containsStandard) {
      const updatedString = searchParams
        ?.get('device')
        ?.replace(`--${item?.slug}`, '')
        .replace(`${item?.slug}--`, '')
        .replace(`${item?.slug}`, '')
      updatedString && paramNew.set('device', updatedString)
      updatedString && paramNew.set('page', 1)
      router.push(pathName + '?' + (updatedString ? paramNew.toString() : ''), {
        scroll: false,
      })
    }
    setLoadingButton(false)
  }

  const fetcher = (url) => fetch(url).then((r) => r.json())
  const {data, error, isLoading} = useSWR(
    shouldFetch
      ? deviceCurrent !== null
        ? `${process.env.NEXT_PUBLIC_API}/wp-json/okhub/v1/tours?page=${pageCurrent}&per_page=9&type-of-tour=${selectedTypes}`
        : `${process.env.NEXT_PUBLIC_API}/wp-json/okhub/v1/tours?page=${pageCurrent}&per_page=9`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )
  useEffect(() => {
    setLoading(isLoading)
    if (data) {
      setPaginationClient(data?.pagination)
      setDataToursClient(data?.tours)
    }
    if (error) {
      console.error('Error fetching data:', error)
    }
  }, [data, error, isLoading])

  return (
    <div className='xmd:relative container flex xmd:flex-col justify-between items-start md:space-x-[2.62rem] mb-[4rem]'>
      {!isMobile ? (
        <div
          className={`xmd:hidden py-[1.9375rem] px-[1.875rem] h-fill mb-[6.4rem] overflow-hidden sticky top-[8rem] rounded-[1rem] bg-white`}
        >
          <span className='text-1 font-bold text-greyscale-80'>
            TYPE OF TOUR
          </span>
          <hr className='bg-[#C5C5C5] h-[0.0625rem] w-[17rem] my-[1.25rem]' />
          <div className='space-y-[0.75rem]'>
            <button
              onClick={handleFilterAll}
              className='flex justify-start w-fit items-center space-x-[0.375rem]'
            >
              <input
                checked={isAllTour}
                type='checkbox'
                className='accent-[#E64828]'
              />
              <span className='text-0875 font-medium text-greyscale-80'>
                ALL TOUR
              </span>
            </button>
            {typeTours?.map((e, index) => (
              <CheckBox
                setIsAllTour={setIsAllTour}
                isAllTour={isAllTour}
                length={typeTours?.length}
                handleFilterDevicePc1={handleFilterDevicePc1}
                setLoading={setLoadingButton}
                loading={loadingButton}
                item={e}
                key={index}
              />
            ))}
          </div>
        </div>
      ) : (
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
                <button
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
                </button>
                {typeTours?.map((e, index) => (
                  <CheckBox
                    setIsAllTour={setIsAllTour}
                    isAllTour={isAllTour}
                    length={typeTours?.length}
                    handleFilterDevicePc1={handleFilterDevicePc1}
                    setLoading={setLoadingButton}
                    loading={loadingButton}
                    item={e}
                    key={index}
                  />
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}

      <div className=' mb-[2rem] xmd:w-full'>
        {!loading ? (
          <div
            id={'grid-tours'}
            className=' grid grid-cols-3 xmd:w-full xmd:grid-cols-1 md:gap-x-[1.25rem] xmd:gap-y-[0.75rem] gap-y-[2.5rem]'
          >
            {(dataToursClient?.length > 0 ? dataToursClient : tours)?.map(
              (e, index) => (
                <ItemTour
                  key={index}
                  data={e}
                />
              ),
            )}
          </div>
        ) : (
          <div className='grid-tours grid grid-cols-3 xmd:w-full xmd:grid-cols-1 md:gap-x-[1.25rem] xmd:gap-y-[0.75rem] gap-y-[2.5rem]'>
            {new Array(6).fill(0)?.map((e, index) => (
              <Skeleton
                className='rounded-2xl   xmd:w-[21.4375rem] xmd:h-[15.3125rem] w-[21.4375rem] h-[29.5625rem]'
                key={index}
              />
            ))}
          </div>
        )}
          <PaginationCustom
            pagination={
              paginationClient && Object.keys(paginationClient).length === 0
                ? pagination
                : paginationClient
            }
            href={'#grid-tours'}
          />
      </div>
    </div>
  )
}
