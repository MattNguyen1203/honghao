'use client'

import {useState} from 'react'
import AccordionCustom from '@/sections/common/accordion'
import './styles.css'
import {regName, regPhone, regEmail} from '@/lib/reg'

export default function FrequentlyAskedQuestions() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    phone: '',
    email: '',
  })
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (errorMessage.name || errorMessage.phone || errorMessage.email) {
      console.log('Ngu')
    } else {
      console.log('Sending...')
    }
  }
  return (
    <section className='kKao4-container'>
      <h3 className='h3 mb-6 md:mb-[2.8rem]'>Frequently asked Questions</h3>
      <div className='flex flex-col md:flex-row md:space-x-[11.88rem]'>
        <AccordionCustom data={new Array(6).fill(0)} />
        <div className='md:w-[35.3125rem] flex-none xmd:mt-8'>
          <h4 className='mb-6 h4 md:mb-8'>Ask a different question</h4>
          <form
            className='grid grid-cols-2 gap-4'
            onSubmit={(e) => handleOnSubmit(e)}
          >
            <label className='col-span-1'>
              <input
                type='text'
                name='name'
                placeholder='Full name *'
                className='py-[0.62rem] w-full font-tripsans text-0.875 placeholder:text-greyscale-40 leading-1.2 tracking-[0.00875rem] placeholder:font-tripsans placeholder:opacity-80 border-b border-greyscale-10 h-[2.31rem]'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => {
                  setErrorMessage({
                    ...errorMessage,
                    name: regName.test(name) ? '' : 'Tên không hợp lệ',
                  })
                }}
              />
              <p className='text-0.75 md:text-0.875 font-tripsans font-semibold text-red-500 mt-0.5'>
                {errorMessage.name}
              </p>
            </label>
            <div className='col-span-1'>
              <input
                type='tel'
                name='tel'
                placeholder='Phone *'
                className='py-[0.62rem] w-full font-tripsans text-0.875 placeholder:text-greyscale-40 leading-1.2 tracking-[0.00875rem] placeholder:font-tripsans placeholder:opacity-80 border-b border-greyscale-10 h-[2.31rem]'
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => {
                  setErrorMessage({
                    ...errorMessage,
                    phone: regPhone.test(phone)
                      ? ''
                      : 'Số điện thoại không hợp lệ',
                  })
                }}
              />
              <p className='text-0.75 md:text-0.875 font-tripsans font-semibold text-red-500 mt-0.5'>
                {errorMessage.phone}
              </p>
            </div>
            <div className='col-span-2'>
              <input
                type='email'
                name='email'
                placeholder='Your email *'
                className='col-span-2 py-[0.62rem] w-full font-tripsans text-0.875 placeholder:text-greyscale-40 leading-1.2 tracking-[0.00875rem] placeholder:font-tripsans placeholder:opacity-80 border-b border-greyscale-10 h-[2.31rem]'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  setErrorMessage({
                    ...errorMessage,
                    email: regEmail.test(email) ? '' : 'Email không hợp lệ',
                  })
                }}
              />
              <p className='text-0.75 md:text-0.875 font-tripsans font-semibold text-red-500 mt-0.5'>
                {errorMessage.email}
              </p>
            </div>
            <textarea
              rows={5}
              placeholder='Message'
              className='col-span-2 py-[0.62rem] w-full font-tripsans text-0.875 placeholder:text-greyscale-40 leading-1.2 tracking-[0.00875rem] placeholder:font-tripsans placeholder:opacity-80 border-b border-greyscale-10'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type='submit'
              className='text-greyscale-0 font-tripsans text-0.875 font-extrabold leading-1.2 uppercase w-full rounded-[0.5rem] bg-orange-normal hover:bg-orange-normal-hover transition-400 h-11 col-span-2 mt-2'
            >
              Send a message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}