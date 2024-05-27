import Image from 'next/image'
import CardBlog from './CardBlog'
import PaginationCustom from '@/components/paginationcustom'
import useSWR from 'swr'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import useStore from '@/app/(store)/store'
import { usePathname, useSearchParams } from 'next/navigation'
import { Skeleton } from "@/components/ui/skeleton"

const CardMain = () => {
  return (
    <Link href='/van-la-bo-ne'>
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
    </Link>
  )
}
const ListStories = ({ dataGetAllPostsByCategories, currentCategories }) => {
  const listPost = dataGetAllPostsByCategories?.posts
  const pagination = dataGetAllPostsByCategories?.pagination
  const pathname = usePathname()
  const searchParams = useSearchParams();
  const search = searchParams.get('page')
  const [dataBlogClient, setDataBlogClient] = useState([])
  const [paginationClient, setPaginationClient] = useState({})
  const [loading, setLoading] = useState(false)
  const fetcher = url => fetch(url).then(r => r.json())
  const { data, error, isLoading } = useSWR(
    // shouldFetch ? (
    pathname !== '/blog'
      ? `${process.env.NEXT_PUBLIC_API}/wp-json/okhub/v1/get-posts-by-category/1?cat_id=${currentCategories}&page=${search}&posts_per_page=2`
      : `${process.env.NEXT_PUBLIC_API}/wp-json/okhub/v1/get-list-cat-and-first-posts?page=${search}&per_page=4`
    // ) : null
    ,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  console.log({ paginationClient, search });

  useEffect(() => {
    setLoading(isLoading)
    if (data) {
      setPaginationClient(data?.pagination)
      setDataBlogClient(data?.posts);
    }
    if (error) {
      console.error('Error fetching data:', error);
    }
  }, [data, error, isLoading]);


  return (
    <div id='list-stories' className="flex flex-col items-start md:space-y-[2.62rem]">
      <CardMain />
      {!loading ? <div className="grid grid-cols-2 xmd:grid-cols-1 xmd:gap-y-[1rem] gap-y-[2.12rem] gap-x-[1.45rem]">
        {(dataBlogClient?.length > 0 ? dataBlogClient : listPost)?.map((d, i) => (
          <div key={i}>
            <CardBlog singlePost={d} />
          </div>
        ))}

      </div> :

        <div className="grid grid-cols-2 xmd:grid-cols-1 xmd:gap-y-[1rem] gap-y-[2.12rem] gap-x-[1.45rem]">
          {new Array(8).fill(0).map((d, i) => (

            <Skeleton className='rounded-2xl  xmd:w-[21.4375rem] xmd:h-[15.3125rem] w-[44.25rem] h-[25.8125rem]' key={i} />
          ))}

        </div>
      }
      <PaginationCustom pagination={paginationClient && Object.keys(paginationClient).length === 0 ? pagination : paginationClient} href={'#list-stories'} />
    </div>
  )
}

export default ListStories
