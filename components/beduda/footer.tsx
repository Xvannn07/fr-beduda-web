'use client'

import { siteConfig, whatsappUrl } from '@/src/config/site'
import { Button, Logo } from './shared'

const navItems = [
  ['Tentang', 'tentang'],
  ['Layanan', 'layanan'],
  ['Area Layanan', 'area-layanan'],
  ['FAQ', 'faq'],
  ['Kontak', 'kontak'],
] as const

export function Footer() {
  return (
    <>
      <section className="section-pad bg-[#092C59]">
        <div className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-[#FFB900]">BUTUH BANTUAN?</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold text-white md:text-4xl">
              WC bermasalah? Hubungi BEDUDA sekarang!
            </h2>
          </div>
          <Button href={whatsappUrl()} yellow>
            Chat WhatsApp
          </Button>
        </div>
      </section>
      <footer className="bg-[#061f3f] text-white">
        <div className="shell grid gap-10 py-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
              Solusi sedot WC, septic tank, dan saluran limbah di Kabupaten Buleleng.
            </p>
          </div>
          <div>
            <p className="footer-label">Navigasi</p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-300">
              <a href="#beranda">Beranda</a>
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-label">Hubungi kami</p>
            <p className="mt-5 text-sm text-slate-300">
              {siteConfig.contact.phone}
              <br />
              {siteConfig.contact.email}
              <br />
              Kabupaten Buleleng, Bali
            </p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="shell py-5 text-xs text-slate-400">
            © {new Date().getFullYear()} BEDUDA. Informasi layanan dapat berubah.
          </div>
        </div>
      </footer>
    </>
  )
}
