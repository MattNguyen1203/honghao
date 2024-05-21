import SlideVideoTours from '@/components/slide-video-tour'
import React from 'react'

import Image from 'next/image'



const data = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path opacity="0.4" d="M5.74132 16C5.85132 15.51 5.65132 14.81 5.30132 14.46L2.87132 12.03C2.11132 11.27 1.81132 10.46 2.03132 9.76C2.26132 9.06 2.97132 8.58 4.03132 8.4L7.15132 7.88C7.60132 7.8 8.15132 7.4 8.36132 6.99L10.0813 3.54C10.5813 2.55 11.2613 2 12.0013 2C12.7413 2 13.4213 2.55 13.9213 3.54L15.6413 6.99C15.7713 7.25 16.0413 7.5 16.3313 7.67L5.56132 18.44C5.42132 18.58 5.18132 18.45 5.22132 18.25L5.74132 16Z" fill="white" />
      <path d="M18.7008 14.4599C18.3408 14.8199 18.1408 15.5099 18.2608 15.9999L18.9508 19.0099C19.2408 20.2599 19.0608 21.1999 18.4408 21.6499C18.1908 21.8299 17.8908 21.9199 17.5408 21.9199C17.0308 21.9199 16.4308 21.7299 15.7708 21.3399L12.8408 19.5999C12.3808 19.3299 11.6208 19.3299 11.1608 19.5999L8.23078 21.3399C7.12078 21.9899 6.17078 22.0999 5.56078 21.6499C5.33078 21.4799 5.16078 21.2499 5.05078 20.9499L17.2108 8.7899C17.6708 8.3299 18.3208 8.1199 18.9508 8.2299L19.9608 8.3999C21.0208 8.5799 21.7308 9.0599 21.9608 9.7599C22.1808 10.4599 21.8808 11.2699 21.1208 12.0299L18.7008 14.4599Z" fill="white" />
    </svg>,
    title: 'SPECIAL',
    children: [
      { text: 'Expert Local Guides good English' },
      { text: 'Book now, pay later' },
      { text: 'Flexible cancellation policy' },
      { text: 'Tours accommodate a maximum of 10 guests' },
      { text: 'Creating job opportunities for the' },
      { text: 'Vietnamese community' },
    ]
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
      <path opacity="0.4" d="M20.8487 8.05171L17.9647 5.62112V2.17075C17.9648 2.08601 17.9482 2.00208 17.9159 1.92376C17.8835 1.84545 17.8361 1.77427 17.7762 1.71431C17.7163 1.65435 17.6452 1.60679 17.5669 1.57434C17.4886 1.54188 17.4047 1.52518 17.32 1.52518H15.2762C15.1914 1.52507 15.1074 1.54169 15.029 1.57409C14.9507 1.6065 14.8795 1.65405 14.8195 1.71401C14.7595 1.77398 14.712 1.8452 14.6796 1.92357C14.6472 2.00194 14.6305 2.08594 14.6306 2.17075V2.81043L11.5629 0.22476C11.4097 0.0803963 11.2071 0 10.9966 0C10.786 0 10.5834 0.0803963 10.4302 0.22476L1.15282 8.05171C1.03008 8.16598 0.944572 8.31456 0.907444 8.47811C0.870316 8.64165 0.883282 8.81259 0.944656 8.96866C1.00644 9.12377 1.11339 9.25674 1.25164 9.35036C1.38988 9.44398 1.55306 9.49392 1.72002 9.49371H3.06173V19.1706C3.06173 19.6282 3.43677 20.0041 3.89609 20.0041H18.1055C18.3266 20.0036 18.5386 19.9156 18.6949 19.7592C18.8513 19.6028 18.9394 19.3909 18.9398 19.1697V9.49456H20.2815C20.4496 9.4948 20.6138 9.4439 20.7523 9.34861C20.8908 9.25332 20.997 9.11816 21.0569 8.96107C21.1177 8.80628 21.1304 8.63675 21.0932 8.47464C21.0561 8.31254 20.9709 8.16458 20.8487 8.05171ZM11.6303 16.9734C11.5462 17.0879 11.4364 17.1809 11.3097 17.2451C11.183 17.3092 11.0429 17.3426 10.9009 17.3426C10.7589 17.3426 10.6188 17.3092 10.4921 17.2451C10.3654 17.1809 10.2556 17.0879 10.1715 16.9734C9.02107 15.3898 6.90399 12.2724 6.90399 10.6728C6.90578 9.61296 7.3281 8.59719 8.0782 7.8485C8.82831 7.09982 9.84489 6.67943 10.9047 6.67965C11.9645 6.67943 12.9811 7.09982 13.7312 7.8485C14.4813 8.59719 14.9036 9.61296 14.9054 10.6728C14.9054 12.2724 12.7883 15.3898 11.6303 16.9734Z" fill="white" />
      <path d="M11.0011 12.9241C12.3976 12.9241 13.5296 11.7921 13.5296 10.3957C13.5296 8.99923 12.3976 7.86719 11.0011 7.86719C9.60469 7.86719 8.47266 8.99923 8.47266 10.3957C8.47266 11.7921 9.60469 12.9241 11.0011 12.9241Z" fill="white" />
    </svg>,
    title: 'ACCOMODATION',
    children: [
      { text: 'Doom Room' },
    ]
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path opacity="0.4" d="M17.1849 7.04134C16.3099 3.19134 12.9515 1.45801 10.0015 1.45801C10.0015 1.45801 10.0015 1.45801 9.99321 1.45801C7.05154 1.45801 3.68488 3.18301 2.80988 7.03301C1.83488 11.333 4.46821 14.9747 6.85154 17.2663C7.73488 18.1163 8.86821 18.5413 10.0015 18.5413C11.1349 18.5413 12.2682 18.1163 13.1432 17.2663C15.5265 14.9747 18.1599 11.3413 17.1849 7.04134Z" fill="white" />
      <path d="M10 11.2168C11.4497 11.2168 12.625 10.0415 12.625 8.5918C12.625 7.14205 11.4497 5.9668 10 5.9668C8.55025 5.9668 7.375 7.14205 7.375 8.5918C7.375 10.0415 8.55025 11.2168 10 11.2168Z" fill="white" />
    </svg>,
    title: 'DESTINATION:',
    children: [
      { text: 'Hanoi - Ba Be - Meo Vac - Dong Van - Ha Giang' },
    ]
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
      <path d="M19.7812 9C17.4609 9 15.5625 10.8984 15.5625 13.2188C15.5625 15.5391 17.4609 17.4375 19.7812 17.4375C22.1016 17.4375 24 15.5391 24 13.2188C24 10.8984 22.1016 9 19.7812 9ZM19.7812 16.0312C18.2344 16.0312 16.9688 14.7656 16.9688 13.2188C16.9688 11.6719 18.2344 10.4062 19.7812 10.4062C21.3281 10.4062 22.5938 11.6719 22.5938 13.2188C22.5938 14.7656 21.3281 16.0312 19.7812 16.0312Z" fill="white" />
      <path d="M4.21875 9C1.89839 9 0 10.8984 0 13.2188C0 15.5391 1.89839 17.4375 4.21875 17.4375C6.53911 17.4375 8.4375 15.5391 8.4375 13.2188C8.4375 10.8984 6.53911 9 4.21875 9ZM4.21875 16.0312C2.67192 16.0312 1.40625 14.7656 1.40625 13.2188C1.40625 11.6719 2.67192 10.4062 4.21875 10.4062C5.76558 10.4062 7.03125 11.6719 7.03125 13.2188C7.03125 14.7656 5.76558 16.0312 4.21875 16.0312Z" fill="white" />
      <path opacity="0.4" d="M5.625 4.78125H12.75V9H5.625V4.78125ZM16.2656 1.96875H14.8594C14.4707 1.96875 14.1562 1.65427 14.1562 1.26562C14.1562 0.876984 14.4707 0.5625 14.8594 0.5625H16.2656C16.6543 0.5625 16.9688 0.876984 16.9688 1.26562C16.9688 1.65427 16.6543 1.96875 16.2656 1.96875Z" fill="white" />
      <path opacity="0.4" d="M20.175 13.8067C20.0484 13.877 19.9218 13.9192 19.7813 13.9192C19.5563 13.9192 19.3313 13.8067 19.1907 13.6099L15.9 8.68801C15.675 8.36452 15.7735 7.92858 16.0828 7.70363C16.4062 7.49265 16.8421 7.57702 17.0672 7.90046L19.7813 11.9365L20.3718 12.8223C20.5828 13.1458 20.4984 13.5817 20.175 13.8067ZM12.0469 11.8098V14.6223H4.21875C3.44531 14.6223 2.8125 13.9895 2.8125 13.2161C2.8125 12.4426 3.44531 11.8098 4.21875 11.8098H12.0469Z" fill="white" />
      <path d="M16.2656 0.5625C15.8718 0.5625 15.5625 0.871828 15.5625 1.26562V3.375H13.4531C13.2141 3.375 13.0031 3.48755 12.8625 3.68433L10.214 7.59375H8.11406L5.87813 4.24688C5.5125 3.69844 4.90781 3.375 4.24692 3.375H0.703125C0.309328 3.375 0 3.68433 0 4.07812C0 5.87817 1.36402 7.38277 3.12183 7.56558L5.37187 10.9406C5.7375 11.4891 6.34219 11.8125 7.00308 11.8125H8.70469L9.1875 12.6984L9.60938 13.5421C9.94683 14.2031 10.6219 14.625 11.3813 14.625H12.4125C13.3546 14.625 14.1562 13.9641 14.3391 13.0359L14.4516 12.5438C15.0141 9.67495 17.5593 7.59375 20.4844 7.59375C20.8782 7.59375 21.1875 7.28442 21.1875 6.89062V5.48438C21.1875 2.77031 18.9797 0.5625 16.2656 0.5625Z" fill="white" />
    </svg>,
    title: 'ACCOMODATION',
    children: [
      { text: 'Sleeper bus' },
      { text: 'Xe Wave, Vision' },
    ]
  },
]
const Banner = () => {
  return (
    <div className='relative'>
      <SlideVideoTours type='banner' />
      <Image priority alt="ảnh" src={'/imgs/all-destinations/map.png'} width={401} height={401}
        className="w-[24.4375rem] h-[24.75rem] shrink-0 absolute bottom-[13rem] z-10 right-[18.72rem]" />
      <div className='relative xl:container'>
        <div className='absolute bottom-[2rem] z-10 left-[5rem] inline-flex flex-col items-start space-y-[1.5625rem]'>
          <div className="flex flex-col items-start space-y-3">
            <div className="flex items-center space-x-[0.85rem] self-stretch">
              <div className="flex items-center space-x-[0.375rem]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white" />
                  <path d="M15.7106 15.9298C15.5806 15.9298 15.4506 15.8998 15.3306 15.8198L12.2306 13.9698C11.4606 13.5098 10.8906 12.4998 10.8906 11.6098V7.50977C10.8906 7.09977 11.2306 6.75977 11.6406 6.75977C12.0506 6.75977 12.3906 7.09977 12.3906 7.50977V11.6098C12.3906 11.9698 12.6906 12.4998 13.0006 12.6798L16.1006 14.5298C16.4606 14.7398 16.5706 15.1998 16.3606 15.5598C16.2106 15.7998 15.9606 15.9298 15.7106 15.9298Z" fill="white" />
                </svg>
                <div className="text-base not-italic font-extrabold leading-[150%] text-white">
                  Intermediate
                </div>
              </div>

              <div className="flex items-center space-x-[0.575rem]">
                <div className="size-[0.28rem] bg-white rounded-full"></div>
                <div className=" overflow-hidden text-greyscale-5 text-ellipsis text-base not-italic font-normal leading-[120%] tracking-[0.0125rem]">
                  3 Days / 4 Night
                </div>
              </div>


            </div>
            <div className=' font-londrina text-white text-[2rem] not-italic font-black leading-[100%]'>
              Ha Giang Loop tour: Itinerary in 3 Days 4 Nights
            </div>
          </div>

          <div className="grid grid-cols-2  w-[40rem] gap-x-[3rem] gap-y-[1.5rem]">
            <div className='space-y-[1.5rem]'>
              {data.slice(0, 2).map((d, i) => (
                <div key={i} className="flex flex-col items-start space-y-[0.75rem]">

                  <div className="flex w-72 flex-col justify-center items-start gap-2">
                    <div className="flex items-center gap-1">
                      <div className="size-[1.5rem]">

                        {d?.icon}
                      </div>
                      <div className="text-greyscale-10 text-base not-italic font-bold leading-[120%] tracking-[0.0125rem]">
                        {d?.title}
                      </div>
                    </div>
                    <svg className='w-[17rem] h-[2px] stroke-[1px] stroke-[#D9D9D9]' xmlns="http://www.w3.org/2000/svg" width="274" height="2" viewBox="0 0 274 2" fill="none">
                      <path d="M1 1H273" stroke="url(#paint0_linear_8549_24325)" stroke-linecap="round" />
                      <defs>
                        <linearGradient id="paint0_linear_8549_24325" x1="2.3399" y1="1.49976" x2="270.99" y2="1.49976" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#D9D9D9" />
                          <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <ul className='pl-[1.6rem] w-[19rem]'>

                    {d?.children.map((c, i) => (
                      <li key={i} className="list-disc text-white text-sm not-italic font-bold leading-[150%]">
                        {c?.text}
                      </li>
                    ))}
                  </ul>
                </div>

              ))}
            </div>
            <div className='space-y-[1.5rem]'>
              {data.slice(2, 4).map((d, i) => (
                <div key={i} className="flex flex-col items-start space-y-[0.75rem]">

                  <div className="flex w-72 flex-col justify-center items-start gap-2">
                    <div className="flex items-center gap-1">
                      <div className="size-[1.5rem]">

                        {d?.icon}
                      </div>
                      <div className="text-greyscale-10 text-base not-italic font-bold leading-[120%] tracking-[0.0125rem]">
                        {d?.title}
                      </div>
                    </div>
                    <svg className='w-[17rem] h-[2px] stroke-[1px] stroke-[#D9D9D9]' xmlns="http://www.w3.org/2000/svg" width="274" height="2" viewBox="0 0 274 2" fill="none">
                      <path d="M1 1H273" stroke="url(#paint0_linear_8549_24325)" stroke-linecap="round" />
                      <defs>
                        <linearGradient id="paint0_linear_8549_24325" x1="2.3399" y1="1.49976" x2="270.99" y2="1.49976" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#D9D9D9" />
                          <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <ul className='pl-[1.6rem] w-[19rem]'>

                    {d?.children.map((c, i) => (
                      <li key={i} className="list-disc text-white text-sm not-italic font-bold leading-[150%]">
                        {c?.text}
                      </li>
                    ))}
                  </ul>
                </div>

              ))}
            </div>
          </div>

        </div>


        <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-[6rem] opacity-100 duration-500 ">
          <div className="relative">
            <Image priority alt="ảnh" src={'/imgs/all-destinations/price.png'} width={300} height={400} className="z-10 w-[7.71775rem]" />
            <Image priority alt="ảnh" src={'/imgs/all-destinations/honghao-xoay.png'} width={300} height={400} className="w-[11.375rem] z-10 absolute top-0 circular-infinity " />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner
