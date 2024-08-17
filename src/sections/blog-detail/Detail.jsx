'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import useStore from '@/app/(store)/store'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import Breadcrumb from '@/components/breadcrumb'
import {usePathname, useRouter} from 'next/navigation'
import {cn} from '@/lib/utils'
import {toast} from 'sonner'
import {FacebookShareButton, FacebookIcon} from 'next-share'
const Detail = ({dataDetailPost}) => {
  const pathName = usePathname()
  const router = useRouter()
  const {currentCategories, setCurrentCategories} = useStore((state) => state)
  const [headingTexts, setHeadingTexts] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const handleScrollToContent = (e) => {
    const indexOfSectionToScroll = parseInt(e.target.id)
    const h2Elements = document.querySelectorAll('.detail h2')
    Array.from(h2Elements)[indexOfSectionToScroll].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    })
  }
  useEffect(() => {
    if (dataDetailPost) {
      setCurrentCategories(dataDetailPost?.categories[0]?.slug)
    }
  }, [dataDetailPost])

  useEffect(() => {
    const h2Elements = document.querySelectorAll('.detail h2')
    const headings = []
    h2Elements.forEach((element) => {
      headings.push(element.textContent)
    })
    setIsVisible(true)
    setHeadingTexts(headings)
  }, [])
  const [content, setContent] = useState('')

  useEffect(() => {
    if (dataDetailPost?.content) {
      let updatedContent = dataDetailPost.content

      // Thay thế các thẻ video shortcode thành thẻ video HTML5 với thuộc tính src
      updatedContent = updatedContent.replace(
        /\[video\s+width="(\d+)"\s+height="(\d+)"\s+mp4="([^"]+)"\s*\]\[\/video\]/g,
        '<video controls width="$1" height="$2"><source src="$3" type="video/mp4"></video>',
      )

      setContent(updatedContent)
    }
  }, [dataDetailPost])
  const copyToClipboard = (link) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        toast('Copy link thành công')
      })
      .catch((err) => {
        console.error('Lỗi sao chép link: ', err)
      })
  }

  const Share = () => {
    return (
      <div className='h-[5rem] xmd:h-[3.75rem] flex items-center xmd:pl-[1rem] pl-[7.41rem] w-full border-t xmd:border-t xmd:border-b border-[#E5E5E5]'>
        <div className='flex items-center gap-4'>
          <div className='text-[#030922] text-base not-italic font-normal leading-[120%] tracking-0.0125'>
            <div className='w-max '>Chia sẻ:</div>
          </div>
          <div className='flex w-[4.3125rem] justify-center items-center gap-[0.5625rem] shrink-0'>
            <FacebookShareButton
              url={`https://honghao.vercel.app/${dataDetailPost?.slug}`}
              quote={dataDetailPost?.title}
              hashtag={'#honghaotravel'}
            >
              <svg
                className='size-[2rem]'
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='33'
                viewBox='0 0 32 33'
                fill='none'
              >
                <path
                  d='M30 16.5898C30 23.7898 24.6 29.6898 17.7 30.4898V19.6898H21L21.5 15.8898H17.8V13.5898C17.8 12.4898 18.1 11.7898 19.7 11.7898H21.7V8.28984C20.7 8.18984 19.8 8.18984 18.8 8.18984C15.9 8.18984 13.9 9.98984 13.9 13.1898V15.9898H10.6V19.7898H13.9V30.4898C7.1 29.3898 2 23.5898 2 16.5898C2 8.88984 8.3 2.58984 16 2.58984C23.7 2.58984 30 8.88984 30 16.5898Z'
                  fill='#454545'
                />
              </svg>
            </FacebookShareButton>

            <div
              onClick={() =>
                copyToClipboard(
                  `https://honghao.vercel.app/${dataDetailPost?.slug}`,
                )
              }
              className='size-[1.79rem] cursor-pointer bg-greyscale-50 rounded-full flex justify-center items-center'
            >
              <svg
                className='size-[0.875rem]'
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='15'
                viewBox='0 0 14 15'
                fill='none'
              >
                <path
                  d='M5.25 5.83984V4.20662C5.25 3.55323 5.25 3.22629 5.37716 2.97673C5.48901 2.7572 5.66736 2.57886 5.88688 2.467C6.13645 2.33984 6.46339 2.33984 7.11678 2.33984H10.3834C11.0368 2.33984 11.3634 2.33984 11.6129 2.467C11.8325 2.57886 12.0111 2.7572 12.123 2.97673C12.2501 3.22629 12.2501 3.55299 12.2501 4.20638V7.47306C12.2501 8.12646 12.2501 8.45315 12.123 8.70272C12.0111 8.92224 11.8323 9.10096 11.6128 9.21281C11.3634 9.33984 11.0373 9.33984 10.3851 9.33984H8.75M5.25 5.83984H3.61678C2.96339 5.83984 2.63645 5.83984 2.38688 5.967C2.16736 6.07885 1.98901 6.2572 1.87716 6.47673C1.75 6.72629 1.75 7.05323 1.75 7.70662V10.9733C1.75 11.6267 1.75 11.9532 1.87716 12.2028C1.98901 12.4223 2.16736 12.601 2.38688 12.7128C2.6362 12.8398 2.96275 12.8398 3.61486 12.8398H6.8854C7.53752 12.8398 7.86361 12.8398 8.11293 12.7128C8.33245 12.601 8.51111 12.4221 8.62297 12.2026C8.75 11.9533 8.75 11.6271 8.75 10.975V9.33984M5.25 5.83984H6.88345C7.53684 5.83984 7.86337 5.83984 8.11293 5.967C8.33245 6.07885 8.51111 6.2572 8.62297 6.47673C8.75 6.72605 8.75 7.0526 8.75 7.70473L8.75 9.33984'
                  stroke='white'
                  strokeWidth='1.3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // const content = replaceShortcodes(dataDetailPost?.content);
  return (
    <section className=' w-full md:border-b md:border-[#E5E5E5]'>
      {dataDetailPost?.thumbnail && (
        <Image
          priority
          alt='ảnh'
          src={dataDetailPost?.thumbnail}
          width={1600}
          height={1000}
          className={cn(
            'xmd:w-screen object-cover mx-auto xmd:h-[14.93325rem] w-full h-[62.5rem] ',
            isVisible ? 'visible' : 'hidden',
          )}
        />
      )}
      <div className='xmd:hidden '>
        <Breadcrumb
          divider
          className='!pl-0'
        >
          <BreadcrumbLink
            subLink
            href='/blog'
          >
            Blog
          </BreadcrumbLink>
          <BreadcrumbLink href={`/blog/${dataDetailPost?.post_slug}`}>
            {dataDetailPost?.title}
          </BreadcrumbLink>
        </Breadcrumb>
      </div>

      <div className='container detail relative md:border-l md:border-r md:border-[#E5E5E5] mx-auto'>
        <h1 className='w-[65.6875rem] font-londrina xmd:w-[21.4375rem] xmd:pt-[1.8rem] xmd:pb-[1rem] pt-[5.25rem] pb-[3.26rem] mx-auto text-greyscale-70 text-[3.5rem] xmd:text-[1.5rem] not-italic xmd:font-black font-normal xmd:tracking-[0.00375rem] leading-[120%]'>
          {dataDetailPost?.title}
        </h1>
        <div className='flex w-[65.8rem] xmd:w-[21.4375rem] mx-auto flex-col items-start bg-greyscale-5 xmd:space-y-[0.63rem] space-y-[1.875rem] xmd:py-[1.25rem] xmd:px-[0.62rem] md:p-5'>
          <div className='text-greyscale-80 xmd:text-greyscale-30 text-[2rem] xmd:text-[1.125rem] xmd:font-medium not-italic font-normal leading-[1.2]'>
            Table of Contents
          </div>
          <ul className='flex flex-col ml-[1.25rem] space-y-[0.62rem]'>
            {headingTexts.map((headingItem, index) => (
              <li
                onClick={handleScrollToContent}
                key={index}
                id={`${index}`}
                className='list-disc cursor-pointer text-greyscale-80 text-sm not-italic font-bold xmd:leading-[1.5] leading-[120%] xmd:tracking-0.00219 tracking-[0.00875rem]'
              >
                {headingItem}
              </li>
            ))}
          </ul>
        </div>
        <div
          className='paragraph mt-[2.5rem] xmd:pb-[1rem] pb-[5rem] mx-auto w-[65.6875rem] flex flex-col space-y-[1.87rem]'
          dangerouslySetInnerHTML={{__html: content}}
        />
        <div className='xmd:hidden'>
          <Share />
        </div>
      </div>
      <div className='md:hidden'>
        <Share />
      </div>
    </section>
  )
}

export default Detail
