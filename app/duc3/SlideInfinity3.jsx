'use client'
import ICMapSmall from '@/components/icons/ICMapSmall'

export default function SlideInfinity3() {
  return (
    <div
      id='slide_infinity'
      className='relative overflow-hidden w-full h-[5.5rem]'
    >
      <div className='absolute top-0 left-0 flex items-center h-[5.5rem] w-full'>
        <div
          id='wrapper_infinity'
          className='flex w-fit'
        >
          {Array(5)
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
const ItemGallery = () => {
  return (
    <div className='item_slide w-[36.3025rem] flex-shrink-0 h-[3.5rem] flex items-center'>
      <span className='font-londrina text-[3.5rem] font-black leading-[1] text-[#23704D] whitespace-nowrap block w-fit'>
        THE GLADDEST MOMENT
      </span>
      <ICMapSmall className='size-[2.375rem] mx-[2.12rem]' />
    </div>
  )
}
