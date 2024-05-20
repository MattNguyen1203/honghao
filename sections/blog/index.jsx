import React from 'react'
import Banner from './Banner'
import StoriesBlog from './StoriesBlog'
import StartPlanning from './StartPlanning'
import Breadcrumb from '@/components/breadcrumb'
import './blog.css'
const Blog = () => {
  return (
    <div className='blog'>
      <section>
        <Banner />
      </section>
      <section className='xmd:hidden'>
        <Breadcrumb divider />
      </section>
      <section>
        <StoriesBlog />
      </section>
      <section>
        <StartPlanning />
      </section>
    </div>
  )
}

export default Blog
