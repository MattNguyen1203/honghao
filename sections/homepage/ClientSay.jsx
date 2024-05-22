import Image from 'next/image'

export default function ClientSay() {
  return (
    // TODO: change height to rem on smaller device
    <section className='relative h-[60rem]'>
      <Image
        src='/imgs/home/1-nguoi-dung-giua-nui-trong-co-ve-ngau.jpg'
        alt='background image'
        className='absolute top-0 left-0 object-cover object-bottom h-full -z-10'
        width={1920}
        height={1080}
      />
      <div
        className='absolute top-0 left-0 w-full h-full'
        style={{
          background:
            'linear-gradient(180deg, #122718 7.6%, rgba(18, 39, 24, 0.71) 43.62%, #122718 79.64%)',
        }}
      />
      <h2 className='h2 absolute top-[8rem] left-1/2 -translate-x-1/2 text-greyscale-0'>
        CLIENTS SAY
      </h2>
      <Image
        src={'/imgs/home/demo-1.png'}
        alt='client say'
        className='absolute -translate-x-1/2 top-[16rem] left-1/2 w-[30.04188rem] h-[29.875rem] object-cover cut-img'
        width={1920}
        height={1080}
      />
      {/* <Image
        src={'/imgs/home/1-buc-anh-co-hinh-giong-england.png'}
        alt='client say'
        className='absolute -translate-x-1/2 top-[16rem] left-1/2 w-[30.04188rem] h-[29.875rem] object-cover'
        width={1920}
        height={1080}
      /> */}
      {/* <Image
        src={'/imgs/home/1-buc-anh-co-hinh-giong-england-deco-1.png'}
        alt='client say'
        className='absolute -translate-x-1/2 top-[16rem] left-1/2 w-[30.5625rem] h-[29.875rem] object-contain'
        width={1920}
        height={1080}
      /> */}
    </section>
  )
}
