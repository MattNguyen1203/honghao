export default function NavigationCustom({
  white,
  handleNextSlide,
  handlePrevSlide,
  indexSlider = 0,
  length = 0,
}) {
  return (
    <div className='relative z-50'>
      <button
        onClick={handlePrevSlide}
        className={`
                  ${length && indexSlider === 0 ? 'hidden' : ''} 
                absolute left-[0rem] top-[-1rem] pointer-events-auto
        size-[2.5rem] group rounded-full duration-300 ease-linear border border-orange-normal`}
      >
        <svg
          className=''
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
        >
          <g
            className={
              'group-hover:fill-[#E64827] fill-transparent duration-300 ease-linear'
            }
            clip-path='url(#clip0_7452_38196)'
          >
            <circle
              className={white ? 'stroke-white' : 'stroke-[#E64827]'}
              cx='20'
              cy='20'
              r='19.5'
              stroke='#E64827'
            />
            <path
              className={
                (white
                  ? 'stroke-white'
                  : 'group-hover:stroke-white stroke-[#E64827]') +
                '  duration-300 ease-linear'
              }
              d='M14.5 20L28 20'
              stroke='url(#paint0_linear_7452_38196)'
              stroke-width='2'
            />
            <g filter='url(#filter0_i_7452_38196)'>
              {/* mui ten */}
              <path
                className={
                  (white ? 'fill-white' : '') +
                  ' group-hover:fill-white group-hover:translate-x-[0.09rem] duration-300 ease-linear'
                }
                d='M12 20L20 27L16.7816 20L20 13L12 20Z'
                fill='#E64827'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_i_7452_38196'
              x='12'
              y='13'
              width='28'
              height='18'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood
                flood-opacity='0'
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
                result='effect1_innerShadow_7452_38196'
              />
            </filter>
            <linearGradient
              id='paint0_linear_7452_38196'
              x1='27'
              y1='20'
              x2='16'
              y2='20'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#F2531C' />
              <stop
                offset='1'
                stop-color='#F2531C'
                stopOpacity='0'
              />
            </linearGradient>
            <clipPath id='clip0_7452_38196'>
              <rect
                width='40'
                height='40'
                rx='20'
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>
      </button>

      <button
        className={`
                  ${length && indexSlider === length - 1 ? 'hidden' : ''}
        size-[2.5rem] rotate-[180deg] group rounded-full
        duration-300 ease-linear border border-orange-normal
        absolute right-[0rem] pointer-events-auto top-0
        `}
        onClick={handleNextSlide}
      >
        <svg
          className=''
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
        >
          <g
            className={
              'group-hover:fill-[#E64827] fill-transparent duration-300 ease-linear'
            }
            clip-path='url(#clip0_7452_38196)'
          >
            <circle
              className={white ? 'stroke-white' : 'stroke-[#E64827]'}
              cx='20'
              cy='20'
              r='19.5'
              stroke='#E64827'
            />
            <path
              className={
                (white
                  ? 'stroke-white'
                  : 'group-hover:stroke-white stroke-[#E64827]') +
                '  duration-300 ease-linear'
              }
              d='M14.5 20L28 20'
              stroke='url(#paint0_linear_7452_38196)'
              stroke-width='2'
            />
            <g filter='url(#filter0_i_7452_38196)'>
              {/* mui ten */}
              <path
                className={
                  (white ? 'fill-white' : '') +
                  ' group-hover:fill-white group-hover:translate-x-[0.09rem] duration-300 ease-linear'
                }
                d='M12 20L20 27L16.7816 20L20 13L12 20Z'
                fill='#E64827'
              />
            </g>
          </g>
          <defs>
            <filter
              id='filter0_i_7452_38196'
              x='12'
              y='13'
              width='28'
              height='18'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood
                flood-opacity='0'
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
                result='effect1_innerShadow_7452_38196'
              />
            </filter>
            <linearGradient
              id='paint0_linear_7452_38196'
              x1='27'
              y1='20'
              x2='16'
              y2='20'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#F2531C' />
              <stop
                offset='1'
                stop-color='#F2531C'
                stopOpacity='0'
              />
            </linearGradient>
            <clipPath id='clip0_7452_38196'>
              <rect
                width='40'
                height='40'
                rx='20'
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  )
}
