import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact S.D. COMPUTER on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition hover:scale-110 hover:bg-green-700"
    >
      <MessageCircle size={28} />
    </a>
  )
}