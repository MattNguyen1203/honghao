import BlogDetail from '@/sections/blog-detail'
import { fetchMetaData } from '@/lib/fetchMetadata'
import { getMeta } from '@/lib/getMeta'
import getData from '@/lib/getData'
import { PAGE_BLOG_ID } from '@/lib/constants'
export async function generateMetadata(params) {
  const result = await fetchMetaData(`${params?.params?.slug?.[0]}/`)
  return getMeta(result, `/${params?.params?.slug?.[0]}`)
}

const page = async ({ params }) => {
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
