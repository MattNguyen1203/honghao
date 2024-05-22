'use client'

import BikeAnimation from '@/components/bikeAnimate'
import BikeAnimationMb from '@/components/bikeAnimateMb'
import ContactForm from '@/components/contactForm/ContactForm'
import useStore from '@/app/(store)/store'

export default function GetInTouch() {
  const isMobile = useStore((state) => state.isMobile)
  return (
    <section>
      {!isMobile ? (
        <BikeAnimation>
          <ContactForm />
        </BikeAnimation>
      ) : (
        <BikeAnimationMb>
          <ContactForm />
        </BikeAnimationMb>
      )}
    </section>
  )
}
