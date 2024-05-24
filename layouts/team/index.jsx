import {Button} from '@/components/customCn/button'
import Image from 'next/image'
import TeamSlide from './TeamSlide'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import './team.css'
import {cn} from '@/lib/utils'

export default function OurTeam({
  backgroundImage,
  backgroundImageMobile,
  darkTheme,
  forHomePage,
}) {
  return (
    <section
      className={cn('relative flex items-center justify-center', {
        'pb-[3.5rem] md:pb-[13.5rem]': forHomePage,
      })}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt='our team'
            width={1920}
            height={1080}
            className='absolute top-0 left-0 hidden object-cover h-full md:block md:w-full'
          />
          <Image
            src={backgroundImageMobile}
            alt='our team'
            width={390}
            height={884}
            className='absolute top-0 left-0 object-cover w-full h-full'
          />
        </>
      )}
      <div className='team xl:container md:mx-auto flex xmd:mt-[3rem] mt-[3.75rem] bg-transparent xmd:flex-col justify-start md:space-x-[3.5rem] xmd:space-y-[3rem] items-start overflow-hidden z-10'>
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
            className={cn('uppercase !mt-[0.75rem]', {
              'text-greyscale-0 h2': darkTheme,
            })}
          >
            OUR TEAM
          </h2>
          <p
            className={cn('text-1 tracking-[0.005rem] text-greyscale-40', {
              'text-greyscale-5 opacity-50': darkTheme,
            })}
          >
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
              {forHomePage ? 'BOOK NOW' : 'Join with us'}
            </Button>
            <Button
              icon
              variant='outline'
              className='!flex-1 !w-max shrink-0'
            >
              {forHomePage ? 'CALL US' : 'All tour'}
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
