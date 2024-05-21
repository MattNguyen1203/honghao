import Image from 'next/image'
import CardBlog from './CardBlog'
import PaginationCustom from '@/components/paginationcustom'
const CardMain = () => {
  return (
    <div className='xmd:hidden relative rounded-md overflow-hidden'>
      <Image priority alt="ảnh" src={'/imgs/blog/cardmain.jpg'} width={1500} height={800} className="w-[89.9375rem] h-[43.6875rem] shrink-0" />
      <div className="absolute z-10 bottom-0 left-0">
        <div className="bg-green-dark flex items-center justify-center relative w-[29.89381rem] h-[22.17188rem] shrink-0">
          <div className="inline-flex flex-col items-start space-y-[5.1875rem]">
            <div className="inline-flex flex-col items-start space-y-[1.1875rem]">
              <button className=' bd flex justify-center items-center gap-2.5 px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] bg-[#fcf8f7]'>
                <div className="text-[#030922] text-center text-[0.78906rem] not-italic font-normal leading-4 tracking-[0.03125rem] uppercase">

                  ARTICLE
                </div>
              </button>
              <div className='w-[21.82813rem] h-[5.1575rem] shrink-0 text-[#FCF8F7] text-[2.5rem] not-italic font-black leading-[100%]'>
                Seychelles Hotel Guide;
                Advice from the Experts
              </div>
            </div>
            <div className="text-[#787878] text-[0.9155rem] not-italic font-light leading-[1.625rem] tracking-[0.03125rem] uppercase">
              5 min READ
            </div>
          </div>
          <div className="absolute top-[1.85rem] right-[-4.4rem] bg-[#FAF1EE] rotate-90 inline-flex flex-col justify-center items-center pl-[1.31rem] pr-[1.17rem] pt-[0.9rem] pb-[0.62rem] rounded-[0.75rem_0.75rem_0rem_0rem] text-[#030922] text-[0.89356rem] not-italic font-light leading-[1.03125rem] tracking-[0.03125rem] uppercase">
            Article
          </div>

        </div>
      </div>
    </div>
  )
}
const ListStories = () => {
  return (
    <div id='list-stories' className="flex flex-col items-start md:space-y-[2.62rem]">
      <CardMain />
      <div className="grid grid-cols-2 xmd:grid-cols-1 xmd:gap-y-[1rem] gap-y-[2.12rem] gap-x-[1.45rem]">
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
      <PaginationCustom />
    </div>
  )
}

export default ListStories
