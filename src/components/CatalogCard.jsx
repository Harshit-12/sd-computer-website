import { ArrowRight } from 'lucide-react'

export default function CatalogCard({
  image,
  name,
  description,
  price,
  link,
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="h-56 overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-blue-950">{name}</h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
          {description}
        </p>

        {price && (
          <p className="mt-4 font-bold text-red-600">{price}</p>
        )}

        <a
          href={link}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-900 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
        >
          Explore Now <ArrowRight size={17} />
        </a>
      </div>
    </article>
  )
}