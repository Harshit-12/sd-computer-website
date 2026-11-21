import ProductDetailCard from '../../components/ProductDetailCard'
import { macbooks } from '../../data/catelog'

export default function Macbooks() {
  return (
    <main>
      <section className="bg-blue-950 px-4 py-16 text-center text-white">
        <p className="font-bold uppercase tracking-widest text-red-400">
          Apple Collection
        </p>
        <h1 className="mt-3 text-4xl font-extrabold">
          Apple MacBook M1 & M2
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Discover Apple silicon MacBooks for productivity, creative work
          and everyday computing.
        </p>
        <p className="mt-6 text-3xl font-extrabold text-red-400">
          ₹40,000 – ₹1,20,000
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {macbooks.map((product) => (
            <ProductDetailCard key={product.name} product={product} />
          ))}
        </div>
        <p className="mt-8 text-sm leading-6 text-slate-500">
          Prices are indicative. Actual prices depend on model, memory,
          storage, condition and availability.
        </p>
      </section>
    </main>
  )
}