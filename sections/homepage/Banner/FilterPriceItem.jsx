'use client'

import ICQtyDown from '@/components/icons/ICQtyDown'
import React, {useState} from 'react'

const FilterPriceItem = ({data}) => {
  const [qty, setQty] = useState(1)
  const handleInc = () => {
    setQty((prev) => prev + 1)
  }
  const handleDec = () => {
    if (qty < 2) return
    setQty((prev) => prev - 1)
  }

  return (
    <div className='w-fit min-w-[8.75rem] flex-col'>
      <span className='text-075 tracking-[0.00375rem] text-greyscale-50 uppercase'>
        {data?.label}
      </span>

      <div className='h-[1.5rem] flex items-center justify-between'>
        <span className='text-1 h-[1.5rem] font-bold text-greyscale-80'>
          {qty} pax
        </span>

        <div className='flex flex-col'>
          <div onClick={handleInc}>
            <ICQtyDown className='' />
          </div>
          <div onClick={handleDec}>
            <ICQtyDown className='rotate-180 mt-[0.5rem]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterPriceItem
