'use client'

import Image from 'next/image'
import { MapPin, ShieldCheck, Zap } from 'lucide-react'

import { whatsappUrl } from '@/src/config/site'
import { Button } from './shared'

export function Hero() {
  return (
    <section id="beranda" className="overflow-hidden bg-[#f5f8fc]">
      <div className="shell grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[.9fr_1.1fr] lg:py-24">
        <div className="contents animate-rise lg:block">
          <div className="order-1 lg:order-none">
            <p className="eyebrow">
              <span className="dot" /> JASA KURAS WC · SELURUH BALI
            </p>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-extrabold leading-[1.04] tracking-[-.055em] text-[#092C59] md:text-6xl">
              Solusi Sedot WC dan Saluran Limbah untuk{' '}
              <span className="text-[#0879D9]">Rumah Anda</span>
            </h1>
          </div>
          <div className="order-3 lg:order-none">
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              BEDUDA membantu menangani septic tank penuh, WC mampet, dan saluran limbah dengan pelayanan responsif di Seluruh Bali.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={whatsappUrl()}>Hubungi via WhatsApp</Button>
              <a href="#layanan" className="btn-light">
                Lihat Layanan
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-5 text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-2">
                <Zap size={16} className="text-[#FFB900]" /> Respons Cepat
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#0879D9]" /> Peralatan Memadai
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-[#0879D9]" /> Melayani Seluruh Bali
              </span>
            </div>
          </div>
        </div>
        <div className="order-2 animate-rise-delay overflow-hidden rounded-[2rem] bg-[#092C59] shadow-2xl shadow-[#092C59]/15 lg:order-none">
          <Image
            src="/beduda-poster-utama.jpg"
            alt="Poster BEDUDA Jasa Kuras WC"
            width={1536}
            height={1024}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
