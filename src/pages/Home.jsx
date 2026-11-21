import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import GoogleReview from '../components/GoogleReview'

export default function Home() {
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