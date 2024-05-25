import React from 'react'
import Banner from './Banner'
import StoriesBlog from './StoriesBlog'
import StartPlanning from './StartPlanning'
import Breadcrumb from '@/components/breadcrumb'
import './blog.css'
const Blog = () => {
  return (
    <main className='blog'>
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
    </main>
  )
}

export default Blog
