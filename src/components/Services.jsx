import { Wrench, Video, Printer, GraduationCap } from 'lucide-react'
import { services } from '../data/services'
import { getWhatsAppLink } from '../utils/whatsapp'

const icons = {
  Wrench,
  Video,
  Printer,
  GraduationCap,
}

export default function Services() {
  return (
    <section id="services" className="bg-blue-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-widest text-red-400">
            Our Expertise
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Services You Can Count On
          </h2>
          <p className="mt-4 text-blue-100">
            Your one-stop destination for computer and security solutions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon]

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-blue-800 bg-blue-900/60 p-6 transition hover:-translate-y-1 hover:border-red-400"
              >
                <div className="mb-5 inline-flex rounded-xl bg-white/10 p-3 text-red-400">
                  <Icon size={30} />
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100">
                  {service.description}
                </p>
                <a
                  href={getWhatsAppLink(`Hello S.D. COMPUTER, I need information about ${service.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-sm font-bold text-red-300 hover:text-white"
                >
                  Enquire Now →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}