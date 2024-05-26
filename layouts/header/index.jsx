import Image from 'next/image'
import WrapNav from './components/wrapnav'
import './nav.css'
import getData from '@/lib/getData'
import { GLOBAL_PAGE_ID } from '@/lib/constants'

export default async function Header() {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${GLOBAL_PAGE_ID}`)

  const dataHeader = dataAcf?.acf?.header
  return (
    <header className='w-full fixed top-0 left-0 z-[10000]'>
      <WrapNav dataHeader={dataHeader} />
    </header>
  )
}
