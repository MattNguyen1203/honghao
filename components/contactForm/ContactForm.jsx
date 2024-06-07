import {regName, regPhone, regEmail, regContactSubject} from '@/lib/reg'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import {useState} from 'react'
import useClickOutSide from '@/hooks/useClickOutside'
import {useToast} from '@/components/ui/use-toast'

export default function ContactForm({data}) {
  const {toast} = useToast()
  const [sideRef] = useClickOutSide(() => setIsOpenDropdown(false))
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [contactSubject, setContactSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    phone: '',
    email: '',
    contactSubject: '',
  })
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (
      errorMessage.name ||
      errorMessage.email ||
      errorMessage.phone ||
      errorMessage.contactSubject
    ) {
      toast({
        title: 'Sending information failed',
        description: 'Please check the information you have filled in again.',
      })
      setIsLoading(false)
    } else {
      const listValue = {
        name: name,
        phone: phone,
        email: email,
        contactSubject: contactSubject,
        message: message,
        country: country,
      }
      const res = await fetch(`/api/postContactForm`, {
        method: 'POST',
        body: JSON.stringify(listValue),
      })
      if (res?.ok) {
        toast({
          title: 'Sending information successfully',
          description:
            'Thank you for submitting the information. We will contact you as soon as possible.',
        })
        setName('')
        setPhone('')
        setEmail('')
        setCountry('')
        setContactSubject('')
        setMessage('')
      } else {
        toast({
          title: 'Sending information failed',
          description: 'Please check the information you have filled in again.',
        })
      }
      setIsLoading(false)
    }
  }
  return (
    <div className='absolute top-[9rem] md:top-[14rem] left-1/2 -translate-x-1/2 md:w-[32rem] xmd:px-4 w-full'>
      <Image
        src={'/imgs/contact-us/mountain-deco.png'}
        alt='mountain deco'
        className='absolute top-0 left-0 object-cover w-full -z-10 md:hidden'
        width={390}
        height={884}
      />
      <div className='mb-8 md:mb-12'>
        <h5 className='mb-3 text-center h5 text-greyscale-0 opacity-40'>
          CONTACT
        </h5>
        <h2 className='text-center h2 text-greyscale-0'>{data.heading}</h2>
      </div>
      <form
        className='grid grid-cols-2 gap-4'
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <div className='col-span-1'>
          <input
            type='text'
            name='name'
            placeholder='Full name *'
            className='py-[0.62rem] w-full font-tripsans text-0.875 text-greyscale-0 placeholder:text-[rgba(187,211,200,0.50)] leading-1.2 tracking-[0.00875rem] placeholder:font-tripsans border-b border-[rgba(187,211,200,0.80)] h-[2.31rem]'
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
        </div>
        <div className='col-span-1'>
          <input
            type='tel'
            name='tel'
            placeholder='Phone *'
            className='py-[0.62rem] w-full font-tripsans text-0.875 text-greyscale-0 placeholder:text-[rgba(187,211,200,0.50)] leading-1.2 tracking-[0.00875rem] placeholder:font-tripsans border-b border-[rgba(187,211,200,0.80)] h-[2.31rem]'
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
        <div className='col-span-1'>
          <input
            type='email'
            name='email'
            placeholder='Your email *'
            className='py-[0.62rem] w-full font-tripsans text-0.875 text-greyscale-0 placeholder:text-[rgba(187,211,200,0.50)] leading-1.2 tracking-[0.00875rem] placeholder:font-tripsans border-b border-[rgba(187,211,200,0.80)] h-[2.31rem]'
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
        <div className='col-span-1'>
          <button
            ref={sideRef}
            type='button'
            className='relative flex flex-row justify-center items-center font-tripsans text-0.875 leading-1.2 py-[0.62rem] h-[2.31rem] w-full'
            style={{borderBottom: '1px solid rgba(187, 211, 200, 0.80)'}}
            onClick={() => setIsOpenDropdown(!isOpenDropdown)}
          >
            {country ? (
              <span className='text-greyscale-0'>{country}</span>
            ) : (
              <span className='text-[rgba(187,211,200,0.50)]'>
                Select country
              </span>
            )}
            <Image
              src={'/imgs/contact-us/dropdown.svg'}
              alt='select country'
              className='ml-auto size-5'
              width={120}
              height={120}
            />
            <ul
              className={cn(
                'absolute left-0 w-full p-1 top-full translate-y-1 bg-greyscale-0 rounded-[0.5rem] transition-400',
                {
                  'opacity-0 pointer-events-none scale-90': !isOpenDropdown,
                },
              )}
            >
              <li
                className='w-full py-2.5 text-greyscale-80 hover:bg-greyscale-10/50 transition-400 rounded-[0.5rem] text-start px-3'
                onClick={() => setCountry('America')}
              >
                America
              </li>
              <li
                className='w-full py-2.5 text-greyscale-80 hover:bg-greyscale-10/50 transition-400 rounded-[0.5rem] text-start px-3'
                onClick={() => setCountry('France')}
              >
                France
              </li>
              <li
                className='w-full py-2.5 text-greyscale-80 hover:bg-greyscale-10/50 transition-400 rounded-[0.5rem] text-start px-3'
                onClick={() => setCountry('Canada')}
              >
                Canada
              </li>
              <li
                className='w-full py-2.5 text-greyscale-80 hover:bg-greyscale-10/50 transition-400 rounded-[0.5rem] text-start px-3'
                onClick={() => setCountry('Japan')}
              >
                Japan
              </li>
            </ul>
          </button>
        </div>
        <div className='col-span-2'>
          <input
            type='text'
            name='contactSubject'
            placeholder='Contact subject *'
            className='py-[0.62rem] w-full font-tripsans text-0.875 text-greyscale-0 placeholder:text-[rgba(187,211,200,0.50)] leading-1.2 tracking-[0.00875rem] placeholder:font-tripsans border-b border-[rgba(187,211,200,0.80)] h-[2.31rem]'
            required
            value={contactSubject}
            onChange={(e) => setContactSubject(e.target.value)}
            onBlur={() => {
              setErrorMessage({
                ...errorMessage,
                contactSubject: regContactSubject.test(contactSubject)
                  ? ''
                  : 'Invalid contact object',
              })
            }}
          />
          <p className='text-0.75 md:text-0.875 font-tripsans font-semibold text-red-500 mt-0.5'>
            {errorMessage.contactSubject}
          </p>
        </div>
        <textarea
          rows={5}
          placeholder='Message'
          className='col-span-2 py-[0.62rem] w-full font-tripsans text-0.875 text-greyscale-0 placeholder:text-[rgba(187,211,200,0.50)] leading-1.2 tracking-[0.00875rem] placeholder:font-tripsans border-b border-[rgba(187,211,200,0.80)]'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type='submit'
          className='flex items-center justify-center text-greyscale-0 font-tripsans text-0.875 font-extrabold leading-1.2 uppercase w-full rounded-[0.5rem] bg-orange-normal hover:bg-orange-normal-hover transition-400 h-11 col-span-2 mt-2'
        >
          {isLoading ? (
            <svg
              className='z-10 w-5 h-5 animate-spin2 md:ml-[0.75rem] ml-[0.56rem]'
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
          ) : (
            data.submit_button_text
          )}
        </button>
      </form>
    </div>
  )
}
