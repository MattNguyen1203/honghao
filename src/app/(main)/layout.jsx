import WrapSocials from '@/components/socials'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/layouts/footer'
import Header from '@/layouts/header'
import GsapWrap from '@/components/gsap-wrap/GsapWrap'
export default async function MainLayout({ children }) {
  return (
    <main className=''>
      <Header />
      <WrapSocials />
      <GsapWrap >
        {children}
        <Footer />
      </GsapWrap>


      <Toaster />
    </main>
  )
}
