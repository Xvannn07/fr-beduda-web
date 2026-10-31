# Laporan Verifikasi — Ganti Kartu Layanan 05 ke Jam Operasional & Update Email

**Waktu Pelaksanaan:** 2026-10-31  
**Pelaksana:** agy (ponytail tidak digunakan / tidak tersedia di VPS)  
**Status Keseluruhan:** Berhasil terverifikasi & ditayangkan (live di demo https://demo.xvannn07.me)

---

## 1. File yang Diubah

1. **`src/data/services.ts`**
   - Mengganti entri kelima (`pembersihan-bak-kontrol`) dengan kartu Jam Operasional:
     - `slug`: `jam-operasional`
     - `title`: `Jam Operasional 24 Jam`
     - `short`: `Senin–Jumat: 24 jam. Hubungi kami via WhatsApp kapan saja.`
     - `icon`: `clock`
     - `detail`: `Layanan BEDUDA buka 24 jam dari Senin sampai Jumat. Hubungi via WhatsApp untuk penjadwalan.`
     - `problems`: `['Senin–Jumat: 24 jam', 'Hubungi via WhatsApp', 'Siaga setiap hari kerja']`
   - Kartu 01, 02, 03, 04, dan 06 tidak diubah.
   - Kata `Pembersihan Bak Kontrol` sepenuhnya tidak lagi ada di data layanan.

2. **`components/beduda/services.tsx`**
   - Menambahkan import `Clock` dari `lucide-react`.
   - Menambahkan pemetaan ikon `clock: Clock` ke dalam `iconMap`.
   - Mengatur parameter link tombol `Tanya via WhatsApp` khusus untuk kartu jam operasional:
     `Halo BEDUDA, saya ingin bertanya tentang jam operasional.`

3. **`src/config/site.ts`**
   - Mengganti `email: 'beduda@example.com'` menjadi `email: 'bedudawc@gmail.com'`.
   - Email ini otomatis digunakan pada section Kontak (mailto link + display text) dan Footer melalui `siteConfig.contact.email`.
   - Alamat, nomor telepon, dan WhatsApp tidak disentuh.

4. **Integritas Komponen yang TIDAK Diubah (Sesuai Batasan):**
   - `operatingHours` di `components/beduda/contact.tsx` tetap `Senin–Minggu: 24 jam`.
   - H1 di Hero tetap `Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda`.
   - Tidak ada perubahan pada Hero, About, Galeri, Testimoni, Peta, FAQ, atau teks lainnya.
   - Tidak ada penambahan package/dependensi baru.
   - `/root/rest-api`, Docker, dan Pterodactyl tidak disentuh.

---

## 2. Ringkasan Build & BUILD_ID

- **Perintah Build:**
  ```bash
  NODE_OPTIONS=--max-old-space-size=1024 NEXT_PUBLIC_SITE_URL=https://demo.xvannn07.me corepack pnpm build
  ```
- **Hasil Compile:** Sukses tanpa error (`next build` Next.js 16.4.3 Turbopack).
- **BUILD_ID Lama:** `H6dodkoiT3ebGzd9-JCPI`
- **BUILD_ID Baru:** `2Qe1cbZ-Toh42MOIKMMXi`

---

## 3. Hasil Cek Server Sementara (Port 3250)

Sebelum menyentuh proses PM2 demo, pengujian dijalankan pada port sementara `3250`:
- **Port:** `3250` (telah diverifikasi bebas sebelum dijalankan).
- **HTTP Status:** `200 OK`.
- **Kartu 05:**
  - Judul: `Jam Operasional 24 Jam` (**PASS**)
  - Teks: `Senin–Jumat: 24 jam. Hubungi kami via WhatsApp kapan saja.` (**PASS**)
  - Ikon: `Clock` dari `lucide-react` (**PASS**)
  - Pesan WhatsApp: `Halo BEDUDA, saya ingin bertanya tentang jam operasional.` (**PASS**)
- **Pembersihan Bak Kontrol:** Tidak lagi muncul di grid Layanan (**PASS**).
- **Email Kontak & Footer:**
  - `bedudawc@gmail.com` muncul di section Kontak dan Footer (**PASS**).
  - `beduda@example.com` sudah tidak ada sama sekali (**PASS**).
- **Integritas:**
  - H1 Hero: `Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda` (tetap utuh, **PASS**).
  - Jam di Kontak: `Senin–Minggu: 24 jam` (tetap utuh, **PASS**).
  - Jumlah kartu layanan: tetap 6 kartu (01 s/d 06).
- **Pembersihan Port Sementara:** Server sementara di port 3250 telah dimatikan dan diverifikasi kembali bebas (`Port 3250 is completely free`).

---

## 4. Status Proses PM2

- **PM2 `yokuhost`:**
  - PID Sebelum: `2758335`
  - PID Sesudah: `2758335` (TETAP SAMA, tidak disentuh dan tetap online di port 3000)
- **PM2 `beduda-preview`:**
  - PID Sebelum: `3492172`
  - PID Baru: `3566319` (online di port 3100)
- **State Persistence:** `pm2 save` telah dijalankan setelah restart `beduda-preview`.

---

## 5. Hasil Cek Live Demo (https://demo.xvannn07.me)

Pengujian langsung ke domain publik:
- **HTTP Status:** `200 OK`.
- **Kartu 05:**
  - Judul: `Jam Operasional 24 Jam` (**PASS**)
  - Teks: `Senin–Jumat: 24 jam. Hubungi kami via WhatsApp kapan saja.` (**PASS**)
  - WhatsApp Link: `https://wa.me/6287754545586?text=Halo%20BEDUDA%2C%20saya%20ingin%20bertanya%20tentang%20jam%20operasional.` (**PASS**)
- **Pembersihan Bak Kontrol:** Tidak ada sama sekali di halaman maupun sitemap XML (**PASS**).
- **Email:**
  - Menggunakan `bedudawc@gmail.com` (terproteksi Cloudflare email protection dan ter-decode ke `bedudawc@gmail.com` pada browser).
  - `beduda@example.com` sudah tidak ada sama sekali (**PASS**).
- **H1 Hero:** `Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda` (utuh).
- **Jam Kontak:** `Senin–Minggu: 24 jam` (utuh).
- **Sitemap XML:** `https://demo.xvannn07.me/layanan/jam-operasional` telah terdaftar menggantikan slug sebelumnya.
