'use client'
import IconAudio from '@/components/icons/IconAudio'
import IconMuted from '@/components/icons/IconMuted'
import Image from 'next/image'
import React, {useState} from 'react'
import ReactPlayer from 'react-player'

const ItemVideo = ({active, url}) => {
  const [isMute, setIsMute] = useState(true)

  if (!url) return

  return (
    <>
      <ReactPlayer
        url={url}
        loop
        muted={isMute}
        playing={active}
        playsinline
        width='100%'
        height='100%'
        className='item-video w-full h-full min-w-full min-h-full '
      />

      <div
        onClick={() => setIsMute(!isMute)}
        className='absolute bottom-[3.75rem] right-[6.25rem] xlg:bottom-[1rem] xlg:right-[1rem] z-[99] cursor-pointer max-md:right-[4.27rem] max-md:bottom-[5.23rem] max-lg:right-[6.25rem] max-lg:bottom-[6.75rem]'
      >
        {isMute ? (
          <IconMuted className='size-[2.5rem] tablet:size-[5rem]' />
        ) : (
          <IconAudio className='size-[2.5rem] tablet:size-[5rem]' />
        )}
      </div>
      <div
        id='overlay'
        className='absolute top-0 left-0 z-10 w-full h-0 opacity-50 bg-gradient-banner max-lg:h-full lg:rounded-[1rem] pointer-events-none'
      ></div>
    </>
  )
}

export default ItemVideo
