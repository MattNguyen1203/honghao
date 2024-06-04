'use client'
import {Button} from '@/components/customCn/button'
import {FORM_API, GOOGLE_KEY, paymentOnepay} from '@/lib/constants'
import {generateParams, generateParamsPayment} from '@/lib/payment'
// import {FORM_API} from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, {useCallback, useEffect, useState} from 'react'
import CryptoJS from 'crypto-js'
import {parseQueryString} from '@/lib/utils'
import {useRouter} from 'next/navigation'

const ThankYou = ({searchParams, slug}) => {
  const [isSuccessfull, setIsSuccessfull] = useState(false)

  const router = useRouter()

  const postFile = useCallback(async (newvalue, status) => {
    const listValue = {
      username: newvalue?.username,
      email: newvalue?.email,
      phone: newvalue?.phone,
      typeoftour: newvalue?.tourtype,
      choosedays: newvalue?.tourduration,
      message: newvalue?.message,
      pickup: newvalue?.pickup,
      droff: newvalue?.droff,
      dob: newvalue?.departuredate,
      enddate: newvalue?.enddate,
      address: newvalue?.address,
      destination: newvalue?.destination,
      totalPax: newvalue?.selfPax + newvalue?.localPax,
      titleTour: newvalue?.titleTour,
      totalPrice: newvalue?.TOTAL,
      paxValueLocal: newvalue?.localPax,
      paxValueSelf: newvalue?.selfPax,
      status: status,
      orderId: newvalue?.orderId,
      method: newvalue?.method,
    }
    const res = await fetch(`/api/postForm`, {
      method: 'POST',
      body: JSON.stringify(listValue),
    })

    // if (res.ok) {
    //   router.push(`/payment-successfull/${newvalue?.orderId}`)
    // }
    // console.log('res', res)
  }, [])

  useEffect(() => {
    const handleSecureHash = () => {
      const paramsGenerate = generateParams(true, searchParams?.vpc_MerchTxnRef)
      const secretWordArray = CryptoJS.enc.Hex.parse(
        paymentOnepay.SECRET_KEY_HASH,
      )
      const hash = CryptoJS.HmacSHA256(paramsGenerate, secretWordArray)
      const vpc_SecureHash = hash.toString(CryptoJS.enc.Hex).toUpperCase()
      return vpc_SecureHash
    }

    const fetchData = async () => {
      //check onepay success or failed
      const result = await fetch('/api/payment', {
        method: 'POST',
        body: JSON.stringify({
          vpc_AccessCode: paymentOnepay.ACCESS_CODE,
          vpc_MerchTxnRef: searchParams?.vpc_MerchTxnRef,
          vpc_Merchant: paymentOnepay.MERCHANT_ID,
          vpc_Password: 'op123456',
          vpc_User: 'op01',
          vpc_Version: '2',
          vpc_SecureHash: handleSecureHash(),
        }),
      })

      const data = await result.text()
      const parseData = parseQueryString(data)

      if (parseData?.vpc_TxnResponseCode) {
        //if success => get data and push a new order
        setIsSuccessfull(true)
        const res = await fetch('/api/getData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({slug: slug?.[0]}),
        })

        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await res.json()
        const finalData = await JSON.parse(data)
        console.log('finalData', finalData)

        if (finalData?.orderId) {
          router.push(`/payment-successfull/${finalData?.orderId}`)

          postFile(finalData, 'Payment Successfull')
        } else {
          console.log('have something wrong')
        }
      } else {
        setIsSuccessfull(false)
      }
    }

    fetchData()
  }, [slug])

  return (
    <section className=' bg-green-normal w-screen h-screen overflow-hidden'>
      <div className='container pt-[10rem] flex flex-col items-center justify-center text-greyscale-0'>
        <h2>Thank You For Booking Our Tour!</h2>
        <div className='flex items-center justify-center mt-[5rem]'>
          <div className='flex flex-col mr-[1rem]'>
            {/* <div className='text-3'>Hong Hao Travel</div> */}
            <Image
              src={'/imgs/home/bgThanks.jpg'}
              alt='hong hao travel'
              width={500}
              height={500}
              className='object-cover w-[40rem] h-[30rem] rounded-md'
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className=' text-3 font-semibold capitalize font-londrina'>
              {isSuccessfull ? 'Successful Payment!!!' : 'Payment failed'}
            </div>
            <div className='mt-[2rem] text-125 font-semibold capitalize w-[60%] text-center text-greyscale-0/70 font-londrina'>
              Hope you have an enjoyable experience on this trip. We will
              contact you as soon as possible.
            </div>

            <Button className='mt-[3rem]'>
              <Link
                href='/'
                className='font-londrina tracking-[1.2px]'
              >
                Homepage
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThankYou
