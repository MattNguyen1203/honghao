import Banner from './Banner'
import Commit from './Commit'
import './about.css'
import OurTeam from '@/layouts/team'
import Breadcrumb from '@/components/breadcrumb'
export default function About() {
  return (
    <main className='about'>
      <Banner />
      <div className='xmd:mt-[0.5rem]'>
        <Breadcrumb divider />
      </div>
      <Commit />
      <div className='xmd:translate-y-[-6rem]'>
        <OurTeam />
      </div>
    </main>
  )
}
