import OurTeam from '@/layouts/team'
import TripsForYou from '@/layouts/trip'

export default function TeamTripLayout({children}) {
  return (
    <main>
      {children}
      <OurTeam />
      <TripsForYou />
    </main>
  )
}
