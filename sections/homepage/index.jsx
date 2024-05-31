import ClientSay from './ClientSay'
import OurTeam from '@/layouts/team'
import Season from './Season'
import './styles.css'
import React from 'react'
import Banner from './Banner/Banner'
import About from './About/About'
import './homepage.css'

import Image from 'next/image'
import BestTrips from './BestTrips/BestTrips'
import GladdestMoment from './GladdestMomment/GladdestMoment'
import GladdestMomentRes from './GladdestMomment/GladdestMomentRes'

const Homepage = ({
  dataAcf,
  dataWeather,
  listTypeofTour,
  listTime,
  listTours,
  listBestTrip,
  commonData,
}) => {
  return (
    <main>
      <Banner
        dataBanner={dataAcf?.banner}
        listTypeofTour={listTypeofTour}
        listTime={listTime}
        listTours={listTours}
        commonData={commonData}
      />
      <About dataAbout={dataAcf} />
      <BestTrips listBestTrip={listBestTrip} />
      <GladdestMoment dataGallery={dataAcf?.moment} />
      <GladdestMomentRes dataGallery={dataAcf?.moment} />
      <ClientSay dataReview={dataAcf?.client_say} />
      <div className='flex relative pb-[14.5rem] xmd:pb-[6rem] bg-[linear-gradient(180deg,#122718_7.6%,rgba(18,39,24,0.71)_43.62%,#122718_79.64%)] w-full h-fit'>
        <Image
          src='/imgs/home/bannerBg2.jpg'
          alt='hong hao travel'
          width={1920}
          height={1080}
          className='w-full h-full object-cover absolute top-0 left-0 z-[-1]'
        />
        <OurTeam darkTheme />
      </div>
      <Season
        data={dataAcf?.weather}
        dataWeather={dataWeather}
      />
    </main>
  )
}

export default Homepage
