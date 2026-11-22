import { accessories } from '../../data/accessories'
import AccessoryCard from '../../components/AccessoryCard'
import { getWhatsAppLink } from '../../utils/whatsapp'
import { MessageCircle, PackageCheck } from 'lucide-react'

export default function Accessories() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 px-4 py-20 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 opacity-95" />

        <div className="relative mx-auto max-w-4xl">
          <p className="font-bold uppercase tracking-[3px] text-red-400">
            S.D. COMPUTER • KIDWAI NAGAR, KANPUR
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
            Computer Components
            <span className="block text-red-400">
              & Accessories
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Explore desktop components, storage devices, memory,
            monitors and essential computer accessories for your
            home, office and business.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#accessories"
              className="rounded-lg bg-red-600 px-7 py-3.5 font-bold text-white hover:bg-red-700"
            >
              Explore Catalogue
            </a>

            <a
              href={getWhatsAppLink('Hello S.D. COMPUTER, I want to enquire about computer components and accessories.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white px-7 py-3.5 font-bold text-white hover:bg-white hover:text-blue-950"
            >
              <MessageCircle size={18} />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section id="accessories" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-bold uppercase tracking-widest text-red-600">
                Our Product Range
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-blue-950">
                Explore Computer Accessories
              </h2>
              <p className="mt-3 text-slate-600">
                Browse our components and enquire about current stock.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-blue-900">
              <PackageCheck size={20} />
              {accessories.length} Product Categories
            </div>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {accessories.map((product) => (
              <AccessoryCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry banner */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-5xl rounded-2xl bg-blue-950 p-8 text-center text-white sm:p-12">
          <h2 className="text-3xl font-extrabold">
            Looking for a specific computer component?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Contact S.D. COMPUTER for current availability,
            specifications and pricing. Our team can help you
            find the right component for your requirements.
          </p>

          <a
            href={getWhatsAppLink('Hello S.D. COMPUTER, I am looking for a computer component. Please help me with availability and pricing.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-red-600 px-7 py-3.5 font-bold text-white hover:bg-red-700"
          >
            <MessageCircle size={19} />
            Enquire Now
          </a>
        </div>
      </section>
    </main>
  )
}