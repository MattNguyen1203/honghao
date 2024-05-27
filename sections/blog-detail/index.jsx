import React from 'react'
import Banner from './Banner'
import Breadcrumb from '@/components/breadcrumb'

import RelatedArticle from './RelatedArticle'
import Detail from './Detail';
import StartPlanning from '@/sections/blog/StartPlanning.jsx';
import './blogdetail.css'
const BlogDetail = ({ dataDetailPost }) => {
  return (
    <main className='blog-detail'>
      <section>
        <Banner />
      </section>
      <section className='xmd:hidden'>
        <Breadcrumb divider />
      </section>
      <section>
        <Detail dataDetailPost={dataDetailPost} />
      </section>
      <section>
        <StartPlanning />
      </section>
      <section>
        <RelatedArticle />
      </section>
    </main>
  )
}

export default BlogDetail
