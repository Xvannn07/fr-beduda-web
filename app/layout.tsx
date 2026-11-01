import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'

import './globals.css'

const SITE_DESCRIPTION =
  'BEDUDA — jasa sedot WC, kuras septic tank, sedot limbah, dan pembersihan saluran mampet di Buleleng dan seluruh Bali. Layanan 24 jam. Hubungi WhatsApp 0877 5454 5586 atau email bedudawc@gmail.com.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BEDUDA Jasa Kuras WC',
  description: SITE_DESCRIPTION,
  telephone: '+6287754545586',
  email: 'bedudawc@gmail.com',
  address: {
    addressLocality: 'Kabupaten Buleleng',
    addressRegion: 'Bali',
    addressCountry: 'ID',
  },
  geo: {
    latitude: -8.1448984,
    longitude: 115.0897827,
  },
  openingHoursSpecification: {
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: [
    'Buleleng',
    'Singaraja',
    'Denpasar',
    'Badung',
    'Gianyar',
    'Tabanan',
    'Karangasem',
    'Klungkung',
    'Jembrana',
    'Bangli',
    'Bali',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  ),
  title: {
    default: 'BEDUDA | Jasa Sedot WC Buleleng',
    template: '%s | BEDUDA',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Jasa Sedot WC Buleleng',
    'Sedot WC Singaraja',
    'Jasa Kuras WC Buleleng',
    'Sedot WC Bali',
    'Kuras Septic Tank Bali',
    'Sedot Limbah Bali',
    'Saluran Mampet Bali',
    'Pembersihan Saluran Mampet',
    'Jasa Sedot WC Denpasar',
    'Sedot WC Badung',
    'Sedot WC Gianyar',
    'Sedot WC Tabanan',
    'Sedot WC Karangasem',
    'Sedot WC Klungkung',
    'Sedot WC Jembrana',
    'Sedot WC Bangli',
  ],
  authors: [{ name: 'BEDUDA' }],
  creator: 'BEDUDA',
  publisher: 'BEDUDA',
  category: 'Jasa Sedot WC',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'BEDUDA Jasa Kuras WC',
    title: 'BEDUDA | Jasa Sedot WC Buleleng',
    description: SITE_DESCRIPTION,
    url: '/',
    images: [
      {
        url: '/beduda-poster-utama.jpg',
        width: 1536,
        height: 1024,
        alt: 'Poster BEDUDA Jasa Kuras WC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BEDUDA | Jasa Sedot WC Buleleng',
    description: SITE_DESCRIPTION,
    images: ['/beduda-poster-utama.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/beduda-logo-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: '/beduda-logo-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#092C59',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
