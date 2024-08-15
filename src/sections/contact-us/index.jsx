import Banner from '../common/banner'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import ContactUsSection from './ContactUsSection'
import GetInTouch from './GetInTouch'
import './styles.css'
import getData from '@/lib/getData'
import Aos from '@/components/Aos'

const pageId = 178
const getContactUsData = async () => {
  return getData(`/pages/${pageId}`, 'acf')
}

export default async function ContactUs() {
  const data = (await getContactUsData())?.acf
  return (
    <Aos>
      <section>
        <Banner
          mainImg={data.banner.background_image.url}
          mainTextMb={data.banner.text_image_mobile.url}
          mainText={data.banner.text_image.url}
        />
      </section>
      <div className='md:mb-5'>
        <Breadcrumb divider>
          <BreadcrumbLink href='/contact-us'>Contact Us</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <ContactUsSection data={data.contact_us} />
      <GetInTouch data={data.get_in_touch} />
    </Aos>
  )
}
