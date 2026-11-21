import ProductDetailCard from '../../components/ProductDetailCard'
import { printers } from '../../data/catelog'

export default function Printers() {
  return (
    <main>
      <section className="bg-blue-950 px-4 py-16 text-center text-white">
        <p className="font-bold uppercase tracking-widest text-red-400">
          Printing Solutions
        </p>
        <h1 className="mt-3 text-4xl font-extrabold">
          All-in-One Printers
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Find printing solutions for home, offices, shops and businesses.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {printers.map((product) => (
            <ProductDetailCard key={product.name} product={product} />
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 p-7">
          <h2 className="text-2xl font-extrabold text-blue-950">
            Laser vs Inkjet Printers
          </h2>

          <div className="mt-6 grid gap-7 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-blue-900">
                Laser Printers
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Laser printers use toner powder and a laser-based printing
                process. They are generally a good choice for frequent
                document printing, especially when sharp text and high
                printing volumes are important.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-900">
                Inkjet Printers
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Inkjet printers spray tiny droplets of liquid ink onto paper.
                They are versatile for home use, colour documents and photos,
                depending on the printer model and ink system.
              </p>
            </div>
          </div>

          <p className="mt-6 rounded-lg bg-blue-50 p-4 text-sm leading-6 text-blue-950">
            <strong>Which should you choose?</strong> Choose laser for
            frequent text-heavy printing and consider inkjet for mixed
            colour and occasional printing. Compare purchase price,
            consumable cost and expected print volume before deciding.
          </p>
        </div>
      </section>
    </main>
  )
}