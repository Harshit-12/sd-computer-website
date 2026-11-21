import { Menu, X, Phone } from 'lucide-react'
import { useState } from 'react'
import { BUSINESS } from '../utils/whatsapp'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="S.D. COMPUTER logo"
            className="h-12 w-12 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-blue-900">
              S.D. <span className="text-red-600">COMPUTER</span>
            </h1>
            <p className="text-[10px] font-medium tracking-[2px] text-slate-500">
              YOUR TECHNOLOGY PARTNER
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-red-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${BUSINESS.phones[0]}`}
          className="hidden items-center gap-2 rounded-lg bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 sm:flex"
        >
          <Phone size={16} />
          Call Now
        </a>

        <button
          className="rounded-lg p-2 text-blue-900 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-blue-50 hover:text-red-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}