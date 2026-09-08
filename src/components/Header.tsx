import { useState } from 'react'
import { Menu, X, Snowflake } from 'lucide-react'
import Symbol from '../assets/gallery/SYMBOL.png'

const NAV_LINKS = [
  { label: 'Inicio', href: '#' },
  { label: 'Produtos', href: '#Produtos' },
  { label: 'Perguntas Frequentes', href: '#faq' },
  { label: 'Clientes', href: '#client' },
  { label: 'Contato', href: '#Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-container mx-auto flex items-center justify-between px-6 py-6 md:px-10">
        <a href="#" className="flex items-center gap-2 text-sm font-medium tracking-wide text-black">
          <img src={Symbol} alt="Kairos" className="h-5 w-auto" />
          KAIROS
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-black/80">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-black transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hidden md:inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-kairos-bg hover:bg-black/90 transition-colors"
        >
          Fale conosco
        </a>

        <button
          className="md:hidden text-white"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-kairos-surface border-t border-kairos-border px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-white/80 text-sm" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="mt-2 inline-flex justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-kairos-bg"
          >
            Entre em contato.
          </a>
        </div>
      )}
    </header>
  )
}
