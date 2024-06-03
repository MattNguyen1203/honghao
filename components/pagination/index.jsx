'use client'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination'
import { useRouter, useSearchParams } from 'next/navigation'

export default function PaginationV2({ href, pagination }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const className = {
    active:
      'flex w-10 h-10 flex-col justify-center items-center gap-2.5 rounded-lg bg-orange-normal-active text-white text-sm hover:none not-italic font-medium leading-[120%] tracking-[0.00875rem] ',
    base: 'flex w-10 h-10 flex-col justify-center items-center gap-2.5 hover:text-white text-orange-normal-active text-sm not-italic font-medium leading-[120%] tracking-[0.00875rem]',
  }

  const handlePushParam = (index) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', index)
    router.push(`?${params.toString()}`, { scroll: false })
  }
  return (
    <>
      {/* {pagination?.total_pages>1&& */}
      <Pagination className={'mt-[2rem] paginationcustom'}>
        <PaginationContent>
          {new Array(pagination?.total_pages).fill(0)?.map((d, i) => (
            <PaginationItem
              onClick={() => handlePushParam(i + 1)}
              key={i}
              className={
                (pagination?.current_page || 1) === i + 1
                  ? className.active
                  : className.base
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
      {/* } */}
    </>

  )
}
