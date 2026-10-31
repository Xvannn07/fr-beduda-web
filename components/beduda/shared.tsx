'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Logo() {
  return (
    <a
      href="#beranda"
      className="flex items-center gap-2.5 text-[#092C59]"
      aria-label="BEDUDA Beranda"
    >
      <Image
        src="/beduda-logo.jpg"
        alt="Logo BEDUDA Jasa Kuras WC"
        width={1254}
        height={1254}
        className="h-12 w-12 rounded-xl bg-white object-cover"
      />
    </a>
  )
}

export function Button({
  href,
  children,
  yellow = false,
}: {
  href: string
  children: ReactNode
  yellow?: boolean
}) {
  return (
    <a href={href} className={yellow ? 'btn-yellow' : 'btn-primary'}>
      {children}
      <ArrowRight size={17} />
    </a>
  )
}
