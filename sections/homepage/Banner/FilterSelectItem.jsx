'use client'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const FilterSelectItem = ({ data, setOptionSelected }) => {
  return (
    <div className='w-fit min-w-[8.75rem] flex-col'>
      <span className='text-075 tracking-[0.00375rem] text-greyscale-50 uppercase'>
        {data?.label}
      </span>
      <Select
        defaultValue={data?.content?.[0]?.name}
        onValueChange={(value) => {
          setOptionSelected((prev) => {
            return {
              ...prev,
              [data?.key]: value,
            }
          })
        }}
        className=''
      >
        <SelectTrigger className='text-1 h-[1.5rem] focus:ring-offset-0 focus:ring-0 font-bold text-greyscale-80 p-0 !outline-none !border-none capitalize'>
          <SelectValue className='!outline-none !border-none' />
        </SelectTrigger>
        <SelectContent className='z-[100]'>
          {data?.content?.map((item, index) => (
            <SelectItem
              value={item?.name}
              key={index}
              className='custom-select text-1 font-bold text-greyscale-80 capitalize p-[1rem] border-b border-solid border-greyscale-5'
            >
              {item?.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default FilterSelectItem
