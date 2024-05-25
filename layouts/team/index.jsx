import {Button} from '@/components/customCn/button'
import Image from 'next/image'
import Link from 'next/link'
import TeamSlide from './TeamSlide'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import './team.css'
import {cn} from '@/lib/utils'

export default function OurTeam({darkTheme}) {
  return (
    <section className='flex items-center justify-between w-full'>
      <div className='team w-full flex pl-[5rem] xmd:pl-0 xmd:mt-[3rem] mt-[3.75rem] bg-transparent xmd:flex-col justify-between md:space-x-[3.5rem] xmd:space-y-[3rem] items-start overflow-hidden'>
        <div className='md:w-[25.0625rem] xmd:mx-[1rem] space-y-[2.12rem]'>
          <div
            className={cn(
              'font-bold uppercase text-1125 text-greyscale-80/40',
              {
                'text-greyscale-0 opacity-40': darkTheme,
              },
            )}
          >
            HONG HAO TRAVEL
          </div>
          <h2 className='uppercase !mt-[0.75rem]'>OUR TEAM</h2>
          <p className='text-1 z-[1000] tracking-[0.005rem] text-greyscale-40'>
            We pride ourselves on having a team of dedicated and passionate
            individuals who are committed to providing exceptional service and
            unforgettable experiences to our guests. Our team is comprised of
            knowledgeable professionals with diverse backgrounds and expertise
            in various aspects of the tourism industry.
          </p>

          <div className='flex flex-start space-x-[1rem] '>
            <Button
              icon
              className='!flex-1 !w-max shrink-0'
            >
              <Link href='/tours/detail-abc'> BOOK NOW</Link>
            </Button>
            <Button
              icon
              variant='outline'
              className='!flex-1 !w-max shrink-0'
            >
              <Link href='/tours'>All tour</Link>
            </Button>
          </div>
        </div>

        <Tabs
          defaultValue='guide'
          className='flex flex-col items-end justify-end w-fit'
        >
          <TabsList className='w-fit xmd:hidden md:!mr-[4rem] md:!mb-[1rem]'>
            <TabsTrigger
              value='guide'
              className={cn(
                'uppercase flex flex-col items-start text-0875 font-bold text-greyscale-10 data-[state=active]:text-orange-normal',
                {
                  '!bg-transparent': darkTheme,
                },
              )}
            >
              TOUR GUIDE
              <div className='h-[0.1rem] bg-orange-normal w-full mt-[0.4rem] rounded-full'></div>
            </TabsTrigger>
            <TabsTrigger
              value='rider'
              className={cn(
                'uppercase flex flex-col items-start text-0875 font-bold text-greyscale-10 data-[state=active]:text-orange-normal',
                {
                  '!bg-transparent': darkTheme,
                },
              )}
            >
              rider team
              <div className='h-[0.1rem] bg-orange-normal w-full mt-[0.4rem] rounded-full'></div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value='guide'>
            <TeamSlide darkTheme={darkTheme} />
          </TabsContent>
          <TabsContent value='rider'>
            <TeamSlide darkTheme={darkTheme} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
