import Breadcrumb from '@/components/breadcrumb'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import Banner from '@/sections/common/banner'
import QuestionLookHere from '@/sections/faq/question-look-here/QuestionLookHere'
import FrequentlyAskedQuestions from '@/sections/faq/frequently-asked-question/FrequentlyAskedQuestions'

export default function FaqPage() {
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
