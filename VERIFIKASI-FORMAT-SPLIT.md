# Laporan Verifikasi: Rapikan Format & Pisah Per Section (Beduda)

Tanggal / Waktu: 2026-10-31 00:07:30 WITA  
Pelaksana: agy (tanpa Ponytail, karena Ponytail tidak terpasang/tersedia di VPS ini sesuai catatan mandor)  
Proyek: Beduda (`/root/beduda-website-development/`)  
URL Preview Demo: https://demo.xvannn07.me  
URL Preview Lokal: http://127.0.0.1:3100  

---

## 1. Keadaan Awal vs Keadaan Akhir Sistem

| Metrik | Sebelum Refactor | Sesudah Refactor | Keterangan |
| :--- | :--- | :--- | :--- |
| **RAM (free -m)** | Mem used: 1243 MB, free: 98 MB, avail: 723 MB | Mem used: 1088 MB, free: 382 MB, avail: 878 MB | Stabil |
| **Swap (free -m)** | Swap used: 1227 MB | Swap used: 1372 MB | Aman |
| **Disk (df -h /)** | Used: 32G (86%), Avail: 5.6G | Used: 33G (86%), Avail: 5.6G | Stabil |
| **BUILD_ID** | `w8uoKwIBb-juwWOOCFWSS` | `7eVuV2vlzHmgcD_XQRuwi` | Berhasil diperbarui |
| **PM2 yokuhost (id 2)** | PID: 2758335, status: online | PID: 2758335, status: online | **TIDAK tersentuh, PID persis sama** |
| **PM2 beduda-preview (id 19)** | PID: 3292336, status: online | PID: 3299248, status: online | Restart berhasil (restarts = 2, 0 crash) |
| **Ukuran Homepage Lokal** | 51.461 byte | 51.477 byte | Perbedaan minor karena serialisasi |
| **Ukuran Homepage Demo** | 51.823 byte | 51.839 byte | Status HTTP 200 via nginx |

---

## 2. Pohon File Baru `components/beduda/`

Folder `components/beduda/` telah dibuat dengan 14 file pendukung (semua diawali `'use client'`):

```text
components/beduda/
├── about.tsx              # Section Tentang (order HP: judul -> gambar -> teks)
├── advantages.tsx         # Section Keunggulan
├── areas.tsx              # Section Area Layanan & Peta Buleleng
├── contact.tsx            # Section Kontak & Form WhatsApp (client state)
├── faq.tsx                # Section FAQ interaktif
├── floating-whatsapp.tsx  # Floating WhatsApp button
├── footer.tsx             # Section CTA + Footer & navigasi
├── gallery.tsx            # Section Galeri dokumentasi pekerjaan
├── header.tsx             # Header navigasi & toggle menu mobile
├── hero.tsx               # Section Hero (order HP: judul -> gambar -> teks)
├── services.tsx           # Section Layanan & iconMap lokal
├── shared.tsx             # HANYA Logo dan Button (dipakai lintas section)
├── shell.tsx              # Shell wrapper (Header + children + Footer + FloatingWhatsApp)
└── testimonials.tsx       # Section Testimoni & data contoh lokal
```

File `components/beduda-site.tsx` setelah refactor HANYA berisi deklarasi `'use client'` dan 15 re-export pernyataan (1 baris per re-export):
- `Logo`, `Button` (dari `./beduda/shared`)
- `Header` (dari `./beduda/header`)
- `Hero` (dari `./beduda/hero`)
- `About` (dari `./beduda/about`)
- `Services` (dari `./beduda/services`)
- `Advantages` (dari `./beduda/advantages`)
- `Gallery` (dari `./beduda/gallery`)
- `Testimonials` (dari `./beduda/testimonials`)
- `Areas` (dari `./beduda/areas`)
- `FAQ` (dari `./beduda/faq`)
- `Contact` (dari `./beduda/contact`)
- `Footer` (dari `./beduda/footer`)
- `FloatingWhatsApp` (dari `./beduda/floating-whatsapp`)
- `Shell` (dari `./beduda/shell`)

`app/page.tsx` tetap mengimpor 12 komponen dari `@/components/beduda-site` tanpa perubahan jalur maupun nama komponen.

---

## 3. Tabel Baris dan Panjang Baris Maksimum (Sebelum vs Sesudah)

