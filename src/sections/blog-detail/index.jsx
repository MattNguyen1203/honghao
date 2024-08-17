import React from 'react'
import Banner from './Banner'
import Breadcrumb from '@/components/breadcrumb'

import RelatedArticle from './RelatedArticle'
import Detail from './Detail'
import StartPlanning from '@/sections/blog/StartPlanning.jsx'
import './blogdetail.css'
import getData from '@/lib/getData'
const BlogDetail = async ({dataDetailPost, data, slugCompare, dataCommon}) => {
  const dataStartPlanning = data?.acf?.start_planning
  const dataRelate = await getData(
    `wp-json/okhub/v1/get-posts-by-category/1?cat_id=${dataDetailPost?.primary_category?.id}&page=1&posts_per_page=3`,
  )

  const dataRelateCompare = dataRelate?.posts?.filter(
    (d) => d?.post_slug !== slugCompare,
  )

  return (
    <main className='blog-detail'>
      <section>
        <Banner dataDetailPost={dataDetailPost} />
      </section>
      <section>
        <Detail dataDetailPost={dataDetailPost} />
      </section>
      <section>
        <StartPlanning
          dataCommon={dataCommon}
          dataStartPlanning={dataStartPlanning}
        />
      </section>

      <RelatedArticle
        dataRelate={
          dataRelateCompare?.length > 2
            ? dataRelate?.posts?.slice(2)
            : dataRelateCompare
        }
      />
    </main>
  )
}

export default BlogDetail
