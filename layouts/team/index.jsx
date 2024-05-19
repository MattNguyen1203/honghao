import { Button } from '@/components/customCn/button'
import Image from 'next/image'
import TeamSlide from './TeamSlide'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import './team.css'
export default function OurTeam() {
  return (
    <section className='team flex xmd:mt-[3rem] mt-[3.75rem] bg-transparent xl:container xmd:flex-col justify-end md:space-x-[3.5rem] xmd:space-y-[3rem] items-start overflow-hidden'>
      <div className='container md:w-[25.0625rem] space-y-[2.12rem]'>
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

          <Button icon className='!flex-1 !w-max shrink-0' >BOOK NOW</Button>
          <Button icon variant='outline' className='!flex-1 !w-max shrink-0'>All tour</Button>
        </div>
      </div>

      <Tabs
        defaultValue='guide'
        className='w-fit flex justify-end flex-col items-end subContainer'
      >
        <TabsList className='w-fit xmd:hidden md:!mr-[4rem] md:!mb-[1rem]'>
          <TabsTrigger
            value='guide'
            className='uppercase flex  flex-col items-start text-0875 font-bold text-greyscale-10 data-[state=active]:text-orange-normal'
          >
            TOUR GUIDE
            <div className='h-[0.1rem] bg-orange-normal w-full mt-[0.4rem] rounded-full'></div>
          </TabsTrigger>
          <TabsTrigger
            value='rider'
            className='uppercase flex  flex-col items-start text-0875 font-bold text-greyscale-10 data-[state=active]:text-orange-normal'
          >
            rider team
            <div className='h-[0.1rem]  bg-orange-normal w-full mt-[0.4rem] rounded-full'></div>
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
