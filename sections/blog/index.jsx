import React from 'react'
import Banner from './Banner'
import StoriesBlog from './StoriesBlog'
import StartPlanning from './StartPlanning'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import './blog.css'
const Blog = ({ data, dataCategorisAndFirstpost, dataGetAllPostsByCategories }) => {

  const dataStartPlanning = data?.acf?.start_planning
  const dataBanner = data?.acf?.banner
  const dataBannerMobi = data?.acf?.['banner-mobi']
  return (
    <main className='blog'>
      <section>
        <Banner dataBanner={dataBanner} dataBannerMobi={dataBannerMobi} />
      </section>
      <section className='xmd:hidden'>
        <Breadcrumb divider>
          <BreadcrumbLink href='/blog'>Blog</BreadcrumbLink>
        </Breadcrumb>
      </section>
      <section>
        <StoriesBlog
          dataCategorisAndFirstpost={dataCategorisAndFirstpost}
          dataGetAllPostsByCategories={dataGetAllPostsByCategories} />
      </section>
      <section>
        <StartPlanning dataStartPlanning={dataStartPlanning} />
      </section>
    </main>
  )
}

export default Blog
