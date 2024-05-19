"use client"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PaginationCustom() {
  const className = {
    active: 'flex w-10 h-10 flex-col justify-center items-center gap-2.5 rounded-lg bg-orange-normal-active text-white text-sm hover:none not-italic font-medium leading-[120%] tracking-[0.00875rem] ',
    base: 'flex w-10 h-10 flex-col justify-center items-center gap-2.5 hover:text-white text-[color:var(--greyscaletext-80,#262626)] text-sm not-italic font-medium leading-[120%] tracking-[0.00875rem]'
  }
  return (
    <Pagination className={'mt-[2rem] paginationcustom'}>
      <PaginationContent>
        <PaginationItem className={className.active}>
          <PaginationLink isActive={true} className={'!border-none  rounded-lg hover:bg-orange-normal-active hover:text-white bg-transparent'} href="#list-stories">1</PaginationLink>
        </PaginationItem>
        <PaginationItem className={className.base}>
          <PaginationLink isActive={false} className={'!border-none rounded-lg hover:bg-orange-normal-active hover:text-white bg-transparent'} href="#list-stories">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className={className.base}>
          <PaginationLink isActive={false} className={'!border-none rounded-lg hover:bg-orange-normal-active hover:text-white bg-transparent'} href="#list-stories">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem className={className.base}>
          <PaginationLink isActive={false} className={'!border-none rounded-lg hover:bg-orange-normal-active hover:text-white bg-transparent'} href="#list-stories">10</PaginationLink>
        </PaginationItem>



      </PaginationContent>
    </Pagination>
  )
}