| File Sumber | Baris (Sebelum) | Maks Karakter (Sebelum) | Baris (Sesudah) | Maks Karakter (Sesudah) | Keterangan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `app/globals.css` | 36 | 264 | 234 | 59 | Diformat rapi 2 spasi |
| `app/layout.tsx` | 7 | 628 | 53 | 94 | Satu elemen JSX & metadata multi-line |
| `app/page.tsx` | 5 | 154 | 35 | 33 | Struktur JSX per baris, impor rapi |
| `app/robots.ts` | 3 | 149 | 13 | 56 | Diformat multi-line |
| `app/sitemap.ts` | 4 | 350 | 26 | 58 | Diformat multi-line |
| `components/beduda-site.tsx` | 49 | 2.592 | 17 | 61 | **Turun dari 2.592 ke 61 karakter!** |
| `components/beduda/about.tsx` | *(baru)* | - | 47 | 144 | Pengecualian copy text (lihat daftar) |
| `components/beduda/advantages.tsx`| *(baru)* | - | 40 | 80 | Format rapi |
| `components/beduda/areas.tsx` | *(baru)* | - | 65 | 114 | Format rapi |
| `components/beduda/contact.tsx` | *(baru)* | - | 119 | 150 | Pengecualian template string pesan |
| `components/beduda/faq.tsx` | *(baru)* | - | 37 | 138 | Pengecualian class Tailwind summary |
| `components/beduda/floating-whatsapp.tsx` | *(baru)* | - | 19 | 171 | Pengecualian class Tailwind fixed |
| `components/beduda/footer.tsx` | *(baru)* | - | 68 | 107 | Format rapi |
| `components/beduda/gallery.tsx` | *(baru)* | - | 43 | 105 | Format rapi |
| `components/beduda/header.tsx` | *(baru)* | - | 88 | 122 | Pengecualian class Tailwind button |
| `components/beduda/hero.tsx` | *(baru)* | - | 59 | 146 | Pengecualian class Tailwind & copy |
| `components/beduda/services.tsx` | *(baru)* | - | 72 | 98 | Format rapi |
| `components/beduda/shared.tsx` | *(baru)* | - | 38 | 123 | Pengecualian class Tailwind Logo |
| `components/beduda/shell.tsx` | *(baru)* | - | 18 | 62 | Format rapi |
| `components/beduda/testimonials.tsx` | *(baru)* | - | 45 | 77 | Format rapi |
| `components/ui/button.tsx` | 58 | 607 | 58 | 607 | Tak diubah (Tailwind CVA variants) |
| `lib/utils.ts` | 6 | 45 | 6 | 45 | Sudah rapi |
| `src/config/site.ts` | 12 | 234 | 28 | 122 | Pengecualian default arg whatsappUrl |
| `src/data/faq.ts` | 10 | 182 | 34 | 143 | Pengecualian string jawaban FAQ |
| `src/data/service-areas.ts` | 1 | 159 | 11 | 35 | Diformat 1 array item per baris |
| `src/data/services.ts` | 8 | 392 | 86 | 132 | Pengecualian string detail layanan |

---

## 4. Daftar Pengecualian Baris Panjang (> 120 Karakter)

Sesuai ketentuan §2a, string class Tailwind panjang, URL, dan literal teks panjang yang nilainya akan berubah jika dipotong dipertahankan dan didaftar:

1. `components/beduda/about.tsx` (baris 29, 144 kar):
   - Isi: teks deskripsi "BEDUDA hadir sebagai solusi kebutuhan sedot WC..." (literal copy).
2. `components/beduda/contact.tsx` (baris 19, 150 kar):
   - Isi: template string URL WhatsApp message `const text = \`Halo BEDUDA, saya ${form.name}...\``.
3. `components/beduda/faq.tsx` (baris 21, 138 kar):
   - Isi: class Tailwind panjang pada tag `<summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold text-[#092C59]">`.
4. `components/beduda/floating-whatsapp.tsx` (baris 14, 171 kar):
   - Isi: class Tailwind posisi & animasi mengambang `<a className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#0b9b60] text-white shadow-lg shadow-[#0b9b60]/30 transition hover:scale-105">`.
5. `components/beduda/header.tsx` (baris 45, 122 kar):
   - Isi: class Tailwind tombol kontak header desktop `<a className="hidden items-center gap-2 rounded-full bg-[#0b9b60] px-4 py-2.5 text-sm font-bold text-white sm:flex">`.
