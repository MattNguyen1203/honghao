import Banner from './Banner'
import Commit from './Commit'
import './about.css'
import OurTeam from '@/layouts/team'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import Aos from '@/components/Aos'
export default function About({ data }) {
  const dataBanner = data?.acf?.banner
  const dataBannerMobi = data?.acf?.['banner-mobi']
  const dataCommit = data?.acf?.ethicalcommitments
  return (
    <Aos className='about'>
      <Banner
        dataBanner={dataBanner}
        dataBannerMobi={dataBannerMobi}
      />
      <div className=''>
        <Breadcrumb divider>
          <BreadcrumbLink href='/about-us'>About us</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <Commit dataCommit={dataCommit} />
      <OurTeam />
    </Aos>
  )
}
