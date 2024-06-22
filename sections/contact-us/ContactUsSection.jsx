"use client"
import Image from 'next/image'
import { useEffect } from 'react'
import SectionHeading from '../common/heading/SectionHeading'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function ContactUsSection({ data }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: function () {
        var maxWidth = 769
        return window.innerWidth < maxWidth
      }
    })
    AOS.refresh()
  }, [])

  return (
    <section className='kKao4-container relative pt-8 md:pt-[2.94rem]'>
      <div className='flex flex-col items-start md:flex-row'>
        <div data-aos="fade-up"
          data-aos-duration="550" className='flex-none md:pr-24 md:basis-1/2'>
          <div className='mb-[1.12rem] md:mb-14'>
            <SectionHeading
              h5={data.heading}
              h2='CONTACT US'
            />
          </div>
          <p className='text-greyscale-40 font-tripsans text-1 font-bold leading-1.5 mb-6'>
            {data.description}
          </p>
          <div className='grid grid-cols-1 gap-4'>
            <div className='flex flex-row items-start space-x-2'>
              <Image
                src={'/imgs/contact-us/phone.svg'}
                alt='tel'
                className='mt-px size-4'
                width={120}
                height={120}
              />
              <p className='text-greyscale-40 font-tripsans text-1 leading-1.2 tracking-0.0125'>
                {data.tel}
              </p>
            </div>
            <div className='flex flex-row items-start space-x-2'>
              <Image
                src={'/imgs/contact-us/email.svg'}
                alt='email'
                className='mt-px size-4'
                width={120}
                height={120}
              />
              <p className='text-greyscale-40 font-tripsans text-1 leading-1.2 tracking-0.0125'>
                {data.email}
              </p>
            </div>
            <div className='flex flex-row items-start space-x-2'>
              <Image
                src={'/imgs/contact-us/house.svg'}
                alt='location'
                className='mt-px size-4'
                width={120}
                height={120}
              />
              <p className='text-greyscale-40 font-tripsans text-1 leading-1.2 tracking-0.0125'>
                {data.location}
              </p>
            </div>
            <div className='flex flex-row items-start space-x-2'>
              <Image
                src={'/imgs/contact-us/earth.svg'}
                alt='location'
                className='mt-px size-4'
                width={120}
                height={120}
              />
              <p className='text-greyscale-40 font-tripsans text-1 leading-1.2 tracking-0.0125'>
                {data.website}
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up"
          data-aos-duration="550" className='relative xmd:h-[35.25rem] flex-none xmd:-mx-4 md:basis-1/2 xmd:mt-12'>
          <div
            className='map-container'
            dangerouslySetInnerHTML={{ __html: data.google_map }}
          />
          <Image
            src={'/imgs/contact-us/bg-contact-us-mobile.jpg'}
            alt='background image'
            className='object-cover w-full h-full -z-10 md:hidden'
            width={390}
            height={844}
          />
          <div className='absolute top-0 left-0 w-full h-full bg-contact-us-gradient md:hidden !rounded-[2rem] xmd:!rounded-none xmd:translate-y-[0.25rem]' />
          <Link
            href='https://www.google.com/maps/place/10+Ph%E1%BA%A1m+H%E1%BB%93ng+Th%C3%A1i,+P.+Minh+Khai,+Ward,+H%C3%A0+Giang+31000,+Vietnam/@22.8241142,104.986955,17z/data=!3m1!4b1!4m6!3m5!1s0x36cc784c691466c1:0x9ec124689672e05!8m2!3d22.8241093!4d104.9895299!16s%2Fg%2F11jzsdqjx0?entry=ttu'
            target='_blank'
            className='absolute top-[1.74rem] overflow-hidden left-[1.38rem] py-3 h-12 flex justify-center items-center px-6 !rounded-[2rem] backdrop-blur-[10px] text-orange-normal text-center font-tripsans text-0.875 font-extrabold leading-1.2 uppercase z-10 md:hidden'
            style={{ background: 'rgba(255, 255, 255, 0.20)' }}
          >
            GOOGLE MAP
          </Link>
        </div>
      </div>
    </section>
  )
}
