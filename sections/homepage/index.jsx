import React from 'react'
import Banner from './Banner'
import About from './About'
import ClientSay from './ClientSay'
import OurTeam from '@/layouts/team'
import Season from './Season'

const Homepage = () => {
  return (
    <div>
      <Banner />
      <About />
      {/* TODO: DELETE ME */}
      <div className='h-[50vh]' />
      <ClientSay />
      <OurTeam
        backgroundImage={'/imgs/home/bg-img-our-team.png'}
        darkTheme
        forHomePage
      />
      <Season />
    </div>
  )
}

export default Homepage
