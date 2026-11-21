import { ArrowUpRight } from 'lucide-react'
import { products } from '../data/products'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Categories() {
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-widest text-red-600">
            What We Offer
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
            Explore Our Products
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Find the right technology for your home, office or business.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-blue-950">
                  {product.name}
                </h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
                  {product.description}
                </p>

                <a
                  href={getWhatsAppLink(product.message)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-bold text-red-600 hover:text-blue-900"
                >
                  Enquire Now <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}