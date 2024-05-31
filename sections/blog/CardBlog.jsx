"use client"
import Image from 'next/image'
import Link from 'next/link'
const CardBlog = ({ singlePost }) => {
  function formatDate(inputDate) {
    // Chuyển đổi chuỗi ngày tháng thành đối tượng Date
    var date = new Date(inputDate);

    // Lấy các thành phần ngày, tháng, năm
    var day = date.getDate();
    var month = date.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
    var year = date.getFullYear();

    // Tạo chuỗi định dạng ngày theo yêu cầu
    var formattedDate = `Ngày ${day}, tháng ${month}, ${year}`;

    return formattedDate;
  }

  return (
    <Link href={`/${singlePost?.post_slug}`}>
      <div className=" shrink-0 rounded-2xl relative group overflow-hidden xmd:w-[21.4375rem] xmd:h-[15.3125rem] w-[44.25rem] h-[25.8125rem] cursor-pointer">
        <div className='w-[44.25rem] xmd:h-[8rem] h-[18.8125rem] shrink-0 absolute bottom-0 left-0 z-[11] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,#000_100%)]'></div>
        <Image priority alt="ảnh" src={singlePost?.thumbnail} width={500} height={500} className="z-10 duration-500  size-full group-hover:scale-110 object-cover " />
        <div className="inline-flex z-[12] absolute xmd:top-[1.12rem] xmd:left-[1.12rem] top-[1.5rem] left-[1.5rem] bg-[#FAF1EE] text-[#030922] xmd:text-[0.75rem] text-sm not-italic font-normal leading-[1.2] xmd:tracking-[0.00375rem] tracking-[0.00875rem] flex-col justify-center items-center py-2.5 px-[1.1875rem] rounded-[2.0625rem]">
          <div className="w-max">
            {singlePost?.primary_category?.name}
          </div>
        </div>
        <div className="absolute z-[12] bottom-[1.87rem] xmd:bottom-[1.12rem] xmd:left-[1.12rem] left-[1.87rem] flex flex-col space-y-[0.5rem]">
          <div className="flex xmd:line-clamp-2 flex-col justify-center text-greyscale-5 text-xl xmd:text-[1rem] not-italic font-extrabold leading-[120%]">
            {singlePost?.title}
          </div>
          <div className="flex  flex-col justify-center text-greyscale-5 text-xs not-italic font-normal leading-[120%] tracking-[0.00375rem]">
            {/* Ngày 24, tháng 5, 2024 */}
            {formatDate(singlePost?.date)}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardBlog
