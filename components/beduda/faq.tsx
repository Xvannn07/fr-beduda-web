'use client'

import { ChevronDown } from 'lucide-react'

import { faqs } from '@/src/data/faq'

export function FAQ() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title mt-4">Pertanyaan yang sering diajukan</h2>
          <p className="mt-5 leading-7 text-slate-600">
            Informasi singkat untuk membantu Anda sebelum menghubungi BEDUDA.
          </p>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.slice(0, 7).map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold text-[#092C59]">
                <span>{q}</span>
                <ChevronDown
                  size={19}
                  className="shrink-0 text-[#0879D9] transition group-open:rotate-180"
                />
              </summary>
              <p className="max-w-2xl pt-3 text-sm leading-7 text-slate-600">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
