import { MapPin, Phone, MessageCircle } from 'lucide-react'
import { BUSINESS, getWhatsAppLink } from '../utils/whatsapp'

export default function ContactSection() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <p className="font-bold uppercase tracking-widest text-red-600">
            Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
            Visit S.D. COMPUTER
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Looking for a laptop, computer repair or CCTV installation?
            Contact us to discuss your requirements.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-red-600" />
              <div>
                <h3 className="font-bold text-blue-950">Our Address</h3>
                <p className="mt-1 text-slate-600">{BUSINESS.address}</p>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm font-bold text-blue-800 underline"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 shrink-0 text-red-600" />
              <div>
                <h3 className="font-bold text-blue-950">Call Us</h3>
                {BUSINESS.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="mt-1 block text-slate-600 hover:text-red-600"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-blue-950 p-8 text-white sm:p-10">
          <MessageCircle size={42} className="text-red-400" />
          <h3 className="mt-6 text-2xl font-bold">
            Have a requirement?
          </h3>
          <p className="mt-3 leading-7 text-blue-100">
            Send us a WhatsApp message. Tell us what you need, and our team
            can help you with product and service enquiries.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700"
          >
            <MessageCircle size={19} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}