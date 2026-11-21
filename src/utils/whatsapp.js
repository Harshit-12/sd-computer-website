export const BUSINESS = {
  name: 'S.D. COMPUTER',
  address: '128/138, K-Block, Kidwai Nagar, Kanpur - 208011',
  phones: ['7007821129', '9455816112', '9580123918'],
  whatsapp: '917007821129',
}

export function getWhatsAppLink(message = 'Hello S.D. COMPUTER, I need more information.') {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`
}