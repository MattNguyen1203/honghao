import Banner from '../common/banner'
import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import QuestionLookHere from './QuestionLookHere'
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions'
import './styles.css'

export default function Faq() {
  return (
    <main>
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
      <QuestionLookHere />
      <FrequentlyAskedQuestions />
    </main>
  )
}
