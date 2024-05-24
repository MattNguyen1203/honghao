import React from 'react'
import Banner from './Banner'
import About from './About'
import ClientSay from './ClientSay'
import OurTeam from '@/layouts/team'
import Season from './Season'
import './styles.css'

const Homepage = () => {
  return (
    <main>
      <Banner />
      <About />
      <div className='h-[50vh]' />
      <ClientSay />
      <OurTeam
        backgroundImage={'/imgs/home/backround-image-our-team.png'}
        backgroundImageMobile={'/imgs/home/bg-image-our-team-mobile.png'}
        darkTheme
        forHomePage
      />
      <Season />
    </main>
  )
}

export default Homepage
