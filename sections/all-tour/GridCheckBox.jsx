import ItemTour from '@/components/itemtour'
import PaginationCustom from '@/components/paginationcustom'

export default function GridCheckBox() {
  return (
    <div className='container flex justify-between items-start space-x-[2.62rem] mb-[4rem]'>
      <div className='py-[1.9375rem] px-[1.875rem] rounded-[1rem] bg-white'>
        <span className='text-1 font-bold text-greyscale-80'>TYPE OF TOUR</span>
        <hr className='bg-[#C5C5C5] h-[0.0625rem] w-[17rem] my-[1.25rem]' />
        <div className='space-y-[0.75rem]'>
          <div className='flex justify-start items-center space-x-[0.375rem]'>
            <input
              type='checkbox'
              className='checked:bg-[#E64828] accent-[#E64828]'
            />
            <span className='text-0875 font-medium text-greyscale-80'>
              ALL TOUR
            </span>
          </div>
          <div className='flex justify-start items-center space-x-[0.375rem]'>
            <input
              type='checkbox'
              className='checked:bg-[#E64828] accent-[#E64828]'
            />
            <span className='text-0875 font-medium text-greyscale-80'>
              PREMIUM
            </span>
          </div>
          <div className='flex justify-start items-center space-x-[0.375rem]'>
            <input
              type='checkbox'
              className='checked:bg-[#E64828] accent-[#E64828]'
            />
            <span className='text-0875 font-medium text-greyscale-80'>
              BEST BUDGET
            </span>
          </div>
          <div className='flex justify-start items-center space-x-[0.375rem]'>
            <input
              type='checkbox'
              className='checked:bg-[#E64828] accent-[#E64828]'
            />
            <span className='text-0875 font-medium text-greyscale-80'>
              STANDARD
            </span>
          </div>
        </div>
      </div>
      <div className='mb-[2rem]'>
        <div className='grid grid-cols-3 gap-x-[1.25rem] gap-y-[2.5rem]'>
          {new Array(9).fill(0).map((e, index) => (
            <ItemTour key={index} />
          ))}
        </div>
        <PaginationCustom />
      </div>
    </div>
  )
}
