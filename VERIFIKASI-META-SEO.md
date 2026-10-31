# Laporan Verifikasi Meta SEO BEDUDA

Tanggal: 31 Oktober 2026
Lingkungan: VPS Linux (RAM 1,9 GiB)
URL Demo: https://demo.xvannn07.me

---

## 1. Verifikasi File Ikon Baru
- File: `public/beduda-logo-512.png` (512x512)
- Hasil cek MD5: `9dd3945f1b250c68e0c3e370c91595dc`
- Status: **Cocok** dengan brief (9dd3945f1b250c68e0c3e370c91595dc).

---

## 2. File yang Dikerjakan / Diubah
1. `app/layout.tsx` (Diubah)
   - Pertahankan `metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com')`.
   - Menambahkan metadata SEO lengkap: title default & template, description 24 jam dengan kontak WhatsApp & email, 16 keywords Bali & kabupaten, authors, creator, publisher, category `Jasa Sedot WC`, canonical `/`, OpenGraph (poster image, locale `id_ID`), Twitter card (`summary_large_image`), icons & apple icon (`/beduda-logo-512.png`), robots & googleBot (`max-image-preview: large`, `max-snippet: -1`).
   - Menyisipkan script JSON-LD `LocalBusiness` di dalam `<body>` dengan detail kontak, geo `-8.1448984, 115.0897827`, alamat daerah Buleleng tanpa `streetAddress`, jam buka `00:00 - 23:59` tanpa `dayOfWeek`, dan 11 area served di Bali.
   - Mempertahankan viewport `themeColor: '#092C59'`, `<html lang="id">`, dan Analytics.
2. `app/manifest.ts` (Dibuat baru)
   - Berisi manifest Web App PWA: name `BEDUDA Jasa Kuras WC`, short_name `BEDUDA`, description, start_url `/`, display `standalone`, background_color `#ffffff`, theme_color `#092C59`, icons `[{ src: '/beduda-logo-512.png', sizes: '512x512', type: 'image/png' }]`.
3. `app/sitemap.ts` (Diubah)
   - Membersihkan rute internal semu (single-page hash `#`).
   - Sitemap sekarang **HANYA** memuat homepage (`siteConfig.url`).
4. `app/robots.ts` (Tidak diubah)
   - Tetap mengizinkan indexing (`Allow: /`) dan mengarahkan ke sitemap.

---

## 3. Catatan BUILD_ID
- **BUILD_ID Lama**: `2Qe1cbZ-Toh42MOIKMMXi`
- **BUILD_ID Baru**: `zgxmjcx_1FSo-kjfKQ8KX`

---

## 4. Status Proses PM2
- **PID yokuhost sebelum**: `2758335`
- **PID yokuhost sesudah**: `2758335` (Tidak tersentuh sama sekali / aman)
- **PID beduda-preview sebelum**: `3566319`
- **PID beduda-preview sesudah**: `3578288` (Berhasil di-restart pada port 3100 dan `pm2 save` telah dijalankan)

---

## 5. Hasil Cek Sementara (Port 3250)
Server sementara dijalankan pada port `3250` dengan `NODE_OPTIONS=--max-old-space-size=1024`.
- **Status HTTP Root (`/`)**: 200 OK
- **`<title>`**: `BEDUDA | Jasa Sedot WC Buleleng`
- **Meta Description**: `BEDUDA — jasa sedot WC, kuras septic tank, sedot limbah, dan pembersihan saluran mampet di Buleleng dan seluruh Bali. Layanan 24 jam. Hubungi WhatsApp 0877 5454 5586 atau email bedudawc@gmail.com.`
- **OpenGraph & Twitter Image**: `https://demo.xvannn07.me/beduda-poster-utama.jpg` (width: 1536, height: 1024, alt: `Poster BEDUDA Jasa Kuras WC`)
- **Twitter Card**: `summary_large_image`
- **Icons**:
  - `<link rel="icon" href="/beduda-logo-512.png" type="image/png" sizes="512x512"/>`
  - `<link rel="apple-touch-icon" href="/beduda-logo-512.png" sizes="512x512" type="image/png"/>`
- **Canonical Link**: `<link rel="canonical" href="https://demo.xvannn07.me"/>`
- **JSON-LD `LocalBusiness`**:
  - `@context`: `https://schema.org`
  - `@type`: `LocalBusiness`
  - `name`: `BEDUDA Jasa Kuras WC`
  - `telephone`: `+6287754545586`
  - `email`: `bedudawc@gmail.com`
  - `address`: `{ addressLocality: 'Kabupaten Buleleng', addressRegion: 'Bali', addressCountry: 'ID' }` (tanpa `streetAddress`)
  - `geo`: `{ latitude: -8.1448984, longitude: 115.0897827 }`
  - `openingHoursSpecification`: `{ opens: '00:00', closes: '23:59' }` (tanpa `dayOfWeek`)
  - `areaServed`: 11 area kabupaten/kota/wilayah di Bali
- **H1 Header**: `<h1 class="mt-5 max-w-xl font-display text-5xl font-extrabold leading-[1.04] tracking-[-.055em] text-[#092C59] md:text-6xl">Solusi Sedot WC dan Saluran Limbah untuk<!-- --> <span class="text-[#0879D9]">Rumah Anda</span></h1>` (Tetap utuh, tidak tersentuh)
- **`/manifest.webmanifest`**: 200 OK (JSON valid sesuai spec)
- **`/sitemap.xml`**: 200 OK (HANYA berisi homepage `https://demo.xvannn07.me`)
- **`/robots.txt`**: 200 OK (Mengarah ke sitemap demo)
- **Port Sementara 3250**: Berhasil dimatikan dan port telah bebas kembali.

---

## 6. Hasil Cek Demo Live (https://demo.xvannn07.me)
- **Status HTTP Root (`https://demo.xvannn07.me`)**: 200 OK
- **`<title>`**: `BEDUDA | Jasa Sedot WC Buleleng`
- **Meta Description**: Sesuai brief
- **OpenGraph & Twitter Tags**: Sesuai brief
- **Icons (`/beduda-logo-512.png`)**: Terhubung dan mengembalikan 200 OK
- **JSON-LD Script**: Ter-render pada response HTML dengan semua atribut terverifikasi
- **`/manifest.webmanifest`**: 200 OK
- **`/sitemap.xml`**: 200 OK (HANYA homepage)
- **`/robots.txt`**: 200 OK
- **Asset Statis**:
  - `https://demo.xvannn07.me/beduda-logo-512.png`: 200 OK
  - `https://demo.xvannn07.me/beduda-poster-utama.jpg`: 200 OK
- **H1**: Tetap utuh tanpa perubahan.
