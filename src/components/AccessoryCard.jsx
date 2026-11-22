import { MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function AccessoryCard({ product }) {
  const message = `Hello S.D. COMPUTER, I am interested in ${product.name}. Please share current availability, exact specifications and price.`

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-52 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-extrabold text-blue-950">
          {product.name}
        </h2>

        <p className="mt-2 text-2xl font-extrabold text-red-600">
          {product.price}
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {product.description}
        </p>

        {product.brands.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-bold text-blue-950">
              Available Brands
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.brands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-900"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5">
          <p className="text-sm font-bold text-blue-950">
            Specifications
          </p>

          <ul className="mt-3 space-y-2">
            {product.specifications.map((spec) => (
              <li
                key={spec}
                className="flex items-start gap-2 text-sm text-slate-600"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-green-600"
                />
                {spec}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={getWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 font-bold text-white transition hover:bg-green-700"
        >
          <MessageCircle size={18} />
          Enquire on WhatsApp
          <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  )
}