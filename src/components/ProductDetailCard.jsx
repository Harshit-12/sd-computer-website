import { CheckCircle2, MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function ProductDetailCard({ product, enquiry }) {
  const message = `Hello S.D. COMPUTER, I am interested in ${product.name}. Please share current availability and exact specifications.`

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="h-56 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-950">
          {product.name}
        </h3>

        {product.price && (
          <p className="mt-2 text-lg font-extrabold text-red-600">
            {product.price}
          </p>
        )}

        {product.brands && (
          <p className="mt-2 text-sm text-slate-600">
            <strong>Available brands:</strong> {product.brands}
          </p>
        )}

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {product.description}
        </p>

        <h4 className="mt-5 font-bold text-blue-950">
          Key features
        </h4>

        <ul className="mt-3 space-y-2">
          {product.highlights.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-slate-600">
              <CheckCircle2 size={17} className="shrink-0 text-green-600" />
              {item}
            </li>
          ))}
        </ul>

        <a
          href={getWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-bold text-white hover:bg-green-700"
        >
          <MessageCircle size={18} />
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  )
}