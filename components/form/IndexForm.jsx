'use client'

import {useState} from 'react'
import HomeForm from './HomeForm'
import InformationForm from './InformationForm'

export default function IndexHome() {
  const [dataForm, setDataForm] = useState({})
  console.log(dataForm)
  return (
    <div className='flex rounded-[1.5rem] w-full'>
      <HomeForm setDataForm={setDataForm} />
    </div>
  )
}
