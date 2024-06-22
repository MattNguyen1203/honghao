'use client'
import SlideInfinityText from '../SlideInfinity/SlideInfinityText'
import SlideInfinity from '../SlideInfinity/SlideInfinity'
import { Button } from '@/components/customCn/button'

export default function GladdestMomentRes() {
  if (typeof window !== 'undefined' && window?.innerWidth > 1024) return null
  return (
    <section className='w-full h-fit mt-[2rem]'>
      <div className='w-full h-fit space-y-[0.5rem] lg:hidden'>
        <SlideInfinityText />
        <SlideInfinity />
        <SlideInfinity type={true} />
      </div>
      <Button
        icon
        className='mt-[0.51rem] mb-[2.03rem] mx-auto md:mt-[1rem]'
      >
        <span>DISCOVERY</span>
      </Button>
    </section>
  )
}
