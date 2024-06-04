import BlogDetail from '@/sections/blog-detail'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'
import getData from '@/lib/getData'
import {PAGE_BLOG_ID} from '@/lib/constants'
export async function generateMetadata({params: {slug}}) {
  const result = await fetchMetaData(`${slug?.[0]}/`)
  return getMeta(result, `/${slug?.[0]}`)
}

export async function generateStaticParams() {
  const dataDetailPost = await getData(
    `wp-json/okhub/v1/get-list-cat-and-first-posts?page=1&per_page=100`,
  )

  return dataDetailPost?.posts?.map((post) => ({
    slug: [post?.post_slug],
  }))
}

const page = async ({params}) => {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${PAGE_BLOG_ID}`)
  const dataDetailPost = await getData(
    `wp-json/okhub/v1/get-post-detail-by-slug/${params?.slug?.[0]}`,
  )

  return (
    <BlogDetail
      slugCompare={params?.slug?.[0]}
      data={dataAcf}
      dataDetailPost={dataDetailPost}
    />
  )
}

export default page