6. `components/beduda/hero.tsx`:
   - Baris 18 (140 kar): class Tailwind judul H1 `mt-5 max-w-xl font-display text-5xl font-extrabold leading-[1.04] tracking-[-.055em] text-[#092C59] md:text-6xl`.
   - Baris 25 (146 kar): teks deskripsi Hero "BEDUDA membantu menangani septic tank penuh...".
   - Baris 33 (133 kar): class Tailwind container fitur badge `mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-5 text-sm font-semibold text-slate-600`.
   - Baris 46 (141 kar): class Tailwind card foto truk hero `order-2 animate-rise-delay overflow-hidden rounded-[2rem] bg-[#092C59] shadow-2xl shadow-[#092C59]/15 lg:order-none`.
7. `components/beduda/shared.tsx` (baris 13, 123 kar):
   - Isi: class Tailwind ikon kotak huruf B Logo `grid size-10 place-items-center rounded-xl bg-[#FFB900] text-lg font-black italic tracking-tighter`.
8. `components/ui/button.tsx` (baris 7, 13, 15, 17, 19, 25, 26, 30):
   - Isi: class string Tailwind CVA variants bawaan komponen shadcn button.
9. `src/config/site.ts` (baris 26, 122 kar):
   - Isi: default message parameter fungsi `whatsappUrl`.
10. `src/data/faq.ts` (baris 4, 8, 12; 126–143 kar):
    - Isi: string teks jawaban FAQ.
11. `src/data/services.ts` (baris 9, 132 kar):
    - Isi: string detail layanan sedot WC.

---

## 5. Bukti Integritas Tampilan & Logika (Angka Grep Sebelum vs Sesudah)

| Pola Pencarian | Sebelum Refactor | Sesudah Refactor | Status |
| :--- | :--- | :--- | :--- |
| Kemunculan class `lg:` di kode sumber | 21 | 21 | **SAMA PERSIS** |
| Kemunculan class `order-1` di kode sumber | 2 | 2 | **SAMA PERSIS** |
| Kemunculan class `order-2` di kode sumber | 2 | 2 | **SAMA PERSIS** |
| Kemunculan class `order-3` di kode sumber | 2 | 2 | **SAMA PERSIS** |
| Kemunculan path `beduda-truck.png` di kode | 3 | 3 | **SAMA PERSIS** |
| Kemunculan `wa.me/6287754545586` di HTML render | 12 | 12 | **SAMA PERSIS** |
| Urutan id section di HTML render | 1. `beranda`<br>2. `tentang`<br>3. `layanan`<br>4. `keunggulan`<br>5. `galeri`<br>6. `testimoni`<br>7. `area-layanan`<br>8. `faq`<br>9. `kontak` | 1. `beranda`<br>2. `tentang`<br>3. `layanan`<br>4. `keunggulan`<br>5. `galeri`<br>6. `testimoni`<br>7. `area-layanan`<br>8. `faq`<br>9. `kontak` | **SAMA PERSIS** |
| Konten H1 di HTML render | `Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda` | `Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda` | **SAMA PERSIS** |

---

## 6. Verifikasi Server Sementara & Penayangan Preview

1. **Uji Server Sementara Port Bebas (`3250`):**
   - Diluncurkan dengan `PORT=3250 ./node_modules/.bin/next start -p 3250`.
   - `curl http://127.0.0.1:3250/` menghasilkan HTTP status 200, ukuran 51.477 byte.
   - H1 dan link WhatsApp terverifikasi lengkap.
   - Server dimatikan menggunakan PID proses `next-server` (PID 3299075).
   - Port 3250 terbukti bersih kembali via `ss -tulpn`.
2. **Penayangan ke PM2 `beduda-preview`:**
   - Dijalankan `pm2 restart beduda-preview` dan `pm2 save`.
   - PID lama: 3292336 → PID baru: 3299248.
   - Status: `online`, memory: ~80 MB, 0 restart tak terduga.
   - Port 3100 aktif melayani request preview.
3. **Pengecekan PM2 `yokuhost`:**
   - PID: 2758335 tetap berjalan normal tanpa interupsi, tidak ada restart.
4. **Verifikasi End-to-End Nginx (`https://demo.xvannn07.me/`):**
   - HTTP status: 200 OK.
   - Ukuran: 51.839 byte.
   - Struktur section dan styling identik dengan local preview.

---

## 7. Hal yang Belum Terverifikasi

- **Cek visual di perangkat HP oleh pemilik**: Seluruh struktur class Tailwind (`order-*`, `lg:*`, dsb.) dan DOM identik secara matematis dan lolos uji grep/curl, namun penilaian tampilan visual final pada layar HP tetap diserahkan kepada pemilik situs.
