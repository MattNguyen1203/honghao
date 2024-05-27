import BikeAnimation from '@/components/bikeAnimate'
import Image from 'next/image'

export default function Commit({ dataCommit }) {
  return (
    <section>
      <div className='w-full h-[49.0625rem] xmd:h-[29.2775rem] relative pt-[6.88rem] xmd:pt-[6rem]'>
        <Image
          className='xmd:hidden size-full absolute top-0 left-0'
          alt='ảnh bg cam kết'
          src={'/imgs/about/Pattern-white.png'}
          width={1600}
          height={785}
        />
        <Image
          className='md:hidden w-[23.5625rem] h-[29.2775rem] absolute top-0 left-0'
          alt='ảnh bg cam kết'
          src={'/imgs/about/pattern-mb.png'}
          width={377}
          height={468.44}
        />
        <p className='flex justify-start xmd:w-[20.03781rem] w-[65.8125rem] text-35 xmd:text-15 font-londrina xmd:font-black text-[#122718] xmd:text-greyscale-80 opacity-80'>
          {dataCommit?.main_desc_test}
        </p>
      </div>
      <div className='translate-y-[-3.81rem] relative h-[52.75rem] flex'>
        <div className='absolute size-full top-0 left-0'>
          <BikeAnimation />
        </div>
        <Image
          className='md:hidden w-[23.4375rem] h-[32.6875rem] absolute top-[2rem] left-0'
          alt='ảnh bg'
          src={'/imgs/about/honghaotour.png'}
          width={375}
          height={523}
        />
        <div className='flex container xmd:flex-col justify-between md:space-x-[9.25rem] md:pb-[6rem] xmd:mt-[7.19rem]'>
          <div className='flex flex-col h-full justify-end xmd:mb-[3.18rem]'>
            <div className='flex flex-col items-start space-y-[0.75rem] h-[5.625rem] opacity-90 mb-[3.5rem] xmd:mb-[2rem]'>
              <span className='text-1125 xmd:text-0875 font-extrabold text-white opacity-40'>
                HONG HA TRAVEL
              </span>
              <h2 className='text-35 xmd:text-25 font-black text-white xmd:w-[16.04469rem]'>
                ETHICAL COMMITMENTS
              </h2>
            </div>
            <div className='z-10 flex flex-col items-start space-y-[1rem]'>
              <p className='xmd:hidden w-[38.8125rem] xmd:w-[20.9375rem] text-1 font-normal text-greyscale-5'>
                {dataCommit?.desc_text}
              </p>
              <div className='flex flex-col space-y-[0.75rem]'>
                {dataCommit?.lists_commitment?.map((e, index) => (
                  <div
                    key={index}
                    className='flex items-center space-x-[0.5rem]'
                  >
                    <Image
                      className='size-[1rem]'
                      alt='ảnh check'
                      src={'/imgs/about/check.svg'}
                      width={16}
                      height={16}
                    />
                    <span className='text-1 font-bold text-greyscale-5'>
                      {e?.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='xmd:w-full flex items-end pb-[2.3rem] z-10'>
            <Image
              className='h-[26.375rem] w-[41.9375rem] xmd:h-[14.74013rem] xmd:w-[23.4375rem] md:rounded-[1.25rem] shadow-[90px_128px_44px_0px_rgba(66,72,66,0.00),57px_82px_40px_0px_rgba(66,72,66,0.01),32px_46px_34px_0px_rgba(66,72,66,0.05),14px_20px_25px_0px_rgba(66,72,66,0.09),4px_5px_14px_0px_rgba(66,72,66,0.10)]'
              alt='ảnh content cam kết'
              src={'/imgs/about/nature.jpg'}
              width={671}
              height={422}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
