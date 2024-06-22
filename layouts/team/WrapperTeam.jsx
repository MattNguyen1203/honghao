"use client"
import { Button } from '@/components/customCn/button'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import TeamSlide from './TeamSlide'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import './team.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { cn } from '@/lib/utils'

export default async function OurTeamChild({ darkTheme, dataTeam, btnHome = false }) {
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
    <section className='flex items-center justify-between w-full'>
      <div className='team subContainer flex pl-0 ml-auto xmd:pl-0 xmd:mt-[3rem] mt-[3.75rem] bg-transparent xmd:flex-col justify-between xmd:space-y-[3rem] items-start overflow-hidden'>
        <div className='md:flex md:flex-col md:w-[25.0625rem] xmd:mx-[1rem] space-y-[2.12rem] tablet:space-y-[4rem] tablet:pl-[4rem] tablet:w-max'>
          <div
            data-aos="fade-up"
            data-aos-duration="550"
            className={cn(
              'font-bold uppercase text-1125 text-greyscale-80/40 tablet:text-175',
              {
                'text-greyscale-0 opacity-40': darkTheme,
              },
            )}
          >
            HONG HAO TRAVEL
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration="550"
            className={cn(
              'uppercase !mt-[0.75rem] xmd:!text-[2.5rem] xmd:pb-[3rem]',
              darkTheme && 'text-greyscale-0',
            )}
          >
            {dataTeam?.heading}
          </h2>
          <span
            data-aos="fade-up"
            data-aos-duration="550"
            dangerouslySetInnerHTML={{ __html: dataTeam?.content }}
            className={cn(
              ' relative *:text-[0.875rem] xmd:text-[0.875rem] z-50 tracking-[0.005rem] text-greyscale-40 tablet:text-15',
              darkTheme && 'text-greyscale-5/50',
            )}
          ></span>

          <div
            data-aos="fade-up"
            data-aos-duration="550"
            className='flex flex-start space-x-[1rem] '>
            <Button
              icon
              className='!flex-1 tablet:!w-1/2 !w-max shrink-0'
            >
              <Link href='/about-us'> About Us</Link>
            </Button>
            <Button
              icon
              variant={btnHome ? 'outline_white' : 'outline'}
              className='!flex-1 tablet:!w-1/2 !w-max shrink-0'
            >
              <Link
                className={`${btnHome && 'text-white'}`}
                href='/tours'
              >
                All tour
              </Link>
            </Button>
          </div>
        </div>

        <Tabs
          data-aos="fade-up"
          data-aos-duration="550"
          defaultValue='team-0'
          className='flex flex-col items-end justify-end w-fit'
        >
          <TabsList className='w-fit xmd:hidden md:!mr-[4rem] md:!mb-[1rem]'>
            {dataTeam?.list_team?.map((item, index) => (
              <TabsTrigger
                value={`team-${index}`}
                className={cn(
                  'uppercase flex flex-col items-start text-0875 font-bold text-greyscale-10 data-[state=active]:text-orange-normal',
                  {
                    '!bg-transparent': darkTheme,
                  },
                )}
              >
                {item?.title}
                <div className='h-[0.1rem] bg-orange-normal w-full mt-[0.4rem] rounded-full'></div>
              </TabsTrigger>
            ))}
          </TabsList>

          {dataTeam?.list_team?.map((item, index) => {
            return (
              <TabsContent
                value={`team-${index}`}
                key={index}
              >
                <TeamSlide
                  darkTheme={darkTheme}
                  data={item?.thanh_vien}
                />
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
