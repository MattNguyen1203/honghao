import Faq from '@/sections/faq'
import {fetchMetaData} from '@/lib/fetchMetadata'
import {getMeta} from '@/lib/getMeta'

export async function generateMetadata() {
  const result = await fetchMetaData('faq/')
  return getMeta(result, '/faq')
}

export default function Page() {
  return <Faq />
}
