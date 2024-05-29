'use client'

import {
  usePathname,
  useRouter,
  useSearchParams,
  useCallback,
} from 'next/navigation'
import {useEffect, useState} from 'react'
import useStore from '@/app/(store)/store'
export default function CheckBox({item, length, setIsAllTour}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const {shouldFetch, setShouldFetch} = useStore((state) => state)
  const pathName = usePathname()
  const device = searchParams.get('device')?.split('--')
  const [isCheck, setIsCheck] = useState(
    device?.includes(item?.slug) ? true : false,
  )

  useEffect(() => {
    if (device?.length === length) {
      setIsAllTour(true)
    } else {
      setIsAllTour(false)
    }
    if (!device) {
      setIsAllTour(true)
      setIsCheck(false)
    }
  }, [device])
  const handleFilterDevicePc = () => {
    setShouldFetch(true)
    if (isCheck) {
      const paramNew = new URLSearchParams(searchParams)
      console.log({paramNew})
      const dataNew = device?.length > 0 && [...device]
      dataNew?.splice(
        dataNew?.findIndex((e) => e === item?.slug),
        1,
      )
      const searchParamsNew =
        dataNew?.length > 1 ? dataNew?.join('--') : dataNew?.[0]
      if (dataNew?.length > 0) {
        paramNew.set('device', searchParamsNew)
        paramNew.set('page', 1)
      } else {
        paramNew.delete('device', searchParamsNew)
      }
      router.push(pathName + '?' + paramNew, {
        scroll: false,
      })

      return setIsCheck(false)
    } else {
      setIsAllTour(false)
      const paramNew = new URLSearchParams(searchParams)
      const searchParamsNew = device
        ? device?.join('--') + '--' + item?.slug
        : item?.slug
      paramNew.set('device', searchParamsNew)
      paramNew.set('page', 1)

      router.push(pathName + '?' + paramNew.toString(), {
        scroll: false,
      })
      return setIsCheck(true)
    }
  }

  return (
    <div
      onClick={handleFilterDevicePc}
      className='flex justify-start items-center space-x-[0.375rem]'
    >
      <input
        checked={isCheck}
        type='checkbox'
        className='accent-[#E64828]'
      />
      <span className='uppercase text-0875 font-medium text-greyscale-80'>
        {item?.name}
      </span>
    </div>
  )
}
