'use client'
import BikeAnimation from '@/components/bikeAnimate'
import Image from 'next/image'
import HomeForm from '@/components/form/HomeForm'

export default function Booking({data, dataTourDetail, dataPage}) {
  const dataFormInit = {
    titleTour: dataTourDetail?.title,
    typeoftour: dataTourDetail?.type_of_tour_data?.[0]?.name,
    choosedays: {
      title: dataTourDetail?.time_data?.[0]?.name,
      day: data?.infos?.number_day,
    },
    priceSelf: data?.gia?.self_driving,
    priceLocal: data?.gia?.local_driver,
  }

  return (
    <div className='relative h-[70rem] xmd:h-fit flex bg-white'>
      <div className='xmd:hidden absolute size-full top-0 left-0'>
        <BikeAnimation />
      </div>
      <div className='xmd:hidden absolute bottom-0 left-0 w-full h-[70%] bg-[#13341C]'></div>
      <div className='flex container flex-col justify-end md:pb-[7rem] tablet:pb-[2rem] xmd:mt-[0.88rem]'>
        <div className='xmd:hidden flex flex-col items-start space-y-[0.75rem] h-[5.625rem] opacity-90 mb-[3.25rem] xmd:mb-[2rem]'>
          <span className='text-1125 xmd:text-0875 font-extrabold text-white opacity-40'>
            EASY WITH HONG HA TRAVEL
          </span>
          <h2 className='text-35 xmd:text-25 font-black text-white xmd:w-[16.04469rem]'>
            ONLINE BOOKING
          </h2>
        </div>
        <HomeForm
          isTourDetail
          dataFormInit={dataFormInit}
          listLocation={dataPage}
        />
      </div>
    </div>
  )
}
