import {Button} from '@/components/customCn/button'
import Image from 'next/image'
import Link from 'next/link'
import TeamSlide from './TeamSlide'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import './team.css'
import {cn} from '@/lib/utils'
import getData from '@/lib/getData'
import {GLOBAL_PAGE_ID} from '@/lib/constants'

export default async function OurTeam({darkTheme}) {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${GLOBAL_PAGE_ID}`)
  const dataTeam = dataAcf?.acf?.team
  return (
    <section className='flex items-center justify-between w-full'>
      <div className='team subContainer flex pl-0 ml-auto xmd:pl-0 xmd:mt-[3rem] mt-[3.75rem] bg-transparent xmd:flex-col justify-between md:space-x-[3.5rem] xmd:space-y-[3rem] items-start overflow-hidden'>
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
          <h2
            className={cn(
              'uppercase !mt-[0.75rem]',
              darkTheme && 'text-greyscale-0',
            )}
          >
            {dataTeam?.heading}
          </h2>
          <span
            dangerouslySetInnerHTML={{__html: dataTeam?.content}}
            className={cn(
              'relative text-[1rem] xmd:text-[0.875rem] z-50 tracking-[0.005rem] text-greyscale-40',
              darkTheme && 'text-greyscale-5/50',
            )}
          ></span>

          <div className='flex flex-start space-x-[1rem] '>
            <Button
              icon
              className='!flex-1 tablet:w-1/2 !w-max shrink-0'
            >
              <Link href='/tours/detail-abc'> BOOK NOW</Link>
            </Button>
            <Button
              icon
              variant='outline'
              className='!flex-1 tablet:w-1/2 !w-max shrink-0'
            >
              <Link href='/tours'>All tour</Link>
            </Button>
          </div>
        </div>

        <Tabs
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
