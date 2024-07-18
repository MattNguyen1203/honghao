'use client'
import IconAudio from '@/components/icons/IconAudio'
import IconMuted from '@/components/icons/IconMuted'
import Image from 'next/image'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const ItemVideo = ({ active, url }) => {
  const [isMute, setIsMute] = useState(true)

  if (!url) return

  return (
    <>
      <div className='relative !z-[1000]'>
        <video
          type='video/mp3'
          src={url}
          loop
          muted={isMute}
          autoPlay={active}
          playsInline
          width='100%'
          height='100%'
          className='item-video !z-[1000] w-full min-w-full min-h-full rounded-[1rem] overflow-hidden'
        />

        <div
          onClick={() => setIsMute(!isMute)}
          className='absolute bottom-[15.75rem] right-[18.25rem] xlg:bottom-[6.75rem] xlg:right-[6.25rem] xxl:bottom-[12.75rem] xxl:right-[8.25rem]  z-[99] cursor-pointer xmd:right-[1.27rem] xmd:bottom-[1.23rem]'
        >
          {isMute ? (
            <IconMuted className='size-[2.5rem] tablet:size-[5rem]' />
          ) : (
            <IconAudio className='size-[2.5rem] tablet:size-[5rem]' />
          )}
        </div>
      </div>
      <div
        id='overlay'
        className='absolute top-0 left-0 z-10 w-full h-0 opacity-50 bg-gradient-banner max-lg:h-full lg:rounded-[1rem] pointer-events-none'
      ></div>
    </>
  )
}

export default ItemVideo