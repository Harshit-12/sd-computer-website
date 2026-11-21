import CatalogCard from './CatalogCard'
import { products } from '../data/products'

export default function Categories() {
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-widest text-red-600">
            What We Offer
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
            Explore Our Product Catalogue
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explore our range of laptops, MacBooks, printers and CCTV
            solutions. Contact us for current availability and quotations.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <CatalogCard
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}