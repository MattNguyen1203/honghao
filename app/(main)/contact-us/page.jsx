import ContactUs from '@/sections/contact-us'
import { fetchMetaData } from '@/lib/fetchMetadata'
import { getMeta } from '@/lib/getMeta'

export async function generateMetadata() {
  const result = await fetchMetaData('contact-us/')
  return getMeta(result, '/contact-us')
}

export default function ContactUsPage() {
  return <ContactUs />
}
