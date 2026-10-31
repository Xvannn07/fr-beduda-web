# Laporan Verifikasi — Penambahan Jam Operasional (Jadwal Contoh)

**Waktu Pelaksanaan:** 2026-10-31  
**Pelaksana:** agy (ponytail tidak digunakan / tidak tersedia di VPS sesuai instruksi brief)  
**Status Keseluruhan:** Berhasil terverifikasi & ditayangkan (live di preview)

---

## 1. File yang Diubah

Hanya satu file kode sumber yang diubah sesuai brief:
- `components/beduda/contact.tsx`
- `/root/beduda-website-development/VERIFIKASI-JAM-OPERASIONAL.md` (file laporan ini)

Tidak ada file di `src/config/site.ts`, `src/data/`, section lain (Hero, Footer, Area, FAQ), atau konfigurasi server/nginx yang disentuh atau diubah.

---

## 2. Detail Blok Jam Operasional & Bukti Label Contoh

Data jadwal contoh didefinisikan secara lokal di `components/beduda/contact.tsx` dengan komentar pengingat tepat di atasnya:
```tsx
// CONTOH — ganti dengan jam operasional asli Beduda
const operatingHours = [
  'Senin–Jumat: 08.00–17.00 WITA',
  'Sabtu: 08.00–15.00 WITA',
  'Minggu: Tutup',
  'Darurat malam: Hubungi WhatsApp',
]
```

### Jadwal yang Ditampilkan:
1. `Senin–Jumat: 08.00–17.00 WITA`
2. `Sabtu: 08.00–15.00 WITA`
3. `Minggu: Tutup`
4. `Darurat malam: Hubungi WhatsApp`

### Bukti Label Contoh Ada:
Kalimat label contoh ditampilkan di dalam blok yang sama:
> *"Jadwal contoh — akan disesuaikan dengan jam operasional sebenarnya."*

Bukti dari hasil pengujian curl pada HTML hasil build (lokal & demo):
- Teks `"Jam operasional"`: **Ada (True)**
- Teks `"Senin–Jumat: 08.00–17.00 WITA"`: **Ada (True)**
- Teks `"Sabtu: 08.00–15.00 WITA"`: **Ada (True)**
- Teks `"Minggu: Tutup"`: **Ada (True)**
- Teks `"Darurat malam: Hubungi WhatsApp"`: **Ada (True)**
- Teks `"Jadwal contoh — akan disesuaikan dengan jam operasional sebenarnya."`: **Ada (True)**

---

## 3. Hasil Build & BUILD_ID

Perintah build:
```bash
NEXT_PUBLIC_SITE_URL=https://demo.xvannn07.me NODE_OPTIONS=--max-old-space-size=1024 pnpm build
```

- **BUILD_ID Sebelumnya:** `7eVuV2vlzHmgcD_XQRuwi`
- **BUILD_ID Baru:** `Fgsavc-A5ngFliOb_cOM6` (terbukti berbeda dan lulus TypeScript / lint tanpa error)

---

## 4. Pengujian Server Sementara (Port 3250)

Sebelum ditayangkan ke PM2 live, build diuji pada port bebas 3250:
- HTTP Status `/`: **200 OK**
- H1 Homepage: `"Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda"`
- Link WhatsApp: `"wa.me/6287754545586"` ditemukan
- Urutan 9 section ID tetap terjaga: `['beranda', 'tentang', 'layanan', 'keunggulan', 'galeri', 'testimoni', 'area-layanan', 'faq', 'kontak']`
- Hitungan class layout:
  - `order-1`: 2× (sebelum: 2×, sesudah: 2×)
  - `order-2`: 2× (sebelum: 2×, sesudah: 2×)
  - `order-3`: 2× (sebelum: 2×, sesudah: 2×)
  - `lg:`: 19× (sebelum: 19×, sesudah: 19×)
- Server sementara dimatikan bersih (PID 3436305 di-kill, port 3250 terbukti bersih di `ss`).

---

## 5. Status PM2 & Integritas Proses

- **PID yokuhost Sebelum:** `2758335`
- **PID yokuhost Sesudah:** `2758335` (TETAP SAMA, tidak disentuh/direstart, cluster tetap online)
- **PID beduda-preview Sebelum:** `3299248`
- **PID beduda-preview Sesudah Restart:** `3436392` (online, 0 unstable restarts)
- Konfigurasi PM2 disimpan dengan `pm2 save`.

---

## 6. Verifikasi Pratinjau Akhir (Lokal vs Demo)

| Parameter | Lokal (`http://127.0.0.1:3100/`) | Demo Publik (`https://demo.xvannn07.me/`) |
|---|---|---|
| HTTP Status | 200 OK | 200 OK |
| Ukuran Homepage | 52.119 bytes | 52.848 bytes |
| H1 | Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda | Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda |
| Blok Jam Operasional | Ada | Ada |
| Label Jadwal Contoh | Ada | Ada |

---

## 7. Metrik Sistem (Sebelum vs Sesudah)

- **RAM Sebelum Build:** Total 1967 MB, Used 954 MB, Available 1012 MB
- **RAM Sesudah Build & Restart:** Total 1967 MB, Used 947 MB, Available 1019 MB
- **Disk (`/dev/vda2`):** 40 GB, Used 33 GB (87%), Avail 5.3 GB (stabil)

---

## 8. Pengingat Tugas yang Belum Selesai

- Jam operasional asli Beduda saat ini **masih ditunggu dari pemilik**.
- Begitu pemilik memberikan jam operasional sebenarnya, jadwal contoh beserta label contoh pada `components/beduda/contact.tsx` ini harus diganti dengan data operasional asli.
