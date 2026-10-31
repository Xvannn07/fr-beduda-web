import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BEDUDA Jasa Kuras WC',
    short_name: 'BEDUDA',
    description:
      'BEDUDA — jasa sedot WC, kuras septic tank, sedot limbah, dan pembersihan saluran mampet di Buleleng dan seluruh Bali. Layanan 24 jam. Hubungi WhatsApp 0877 5454 5586 atau email bedudawc@gmail.com.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#092C59',
    icons: [
      {
        src: '/beduda-logo-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
