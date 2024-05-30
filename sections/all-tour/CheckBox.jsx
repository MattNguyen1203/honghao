'use client'

import {
  usePathname,
  useRouter,
  useSearchParams,
  useCallback,
} from 'next/navigation'
import {useEffect, useState} from 'react'
import useStore from '@/app/(store)/store'
export default function CheckBox({
  item,
  length,
  setIsAllTour,
  isAllTour,
  loading,
  setLoading,
  handleFilterDevicePc1,
}) {
  const searchParams = useSearchParams()
  const {shouldFetch, setShouldFetch} = useStore((state) => state)
  const device = searchParams.get('device')?.split('--')
  const [isCheck, setIsCheck] = useState(false)

  useEffect(() => {
    setIsCheck(searchParams.get('device')?.includes(item?.slug) || false)
  }, [searchParams.get('device'), isAllTour])
  useEffect(() => {
    if (device?.length === length) {
      setIsAllTour(true)
    } else {
      setIsAllTour(false)
    }
    if (!device) {
      setIsAllTour(true)
    }
  }, [device])
  const handClick = () => {
    setLoading(true)
    setShouldFetch(true)
    handleFilterDevicePc1(item)
  }
  return (
    <button
      disabled={loading}
      onClick={handClick}
      className={`${
        loading && 'opacity-30'
      } flex justify-start items-center space-x-[0.375rem]`}
    >
      <input
        checked={isCheck}
        type='checkbox'
        className='accent-[#E64828]'
      />
      <span className='uppercase text-0875 font-medium text-greyscale-80'>
        {item?.name}
      </span>
    </button>
  )
}
