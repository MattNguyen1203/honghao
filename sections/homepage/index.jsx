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
        backgroundImage={'/imgs/home/bg-image-our-team-1.jpg'}
        darkTheme
        forHomePage
      />
      <Season />
    </main>
  )
}

export default Homepage
