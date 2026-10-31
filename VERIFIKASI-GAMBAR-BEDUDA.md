# Laporan Verifikasi — Pasang 3 Gambar Beduda ke Demo

**Waktu Pelaksanaan:** 2026-10-31  
**Pelaksana:** agy (ponytail tidak digunakan / tidak tersedia di VPS sesuai instruksi brief)  
**Status Keseluruhan:** Berhasil terverifikasi & ditayangkan (live di demo https://demo.xvannn07.me)

---

## 1. Verifikasi Checksum MD5 Gambar di `public/`

Sebelum perubahan kode dilakukan, integritas berkas gambar diverifikasi menggunakan `md5sum`:

| File | Resolusi | MD5 Target | MD5 Aktual | Status |
|---|---|---|---|---|
| `public/beduda-poster-utama.jpg` | 1536x1024 | `8100791d513b2f3ef7d9379325f538ad` | `8100791d513b2f3ef7d9379325f538ad` | **MATCH** |
| `public/beduda-truk-info.jpg` | 1600x900 | `cc946770744f8f55b7f867ec7de74121` | `cc946770744f8f55b7f867ec7de74121` | **MATCH** |
| `public/beduda-logo.jpg` | 1254x1254 | `f7a8e1b628e97da5a539849767699a8a` | `f7a8e1b628e97da5a539849767699a8a` | **MATCH** |

*Catatan:* `public/beduda-truck.png` tetap dipertahankan dan masih digunakan di komponen Galeri.

---

## 2. File yang Diubah (HANYA 3 File)

1. **`components/beduda/hero.tsx` (Hero Section):**
   - Mengganti `src="/beduda-truck.png"` menjadi `src="/beduda-poster-utama.jpg"`.
   - Menyesuaikan dimensi menjadi `width={1536}` `height={1024}`.
   - Mengubah atribut `alt` menjadi `"Poster BEDUDA Jasa Kuras WC"`.
   - Judul H1, teks, tombol CTA, dan urutan tata letak mobile/desktop tetap utuh tanpa perubahan.
2. **`components/beduda/about.tsx` (About Section):**
   - Mengganti `src="/beduda-truck.png"` menjadi `src="/beduda-truk-info.jpg"`.
   - Menyesuaikan dimensi menjadi `width={1600}` `height={900}`.
   - Mengubah atribut `alt` menjadi `"Truk layanan BEDUDA"`.
   - Judul, teks pengantar, dan checklist fitur tetap utuh tanpa perubahan.
3. **`components/beduda/shared.tsx` (Komponen `Logo`):**
   - Mengimpor komponen `Image` dari `next/image`.
   - Mengganti span badge kuning huruf "B" dan span teks "BEDUDA" dengan gambar logo:
     ```tsx
     <Image
       src="/beduda-logo.jpg"
       alt="Logo BEDUDA Jasa Kuras WC"
       width={1254}
       height={1254}
       className="h-12 w-12 rounded-xl bg-white object-cover"
     />
     ```
     di dalam elemen `<a href="#beranda" aria-label="BEDUDA Beranda">`.
   - Komponen `Logo` ini dipakai bersama oleh Header dan Footer.

*Integritas Komponen Lain:* Tidak ada file lain yang diubah. Section Gallery, Contact (termasuk jadwal contoh operasional), navigasi header, nomor WhatsApp, floating button, dan konfigurasi site tidak tersentuh.

---

## 3. Hasil Build & BUILD_ID

- **Perintah Build:**
  ```bash
  NEXT_PUBLIC_SITE_URL=https://demo.xvannn07.me NODE_OPTIONS=--max-old-space-size=1024 corepack pnpm build
  ```
- **Hasil Compile:** Sukses tanpa error (Next.js 16.4.3 Turbopack).
- **BUILD_ID Lama:** `7dPUrd8IFsZyxeRLICjw_`
- **BUILD_ID Baru:** `iBBVT606R1IEr1t3L9-2N`

---

## 4. Hasil Pengujian Server Sementara (Port 3250)

Sebelum menyentuh proses produksi demo, server pengujian sementara dijalankan pada port `3250`:
- **HTTP Status:** `200 OK`
- **Kehadiran Berkas Gambar di HTML:**
  - `beduda-poster-utama.jpg`: 5 occurrences (termasuk responsive srcset)
  - `beduda-truk-info.jpg`: 3 occurrences
  - `beduda-logo.jpg`: 6 occurrences (Header & Footer)
  - `beduda-truck.png`: 12 occurrences (Gallery tetap utuh)
- **Status Berkas Gambar (HTTP Status & Size):**
  - `/beduda-poster-utama.jpg`: HTTP `200 OK` (446.427 bytes)
  - `/beduda-truk-info.jpg`: HTTP `200 OK` (367.823 bytes)
  - `/beduda-logo.jpg`: HTTP `200 OK` (154.216 bytes)
- **H1 Homepage:** `"Solusi Sedot WC dan Saluran Limbah mampet Rumah Anda"` (**PASS**, tidak berubah)
- **Blok Jam Operasional di Contact:** Ditemukan dan utuh (**PASS**)
- **Urutan Section HTML:**
  1. Header (`<header`, pos: 2035)
  2. Hero (`id="beranda"`, pos: 4428)
  3. About (`id="tentang"`, pos: 7949)
  4. Services (`id="layanan"`, pos: 10111)
  5. Advantages (`id="keunggulan"`, pos: 18544)
  6. Gallery (`id="galeri"`, pos: 21498)
  7. Testimonials (`id="testimoni"`, pos: 24445)
  8. Areas (`id="area-layanan"`, pos: 25824)
  9. FAQ (`id="faq"`, pos: 32275)
  10. Contact (`id="kontak"`, pos: 37666)
  11. Footer (`<footer`, pos: 43711)
  *(Urutan section terbukti konsisten dan valid).*

---

## 5. Port Sementara yang Sudah Dimatikan

- **Port Cek Sementara:** `3250`
- **Status Penutupan:** Proses dihentikan bersih, port dipastikan bebas (`ss -tulpn | grep 3250` = kosong).

---

## 6. Status PM2 & Integritas Proses VPS

- **PID `yokuhost` Sebelum:** `2758335`
- **PID `yokuhost` Sesudah:** `2758335` (**TETAP SAMA**, tidak pernah disentuh atau direstart)
- **PID `beduda-preview` Sebelum:** `3477263`
- **PID `beduda-preview` Sesudah Restart:** `3482491` (Status: online, memory normal)
- **PM2 Save:** Berhasil disimpan ke `/root/.pm2/dump.pm2`.

---

## 7. Hasil Verifikasi Demo Publik (https://demo.xvannn07.me)

| Parameter | Pengujian Demo Publik (`https://demo.xvannn07.me/`) | Pengujian Lokal (`http://127.0.0.1:3100/`) | Status |
|---|---|---|---|
| HTTP Status | `200 OK` | `200 OK` | **PASS** |
| BUILD_ID Aktif | `iBBVT606R1IEr1t3L9-2N` | `iBBVT606R1IEr1t3L9-2N` | **PASS** |
| Poster Utama (`/beduda-poster-utama.jpg`) | `200 OK` (446.427 bytes) | `200 OK` | **PASS** |
| Truk Info (`/beduda-truk-info.jpg`) | `200 OK` (367.823 bytes) | `200 OK` | **PASS** |
| Logo (`/beduda-logo.jpg`) | `200 OK` (154.216 bytes) | `200 OK` | **PASS** |
| Truk Galeri (`/beduda-truck.png`) | `200 OK` (2.054.650 bytes) | `200 OK` | **PASS** |
| H1 Text | `"Solusi Sedot WC dan Saluran Limbah mampet Rumah Anda"` | `"Solusi Sedot WC dan Saluran Limbah mampet Rumah Anda"` | **PASS** |
| Urutan Section | Header -> Hero -> About -> Services -> Advantages -> Gallery -> Testimonials -> Areas -> FAQ -> Contact -> Footer | Header -> Hero -> About -> Services -> Advantages -> Gallery -> Testimonials -> Areas -> FAQ -> Contact -> Footer | **PASS** |
| Blok Jam Contoh Contact | Ada & Utuh | Ada & Utuh | **PASS** |
