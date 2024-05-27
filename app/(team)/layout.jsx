import OurTeam from '@/layouts/team'
import {Suspense} from 'react'

export default function TeamLayout({children}) {
  return (
    <Suspense>
      <main className=''>
        {children}
        <OurTeam />
      </main>
    </Suspense>
  )
}
