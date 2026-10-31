# Laporan Verifikasi — Perbaikan H1 Hero

**Waktu Pelaksanaan:** 2026-10-31  
**Pelaksana:** agy (ponytail tidak digunakan / tidak tersedia di VPS sesuai instruksi)  
**Status Keseluruhan:** Berhasil terverifikasi & ditayangkan (live di demo https://demo.xvannn07.me)

---

## 1. Perubahan Kode

- **File yang Diubah (HANYA 1 file):** `components/beduda/hero.tsx`
- **Baris 19:**
  - **Sebelum:**
    ```tsx
    Solusi Sedot WC dan Saluran Limbah mampet{' '}
    <span className="text-[#0879D9]">Rumah Anda</span>
    ```
  - **Sesudah:**
    ```tsx
    Solusi Sedot WC dan Saluran Limbah untuk{' '}
    <span className="text-[#0879D9]">Rumah Anda</span>
    ```
  - **Teks H1 Lengkap:** `Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda` (kata `mampet` telah dihapus dari H1).

- **Larangan yang Dipatuhi:**
  - Gambar tidak disentuh sama sekali (`beduda-poster-utama.jpg` di Hero, `beduda-truk-info.jpg` di About, `beduda-logo.jpg` di Logo tetap utuh).
  - Teks lain, tombol, WA, blok jam contoh, dan section lain tidak disentuh.
  - Tidak ada dependensi / package baru yang diinstal.
  - `/root/rest-api`, Docker, dan Pterodactyl tidak disentuh.

---

## 2. Ringkasan Build & BUILD_ID

- **Perintah Build:**
  ```bash
  NEXT_PUBLIC_SITE_URL=https://demo.xvannn07.me NODE_OPTIONS=--max-old-space-size=1024 pnpm build
  ```
- **Hasil Compile:** Sukses tanpa error (`next build` Next.js 16.4.3 Turbopack).
- **BUILD_ID Lama:** `iBBVT606R1IEr1t3L9-2N`
- **BUILD_ID Baru:** `4cqhQGwLUC58FbpzGN-O_`

---

## 3. Hasil Pengujian Port Sementara (>3200: Port 3250)

Sebelum menyentuh proses produksi PM2, server Next.js dijalankan pada port `3250`:
- **HTTP Status:** `200 OK`
- **H1 Homepage:**
  - Teks H1: `Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda` (**PASS**, kata `mampet` TIDAK ada di H1)
- **Status Berkas Gambar (HTTP Status & Size):**
  - `/beduda-poster-utama.jpg`: HTTP `200 OK` (446.427 bytes)
  - `/beduda-truk-info.jpg`: HTTP `200 OK` (367.823 bytes)
  - `/beduda-logo.jpg`: HTTP `200 OK` (154.216 bytes)
- **Blok Jam Operasional:** Ditemukan dan utuh (**PASS**)
- **Pembersihan Port Sementara:** Proses port 3250 telah dihentikan / dimatikan sepenuhnya setelah pengujian selesai.

---

## 4. Status Proses PM2

- **PM2 `yokuhost`:** PID `2758335` (tetap tidak tersentuh dan online di port 3000)
- **PM2 `beduda-preview`:** 
  - PID Lama: `3482491`
  - PID Baru: `3485197` (online di port 3100)
- **State Persistence:** `pm2 save` telah dijalankan setelah restart.

---

## 5. Verifikasi Live Demo (https://demo.xvannn07.me)

Pengujian langsung terhadap endpoint produksi publik:
- **HTTP Status:** `200 OK`
- **H1 Header:** `Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda` (**PASS**)
- **Cek Kata `mampet` di H1:** Tidak ada (**PASS**)
- **Integritas Gambar:**
  - `beduda-poster-utama.jpg`: HTTP `200 OK` (446.427 bytes)
  - `beduda-truk-info.jpg`: HTTP `200 OK` (367.823 bytes)
  - `beduda-logo.jpg`: HTTP `200 OK` (154.216 bytes)
- **Blok Jam Operasional:** Hadir dan utuh (**PASS**)
