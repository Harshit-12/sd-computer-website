import ProductDetailCard from '../../components/ProductDetailCard'
import { cctvPackages } from '../../data/catelog'

export default function CCTV() {
  return (
    <main>
      <section className="bg-blue-950 px-4 py-16 text-center text-white">
        <p className="font-bold uppercase tracking-widest text-red-400">
          Security & Surveillance
        </p>
        <h1 className="mt-3 text-4xl font-extrabold">
          CP PLUS CCTV Camera Solutions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Explore four-camera security packages for homes, shops and offices.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {cctvPackages.map((product) => (
            <ProductDetailCard key={product.name} product={product} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-slate-50 p-7">
          <h2 className="text-2xl font-extrabold text-blue-950">
            Why install CCTV?
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            CCTV systems help monitor entrances, shops, offices and other
            important areas. Depending on the selected equipment and setup,
            you can record footage, view cameras live and monitor your
            premises remotely.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Final package pricing may depend on cable length, storage,
            installation requirements and other accessories. Confirm the
            complete quotation before ordering.
          </p>
        </div>
      </section>
    </main>
  )
}