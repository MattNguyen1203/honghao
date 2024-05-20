import Image from 'next/image'
import Link from 'next/link'

const footerData = [
  {
    heading: 'CONTACT US',
    children: [
      {
        label: '+84 941556338',
        icon: '/imgs/footer/phone.svg',
        src: 'tel:+84 941556338',
      },
      {
        label: 'honghaotravel@gmail.com',
        icon: '/imgs/footer/mail.svg',
        src: 'mailto:honghaotravel@gmail.com',
      },
      {
        label: 'No. 10 Pham Hong Thai, Minh Khai Ward, City.  Ha Giang.',
        icon: '/imgs/footer/local.svg',
      },
      {
        label: 'honghaotravel.com.vn',
        icon: '/imgs/footer/web.svg',
      },
    ],
  },
  {
    heading: 'All Tour',
    children: [
      {
        label: 'Best Budget',
        icon: '/imgs/footer/tour.svg',
        src: '/tours',
      },
      {
        label: 'Standard Tour',
        icon: '/imgs/footer/tour.svg',
        src: '/tours',
      },
      {
        label: 'Premium Tour',
        icon: '/imgs/footer/tour.svg',
        src: '/tours',
      },
    ],
  },
]

const socialIcon = [
  {
    img: '/imgs/footer/trip.svg',
    src: '',
  },
  {
    img: '/imgs/footer/tiktok.svg',
    src: '',
  },
  {
    img: '/imgs/footer/insta.svg',
    src: '',
  },
  {
    img: '/imgs/footer/facebook.svg',
    src: '',
  },
  {
    img: '/imgs/footer/youtube.svg',
    src: '',
  },
]
export default function Footer() {
  return (
    <footer className='overflow-hidden mt-[3.69rem] h-auto bg-greyscale-0 relative before:size-full before:absolute before:top-0 before:left-0 before:bg-[linear-gradient(180deg,rgba(255,255,255,0.93)_0%,#FFF_37.97%,#FFF_98.21%)] before:z-10 before:opacity-85'>
      <Image
        src='/imgs/footer/footerBg.png'
        alt='hong hao travel'
        width={2000}
        height={1000}
        className='w-full h-full object-contain absolute top-0 left-0'
      />
      <div className='container'>
        <div className='w-[59.6875rem] xmd:w-full h-full relative z-20'>
          <Image
            src='/imgs/footer/logoBlack.png'
            alt='Hồng Hào travel'
            width={200}
            height={200}
            className='w-[13.875rem] h-[4.875rem] object-contain xmd:w-[7.8845rem] xmd:h-[2.772rem] ml-[-0.75rem] mb-[2.81rem]'
          />
          <div className='flex mb-[2.44rem] xmd:flex-col-reverse'>
            {footerData?.map((item, index) => (
              <div
                key={index}
                className='w-max xmd:w-full first:mr-[7.5rem] xmd:first:mr-0 xmd:last:mb-[3rem]'
              >
                <div className='text-1 text-greyscale-80 font-bold tracking-[0.0125rem] mb-[1rem] uppercase'>
                  {item.heading}
                </div>

                <ul>
                  {item?.children?.map((child, childIndex) => {
                    return (
                      <li
                        key={childIndex}
                        className='relative flex items-center mb-[1rem]'
                      >
                        {child.src && (
                          <Link
                            href={child.src}
                            className='flex w-full h-full absolute top-0 left-0'
                          />
                        )}

                        <Image
                          src={child.icon}
                          alt='hong hao travel'
                          width={20}
                          height={20}
                          className='size-[1rem] object-contain mr-[0.5rem]'
                        />
                        <span className='text-1 tracking-[0.0125rem] text-greyscale-40 xmd:text-greyscale-80 xmd:font-medium'>
                          {child.label}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <div className='text-1 text-greyscale-80 font-bold tracking-[0.0125rem] mb-[1rem] uppercase'>
              FOLLOW US
            </div>

            <div className='flex items-center'>
              {socialIcon?.map((item, index) => {
                return (
                  <Link
                    href='/'
                    key={index}
                  >
                    <Image
                      src={item?.img}
                      alt='hong hao travel'
                      width={100}
                      height={100}
                      className='size-[1.5rem] object-contain mr-[1rem]'
                    />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-[80.1875rem] xmd:w-[40rem] h-auto absolute top-0 xmd:top-[4rem] right-0 z-20 xmd:z-10'>
        <Image
          src='/imgs/footer/subBg.png'
          alt='hong hao travel'
          width={2000}
          height={1000}
          className='w-full h-full object-cover'
        />
      </div>

      <div className='mt-[10rem] xmd:mt-[2.81rem] container flex py-[0.94rem] justify-center text-0875 font-medium tracking-[0.00875rem] text-greyscale-20 border-t border-solid border-greyscale-10 relative z-20'>
        © DESIGNED BY OKHUB AGENCY
      </div>
    </footer>
  )
}
