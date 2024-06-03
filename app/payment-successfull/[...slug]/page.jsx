import ThankYou from '@/sections/thankyou'
import React from 'react'

const PaymentSuccessFull = async ({searchParams, params: {slug}}) => {
  return (
    <ThankYou
      searchParams={searchParams}
      slug={slug}
    />
  )
}

export default PaymentSuccessFull
