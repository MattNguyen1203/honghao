import Banner from '../common/banner'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import ContactUsSection from './ContactUsSection'
import GetInTouch from './GetInTouch'
import './styles.css'
import getData from '@/lib/getData'

const pageId = 178
const getContactUsData = async () => {
  return getData(`/pages/${pageId}`, 'acf')
}

export default async function ContactUs() {
  const data = (await getContactUsData()).acf
  return (
    <main>
      <section>
        <Banner
          mainImg={data.banner.background_image.url}
          mainTextMb={'/imgs/contact-us/banner-title-mb.png'}
          mainText={'/imgs/contact-us/banner-title.png'}
        />
      </section>
      <div className='md:mb-5'>
        <Breadcrumb divider>
          <BreadcrumbLink href='/contact-us'>Contact Us</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <ContactUsSection data={data.contact_us} />
      <GetInTouch data={data.get_in_touch} />
    </main>
  )
}
