'use client'

import ICQtyDown from '@/components/icons/ICQtyDown'
import React, { useEffect, useState } from 'react'

const FilterPriceItem = ({ data, setOptionSelected }) => {
  const [qty, setQty] = useState(0)
  const handleInc = () => {
    setQty((prev) => prev + 1)
  }
  const handleDec = () => {
    if (qty < 1) return
    setQty((prev) => prev - 1)
  }

  useEffect(() => {
    setOptionSelected((prev) => ({
      ...prev,
      [data?.key]: qty,
    }))
  }, [qty])

  return (
    <div className='w-fit min-w-[8.75rem] flex-col'>
      <span className='text-075 tracking-[0.00375rem] text-greyscale-50 uppercase'>
        {data?.label}
      </span>

      <div className='h-[1.5rem] flex items-center justify-between'>
        <span className='text-1 h-[1.5rem] font-bold text-greyscale-80'>
          {qty} pax
        </span>

        <div className='flex flex-col md: space-y-[0.3rem]'>
          <div onClick={handleInc}>
            <ICQtyDown className=' cursor-pointer' />
          </div>
          <div onClick={handleDec}>
            <ICQtyDown className='rotate-180 mt-[0.5rem] cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterPriceItem
