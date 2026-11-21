import ProductDetailCard from '../../components/ProductDetailCard'
import { laptopCategories } from '../../data/catelog'
import { getWhatsAppLink } from '../../utils/whatsapp'

export default function Laptops() {
  return (
    <main>
      <section className="bg-blue-950 px-4 py-16 text-center text-white">
        <p className="font-bold uppercase tracking-widest text-red-400">
          S.D. COMPUTER • KIDWAI NAGAR
        </p>
        <h1 className="mt-3 text-4xl font-extrabold">
          Refurbished Business Laptops
        </h1>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
          Explore business and everyday laptops from popular brands.
          Ask us about available processor generations and configurations.
        </p>
        <p className="mt-6 text-3xl font-extrabold text-red-400">
          ₹29,000 – ₹35,000
        </p>
        <p className="mt-2 text-sm text-blue-200">
          Indicative range for listed refurbished laptop categories
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-950">
          Explore Laptop Series
        </h2>
        <p className="mt-3 text-slate-600">
          HP, Dell, ASUS, Acer, Samsung and Lenovo models, subject to availability.
        </p>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {laptopCategories.map((product) => (
            <ProductDetailCard key={product.name} product={product} />
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-slate-50 p-7">
          <h2 className="text-2xl font-bold text-blue-950">
            Laptop configurations available
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            We deal in Intel Core i3, Core i5 and Core i7 laptop configurations.
            The exact processor generation, RAM, SSD capacity, screen size,
            battery condition and warranty vary by individual unit.
          </p>
          <p className="mt-3 leading-7 text-slate-600">
            Ask us for the exact configuration before purchasing so you can
            choose the laptop that best suits your work, studies or business.
          </p>
          <a
            href={getWhatsAppLink('Hello, please share your available refurbished HP, Dell, ASUS, Acer and Lenovo laptop models with their full specifications and prices.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-blue-900 px-6 py-3 font-bold text-white hover:bg-red-600"
          >
            Check Available Laptops
          </a>
        </div>
      </section>
    </main>
  )
}