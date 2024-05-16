import OurTeam from '@/layouts/team'

export default function TeamLayout({ children }) {
  return (
    <main className=''>
      {children}
      <OurTeam />
    </main>
  )
}
