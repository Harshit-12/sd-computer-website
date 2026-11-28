import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Categories from '../../components/Categories'
import Services from '../../components/Services'
import WhyChooseUs from '../../components/WhyChooseUs'
import ContactSection from '../../components/ContactSection'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import GoogleReview from '../../components/GoogleReview'

export default function Home() {
  useEffect(() => {
    const { hostname, pathname, search, hash } = window.location

    if (hostname !== 'sd-computers.in' && hostname !== 'www.sd-computers.in' && hostname !== 'localhost' && hostname !== '127.0.0.1') {
      window.location.replace(`https://sd-computers.in${pathname}${search}${hash}`)
    }
  }, [])

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <Services />
        <WhyChooseUs />

        <GoogleReview />

        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}