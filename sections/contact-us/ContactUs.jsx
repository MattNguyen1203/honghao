import Image from 'next/image'
import SectionHeading from '../common/heading/SectionHeading'
import Link from 'next/link'

export default function ContactUs() {
  return (
    <section className='kKao4-container relative pt-8 md:pt-[2.94rem]'>
      <div className='flex flex-col items-start md:flex-row'>
        <div className='flex-none md:pr-24 md:basis-1/2'>
          <div className='mb-[1.12rem] md:mb-14'>
            <SectionHeading
              h5='HONG HAO TRAVEL'
              h2='CONTACT US'
            />
          </div>
          <p className='text-greyscale-40 font-tripsans text-1 font-bold leading-1.5 mb-6'>
            Experience the raw beauty of Hà Giang with our immersive travel
            adventures. From rugged mountain landscapes to vibrant ethnic
            cultures, Hà Giang offers a truly unique and authentic experience.
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
              <p className='text-greyscale-40 font-tripsans text-1 leading-1.2 tracking-[0.0125rem]'>
                +84 941556338
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
              <p className='text-greyscale-40 font-tripsans text-1 leading-1.2 tracking-[0.0125rem]'>
                honghaotravel@gmail.com
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
              <p className='text-greyscale-40 font-tripsans text-1 leading-1.2 tracking-[0.0125rem]'>
                No. 10 Pham Hong Thai, Minh Khai Ward, City. Ha Giang.
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
              <p className='text-greyscale-40 font-tripsans text-1 leading-1.2 tracking-[0.0125rem]'>
                honghaotravel.com.vn
              </p>
            </div>
          </div>
        </div>
        <div className='relative xmd:h-[35.25rem] flex-none xmd:-mx-4 md:basis-1/2 xmd:mt-12'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.4154471293386!2d104.9869549745339!3d22.824114223706495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36cc784c691466c1%3A0x9ec124689672e05!2zMTAgUGjhuqFtIEjhu5NuZyBUaMOhaSwgUC4gTWluaCBLaGFpLCBXYXJkLCBIw6AgR2lhbmcgMzEwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1716345562977!5m2!1sen!2s'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
            className='hidden md:block w-full aspect-[1.1732] h-[28rem] rounded-[2rem] border-none'
          ></iframe>
          <Image
            src={'/imgs/contact-us/bg-contact-us-mobile.jpg'}
            alt='background image'
            className='object-cover w-full h-full -z-10 md:hidden'
            width={390}
            height={844}
          />
          <div className='absolute top-0 left-0 w-full h-full bg-contact-us-gradient md:hidden' />
          <Link
            href='https://www.google.com/maps/place/10+Ph%E1%BA%A1m+H%E1%BB%93ng+Th%C3%A1i,+P.+Minh+Khai,+Ward,+H%C3%A0+Giang+31000,+Vietnam/@22.8241142,104.986955,17z/data=!3m1!4b1!4m6!3m5!1s0x36cc784c691466c1:0x9ec124689672e05!8m2!3d22.8241093!4d104.9895299!16s%2Fg%2F11jzsdqjx0?entry=ttu'
            target='_blank'
            className='absolute top-[1.74rem] left-[1.38rem] py-3 h-12 flex justify-center items-center px-6 rounded-[0.5rem] backdrop-blur-[10px] text-orange-normal text-center font-tripsans text-0.875 font-extrabold leading-1.2 uppercase z-10 md:hidden'
            style={{background: 'rgba(255, 255, 255, 0.20)'}}
          >
            GOOGLE MAP
          </Link>
        </div>
      </div>
    </section>
  )
}
