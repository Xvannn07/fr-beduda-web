'use client'

import { Check, ShieldCheck, Sparkles, Zap } from 'lucide-react'

export function Advantages() {
  const items = [
    ['Respons Cepat', 'Komunikasi yang sigap untuk kebutuhan Anda.', Zap],
    [
      'Peralatan Memadai',
      'Peralatan kerja disiapkan sesuai kebutuhan layanan.',
      ShieldCheck,
    ],
    ['Harga Bersahabat', 'Informasi harga dibicarakan dengan jelas.', Sparkles],
    [
      'Pelayanan Profesional',
      'Bekerja dengan rapi dan mengutamakan kenyamanan.',
      Check,
    ],
  ] as const

  return (
    <section id="keunggulan" className="section-pad bg-white">
      <div className="shell">
        <p className="eyebrow">KEUNGGULAN BEDUDA</p>
        <h2 className="section-title mt-4">Mengapa memilih BEDUDA?</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([title, text, Icon]) => (
            <div key={title} className="border-t-2 border-[#20BCEB] pt-5">
              <Icon className="text-[#0879D9]" size={22} />
              <h3 className="mt-5 font-display font-bold text-[#092C59]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
