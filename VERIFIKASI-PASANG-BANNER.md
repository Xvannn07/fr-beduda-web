# Laporan Verifikasi — Pasang Banner Horizontal ke Demo Beduda

**Waktu Pelaksanaan:** 2026-10-31  
**Pelaksana:** agy (ponytail tidak digunakan / tidak tersedia di VPS sesuai instruksi brief)  
**Status Keseluruhan:** Berhasil terverifikasi & ditayangkan (live di demo)

---

## 1. Verifikasi File Banner Sumber

- **Path:** `public/beduda-banner-horizontal.jpg`
- **Dimensi:** 1600 × 900
- **MD5 Hash:** `d85fdf219a3fbbbd051513541a1f1900` (Cocok 100% dengan brief sebelum dan sesudah pengerjaan)
- **File gambar lain:** `beduda-truck.png` dan placeholder tetap apa adanya, tidak disentuh.

---

## 2. File yang Diubah

Hanya file kode berikut yang diubah sesuai brief:
1. `components/beduda/banner.tsx` (Komponen baru)
   - Merender satu `<section className="w-full">` tanpa padding samping agar banner tampil full-width.
   - `<a>` membungkus gambar, menggunakan `whatsappUrl()` dari `@/src/config/site` (nomor `6287754545586`).
   - `<Image src="/beduda-banner-horizontal.jpg" alt="Jasa Kuras WC Beduda — Hubungi 0877 5454 5586" width={1600} height={900} className="h-auto w-full" />`.
   - Tidak ada judul, teks tambahan, tombol baru, atau klaim baru.
2. `components/beduda-site.tsx` (Tambahan baris ekspor `Banner`)
   - Baris: `export { Banner } from './beduda/banner'`
3. `app/page.tsx` (Penyisipan komponen `<Banner />`)
   - Menyisipkan `<Banner />` tepat di antara `<Hero />` dan `<About />`, tidak di tempat lain.
4. `VERIFIKASI-PASANG-BANNER.md` (Dokumen laporan ini)

*Bagian yang TIDAK diubah sama sekali:* Header, Hero (termasuk H1), About, Services, Advantages, Gallery, Testimonials, Areas, FAQ, Contact (termasuk blok jam contoh), Footer, FloatingWhatsApp, `src/config/site.ts`, dan semua teks/WA yang sudah ada. Tidak ada klaim 24 jam, nomor 1, testimoni baru, atau harga yang ditambahkan.

---

## 3. Hasil Build & BUILD_ID

- **Perintah Build:**
  ```bash
  NEXT_PUBLIC_SITE_URL=https://demo.xvannn07.me NODE_OPTIONS=--max-old-space-size=1024 corepack pnpm build
  ```
- **Hasil Compile:** Sukses dalam ~7 detik tanpa peringatan/error.
- **BUILD_ID Lama:** `Fgsavc-A5ngFliOb_cOM6`
- **BUILD_ID Baru:** `cdtWtWVA9vxZg1Z_rJ5F_`

---

## 4. Hasil Pengujian Server Sementara (Port 3250)

Server sementara dijalankan pada port 3250 (port dipastikan bebas terlebih dahulu sebelum pengujian):
- **HTTP Status:** `200 OK`
- **Banner Image:** Terdeteksi di HTML (`%2Fbeduda-banner-horizontal.jpg` / `/beduda-banner-horizontal.jpg`)
- **H1 Homepage:** `"Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda"` (Tidak berubah)
- **WhatsApp Link pada Banner:** Memuat `https://wa.me/6287754545586?...`
- **Alt Text Banner:** `"Jasa Kuras WC Beduda — Hubungi 0877 5454 5586"`
- **Urutan Section HTML:**
  1. Header (`<header`)
  2. Hero (`id="beranda"`)
  3. Banner (`beduda-banner-horizontal.jpg`)
  4. About (`id="tentang"`)
  5. Services (`id="layanan"`)
  6. Advantages (`id="keunggulan"`)
  7. Gallery (`id="galeri"`)
  8. Testimonials (`id="testimoni"`)
  9. Areas (`id="area-layanan"`)
  10. FAQ (`id="faq"`)
  11. Contact (`id="kontak"`)
  12. Footer (`<footer`)
  *Urutan terbukti konsisten dan benar: Header -> Hero -> Banner -> About -> Layanan -> Keunggulan -> Galeri -> Testimoni -> Area Layanan -> FAQ -> Kontak -> Footer.*
- **Status Port Sementara:** Server sementara dihentikan bersih dan port 3250 terbukti bebas (`ss -tulpn | grep 3250` = kosong).

---

## 5. Status PM2 & Integritas Proses

- **PID yokuhost Sebelum:** `2758335`
- **PID yokuhost Sesudah:** `2758335` (TETAP SAMA, tidak disentuh atau direstart)
- **PID beduda-preview Sebelum:** `3436392`
- **PID beduda-preview Sesudah Restart:** `3456293` (Status: online, 0 error)
- **PM2 Save:** Disimpan berhasil ke `/root/.pm2/dump.pm2`.

---

## 6. Hasil Verifikasi Demo Publik (https://demo.xvannn07.me)

| Parameter | Pengujian Demo Publik (`https://demo.xvannn07.me/`) | Pengujian Lokal (`http://127.0.0.1:3100/`) |
|---|---|---|
| HTTP Status | `200 OK` | `200 OK` |
| BUILD_ID Aktif | `cdtWtWVA9vxZg1Z_rJ5F_` | `cdtWtWVA9vxZg1Z_rJ5F_` |
| Banner Image Tag | Tampil (`beduda-banner-horizontal.jpg`) | Tampil (`beduda-banner-horizontal.jpg`) |
| Banner Direct Fetch | `200 OK` (378.991 bytes) | `200 OK` |
| Image Optimizer Fetch | `200 OK` (186.365 bytes) | `200 OK` |
| H1 Text | `"Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda"` | `"Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda"` |
| Link WhatsApp Banner | `https://wa.me/6287754545586?...` | `https://wa.me/6287754545586?...` |
| Urutan Posisi Banner | Tepat di antara Hero dan About | Tepat di antara Hero dan About |

---

## 7. Port Sementara yang Sudah Dimatikan

- **Port Cek Sementara:** `3250`
- **Status:** Dihentikan dan bersih (`Port 3250 is completely clean`).
