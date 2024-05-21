import Image from 'next/image'

export default function ItemCard() {
  return (
    <div className='rounded-[0.75rem] group h-[34.375rem] w-[47.3125rem] relative flex items-end justify-between p-[1.5rem] overflow-hidden'>
      <div className='z-10 size-full absolute top-0 left-0 bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_0%,#122718_100%)]'></div>
      <Image
        className='absolute top-0 left-0 size-full rounded-[0.75rem]'
        alt='item card'
        src={'/home/ItemCard.jpg'}
        width={757}
        height={550}
      />
      <div className='z-10 flex flex-col space-y-[0.66rem] w-[33.9375rem]'>
        <span className='text-15 font-black text-white'>
          Ha Giang Loop tour: Itinerary in 4 Days 5 Nights
        </span>
        <div className='flex space-x-[0.5rem] items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path
              opacity='0.4'
              d='M19.7372 8.07333L16.8857 5.67011V2.25861C16.8858 2.17482 16.8694 2.09184 16.8374 2.0144C16.8054 1.93697 16.7584 1.86659 16.6992 1.80731C16.64 1.74803 16.5697 1.701 16.4923 1.66891C16.4149 1.63682 16.332 1.62031 16.2482 1.62031H14.2274C14.1436 1.6202 14.0605 1.63663 13.983 1.66867C13.9056 1.70071 13.8351 1.74772 13.7759 1.80702C13.7166 1.86631 13.6695 1.93672 13.6375 2.01421C13.6055 2.0917 13.589 2.17475 13.5891 2.25861V2.89108L10.556 0.334533C10.4044 0.191796 10.2041 0.112305 9.99598 0.112305C9.78782 0.112305 9.58752 0.191796 9.43601 0.334533L0.263108 8.07333C0.141743 8.18632 0.057202 8.33323 0.0204918 8.49493C-0.0162184 8.65663 -0.00339782 8.82564 0.0572846 8.97996C0.118376 9.13332 0.224117 9.2648 0.360807 9.35736C0.497496 9.44992 0.658834 9.4993 0.823915 9.4991H2.15052V19.067C2.15052 19.5195 2.52133 19.8911 2.97548 19.8911H17.0248C17.2435 19.8907 17.453 19.8036 17.6077 19.649C17.7623 19.4944 17.8493 19.2848 17.8498 19.0661V9.49993H19.1764C19.3426 9.50017 19.5049 9.44984 19.6419 9.35563C19.7788 9.26142 19.8838 9.12778 19.943 8.97246C20.0031 8.81941 20.0156 8.65178 19.9789 8.4915C19.9422 8.33123 19.8579 8.18494 19.7372 8.07333ZM10.6226 16.8946C10.5395 17.0077 10.4309 17.0998 10.3056 17.1632C10.1803 17.2266 10.0418 17.2596 9.9014 17.2596C9.76097 17.2596 9.62252 17.2266 9.49723 17.1632C9.37194 17.0998 9.26333 17.0077 9.18019 16.8946C8.04274 15.3288 5.9495 12.2465 5.9495 10.6649C5.95127 9.61701 6.36883 8.61267 7.11049 7.87242C7.85215 7.13216 8.85728 6.71651 9.90515 6.71673C10.953 6.71651 11.9581 7.13216 12.6998 7.87242C13.4415 8.61267 13.859 9.61701 13.8608 10.6649C13.8608 12.2465 11.7676 15.3288 10.6226 16.8946Z'
              fill='white'
            />
            <path
              d='M10 12.8906C11.3807 12.8906 12.5 11.7713 12.5 10.3906C12.5 9.00991 11.3807 7.89062 10 7.89062C8.61929 7.89062 7.5 9.00991 7.5 10.3906C7.5 11.7713 8.61929 12.8906 10 12.8906Z'
              fill='white'
            />
          </svg>
          <span className='text-1 font-extrabold text-white translate-y-[2px]'>
            Accomodation:
          </span>
          <span className='text-1 font-normal text-greyscale-5 translate-y-[2px]'>
            Phòng Doom
          </span>
        </div>
        <div className='flex space-x-[0.5rem] items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='18'
            viewBox='0 0 24 18'
            fill='none'
          >
            <path
              d='M19.7812 9C17.4609 9 15.5625 10.8984 15.5625 13.2188C15.5625 15.5391 17.4609 17.4375 19.7812 17.4375C22.1016 17.4375 24 15.5391 24 13.2188C24 10.8984 22.1016 9 19.7812 9ZM19.7812 16.0312C18.2344 16.0312 16.9688 14.7656 16.9688 13.2188C16.9688 11.6719 18.2344 10.4062 19.7812 10.4062C21.3281 10.4062 22.5938 11.6719 22.5938 13.2188C22.5938 14.7656 21.3281 16.0312 19.7812 16.0312Z'
              fill='white'
            />
            <path
              d='M4.21875 9C1.89839 9 0 10.8984 0 13.2188C0 15.5391 1.89839 17.4375 4.21875 17.4375C6.53911 17.4375 8.4375 15.5391 8.4375 13.2188C8.4375 10.8984 6.53911 9 4.21875 9ZM4.21875 16.0312C2.67192 16.0312 1.40625 14.7656 1.40625 13.2188C1.40625 11.6719 2.67192 10.4062 4.21875 10.4062C5.76558 10.4062 7.03125 11.6719 7.03125 13.2188C7.03125 14.7656 5.76558 16.0312 4.21875 16.0312Z'
              fill='white'
            />
            <path
              opacity='0.4'
              d='M5.625 4.78125H12.75V9H5.625V4.78125ZM16.2656 1.96875H14.8594C14.4707 1.96875 14.1562 1.65427 14.1562 1.26562C14.1562 0.876984 14.4707 0.5625 14.8594 0.5625H16.2656C16.6543 0.5625 16.9688 0.876984 16.9688 1.26562C16.9688 1.65427 16.6543 1.96875 16.2656 1.96875Z'
              fill='white'
            />
            <path
              opacity='0.4'
              d='M20.175 13.8067C20.0484 13.877 19.9218 13.9192 19.7813 13.9192C19.5563 13.9192 19.3313 13.8067 19.1907 13.6099L15.9 8.68801C15.675 8.36452 15.7735 7.92858 16.0828 7.70363C16.4062 7.49265 16.8421 7.57702 17.0672 7.90046L19.7813 11.9365L20.3718 12.8223C20.5828 13.1458 20.4984 13.5817 20.175 13.8067ZM12.0469 11.8098V14.6223H4.21875C3.44531 14.6223 2.8125 13.9895 2.8125 13.2161C2.8125 12.4426 3.44531 11.8098 4.21875 11.8098H12.0469Z'
              fill='white'
            />
            <path
              d='M16.2656 0.5625C15.8718 0.5625 15.5625 0.871828 15.5625 1.26562V3.375H13.4531C13.2141 3.375 13.0031 3.48755 12.8625 3.68433L10.214 7.59375H8.11406L5.87813 4.24688C5.5125 3.69844 4.90781 3.375 4.24692 3.375H0.703125C0.309328 3.375 0 3.68433 0 4.07812C0 5.87817 1.36402 7.38277 3.12183 7.56558L5.37187 10.9406C5.7375 11.4891 6.34219 11.8125 7.00308 11.8125H8.70469L9.1875 12.6984L9.60938 13.5421C9.94683 14.2031 10.6219 14.625 11.3813 14.625H12.4125C13.3546 14.625 14.1562 13.9641 14.3391 13.0359L14.4516 12.5438C15.0141 9.67495 17.5593 7.59375 20.4844 7.59375C20.8782 7.59375 21.1875 7.28442 21.1875 6.89062V5.48438C21.1875 2.77031 18.9797 0.5625 16.2656 0.5625Z'
              fill='white'
            />
          </svg>
          <span className='text-1 font-extrabold text-white translate-y-[2px]'>
            Accomodation:
          </span>
          <span className='text-1 font-normal text-greyscale-5 translate-y-[2px]'>
            Phòng Doom
          </span>
        </div>
        <div className='flex space-x-[0.5rem] items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              opacity='0.4'
              d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
              fill='white'
            />
            <path
              d='M12.0002 14.5C6.99015 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5901C20.8701 22.5 21.0901 22.28 21.0901 22C21.0901 17.86 17.0102 14.5 12.0002 14.5Z'
              fill='white'
            />
          </svg>
          <span className='text-1 font-extrabold text-white translate-y-[2px]'>
            Accomodation:
          </span>
          <span className='text-1 font-normal text-greyscale-5 translate-y-[2px]'>
            Phòng Doom
          </span>
        </div>
        <div className='flex space-x-[0.5rem] items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              opacity='0.4'
              d='M16.9 22H7.10001C5.40001 22 4 20.61 4 18.9V5.10001C4 3.40001 5.39001 2 7.10001 2H16.9C18.6 2 20 3.39001 20 5.10001V18.9C20 20.61 18.61 22 16.9 22Z'
              fill='white'
            />
            <path
              d='M20 8H4V13H20V8Z'
              fill='white'
            />
            <path
              d='M8 18.7501C7.92 18.7501 7.83999 18.7401 7.75999 18.7301C7.67999 18.7101 7.6 18.6901 7.52 18.6501C7.45 18.6201 7.37 18.5801 7.31 18.5401C7.24 18.4901 7.17 18.4401 7.12 18.3801C6.88 18.1501 6.75 17.8301 6.75 17.5001C6.75 17.1701 6.88 16.8501 7.12 16.6201C7.17 16.5601 7.24 16.5101 7.31 16.4601C7.37 16.4201 7.45 16.3801 7.52 16.3501C7.6 16.3101 7.67999 16.2901 7.75999 16.2701C8.15999 16.1901 8.59 16.3301 8.88 16.6201C9.12 16.8501 9.25 17.1701 9.25 17.5001C9.25 17.8301 9.12 18.1501 8.88 18.3801C8.65 18.6201 8.33 18.7501 8 18.7501Z'
              fill='white'
            />
            <path
              d='M16 18.7501C15.92 18.7501 15.84 18.7401 15.76 18.7301C15.68 18.7101 15.6 18.6901 15.52 18.6501C15.45 18.6201 15.37 18.5801 15.31 18.5401C15.24 18.4901 15.17 18.4401 15.12 18.3801C14.88 18.1501 14.75 17.8301 14.75 17.5001C14.75 17.1701 14.88 16.8501 15.12 16.6201C15.17 16.5601 15.24 16.5101 15.31 16.4601C15.37 16.4201 15.45 16.3801 15.52 16.3501C15.6 16.3101 15.68 16.2901 15.76 16.2701C15.92 16.2401 16.08 16.2401 16.25 16.2701C16.32 16.2901 16.4 16.3101 16.48 16.3501C16.55 16.3801 16.63 16.4201 16.69 16.4601C16.76 16.5101 16.83 16.5601 16.88 16.6201C17.12 16.8501 17.25 17.1701 17.25 17.5001C17.25 17.8301 17.12 18.1501 16.88 18.3801C16.83 18.4401 16.76 18.4901 16.69 18.5401C16.63 18.5801 16.55 18.6201 16.48 18.6501C16.4 18.6901 16.32 18.7101 16.25 18.7301C16.16 18.7401 16.08 18.7501 16 18.7501Z'
              fill='white'
            />
            <path
              d='M14.5 5.75H9.5C9.09 5.75 8.75 5.41 8.75 5C8.75 4.59 9.09 4.25 9.5 4.25H14.5C14.91 4.25 15.25 4.59 15.25 5C15.25 5.41 14.91 5.75 14.5 5.75Z'
              fill='white'
            />
          </svg>
          <span className='text-1 font-extrabold text-white translate-y-[2px]'>
            Accomodation:
          </span>
          <span className='text-1 font-normal text-greyscale-5 translate-y-[2px]'>
            Phòng Doom
          </span>
        </div>
      </div>
      <div className='flex-col flex items-end justify-center z-10'>
        <div className='group-hover:translate-y-0 transition-all duration-500 translate-y-[50%] flex flex-col items-end'>
          <span className='text-1 font-extrabold text-white opacity-60'>
            From to
          </span>
          <span className='text-3 font-extrabold text-white'>$199</span>
        </div>
        <button className='group-hover:translate-x-0 transition-all duration-500 translate-x-[120%] bg-[#DA4B19] rounded-[0.5rem] h-[3.5rem] py-[1rem] px-[2rem] flex justify-center items-center space-x-[0.5rem] border-[1px] border-solid border-[#DA4B19] text-0875 font-extrabold text-white'>
          DETAILS
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            className='ml-[0.5rem]'
          >
            <path
              d='M10.125 6H0'
              stroke='url(#paint0_linear_9336_3094)'
              strokeWidth='2'
            />
            <g filter='url(#filter0_i_9336_3094)'>
              <path
                d='M12 6L6 11.25L8.41379 6L6 0.75L12 6Z'
                fill='white'
              />
            </g>
            <defs>
              <filter
                id='filter0_i_9336_3094'
                x='6'
                y='0.75'
                width='26'
                height='14.5'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood
                  floodOpacity='0'
                  result='BackgroundImageFix'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  result='shape'
                />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset
                  dx='20'
                  dy='4'
                />
                <feGaussianBlur stdDeviation='50' />
                <feComposite
                  in2='hardAlpha'
                  operator='arithmetic'
                  k2='-1'
                  k3='1'
                />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0'
                />
                <feBlend
                  mode='normal'
                  in2='shape'
                  result='effect1_innerShadow_9336_3094'
                />
              </filter>
              <linearGradient
                id='paint0_linear_9336_3094'
                x1='4.53912'
                y1='6'
                x2='4.53912'
                y2='6.892'
                gradientUnits='userSpaceOnUse'
              >
                <stop
                  offset='0.31'
                  stopColor='white'
                />
                <stop
                  offset='1'
                  stopColor='white'
                  stopOpacity='0'
                />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
      <div className='bg-[rgba(255,255,255,0.20)] flex justify-center items-center space-x-[0.5rem] z-10 absolute top-[1.5rem] right-[1.5rem] rounded-[1.5rem] border-[1px] border-solid border-[rgba(255,255,255,0.52)] py-[0.375rem] px-[0.75rem] backdrop-blur-[2px]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
            fill='#E64827'
          />
          <path
            d='M15.7106 15.9298C15.5806 15.9298 15.4506 15.8998 15.3306 15.8198L12.2306 13.9698C11.4606 13.5098 10.8906 12.4998 10.8906 11.6098V7.50977C10.8906 7.09977 11.2306 6.75977 11.6406 6.75977C12.0506 6.75977 12.3906 7.09977 12.3906 7.50977V11.6098C12.3906 11.9698 12.6906 12.4998 13.0006 12.6798L16.1006 14.5298C16.4606 14.7398 16.5706 15.1998 16.3606 15.5598C16.2106 15.7998 15.9606 15.9298 15.7106 15.9298Z'
            fill='#FEEEE8'
          />
        </svg>
        <span className='opacity-80 text-1 font-normal text-white h-[1.125rem] w-[7.125rem]'>
          4 Days 5 Nights
        </span>
      </div>
    </div>
  )
}
