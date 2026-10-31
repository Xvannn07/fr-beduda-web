'use client'

import { MessageCircle } from 'lucide-react'

import { whatsappUrl } from '@/src/config/site'

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Hubungi BEDUDA via WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#0b9b60] text-white shadow-lg shadow-[#0b9b60]/30 transition hover:scale-105"
    >
      <MessageCircle size={25} />
    </a>
  )
}
