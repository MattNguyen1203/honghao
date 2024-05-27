'use client'

import {useState} from 'react'
import AccordionCustom from '@/sections/common/accordion'
import {regName, regPhone, regEmail} from '@/lib/reg'
import {useToast} from '@/components/ui/use-toast'

export default function FrequentlyAskedQuestions({data}) {
  const {toast} = useToast()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    phone: '',
    email: '',
  })
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (errorMessage.name || errorMessage.phone || errorMessage.email) {
      toast({
        title: 'Sending information failed',
        description:
          'Please check the information you have filled in again.',
      })
    } else {
      const formData = new FormData()
      formData.append('fullName', name)
      formData.append('phone', phone)
      formData.append('yourEmail', email)
      formData.append('message', message)
      formData.append('_wpcf7_unit_tag', '297')
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}wp-json/contact-form-7/v1/contact-forms/297/feedback`,
        {method: 'POST', body: formData},
      )
      const result = await res.json()
      if (result.status === 'mail_sent') {
        toast({
          title: 'Sending information successfully',
          description:
            'Thank you for submitting the information. We will contact you as soon as possible.',
        })
        setName('')
        setPhone('')
        setEmail('')
        setMessage('')
      } else {
        toast({
          title: 'Sending information failed',
          description:
            'Please check the information you have filled in again.',
        })
      }
      setIsLoading(false)
    }
  }
  return (
    <section className='kKao4-container'>
      <h3 className='h3 mb-6 md:mb-[2.8rem]'>{data.heading}</h3>
      <div className='flex flex-col md:flex-row md:space-x-[11.88rem]'>
        <AccordionCustom data={data.questions} />
        <div className='md:w-[35.3125rem] flex-none xmd:mt-8'>
          <h4 className='mb-6 h4 md:mb-8'>{data.form.heading}</h4>
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
                    name: regName.test(name) ? '' : 'Invalid name',
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
                    phone: regPhone.test(phone) ? '' : 'Invalid phone number',
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
                    email: regEmail.test(email) ? '' : 'Invalid email',
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
              className='text-greyscale-0 font-tripsans text-0.875 font-extrabold leading-1.2 uppercase w-full rounded-[0.5rem] bg-orange-normal hover:bg-orange-normal-hover transition-400 h-11 col-span-2 mt-2 flex flex-row justify-center items-center'
            >
              {data.form.submit_button_text}
              {isLoading && (
                <svg
                  className='z-10 w-5 h-5 animate-spin md:ml-[0.75rem] ml-[0.56rem]'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
