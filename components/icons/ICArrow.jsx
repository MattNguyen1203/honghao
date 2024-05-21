import React from 'react'

const ICArrow = ({color, className}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='14'
      viewBox='0 0 12 14'
      fill='none'
      className={className}
    >
      <path
        d='M12 7L8.17435e-07 14L4.82759 7L0 0L12 7Z'
        fill={color}
      />
    </svg>
  )
}

export default ICArrow
