'use client'

import {
  ArrowRight,
  Building2,
  Check,
  CircleAlert,
  Clock,
  Droplets,
  Waves,
} from 'lucide-react'

import { services } from '@/src/data/services'
import { whatsappUrl } from '@/src/config/site'

const iconMap = {
  droplets: Droplets,
  waves: Waves,
  'circle-alert': CircleAlert,
  pipe: Waves,
  'square-check': Check,
  'building-2': Building2,
  clock: Clock,
}

export function Services() {
  return (
    <section id="layanan" className="section-pad bg-[#f5f8fc]">
      <div className="shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">LAYANAN BEDUDA</p>
            <h2 className="section-title mt-4">Layanan kami</h2>
          </div>
          <p className="max-w-sm text-slate-600">
            Berbagai solusi untuk kebutuhan WC, septic tank, dan saluran pembuangan.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => {
            const Icon =
              iconMap[service.icon as keyof typeof iconMap] || Droplets
            const waMessage =
              service.slug === 'jam-operasional'
                ? 'Halo BEDUDA, saya ingin bertanya tentang jam operasional.'
                : `Halo BEDUDA, saya ingin bertanya tentang layanan ${service.title}.`
            return (
              <article key={service.slug} className="service-card bg-white">
                <span className="service-icon">
                  <Icon size={23} />
                </span>
                <span className="mt-8 block text-xs font-bold text-[#20BCEB]">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-[#092C59]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.short}
                </p>
                <a
                  href={whatsappUrl(waMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0879D9]"
                >
                  Tanya via WhatsApp <ArrowRight size={16} />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
