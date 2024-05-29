'use client'

import React, {useState} from 'react'
import FilterSelectItem from './FilterSelectItem'
import FilterPriceItem from './FilterPriceItem'
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog'
import HomeForm from '@/components/form/HomeForm'

const dataPrice = [
  {
    label: 'SELF DRIVING',
    key: 'selfPax',
  },
  {
    label: 'Local DRIVING',
    key: 'localPax',
  },
]

const Filter = ({listTypeofTour, listTime, listTours}) => {
  const dataFilter = [
    {
      label: 'days',
      content: listTime?.terms,
      key: 'time',
    },
    {
      label: 'TYPE OF TOUR',
      content: listTypeofTour?.terms,
      key: 'type',
    },
  ]

  const [optionSelected, setOptionSelected] = useState({
    type: listTypeofTour?.terms?.[0]?.slug,
    time: listTime?.terms?.[0]?.slug,
    selfPax: 0,
    localPax: 0,
  })

  console.log('optionSelected', optionSelected)
  return (
    <div className='xmd:hidden flex items-center absolute bottom-[2.94rem] left-1/2 -translate-x-1/2 bg-greyscale-0 rounded-[0.75rem] py-[0.75rem] pl-[2rem] pr-[0.75rem] z-[1000]'>
      {dataFilter?.map((item, index) => (
        <div
          key={index}
          className='pr-[1.5rem] mr-[1.5rem] border-r border-r-solid border-greyscale-5'
        >
          <FilterSelectItem
            data={item}
            setOptionSelected={setOptionSelected}
          />
        </div>
      ))}

      {dataPrice?.map((item, index) => (
        <div
          key={index}
          className='pr-[1.5rem] mr-[1.5rem] border-r border-r-solid border-greyscale-5 last:border-none last:mr-0'
        >
          <FilterPriceItem
            data={item}
            setOptionSelected={setOptionSelected}
          />
        </div>
      ))}

      <Dialog>
        <DialogTrigger asChild>
          <div className='bg-orange-normal px-[1.5rem] py-[0.75rem] rounded-[0.5rem] flex flex-col items-center cursor-pointer'>
            <span className='text-175 font-black text-greyscale-0 mb-[0.25rem]'>
              $299
            </span>
            <span className='text-0875 font-bold tracking-[0.00875rem] text-greyscale-0 uppercase'>
              book now
            </span>
          </div>
        </DialogTrigger>
        <DialogContent className='sm:max-w-fit z-[999]'>
          <HomeForm />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Filter
