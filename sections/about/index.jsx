import Banner from "./Banner"
import './about.css'
import Breadcrumb from "@/components/breadcrumb"
export default function About() {
  return <main className='about'>
    <section className=''><Banner /></section>

    
    <section className=''><Breadcrumb type='section' divider /></section>
  </main>
}
