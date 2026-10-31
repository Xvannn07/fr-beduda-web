'use client'

import type { ReactNode } from 'react'

import { Header } from './header'
import { Footer } from './footer'
import { FloatingWhatsApp } from './floating-whatsapp'

export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
