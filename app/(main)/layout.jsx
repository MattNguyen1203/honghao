import WrapSocials from '@/components/socials'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/layouts/footer'
import Header from '@/layouts/header'

export default async function MainLayout({ children }) {
  return (
    <main className=''>
      <Header />
      <WrapSocials />
      {children}
      <Footer />
      <Toaster />
    </main>
  )
}
