'use client'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {useSearchParams, usePathname, useRouter} from 'next/navigation'
import {useState, useEffect, useCallback} from 'react'
import useStore from '@/app/(store)/store'
export default function PaginationCustom({href, pagination}) {
  const className = {
    active:
      'flex w-10 h-10 flex-col justify-center items-center gap-2.5 rounded-lg bg-orange-normal-active text-white text-sm hover:none not-italic font-medium leading-[120%] tracking-[0.00875rem] ',
    base: 'flex w-10 h-10 flex-col justify-center items-center gap-2.5 hover:text-white text-orange-normal-active text-sm not-italic font-medium leading-[120%] tracking-[0.00875rem]',
  }
  const {setCurrentPaggiBlog, currentPaggiBlog, shouldFetch, setShouldFetch} =
    useStore((state) => state)
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.get('page')

  useEffect(() => {
    if (search) {
      setCurrentPaggiBlog(Number(search))
    } else {
      setCurrentPaggiBlog(1)
    }
  }, [search])

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )
  const handlePushParam = (d) => {
    setShouldFetch(true)
    setCurrentPaggiBlog(d)
    router.push(`${pathName}?${createQueryString("page", d)}`, { scroll: false })
  }
  return (
    <Pagination className={'mt-[2rem] paginationcustom'}>
      <PaginationContent>
        {new Array(pagination?.total_pages).fill(0)?.map((d, i) => (
          <PaginationItem
            onClick={() => handlePushParam(i + 1)}
            key={i}
            className={
              currentPaggiBlog === i + 1 ? className.active : className.base
            }
          >
            <PaginationLink
              isActive={true}
              className={
                '!border-none  rounded-lg hover:bg-orange-normal-active hover:text-white bg-transparent'
              }
              href={href}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  )
}
