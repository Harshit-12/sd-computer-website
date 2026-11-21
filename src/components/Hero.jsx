import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-slate-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-900">
            <ShieldCheck size={16} />
            Your Local Computer Store in Kanpur
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
            Technology made simple.
            <span className="block text-red-600">
              Quality you can trust.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Explore new and refurbished laptops, desktop computers,
            accessories, repair services and professional CCTV solutions
            at S.D. COMPUTER, Kidwai Nagar.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-6 py-3.5 font-bold text-white transition hover:bg-red-600"
            >
              Explore Products <ArrowRight size={18} />
            </a>

            <a
              href={getWhatsAppLink('Hello S.D. COMPUTER, I would like to enquire about your products and services.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-900 px-6 py-3.5 font-bold text-blue-900 transition hover:bg-blue-50"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-slate-600">
            <span>✓ New & Refurbished Laptops</span>
            <span>✓ Repair & CCTV Services</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-full bg-blue-100 blur-3xl" />
          <img
            src="/images/hero-laptop.png"
            alt="Laptop and computer technology"
            className="relative mx-auto w-full max-w-xl rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}