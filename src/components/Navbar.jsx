import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'Tentang' },
    { href: '#services', label: 'Layanan' },
    { href: '#process', label: 'Alur Bisnis' },
    { href: '#contact', label: 'Kontak' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">MILDSHIFT</span>
            <span className="text-gray-800"> PRoject</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-indigo-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-indigo-600 text-white px-4 py-2 shadow hover:bg-indigo-700 transition-colors">
              Konsultasi
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-gray-700">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 rounded-lg border bg-white p-3 shadow">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 hover:bg-gray-50">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 bg-indigo-600 text-white text-center hover:bg-indigo-700">
                Konsultasi
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
