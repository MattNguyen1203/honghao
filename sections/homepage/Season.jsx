import Image from 'next/image'

export default function Season() {
  return (
    <>
      <div className='w-full h-[14rem] z-10 relative'>
        <Image
          src={'/imgs/home/cloud-flying-1.png'}
          alt='cloud flying (づ ◕‿◕ )づ'
          className='object-cover object-top w-full h-full'
          width={1920}
          height={1080}
        />
        <div
          className='absolute bottom-0 left-0 w-full h-[6rem] z-10'
          style={{
            background:
              'linear-gradient(0deg,#FFF 50%,rgba(255,255,255,0.00) 100%)',
          }}
        />
      </div>
      <section className='relative z-10 bg-greyscale-0'>
        <div className='kKao4-container h-[44rem] rounded-[1.5rem] overflow-hidden'>
          <Image
            src={'/imgs/home/season-1.jpg'}
            alt='season-1'
            className='object-cover w-full h-full'
            width={1920}
            height={1080}
          />
        </div>
      </section>
    </>
  )
}
