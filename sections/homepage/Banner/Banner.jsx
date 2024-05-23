import React from 'react'
import Filter from './Filter'

const Banner = () => {
  return (
    <section className='w-screen h-screen bg-green-normal flex relative'>
      <div className='text-075 text-greyscale-0 font-bold tracking-[0.00938rem] absolute top-1/2 left-[1.87rem] rotate-90'>
        Hong Hao Travel
      </div>

      <Filter />
    </section>
  )
}

export default Banner
