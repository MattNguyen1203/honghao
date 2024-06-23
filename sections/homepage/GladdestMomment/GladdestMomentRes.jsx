'use client'
import SlideInfinityText from '../SlideInfinity/SlideInfinityText'
import SlideInfinity from '../SlideInfinity/SlideInfinity'
import { Button } from '@/components/customCn/button'
import Link from 'next/link'
export default function GladdestMomentRes() {
  if (typeof window !== 'undefined' && window?.innerWidth > 1024) return null
  return (
    <section className='w-full h-fit mt-[2rem]'>
      <div className='w-full h-fit space-y-[0.5rem] lg:hidden'>
        <SlideInfinityText />
        <SlideInfinity />
        <SlideInfinity type={true} />
      </div>
      <Link href={'/activity'}>
        <Button

          icon
          className='mt-[0.51rem] mb-[2.03rem] mx-auto md:mt-[1rem]'
        >
          <span>DISCOVERY</span>
        </Button>
      </Link>
    </section>
  )
}
