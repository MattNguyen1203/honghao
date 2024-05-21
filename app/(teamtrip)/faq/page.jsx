'use client'
// TODO: remove

import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import Banner from '@/sections/common/banner'
import Image from 'next/image'
import React, {useState} from 'react'
import {cn} from '@/lib/utils'
import QuestionLookHere from '@/sections/faq/QuestionLookHere'
import FrequentlyAskedQuestions from '@/sections/faq/FrequentlyAskedQuestions'

export default function page() {
  return (
    <div>
      <section>
        <Banner
          mainImg={'/imgs/faq/background-image.jpg'}
          mainTextMb={'/imgs/faq/banner-title-mb.png'}
          mainText={'/imgs/faq/banner-title.png'}
        />
      </section>
      <div className='md:mb-5'>
        <Breadcrumb divider>
          <BreadcrumbLink href='/faq'>FAQs</BreadcrumbLink>
        </Breadcrumb>
      </div>
      <div className='container'>
        <QuestionLookHere />
        <FrequentlyAskedQuestions />
      </div>
    </div>
  )
}
