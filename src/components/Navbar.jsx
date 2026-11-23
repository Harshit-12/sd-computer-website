import { Menu, X, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BUSINESS } from '../utils/whatsapp'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/#products' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Scroll to the correct homepage section after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1)

      // Wait for homepage content to render
      const timer = setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 150)

      return () => clearTimeout(timer)
    }
  }, [location.pathname, location.hash])

  const handleNavigation = (href) => {
    setMenuOpen(false)

    if (href.includes('#')) {
      const sectionId = href.split('#')[1]

      if (location.pathname === '/') {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      } else {
        navigate(`/#${sectionId}`)
      }
    } else {
      navigate(href)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
         

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-blue-900">
              S.D. <span className="text-red-600">COMPUTER</span>
            </h1>
            <p className="text-[10px] font-medium tracking-[2px] text-slate-500">
              YOUR TECHNOLOGY PARTNER
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavigation(link.href)}
              className="text-sm font-semibold text-slate-700 transition hover:text-red-600"
            >
              {link.label}
            </button>
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
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavigation(link.href)}
              className="block w-full rounded-lg px-3 py-3 text-left font-medium text-slate-700 hover:bg-blue-50 hover:text-red-600"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}