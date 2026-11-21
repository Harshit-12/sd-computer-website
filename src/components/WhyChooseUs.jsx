import { BadgeCheck, Headphones, MapPin, Laptop } from 'lucide-react'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Product Guidance',
    description: 'Get help choosing products that match your requirements.',
  },
  {
    icon: Headphones,
    title: 'Repair Support',
    description: 'Get assistance with computer and laptop repair needs.',
  },
  {
    icon: MapPin,
    title: 'Local Convenience',
    description: 'We provide Doorstep Services.',
  },
  {
    icon: Laptop,
    title: 'Multiple Solutions',
    description: 'Products, accessories, repairs and CCTV under one roof.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-widest text-red-600">
            Why S.D. COMPUTER
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
            Technology Solutions Under One Roof
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-900">
                <Icon size={30} />
              </div>
              <h3 className="mt-5 font-bold text-blue-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}