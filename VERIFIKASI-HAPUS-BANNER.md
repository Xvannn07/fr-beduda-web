# Laporan Verifikasi — Hapus Banner Horizontal & Kembalikan Demo Beduda

**Waktu Pelaksanaan:** 2026-10-31  
**Pelaksana:** agy (ponytail tidak digunakan / tidak tersedia di VPS sesuai instruksi brief)  
**Status Keseluruhan:** Berhasil terverifikasi & ditayangkan (live di demo)

---

## 1. File yang Diubah dan Dihapus

Sesuai instruksi brief (revert dari BRIEF-PASANG-BANNER):
1. **`app/page.tsx`** (Diubah)
   - Menghapus komponen `<Banner />` di antara `<Hero />` dan `<About />`.
   - Menghapus import `Banner` dari `@/components/beduda-site`.
   - Urutan section dalam `<main>` dikembalikan: `<Hero />`, `<About />`, `<Services />`, `<Advantages />`, `<Gallery />`, `<Testimonials />`, `<Areas />`, `<FAQ />`, `<Contact />`.
2. **`components/beduda-site.tsx`** (Diubah)
   - Menghapus baris ekspor `export { Banner } from './beduda/banner'`.
3. **`components/beduda/banner.tsx`** (Dihapus)
   - File komponen banner dihapus total dari filesystem.
4. **`public/beduda-banner-horizontal.jpg`** (Dihapus)
   - File gambar banner dihapus total dari filesystem agar tidak ada asset sisa yang dapat ter-load.

*Integritas bagian lain:* Header, Hero (termasuk H1 "Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda"), About, Services, Advantages, Gallery, Testimonials, Areas, FAQ, Contact (termasuk blok jam contoh), Footer, FloatingWhatsApp, `src/config/site.ts`, dan `beduda-truck.png` tetap utuh. Tidak ada penambahan teks, section, harga, atau klaim baru.

---

## 2. Hasil Build & BUILD_ID

- **Perintah Build:**
  ```bash
  NEXT_PUBLIC_SITE_URL=https://demo.xvannn07.me NODE_OPTIONS=--max-old-space-size=1024 corepack pnpm build
  ```
- **Hasil Compile:** Sukses dalam ~4.0 detik (Next.js 16.4.3 Turbopack) tanpa error.
- **BUILD_ID Lama (Sebelum Hapus Banner):** `cdtWtWVA9vxZg1Z_rJ5F_` *(BUILD_ID sebelum pasang banner: `Fgsavc-A5ngFliOb_cOM6`)*
- **BUILD_ID Baru:** `7dPUrd8IFsZyxeRLICjw_`

---

## 3. Hasil Pengujian Server Sementara (Port 3250)

Server sementara dijalankan pada port 3250 setelah dipastikan port bebas:
- **HTTP Status:** `200 OK`
- **Banner Check:** String `beduda-banner-horizontal` **TIDAK** ditemukan di HTML (`PASS`).
- **H1 Homepage:** `"Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda"` (`PASS`, utuh).
- **Urutan Section HTML:**
  1. Header (`<header`, pos: 2021)
  2. Hero (`id="beranda"`, pos: 4238)
  3. About (`id="tentang"`, pos: 7749)
  4. Services (`id="layanan"`, pos: 9913)
  5. Advantages (`id="keunggulan"`, pos: 18346)
  6. Gallery (`id="galeri"`, pos: 21300)
  7. Testimonials (`id="testimoni"`, pos: 24247)
  8. Areas (`id="area-layanan"`, pos: 25626)
  9. FAQ (`id="faq"`, pos: 32077)
  10. Contact (`id="kontak"`, pos: 37468)
  11. Footer (`<footer`, pos: 43513)
  *Urutan terbukti kembali konsisten: Header -> Hero -> About -> Services -> Advantages -> Gallery -> Testimonials -> Areas -> FAQ -> Contact -> Footer.*
- **Blok Jam Operasional di Contact:** Ditemukan dan lengkap (`PASS`).
- **Status Port Sementara:** Server sementara dihentikan bersih (`ss -tulpn | grep 3250` = kosong).

---

## 4. Status PM2 & Integritas Proses

- **PID yokuhost Sebelum:** `2758335`
- **PID yokuhost Sesudah:** `2758335` (TETAP SAMA, tidak disentuh atau direstart)
- **PID beduda-preview Sebelum:** `3456293`
- **PID beduda-preview Sesudah Restart:** `3477263` (Status: online, 0 error)
- **PM2 Save:** Berhasil disimpan ke `/root/.pm2/dump.pm2`.

---

## 5. Hasil Verifikasi Demo Publik (https://demo.xvannn07.me)

| Parameter | Pengujian Demo Publik (`https://demo.xvannn07.me/`) | Pengujian Lokal (`http://127.0.0.1:3100/`) |
|---|---|---|
| HTTP Status | `200 OK` | `200 OK` |
| BUILD_ID Aktif | `7dPUrd8IFsZyxeRLICjw_` | `7dPUrd8IFsZyxeRLICjw_` |
| Banner Image di HTML | Tidak ada (`PASS`) | Tidak ada (`PASS`) |
| Banner URL (`/beduda-banner-horizontal.jpg`) | `404 Not Found` (`PASS`) | `404 Not Found` (`PASS`) |
| Truk Image (`/beduda-truck.png`) | `200 OK` (2.054.650 bytes) | `200 OK` |
| H1 Text | `"Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda"` | `"Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda"` |
| Urutan Section | Header -> Hero -> About -> Services -> Advantages -> Gallery -> Testimonials -> Areas -> FAQ -> Contact -> Footer | Header -> Hero -> About -> Services -> Advantages -> Gallery -> Testimonials -> Areas -> FAQ -> Contact -> Footer |
| Blok Jam Contoh Contact | Ada & Utuh | Ada & Utuh |

---

## 6. Port Sementara yang Sudah Dimatikan

- **Port Cek Sementara:** `3250`
- **Status:** Dihentikan bersih dan port telah terbebas.
