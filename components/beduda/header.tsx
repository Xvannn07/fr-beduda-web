'use client'

import { useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'

import { whatsappUrl } from '@/src/config/site'
import { Logo } from './shared'

const navItems = [
  ['Tentang', 'tentang'],
  ['Layanan', 'layanan'],
  ['Area Layanan', 'area-layanan'],
  ['FAQ', 'faq'],
  ['Kontak', 'kontak'],
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="shell flex h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex">
          <a
            href="#beranda"
            className="text-sm font-semibold text-slate-600 hover:text-[#0879D9]"
          >
            Beranda
          </a>
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-semibold text-slate-600 hover:text-[#0879D9]"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#0b9b60] px-4 py-2.5 text-sm font-bold text-white sm:flex"
        >
          <MessageCircle size={17} /> WhatsApp
        </a>
        <button
          className="rounded-lg p-2 lg:hidden"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-100 bg-white px-6 py-5 lg:hidden">
          <div className="shell flex flex-col gap-4">
            <a
              onClick={() => setOpen(false)}
              href="#beranda"
              className="font-semibold text-slate-700"
            >
              Beranda
            </a>
            {navItems.map(([label, id]) => (
              <a
                onClick={() => setOpen(false)}
                key={id}
                href={`#${id}`}
                className="font-semibold text-slate-700"
              >
                {label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              className="flex items-center gap-2 font-bold text-[#0b9b60]"
            >
              <MessageCircle size={18} /> Hubungi via WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
