'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { formatCurrencyVND } from '@/lib/utils'

export default function InformationForm({
  dataForm = {},
  titleTour,
  data,
  paxValueLocal,
  paxValueSelf,
  isTourDetail = false,
  exchangeRate,
}) {
  const formattedDate = (date) => {
    let newDate = new Date(date || 0)
    let day = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()
    return `${day}/${month}/${year}`
  }

  const serviceCharge = 3
  const totalPrice =
    paxValueSelf * data?.priceSelf + paxValueLocal * data?.priceLocal

  return (
    <div
      className={`${isTourDetail
        ? '!w-[34.0625rem] xmd:!w-full pl-[2rem] translate-y-[-3.5rem] flex-1 xmd:!p-0 xmd:mt-[5rem]'
        : 'pl-[0.75rem] w-[35.5rem] xmd:pt-[0.75rem] xmd:pb-[1.5rem] xmd:mt-[1rem] xmd:!px-0'
        } space-y-[0.75rem] py-[1.5rem] pr-[1.5rem] xmd:px-[0.75rem] xmd:w-full`}
    >
      <span
        className={`${isTourDetail
          ? 'opacity-70 xmd:opacity-100 text-1 xmd:text-0875 text-white xmd:text-black xmd:font-extrabold'
          : 'opacity-40 xmd:opacity-100 text-0875 text-greyscale-80 xmd:text-black'
          } font-bold`}
      >
        Confirmed tour booking
      </span>
      <div className='bg-[#F8F8F8] rounded-[0.5rem] border-[0.5px] border-solid border-[#eee]'>
        <div className='w-full flex'>
          <div className='h-[2.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Type of tour
          </div>
          <div className='max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-075 text-[#727272]'>
            {titleTour}: {dataForm?.typeoftour}{' '}
            {dataForm?.typeoftour && dataForm?.choosedays && 'in '}
            {dataForm?.choosedays}
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[2.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Name
          </div>
          <div className='max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-075 text-greyscale-80'>
            <p className='text-075 text-[#727272] line-clamp-2 text-ellipsis'>
              {dataForm?.username} {dataForm?.username && ' - '}
              <span className='text-0875 text-[#2E2E2E] font-semibold'>
                {paxValueSelf + paxValueLocal} pax
              </span>
            </p>
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[2.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Contact Info
          </div>
          <div className='max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-075 text-[#727272]'>
            {dataForm?.email} {dataForm?.email && dataForm?.phone && ' - '}{' '}
            {dataForm?.phone}
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[3.5rem] xmd:h-[3.625rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Pick up
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className='max-w-[20rem] xmd:max-w-[14.53125rem] xmd:h-[3.625rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[3.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-075 text-[#727272]'>
                  <p className='text-075 text-[#727272] line-clamp-2 text-ellipsis'>
                    <span className='text-0875 font-semibold text-greyscale-80'>
                      {formattedDate(dataForm?.dob)}
                    </span>
                    {dataForm?.pickup && ' from '}
                    <span className='text-0875 font-semibold text-greyscale-80'>
                      {dataForm?.pickup}
                    </span>
                    {dataForm?.address && ' at '} {dataForm?.address}
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent className='max-w-[20rem] xmd:max-w-[14.53125rem] h-fit'>
                <p className='text-075 text-[#727272]'>
                  <span className='text-0875 font-semibold text-greyscale-80'>
                    {formattedDate(dataForm?.dob)}
                  </span>
                  {dataForm?.pickup && ' from '}
                  <span className='text-0875 font-semibold text-greyscale-80'>
                    {dataForm?.pickup}
                  </span>
                  {dataForm?.address && ' at '} {dataForm?.address}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className='w-full flex'>
          <div className='h-[2.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Tour duration
          </div>
          <div className='max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-075 text-[#727272]'>
            {dataForm?.choosedays}
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[3.5rem] xmd:h-[3.625rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Droff off
          </div>
          <div className='max-w-[20rem] xmd:max-w-[14.53125rem] xmd:h-[3.625rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[3.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee] text-075 text-[#727272]'>
            <p className='text-075 text-[#727272] line-clamp-2 text-ellipsis'>
              <span className='text-0875 font-semibold text-greyscale-80'>
                {formattedDate(dataForm?.enddate)}
              </span>
              {dataForm?.droff && ' - '} {dataForm?.droff}{' '}
              {dataForm?.destination && ' , '} {dataForm?.destination}
            </p>
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[2.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Self-driving
          </div>
          <div className='max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee]'>
            <p className='text-0875 text-[#2E2E2E] font-semibold'>
              ${data?.priceSelf} x {paxValueSelf}
            </p>
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[2.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Easy driver
          </div>
          <div className='max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] line-clamp-2 text-ellipsis flex flex-1 items-center h-[2.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee]'>
            <p className='text-0875 text-[#2E2E2E] font-semibold'>
              ${data?.priceLocal} x {paxValueLocal}
            </p>
          </div>
        </div>
        <div className='w-full flex'>
          <div className='h-[3.5rem] flex items-center w-[12.1875rem] xmd:w-[7.4375rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-r-[0.5px] border-solid border-[#eee] font-extrabold text-0875 text-[#2E2E2E]'>
            Message
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className='max-w-[20rem] xmd:max-w-[14.53125rem] w-[20rem] flex flex-1 items-center h-[3.5rem] py-[0.5rem] px-[1rem] border-b-[0.5px] border-solid border-[#eee]'>
                  <p className='text-075 text-[#727272] line-clamp-2 text-ellipsis'>
                    {dataForm?.message}
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent className='max-w-[20rem] xmd:max-w-[14.53125rem]'>
                <p className='text-075 text-[#727272]'>{dataForm?.message}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className='w-full py-[0.75rem] px-[1rem] rounded-[0.5rem] bg-[#23704D] mb-[0.5rem]'>
        <div className='flex justify-between items-center w-full mb-[0.5rem]'>
          <span className='text-0875 font-bold text-greyscale-5'>
            Provisional:
          </span>
          <span className='text-1 font-bold text-greyscale-5'>
            ${totalPrice}
          </span>
        </div>
        <div className='flex justify-between items-center w-full'>
          <span className='text-0875 font-bold text-greyscale-5'>
            Service Charge 3%:
          </span>
          <span className='text-1 font-bold text-greyscale-5'>
            ${((totalPrice / 100) * serviceCharge).toFixed(2)}
          </span>
        </div>
        <hr className='w-full h-[0.0625rem] my-[0.5rem] bg-[#d9d9d9]/20 opacity-40' />
        <div className='flex justify-between items-center w-full'>
          <span className='text-0875 font-bold text-greyscale-5'>
            Total amount:
          </span>
          <span className='text-1 font-bold text-greyscale-5'>
            ${(totalPrice / 100) * serviceCharge + totalPrice} ~{' '}
            {formatCurrencyVND(
              ((totalPrice / 100) * serviceCharge + totalPrice) *
              Number(exchangeRate),
            )}
          </span>
        </div>
      </div>
    </div>
  )
}
