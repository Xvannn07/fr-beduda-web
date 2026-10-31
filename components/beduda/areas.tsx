'use client'

import { ArrowRight, MapPin } from 'lucide-react'

import { areas } from '@/src/data/service-areas'
import { whatsappUrl } from '@/src/config/site'
import { Button } from './shared'

export function Areas() {
  return (
    <section id="area-layanan" className="section-pad bg-[#f5f8fc]">
      <div className="shell grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="eyebrow">JANGKAUAN LAYANAN</p>
          <h2 className="section-title mt-4">
            Melayani wilayah Di Seluruh Bali.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Melayani kebutuhan sedot WC di berbagai wilayah Seluruh Bali.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3">
            {areas.map((area) => (
              <span
                key={area}
                className="flex items-center gap-2 text-sm font-semibold text-[#192B43]"
              >
                <MapPin size={15} className="text-[#20BCEB]" />
                {area}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Button
              href={whatsappUrl(
                'Halo BEDUDA, saya ingin menanyakan jangkauan layanan di wilayah saya.',
              )}
            >
              Tanyakan jangkauan
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-[1.75rem] border border-[#dce6ef] bg-white shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=-8.1448984,115.0897827&z=17&output=embed"
              title="Peta kantor BEDUDA"
              className="h-[360px] min-h-[360px] w-full border-0"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl border border-white/70 bg-white p-5 shadow-sm">
            <p className="eyebrow">PETA KANTOR BEDUDA</p>
            <a
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0879D9] hover:underline"
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/8%C2%B008'41.6%22S+115%C2%B005'23.2%22E/@-8.1448984,115.0872078,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-8.1448984!4d115.0897827?hl=id&entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D"
            >
              Buka di Google Maps <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

