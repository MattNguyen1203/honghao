import {Button} from '@/components/ui/button'
import Image from 'next/image'
import TeamSlide from './TeamSlide'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

export default function OurTeam() {
  return (
    <section>
      <div className='w-[25.0625rem] space-y-[2.12rem]'>
        <div className='text-1125 uppercase font-bold text-greyscale-80/40'>
          HONG HAO TRAVEL
        </div>
        <h2 className='uppercase !mt-[0.75rem]'>OUR TEAM</h2>
        <p className='text-1 tracking-[0.005rem] text-greyscale-40'>
          We pride ourselves on having a team of dedicated and passionate
          individuals who are committed to providing exceptional service and
          unforgettable experiences to our guests. Our team is comprised of
          knowledgeable professionals with diverse backgrounds and expertise in
          various aspects of the tourism industry.
        </p>

        <div className='flex flex-start space-x-[1rem] '>
          <Button
            className=''
            variant='hover'
          >
            <span className='uppercase text-0875'> book now</span>
            <div className='ml-[0.5rem]'>
              <Image
                src='/imgs/ICArrowHover.svg'
                alt='icon'
                width={12}
                height={12}
                className='size-[0.75rem] flex'
              />
            </div>
          </Button>
          <Button className='group'>
            <span className='uppercase text-0875'> All Tour</span>
            <div className='ml-[0.5rem]'>
              <Image
                src='/imgs/ICArrow.svg'
                alt='icon'
                width={12}
                height={12}
                className='size-[0.75rem] group-hover:hidden flex'
              />

              <Image
                src='/imgs/ICArrowHover.svg'
                alt='icon'
                width={12}
                height={12}
                className='size-[0.75rem] group-hover:flex hidden'
              />
            </div>
          </Button>
        </div>
      </div>

      <Tabs
        defaultValue='guide'
        className='w-fit'
      >
        <TabsList className='w-fit'>
          <TabsTrigger
            value='guide'
            className='uppercase text-0875 font-bold text-greyscale-10 data-[state=active]:text-orange-normal'
          >
            TOUR GUIDE
          </TabsTrigger>
          <TabsTrigger
            value='rider'
            className='uppercase text-0875 font-bold text-greyscale-10 data-[state=active]:text-orange-normal'
          >
            rider team
          </TabsTrigger>
        </TabsList>
        <TabsContent value='guide'>
          <TeamSlide />
        </TabsContent>
        <TabsContent value='rider'>
          <TeamSlide />
        </TabsContent>
      </Tabs>
    </section>
  )
}
