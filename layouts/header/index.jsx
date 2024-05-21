import Image from 'next/image'
import WrapNav from './components/wrapnav'
import './nav.css'

export default function Header() {
  return (
    <header className='w-full fixed top-0 left-0 z-[1000]'>
      <WrapNav />
    </header>
  )
}
