'use client'

import Image from 'next/image'

const galleryItems = [
  {
    src: '/beduda-proses-1.jpg',
    caption: 'Pengerjaan sedot WC di rumah',
  },
  {
    src: '/beduda-proses-2.jpg',
    caption: 'Armada di lokasi pelanggan',
  },
  {
    src: '/beduda-armada.jpg',
    caption: 'Armada BEDUDA',
  },
  {
    src: '/beduda-proses-3.png',
    caption: 'Selang pengerjaan di lokasi',
  },
]

export function Gallery() {
  return (
    <section id="galeri" className="section-pad bg-[#f5f8fc]">
      <div className="shell">
        <p className="eyebrow">DOKUMENTASI PEKERJAAN</p>
        <div className="section-head mt-4">
          <h2 className="section-title">Proses dan Armada BEDUDA</h2>
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            Proses pengerjaan dan armada BEDUDA
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className="flex flex-col overflow-hidden bg-white shadow-sm"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <figcaption className="p-3 text-sm font-semibold text-[#092C59]">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

