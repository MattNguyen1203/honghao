import QuestionCard from '@/components/question-card/QuestionCard'
import SectionHeading from '@/sections/common/heading/SectionHeading'
import Image from 'next/image'

export default function QuestionLookHere({data}) {
  return (
    <section className='relative pt-8 md:pt-[2.94rem] mb-12 md:mb-[4.5rem]'>
      <Image
        src={'/imgs/faq/question-section/background-deco.png'}
        alt='background deco'
        className='absolute top-0 left-0 w-full h-[42.9rem]  -z-10 hidden md:block'
        width={1920}
        height={1080}
      />
    <div className='kKao4-container relative '>
      <div className='mb-[1.12rem] md:mb-14'>
        <SectionHeading
          h5='FAQS'
          h2={data.heading}
        />
      </div>
      <div className='mb-[1.56rem] md:mb-12'>
        <p className='md:w-[38.8125rem] text-greyscale-40 font-tripsans text-0.875 md:text-1 font-bold leading-1.5 xmd:tracking-0.00219'>
          {data.description}
        </p>
      </div>
      <div className='overflow-x-auto xmd:-mx-4 no-scrollbar '>
        <div className='grid grid-cols-4 gap-4 md:gap-[1.12rem] min-w-max xmd:pl-4'>
          {data.questions.map((item, i) => {
            return (
              <QuestionCard
                key={i}
                title={item.title}
                content={item.content}
              />
            )
          })}
        </div>
      </div>

    </div>
    </section>

  )
}
