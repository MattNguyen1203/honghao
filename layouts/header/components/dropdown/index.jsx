import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {cn} from '@/lib/utils'
import ICArrow from '@/components/icons/ICArrow'
import ICArrowDown from '@/components/icons/ICArrowDown'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Scrollbar} from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import ItemTour from '@/components/itemtour'
import useClickOutSide from '@/hooks/useClickOutside'
import useStore from '@/app/(store)/store'

const dataHeader = [
  {
    label: 'Home',
    link: '/',
    img: '/imgs/nav/bg.jpg',
    key: 'home',
  },
  {
    label: 'About Us',
    link: '/about-us',
    img: '/imgs/nav/bg.jpg',
    key: 'aboutus',
  },
  {
    label: 'Tours',
    link: '/tours',
    key: 'tours',
    children: [
      {
        label: 'Best Budget',
        link: '/tours',
      },
      {
        label: 'Standard',
        link: '/tours',
      },
      {
        label: 'Premium',
        link: '/tours',
      },
      {
        label: 'All Tours',
        link: '/tours',
      },
    ],
  },
  {
    label: 'Activity',
    link: '/activity',
    img: '/imgs/nav/bg.jpg',
    key: 'activity',
  },
  {
    label: 'Destination',
    link: '/destination',
    img: '/imgs/nav/bg.jpg',
    key: 'destination',
  },
  {
    label: 'Blog',
    link: '/blog',
    img: '/imgs/nav/bg.jpg',
    key: 'blog',
  },
  {
    label: 'FAQ',
    link: '/faq',
    img: '/imgs/nav/bg.jpg',
    key: 'faq',
  },
  {
    label: 'Contact',
    link: '/contact',
    img: '/imgs/nav/bg.jpg',
    key: 'contact',
  },
]

const NavDropdown = ({openNav, setOpenNav}) => {
  const [openChild, setOpenChild] = useState(false)
  const [activeKey, setActiveKey] = useState('home')
  const [sideRef, isOutSide, isClick] = useClickOutSide(false)

  const isMobile = useStore((state) => state.isMobile)
  const handleHover = (key) => {
    setActiveKey(key)
  }
  useEffect(() => {
    if (isOutSide) {
      setOpenNav(false)
    }
  }, [isOutSide, isClick])

  const handleClose = () => {
    setOpenNav(false)
    setOpenChild(false)
  }

  return (
    <div
      className={cn(
        'flex w-full h-[40.125rem] xmd:h-screen overflow-hidden bg-green-dark rounded-b-[1.5rem] xmd:rounded-none fixed top-0 left-0 z-[1000] -translate-y-[100%] transition-all duration-1000',
        openNav && 'translate-y-0',
      )}
      ref={sideRef}
    >
      <div className='absolute top-0 left-0 size-full bg-[rgba(66,96,72,0.9)] z-[1]'></div>
      <div className='absolute top-0 left-0 size-full bg-[linear-gradient(180deg,#122718_0%,rgba(18,39,24,0.00)_35%,rgba(18,39,24,0)_70%,#122718_100%)] z-[1]'></div>
      <Image
        src='/imgs/nav/bg.jpg'
        alt='Honghao Travel'
        width={1600}
        height={1600}
        className='w-full h-full object-cover absolute top-0 left-0'
      />
      <Image
        src='/imgs/nav/close.svg'
        alt='hong hao travel'
        width={100}
        height={100}
        className='absolute top-[1.5rem] xmd:top-[3.38rem] right-[2.25rem] xmd:right-[1.25rem] size-[3.25rem] xmd:size-[2.75rem] object-contain z-[100] cursor-pointer'
        onClick={() => setOpenNav(false)}
      />

      <Image
        src='/imgs/common/logo.png'
        alt='hong hao travel'
        width={200}
        height={200}
        className='absolute top-[1.5rem] xmd:top-[3.38rem] left-[5rem] xmd:left-[1.25rem] w-[7.5625rem] h-[3.375rem] object-contain z-10'
      />

      <div className='mt-[8.31rem] w-[51rem] xmd:w-full relative z-[10] pl-[5rem] py-[1.5rem] xmd:px-[1.25rem] overflow-y-scroll no-scrollbar'>
        <div className=' flex flex-col h-max w-[22.5rem] xmd:w-full text-2 xmd:text-15 font-bold text-greyscale-0 capitalize *:border-b *:border-solid *:border-greyscale-0/20 *:py-[0.75rem]'>
          {dataHeader?.map((item, index) => {
            const children = item?.children
            const isTour = item.label === 'Tours'
            return (
              <div
                className='overflow-hidden'
                onMouseOver={() => handleHover(item?.key)}
              >
                {isTour ? (
                  <div
                    key={index}
                    onClick={() => setOpenChild((prev) => !prev)}
                    className={cn(
                      'cursor-pointer flex items-center relative ',
                      !openChild && 'group',
                    )}
                  >
                    <ICArrow
                      color={openChild ? '#CF4124' : '#fff'}
                      className={cn(
                        'absolute top-1/2 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                        openChild && 'opacity-100',
                      )}
                    />
                    <span
                      className={cn(
                        'group-hover:translate-x-[1rem] duration-500',
                        openChild &&
                          'text-[#CF4124] translate-x-[1rem] mr-[1rem]',
                      )}
                    >
                      {item.label}
                    </span>
                    <ICArrowDown
                      color={openChild ? '#CF4124' : '#fff'}
                      className='size-[1.5rem] group-hover:opacity-0'
                    />
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    key={index}
                    className='flex items-center relative group'
                    onClick={handleClose}
                  >
                    <ICArrow
                      color={'#fff'}
                      className='absolute top-1/2 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                    />
                    <span className='group-hover:translate-x-[1rem] duration-500'>
                      {item.label}
                    </span>
                  </Link>
                )}

                {children && (
                  <div
                    className={cn(
                      'flex flex-col text-125 xmd:text-1 font-medium opacity-80 h-0 transition-all duration-500',
                      openChild ? 'h-[15rem]' : 'h-0',
                    )}
                  >
                    {children?.map((subItem, subIndex) => (
                      <Link
                        href={subItem?.link}
                        key={subIndex}
                        className={cn(
                          'py-[0.5rem] pr-[1rem] w-fit mt-[1rem]',
                          subIndex !== children?.length - 1 &&
                            'border-b border-solid border-greyscale-0/20',
                        )}
                        onClick={handleClose}
                      >
                        {subItem?.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {!isMobile && (
        <div className='w-[51rem] ml-auto h-full relative z-10'>
          {activeKey !== 'tours' && (
            <div className='w-full h-full'>
              {dataHeader?.map((item, index) => {
                if (!item?.img) return
                return (
                  <Image
                    src={item?.img}
                    alt='hong hao travel'
                    width={1000}
                    height={900}
                    key={index}
                    className={cn(
                      'absolute top-0 right-0 size-full object-cover opacity-0 transition-all duration-500',
                      activeKey === item?.key && 'opacity-100',
                    )}
                  />
                )
              })}
            </div>
          )}

          <div className='w-full h-full flex flex-col justify-center z-10'>
            <div className='text-15 text-greyscale-0 font-bold mb-[1.91rem]'>
              Find your tour:
            </div>
            <Swiper
              scrollbar={{hide: true}}
              slidesPerView={2.2}
              spaceBetween={16}
              modules={[Scrollbar]}
              className='nav-slide w-full h-[28rem]'
            >
              {new Array(5).fill(0).map((item) => (
                <SwiperSlide className='select-none max-w-full'>
                  <ItemTour className='h-[26rem]' />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavDropdown
