'use client'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const FilterSelectItem = ({data}) => {
  console.log('data', data?.content?.[0]?.slug)
  return (
    <div className='w-fit min-w-[8.75rem] flex-col'>
      <span className='text-075 tracking-[0.00375rem] text-greyscale-50 uppercase'>
        {data?.label}
      </span>
      <Select defaultValue={data?.content?.[0]?.slug}>
        <SelectTrigger className='text-1 h-[1.5rem] font-bold text-greyscale-80 p-0 !outline-none !border-none capitalize'>
          <SelectValue className='' />
        </SelectTrigger>
        <SelectContent>
          {data?.content?.map((item, index) => (
            <SelectItem
              value={item?.slug}
              key={index}
              className='text-1 font-bold text-greyscale-80 capitalize p-[1rem] border-b border-solid border-greyscale-5'
            >
              {item?.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default FilterSelectItem
