import OurTeam from '@/layouts/team'

export default function TeamLayout({children}) {
  return (
    <main className='pt-[6.5rem]'>
      {children}
      <OurTeam />
    </main>
  )
}
