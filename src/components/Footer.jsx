import { BUSINESS } from '../utils/whatsapp'

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 lg:px-8">
        <div>
          <h3 className="text-xl font-extrabold">
            S.D. <span className="text-red-500">COMPUTER</span>
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Your Technology Partner
          </p>
        </div>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>

        <p className="text-sm text-slate-400">
          Kidwai Nagar, Kanpur
        </p>
      </div>
    </footer>
  )
}