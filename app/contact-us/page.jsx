import Banner from '@/sections/common/banner'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'

export default function ContactUsPage() {
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
      
    </main>
  )
}
