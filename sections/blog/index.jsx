import React from 'react'
import Banner from './Banner'
import StoriesBlog from './StoriesBlog'
import StartPlanning from './StartPlanning'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import './blog.css'
import Aos from '@/components/Aos'
const Blog = ({
  data,
  dataCategorisAndFirstpost,
  dataGetAllPostsByCategories,
  dataCommon,
}) => {
  const dataStartPlanning = data?.acf?.start_planning
  const dataBanner = data?.acf?.banner
  const dataBannerMobi = data?.acf?.['banner-mobi']
  return (
    <Aos>
      <section>
        <Banner
          dataBanner={dataBanner}
          dataBannerMobi={dataBannerMobi}
        />
      </section>
      <section className='xmd:hidden'>
        <Breadcrumb divider>
          <BreadcrumbLink href='/blog'>Blog</BreadcrumbLink>
        </Breadcrumb>
      </section>
      <section>
        <StoriesBlog
          dataCategorisAndFirstpost={dataCategorisAndFirstpost}
          dataGetAllPostsByCategories={dataGetAllPostsByCategories}
        />
      </section>
      <section>
        <StartPlanning
          dataCommon={dataCommon}
          dataStartPlanning={dataStartPlanning}
        />
      </section>
    </Aos>
  )
}

export default Blog
