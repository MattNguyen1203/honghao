import Banner from '../common/banner'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import ContactUsSection from './ContactUsSection'
import GetInTouch from './GetInTouch'

export default function ContactUs() {
  return (
    <main>
      <section>
        <Banner
          mainImg={'/imgs/contact-us/background-image.jpg'}
          mainTextMb={'/imgs/contact-us/banner-title-mb.png'}
          mainText={'/imgs/contact-us/banner-title.png'}
        />
      </section>
      <div className='md:mb-5'>
        <Breadcrumb divider>
          <BreadcrumbLink href='/contact-us'>Contact Us</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <ContactUsSection />
      <GetInTouch />
    </main>
  )
}
