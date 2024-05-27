'use client'
import './slideInfinity.css'
import Image from 'next/image'

export default function SlideInfinity({type = ''}) {
  return (
    <div
      id='slide_infinity'
      className='relative overflow-hidden w-full h-[14.18094rem] md:h-[20.18094rem]'
    >
      <div
        className={`${
          type ? '-left-[11.9rem]' : 'left-0'
        } absolute top-0 flex items-center w-full h-[14.18094rem] md:h-[20.18094rem]`}
      >
        <div
          id='wrapper_infinity'
          className='flex space-x-[0.5rem] w-fit'
        >
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <ItemGallery
                key={index}
                index={index}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
const ItemGallery = ({index}) => {
  return (
    <div className='item_slide w-[23.83063rem] flex-shrink-0 h-[14.18094rem] relative group md:w-[31.83063rem] md:h-[20.18094rem]'>
      <Image
        className='object-cover size-full rounded-[0.67131rem]'
        src={
          index % 2 === 0 ? '/imgs/home/demo-2_.jpg' : '/imgs/home/demo-3_.png'
        }
        alt='demo'
        width={400}
        height={300}
      />
      {/* <div className='size-[6.5625rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 lg:group-hover:opacity-100 transition-all duration-200'>
        <Image
          className={`animate-spin object-cover size-full brightness-100 invert`}
          src={'/home/text-circle-box-map.svg'}
          alt='text circle box map'
          width={100}
          height={100}
        />

        <ICMapSmall
          fill='#FFFFFF80'
          className='size-[2.375rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div> */}
    </div>
  )
}
