import React from 'react'
import FilterSelectItem from './FilterSelectItem'
import FilterPriceItem from './FilterPriceItem'

const dataFilter = [
  {
    label: 'days',
    content: [
      {
        value: '5 days 4 night',
        slug: '5_day_4_night',
      },
      {
        value: '4 days 3 night',
        slug: '4_day_3_night',
      },
    ],
  },
  {
    label: 'TYPE OF TOUR',
    content: [
      {
        value: 'standard',
        slug: 'standard',
      },
      {
        value: 'Best Budget',
        slug: 'best_budget',
      },
      {
        value: 'premium',
        slug: 'premium',
      },
    ],
  },
]

const dataPrice = [
  {
    label: 'SELF DRIVING',
  },
  {
    label: 'PRIVATE DRIVING',
  },
]

const Filter = () => {
  return (
    <div className='xmd:hidden flex items-center absolute bottom-[2.94rem] left-1/2 -translate-x-1/2 bg-greyscale-0 rounded-[0.75rem] py-[0.75rem] pl-[2rem] pr-[0.75rem] z-[100]'>
      {dataFilter?.map((item, index) => (
        <div
          key={index}
          className='pr-[1.5rem] mr-[1.5rem] border-r border-r-solid border-greyscale-5'
        >
          <FilterSelectItem data={item} />
        </div>
      ))}

      {dataPrice?.map((item, index) => (
        <div
          key={index}
          className='pr-[1.5rem] mr-[1.5rem] border-r border-r-solid border-greyscale-5 last:border-none last:mr-0'
        >
          <FilterPriceItem data={item} />
        </div>
      ))}

      <div className='bg-orange-normal px-[1.5rem] py-[0.75rem] rounded-[0.5rem] flex flex-col items-center cursor-pointer'>
        <span className='text-175 font-black text-greyscale-0 mb-[0.25rem]'>
          $299
        </span>
        <span className='text-0875 font-bold tracking-[0.00875rem] text-greyscale-0 uppercase'>
          book now
        </span>
      </div>
    </div>
  )
}

export default Filter
