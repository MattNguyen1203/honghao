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
  }, [])

  useEffect(() => {
    const handleSecureHash = () => {
      if (!CryptoJS || !CryptoJS.enc || !CryptoJS.enc.Hex) {
        console.error('CryptoJS or required properties are undefined')
        return
      }

      const paramsGenerate = generateParams(true, searchParams?.vpc_MerchTxnRef)

      if (!paymentOnepay?.SECRET_KEY_HASH) {
        console.error('SECRET_KEY_HASH is undefined')
        return
      }

      const secretWordArray = CryptoJS?.enc?.Hex?.parse(
        paymentOnepay?.SECRET_KEY_HASH,
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
    <section className='w-screen h-screen overflow-hidden  bg-green-normal'>
      <div className='container xmd:pt-[4rem] pt-[10rem] flex flex-col items-center justify-center text-greyscale-0'>
        <h2 className='xmd:text-[2rem] xdm:!text-center text-center'>
          Thank You For Booking Our Tour!
        </h2>
        <div className='flex xmd:flex-col items-center justify-center xmd:mt-[1rem] mt-[5rem]'>
          <div className='flex flex-col md:mr-[1rem]'>
            {/* <div className='text-3'>Hong Hao Travel</div> */}
            <Image
              src={'/imgs/home/bgThanks.jpg'}
              alt='hong hao travel'
              width={500}
              height={500}
              className='object-cover w-[40rem] xmd:w-[23rem] xmd:h-[10rem] h-[30rem]  xmd: rounded-md'
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className=' xmd:mt-[1rem] text-3 xmd:text-[2.5rem] font-semibold capitalize font-londrina'>
              {isSuccessfull ? 'Successful Payment!!!' : 'Payment failed'}
            </div>
            <div className='xmd:mt-[1rem] mt-[2rem] text-125 font-semibold capitalize w-[60%] text-center text-greyscale-0/70 font-londrina'>
              Hope you have an enjoyable experience on this trip. We will
              contact you as soon as possible.
            </div>

            <Button className='xmd:mt-[1rem] mt-[3rem]'>
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
