export const siteConfig = {
  name: 'BEDUDA',
  fullName: 'BEDUDA Jasa Kuras WC',
  description:
    'Jasa sedot WC dan pembersihan saluran di Kabupaten Buleleng, Bali.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  contact: {
    whatsapp: '6287754545586',
    phone: '0877 5454 5586',
    email: 'bedudawc@gmail.com',
  },
  address: {
    street: 'Alamat kantor belum dikonfirmasi',
    district: 'Buleleng',
    city: 'Kabupaten Buleleng',
    province: 'Bali',
    country: 'Indonesia',
  },
  mapQuery: 'Kabupaten Buleleng, Bali, Indonesia',
  social: {
    instagram: 'https://instagram.com/',
  },
} as const

export const whatsappUrl = (
  message = 'Halo BEDUDA, saya ingin bertanya mengenai layanan sedot WC. Apakah bisa mendapatkan informasi lebih lanjut?',
) =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`
