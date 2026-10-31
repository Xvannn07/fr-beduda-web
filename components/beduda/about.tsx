'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'

export function About() {
  return (
    <section id="tentang" className="section-pad bg-white">
      <div className="shell grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 overflow-hidden rounded-[1.75rem] bg-[#e8f7ff] lg:order-none">
          <Image
            src="/beduda-truk-info.jpg"
            alt="Truk layanan BEDUDA"
            width={1600}
            height={900}
            className="aspect-[4/3] object-cover"
          />
        </div>
        <div className="contents lg:block">
          <div className="order-1 lg:order-none">
            <p className="eyebrow">TENTANG BEDUDA</p>
            <h2 className="section-title mt-4">
              Solusi kebersihan untuk{' '}
              <span className="text-[#0879D9]">kenyamanan Anda.</span>
            </h2>
          </div>
          <div className="order-3 lg:order-none">
            <p className="mt-6 max-w-lg leading-8 text-slate-600">
              BEDUDA hadir sebagai solusi kebutuhan sedot WC, septic tank, dan pembersihan saluran limbah untuk rumah maupun bangunan komersial.
            </p>
            <div className="mt-7 grid gap-3 text-sm font-semibold text-[#192B43] sm:grid-cols-3">
              <span className="flex items-center gap-2">
                <Check size={17} className="text-[#0879D9]" /> Pelayanan ramah
              </span>
              <span className="flex items-center gap-2">
                <Check size={17} className="text-[#0879D9]" /> Peralatan memadai
              </span>
              <span className="flex items-center gap-2">
                <Check size={17} className="text-[#0879D9]" /> Komunikasi mudah
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
