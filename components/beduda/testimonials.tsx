'use client'

import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    name: 'Made Wirata',
    area: 'Denpasar Selatan',
    review:
      'Respon cepat, 30 menit udah sampai. WC mampet parah langsung lancar, gak bau. Harga jelas di awal, recommended!',
  },
  {
    name: 'Ketut Ardana',
    area: 'Badung - Kuta',
    review:
      'Langganan kos di Kuta, kalau penuh selalu panggil kesini. Mobil besar, sedot bersih sampai tuntas. Mantap pelayanannya.',
  },
  {
    name: 'Putu Lestari',
    area: 'Gianyar - Ubud',
    review:
      'Awalnya takut jorok, tapi petugasnya rapi dan sopan. Selesai disiram bersih lagi. Terima kasih banyak ya pak.',
  },
  {
    name: 'Komang Sudarma',
    area: 'Tabanan - Kediri',
    review:
      'Malam-malam WC luber, panik. Coba hubungi ternyata masih bisa datang. Penyelamat banget, harga masih wajar jam 9 malam.',
  },
  {
    name: 'Gede Wibawa',
    area: 'Buleleng - Singaraja',
    review:
      'Jujur, murah dibanding yang lain. Singaraja jarang ada yang sigap begini. Kerja cepat gak pakai lama.',
  },
  {
    name: 'Ayu Saraswati',
    area: 'Badung - Mengwi',
    review:
      'Buat rumah baru di Mengwi, septictank penuh karena salah gali. Ditangani profesional, dikasih edukasi juga biar gak penuh lagi.',
  },
  {
    name: 'Kadek Agus',
    area: 'Klungkung - Semarapura',
    review:
      'Top! Villa di Nusa Penida juga dilayani, padahal jauh. Armada siap, gak mengecewakan.',
  },
  {
    name: 'Nyoman Suardika',
    area: 'Bangli - Kintamani',
    review:
      'Jalan nanjak ke Kintamani tetap mau datang. Salut. WC hotel lancar lagi buat tamu check-in.',
  },
  {
    name: 'Ilham Saputra',
    area: 'Jembrana - Negara',
    review:
      'Pelayanan ramah, gak bau, harga sesuai. Dari Negara susah cari sedot WC, untung ketemu ini.',
  },
  {
    name: 'Wayan Sudiarta',
    area: 'Karangasem - Amlapura',
    review:
      'Sudah 2x pakai jasa ini di Karangasem. Selalu ontime, hasil bersih. Langganan terus pokoknya.',
  },
  {
    name: 'Luh Sari',
    area: 'Denpasar - Renon',
    review:
      'Ibu-ibu gak ngerti urusan WC, ditangani sampai beres. Petugasnya sopan, gak canggung. Makasih.',
  },
  {
    name: 'Agus Pratama',
    area: 'Tabanan - Canggu',
    review:
      'Kos-kosan di Canggu ada 15 kamar, rutin sedot disini. Ada diskon langganan, jadi lebih hemat.',
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRunning(true)
        }
      },
      { threshold: 0.2 },
    )

    const el = sectionRef.current
    if (el) {
      observer.observe(el)
    }

    return () => {
      if (el) {
        observer.unobserve(el)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="testimoni"
      className="section-pad overflow-hidden bg-white"
    >
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .testimonial-track {
          display: flex;
          width: max-content;
          animation: marquee 60s linear infinite;
          animation-play-state: paused;
        }
        .testimonial-track.is-running {
          animation-play-state: running;
        }
        .testimonial-track:hover {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
      <div className="shell">
        <p className="eyebrow">TESTIMONI PELANGGAN</p>
        <h2 className="section-title mt-4">Pengalaman pelanggan</h2>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div
          className={`testimonial-track flex w-max ${isRunning ? 'is-running' : ''}`}
        >
          <div className="flex shrink-0 gap-6 pr-6">
            {testimonials.map((item) => (
              <article
                key={`${item.name}-${item.area}`}
                className="flex w-[320px] shrink-0 flex-col justify-between border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div>
                  <div
                    className="flex gap-1 text-[#FFB900]"
                    aria-label="5 dari 5 bintang"
                  >
                    ★★★★★
                  </div>
                  <p className="mt-5 text-sm leading-6 text-slate-600">
                    “{item.review}”
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-bold text-[#092C59]">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.area}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex shrink-0 gap-6 pr-6" aria-hidden="true">
            {testimonials.map((item, idx) => (
              <article
                key={`loop-${item.name}-${idx}`}
                className="flex w-[320px] shrink-0 flex-col justify-between border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div>
                  <div
                    className="flex gap-1 text-[#FFB900]"
                    aria-label="5 dari 5 bintang"
                  >
                    ★★★★★
                  </div>
                  <p className="mt-5 text-sm leading-6 text-slate-600">
                    “{item.review}”
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-bold text-[#092C59]">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.area}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
