'use client'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const AccordionCustom = ({data}) => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full'
    >
      {data?.map((item, index) => {
        return (
          <AccordionItem
            value={index + 1}
            key={index}
            className='mb-5 border-none md:mb-6'
          >
            <AccordionTrigger className='text-1 font-bold tracking-[0.0125rem] text-greyscale-30 py-[0.5rem] hover:no-underline border-b border-solid border-[#828282] [&[data-state=open]]:border-orange-normal [&[data-state=open]]:text-orange-normal'>
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className='text-1 tracking-[0.0125rem] text-greyscale-40 py-2 md:py-4'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default AccordionCustom
