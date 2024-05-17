import React from 'react'
import Banner from './Banner'
import Breadcrumb from '@/components/breadcrumb'
import StartPlanning from './StartPlanning'
import RelatedArticle from './RelatedArticle'
import Detail from './Detail';

const BlogDetail = () => {
  return (
    <div className=''>
      <section>
        <Banner />
      </section>
      <section>
        <Breadcrumb divider />
      </section>
      <section>
        <Detail />
      </section>
      <section>
        <StartPlanning />
      </section>
      <section>
        <RelatedArticle />
      </section>
    </div>
  )
}

export default BlogDetail
