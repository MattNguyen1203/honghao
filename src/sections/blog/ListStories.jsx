import Image from 'next/image'
import CardBlog from './CardBlog'
import PaginationCustom from '@/components/paginationcustom'
import useSWR from 'swr'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import useStore from '@/app/(store)/store'
import { usePathname, useSearchParams } from 'next/navigation'
import { Skeleton } from '@/components/ui/skeleton'

const CardMain = ({ singlePost }) => {
  return (
    <Link href={`/${singlePost?.post_slug}`}>
      <div className='xmd:hidden relative rounded-md overflow-hidden group'>
        <Image
          priority
          alt='ảnh'
          src={singlePost?.thumbnail}
          width={1500}
          height={900}
          className='rounded-md group-hover:scale-110 duration-500  w-[89.9375rem]  h-[43.6875rem] shrink-0 object-cover'
        />
        <div className='absolute z-10 bottom-0 left-0 flex items-start justify-between'>
          <div className='bg-[#0C271B] flex items-center justify-center relative w-[29.89381rem] h-[22.17188rem] shrink-0'>
            <div className='inline-flex flex-col items-start space-y-[5.1875rem]'>
              <div className='inline-flex flex-col items-start space-y-[1.1875rem]'>
                <button className='flex justify-center items-center gap-2.5 px-[2.125rem] py-[0.8125rem] rounded-[62.5rem] bg-[#fcf8f7]'>
                  <div className='text-[#030922] text-center text-[0.78906rem] not-italic font-normal leading-4 tracking-[0.03125rem] uppercase'>
                    {singlePost?.primary_category?.name}
                  </div>
                </button>
                <div className='w-[21.82813rem] scrollbar-dichvu max-h-[15rem] overflow-y-auto shrink-0 text-[#FCF8F7] text-[2.5rem] not-italic font-black leading-[100%]'>
                  {singlePost?.title}
                </div>
              </div>
              <div className='text-[#787878] text-[0.9155rem] not-italic font-light leading-[1.625rem] tracking-[0.03125rem] uppercase'>
                5 min READ
              </div>
            </div>
          </div>
          <div className=' bg-[#FAF1EE] ml-[2.55rem] inline-flex flex-col justify-center items-center pl-[1.31rem] pr-[1.17rem] pt-[0.9rem] pb-[0.62rem] rounded-[0.75rem_0.75rem_0rem_0rem] text-[#030922] text-[0.89356rem] not-italic font-light leading-[1.03125rem] tracking-[0.03125rem] uppercase transform rotate-90 origin-top-left'>
            {singlePost?.primary_category?.name}
          </div>
        </div>
      </div>
    </Link>
  )
}
const ListStories = ({
  dataGetAllPostsByCategories,
  dataMainCard,
  currentCategories,
}) => {
  const listPost = dataGetAllPostsByCategories?.posts
  const pagination = dataGetAllPostsByCategories?.pagination
  const { shouldFetch, setShouldFetch } = useStore((state) => state)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.get('page')
  const [dataBlogClient, setDataBlogClient] = useState([])
  const [paginationClient, setPaginationClient] = useState({})
  const [loading, setLoading] = useState(false)

  const fetcher = (url) => fetch(url).then((r) => r.json())
  const { data, error, isLoading } = useSWR(
    shouldFetch
      ? pathname !== '/blog'
        ? `${process.env.NEXT_PUBLIC_API}/wp-json/okhub/v1/get-posts-by-category/1?cat_id=${currentCategories}&page=${search}&posts_per_page=8`
        : `${process.env.NEXT_PUBLIC_API}/wp-json/okhub/v1/get-list-cat-and-first-posts?page=${search}&per_page=8`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  useEffect(() => {
    if (search) {
      setShouldFetch(true)
    }
  }, [])
  useEffect(() => {
    setLoading(isLoading)
    if (data) {
      setPaginationClient(data?.pagination)
      setDataBlogClient(data?.posts)
    }
    if (error) {
      console.error('Error fetching data:', error)
    }
  }, [data, error, isLoading])

  return (
    <div
      id='list-stories'
      className='list-stories flex flex-col items-start md:space-y-[2.62rem]'
    >
      <CardMain singlePost={dataBlogClient?.length > 0 ? dataMainCard : listPost?.[0]} />
      {!loading ? (
        <div className='grid grid-cols-2 xmd:grid-cols-1 xmd:gap-y-[1rem] gap-y-[2.12rem] gap-x-[1.45rem]'>
          {(dataBlogClient?.length > 0 ? dataBlogClient : listPost)?.map(
            (d, i) => (
              <div key={i}>
                <CardBlog singlePost={d} />
              </div>
            ),
          )}
        </div>
      ) : (
        <div className='grid grid-cols-2 xmd:grid-cols-1 xmd:gap-y-[1rem] gap-y-[2.12rem] gap-x-[1.45rem]'>
          {new Array(8).fill(0).map((d, i) => (
            <Skeleton
              className='rounded-2xl  xmd:w-[21.4375rem] xmd:h-[15.3125rem] w-[44.25rem] h-[25.8125rem]'
              key={i}
            />
          ))}
        </div>
      )}
      <PaginationCustom
        pagination={
          paginationClient && Object.keys(paginationClient).length === 0
            ? pagination
            : paginationClient
        }
        href={'#list-stories'}
      />
    </div>
  )
}

export default ListStories
