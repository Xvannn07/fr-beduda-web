'use client'

import { type FormEvent, useState } from 'react'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

import { siteConfig, whatsappUrl } from '@/src/config/site'

const operatingHours = ['Senin–Minggu: 24 jam']

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    area: '',
    message: '',
  })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const text = `Halo BEDUDA, saya ${form.name}.\nWhatsApp: ${form.phone}\nLayanan: ${form.service}\nKecamatan: ${form.area}\nPesan: ${form.message}`
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="kontak" className="section-pad bg-[#f5f8fc]">
      <div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">KONTAK BEDUDA</p>
          <h2 className="section-title mt-4">Hubungi BEDUDA</h2>
          <p className="mt-5 leading-7 text-slate-600">
            Butuh bantuan untuk masalah WC atau septic tank? Hubungi kami untuk
            konsultasi dan informasi layanan.
          </p>
          <div className="mt-8 flex flex-col gap-1">
            <a className="contact-item" href={whatsappUrl()}>
              <MessageCircle className="text-[#0b9b60]" />
              <span>
                <small>WhatsApp</small>
                {siteConfig.contact.phone}
              </span>
            </a>
            <a
              className="contact-item"
              href={`tel:${siteConfig.contact.whatsapp}`}
            >
              <Phone className="text-[#0879D9]" />
              <span>
                <small>Telepon</small>
                {siteConfig.contact.phone}
              </span>
            </a>
            <a
              className="contact-item"
              href={`mailto:${siteConfig.contact.email}`}
            >
              <Mail className="text-[#0879D9]" />
              <span>
                <small>Email</small>
                {siteConfig.contact.email}
              </span>
            </a>
            <span className="contact-item">
              <MapPin className="text-[#0879D9]" />
              <span>
                <small>Lokasi umum</small>
                Kabupaten Buleleng, Bali
              </span>
            </span>
            <div className="contact-item items-start">
              <Clock className="mt-0.5 shrink-0 text-[#0879D9]" />
              <span>
                <small>Jam operasional</small>
                <div className="flex flex-col gap-0.5 text-sm">
                  {operatingHours.map((schedule) => (
                    <p key={schedule}>{schedule}</p>
                  ))}
                </div>
              </span>
            </div>
          </div>
        </div>
        <form onSubmit={submit} className="bg-white p-6 shadow-sm sm:p-8">
          <h3 className="font-display text-xl font-bold text-[#092C59]">
            Kirim pertanyaan via WhatsApp
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {(
              [
                ['name', 'Nama'],
                ['phone', 'Nomor WhatsApp'],
                ['service', 'Jenis layanan'],
                ['area', 'Lokasi kecamatan'],
              ] as const
            ).map(([key, label]) => (
              <label
                key={key}
                className="flex flex-col gap-2 text-sm font-semibold text-[#092C59]"
              >
                {label}
                <input
                  required
                  value={form[key]}
                  onChange={(e) =>
                    setForm({ ...form, [key]: e.target.value })
                  }
                  className="border border-slate-200 px-3 py-3 font-normal outline-none focus:border-[#0879D9]"
                  placeholder={label}
                />
              </label>
            ))}
          </div>
          <label className="mt-4 flex flex-col gap-2 text-sm font-semibold text-[#092C59]">
            Pesan
            <textarea
              required
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="min-h-28 border border-slate-200 px-3 py-3 font-normal outline-none focus:border-[#0879D9]"
              placeholder="Ceritakan kebutuhan Anda"
            />
          </label>
          <button className="btn-primary mt-5" type="submit">
            Buka WhatsApp <MessageCircle size={17} />
          </button>
        </form>
      </div>
    </section>
  )
}
