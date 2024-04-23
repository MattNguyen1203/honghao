import OurTeam from '@/layouts/team'
import TripsForYou from '@/layouts/trip'

export default function TeamTripLayout({children}) {
  return (
    <main className='pt-[6.5rem]'>
      {children}
      <OurTeam />
      <TripsForYou />
    </main>
  )
}
