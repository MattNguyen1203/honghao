'use client'

import React, { useEffect, useMemo, useState } from 'react'
import FilterSelectItem from './FilterSelectItem'
import FilterPriceItem from './FilterPriceItem'
import { Dialog, DialogContent, DialogTrigger } from '@/components/customCn/dialogFormhome'
import HomeForm from '@/components/form/HomeForm'
import { cn } from '@/lib/utils'

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

const Filter = ({ listTypeofTour, listTime, listTours, commonData }) => {

  const dataFilter = [
    {
      label: 'days',
      content: listTime?.terms,
      key: 'time_data',
    },
    {
      label: 'TYPE OF TOUR',
      content: listTypeofTour?.terms,
      key: 'type_of_tour_data',
    },
  ]

  const [optionSelected, setOptionSelected] = useState({
    type_of_tour_data: listTypeofTour?.terms?.[0]?.name,
    time_data: listTime?.terms?.[0]?.name,
    selfPax: 0,
    localPax: 0,
  })

  const [tourSelected, setTourSelected] = useState({})

  useEffect(() => {
    const tourMatch = listTours?.tours?.find(
      (item, index) =>
        item?.time_data?.[0]?.name === optionSelected?.time_data &&
        item?.type_of_tour_data?.[0]?.name ===
        optionSelected?.type_of_tour_data,
    )

    setTourSelected(tourMatch)
  }, [optionSelected, listTours])

  const totalPrice = useMemo(() => {
    if (!tourSelected) return 0
    const selfPrice = tourSelected?.gia?.self_driving || 0
    const localPrice = tourSelected?.gia?.local_driver || 0

    return (
      Number(selfPrice) * Number(optionSelected?.selfPax) +
      Number(localPrice) * Number(optionSelected?.localPax)
    )
  }, [tourSelected, optionSelected])
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

      <Dialog

      >
        <DialogTrigger
          asChild>
          <div className={cn('bg-orange-normal px-[1.5rem] py-[0.75rem] rounded-[0.5rem] flex flex-col items-center cursor-pointer',
          )}>
            <span className='text-175 font-black text-greyscale-0 mb-[0.25rem]'>
              ${totalPrice}
            </span>
            <span className='text-0875 font-bold tracking-[0.00875rem] text-greyscale-0 uppercase whitespace-nowrap'>
              book now
            </span>
          </div>
        </DialogTrigger>
        <DialogContent className='sm:max-w-fit'>
          <HomeForm
            listLocation={commonData?.acf}
            listTypeofTour={listTypeofTour}
            listTime={listTime}
            listTours={listTours?.tours}

            // dataFormInit={{
            //   titleTour: tourSelected?.title,
            //   typeoftour: tourSelected?.type_of_tour_data?.[0]?.name,
            //   choosedays: {
            //     title: tourSelected?.time_data?.[0]?.name,
            //     day: tourSelected?.infos?.number_day,
            //   },
            //   priceSelf: tourSelected?.gia?.self_driving,
            //   priceLocal: tourSelected?.gia?.local_driver,
            // }}
            selfPax={optionSelected?.selfPax}
            localPax={optionSelected?.localPax}
            typeOfTour={optionSelected?.type_of_tour_data}
            daysOfTour={optionSelected?.time_data}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Filter
