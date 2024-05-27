import BlogDetail from '@/sections/blog-detail'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

export async function generateMetadata(params) {
  const result = await fetchMetaData(`${params.slug}/`)
  return getMeta(result, `/${params.slug}`)
}

const page = () => {
  return <BlogDetail />
}

export default page
