import OurTeam from '@/layouts/team'
import {GLOBAL_PAGE_ID} from '@/lib/constants'
import getData from '@/lib/getData'
import {Suspense} from 'react'

export default async function TeamLayout({children}) {
  return (
    <main className=''>
      {children}
      <OurTeam />
    </main>
  )
}
