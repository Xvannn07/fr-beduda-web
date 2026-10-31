# Laporan Verifikasi: Penyesuaian Urutan Mobile Hero & Tentang

Tanggal: 2026-10-30  
Eksekutor: agy (Google Deepmind Antigravity)  
Catatan Pelaksana: Sesuai instruksi Mandor pada §3, Ponytail tidak tersedia di VPS ini; tugas dikerjakan secara langsung oleh agy.

---

## 1. Perubahan Kode & Teknik Urutan Visual

File yang diubah **HANYA**:
- `/root/beduda-website-development/components/beduda-site.tsx` (Hero & About)

Tidak ada perubahan pada file lain, tidak ada penambahan CSS utilitas luar, tidak ada perubahan teks/copy/link/gambar/alt text.

### Teknik yang Digunakan:
Menggunakan kombinasi `contents` (`display: contents`) pada layar mobile (< `lg`) dan `order-*` Tailwind CSS, serta kembali ke layout normal di breakpoint desktop (`lg:block` dan `lg:order-none`):

1. **Hero (`#beranda`)**:
   - Pembungkus teks Hero: `className="contents animate-rise lg:block"`
   - Blok Judul (eyebrow + H1): `className="order-1 lg:order-none"`
   - Kontainer Gambar (`Image`): `className="order-2 animate-rise-delay overflow-hidden rounded-[2rem] bg-[#092C59] shadow-2xl shadow-[#092C59]/15 lg:order-none"`
   - Blok Teks Sisa (deskripsi + tombol WhatsApp + chips): `className="order-3 lg:order-none"`
   - **Hasil visual di HP**: Judul (1) → Gambar Truk BEDUDA (2) → Deskripsi & Tombol (3).

2. **Tentang (`#tentang`)**:
   - Kontainer Gambar (`Image`): `className="order-2 overflow-hidden rounded-[1.75rem] bg-[#e8f7ff] lg:order-none"`
   - Pembungkus teks Tentang: `className="contents lg:block"`
   - Blok Judul (eyebrow + H2): `className="order-1 lg:order-none"`
   - Blok Teks Sisa (paragraf + checklist fasilitas): `className="order-3 lg:order-none"`
   - **Hasil visual di HP**: Judul (1) → Gambar Truk BEDUDA (2) → Paragraf & Checklist (3).

### Dampak Positif pada Alur Mobile:
Urutan halaman di layar ponsel kini menjadi:
1. Hero: Eyebrow + H1
2. Hero: Gambar Truk BEDUDA
3. Hero: Deskripsi + Tombol Hubungi WhatsApp + Chips keunggulan
4. Tentang: Eyebrow + H2 ("Solusi kebersihan untuk kenyamanan Anda.")
5. Tentang: Gambar Truk BEDUDA
6. Tentang: Paragraf deskripsi + Checklist fasilitas

Kedua foto truk kini dipisahkan oleh seluruh blok teks deskripsi Hero, tombol CTA, chips keunggulan, serta judul section Tentang. Masalah foto truk bertabrakan berturut-turut di HP telah teratasi sepenuhnya.

---

## 2. Bukti Desktop (Breakpoint `lg`) Tidak Berubah

Berdasarkan perbandingan class breakpoint `lg:` pada container dan kontainer gambar:

| Elemen | Sebelum Perubahan | Sesudah Perubahan | Status |
|---|---|---|---|
| **Hero Container** | `shell grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[.9fr_1.1fr] lg:py-24` | `shell grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[.9fr_1.1fr] lg:py-24` | **IDENTIK** (`lg:grid-cols-[.9fr_1.1fr] lg:py-24`) |
| **Hero Text Wrapper** | `animate-rise` | `contents animate-rise lg:block` | Pada `lg:`, `lg:block` aktif, kembali menjadi 1 elemen utuh di kolom kiri |
| **Hero Image Container** | `animate-rise-delay overflow-hidden rounded-[2rem] bg-[#092C59] shadow-2xl shadow-[#092C59]/15` | `order-2 animate-rise-delay overflow-hidden rounded-[2rem] bg-[#092C59] shadow-2xl shadow-[#092C59]/15 lg:order-none` | Pada `lg:`, `lg:order-none` mereset order menjadi 0, menempati kolom kanan |
| **Tentang Container** | `shell grid items-center gap-12 lg:grid-cols-2` | `shell grid items-center gap-12 lg:grid-cols-2` | **IDENTIK** (`lg:grid-cols-2`) |
| **Tentang Image Container** | `overflow-hidden rounded-[1.75rem] bg-[#e8f7ff]` | `order-2 overflow-hidden rounded-[1.75rem] bg-[#e8f7ff] lg:order-none` | Pada `lg:`, `lg:order-none` mereset order menjadi 0, menempati kolom kiri (urutan DOM pertama) |
| **Tentang Text Wrapper** | `<div>` | `<div className="contents lg:block">` | Pada `lg:`, `lg:block` aktif, menempati kolom kanan (urutan DOM kedua) |

Tampilan desktop tetap persis sama: Hero teks di kiri dan gambar di kanan; Tentang gambar di kiri dan teks di kanan, dengan ukuran, alignment (`items-center`), gap (`gap-12`), dan styling yang tidak tersentuh.

---

## 3. Catatan Sumber Daya & Build

### Kondisi RAM & Disk:
- **Sebelum Build**:
  - RAM Total: 1967 MB | Used: 1021 MB | Free: 144 MB | Available: 946 MB
  - Swap: Used 1352 MB | Free 2743 MB
  - Disk `/`: Used 32 GB (86%), Available 5.6 GB
- **Sesudah Build & Restart**:
  - RAM Total: 1967 MB | Used: 1045 MB | Free: 222 MB | Available: 922 MB
  - Swap: Used 1306 MB | Free 2789 MB
  - Disk `/`: Used 32 GB (86%), Available 5.6 GB

### Hasil Build:
- Perintah: `NEXT_PUBLIC_SITE_URL=https://demo.xvannn07.me NODE_OPTIONS=--max-old-space-size=1024 pnpm build`
- Kompilasi: Berhasil tanpa error (Turbopack, TypeScript 4.5s, 5/5 static pages)
- **BUILD_ID Lama**: `j0atmOIHPE84et9vY8um4`
- **BUILD_ID Baru**: `w8uoKwIBb-juwWOOCFWSS` (terkonfirmasi berbeda)

---

## 4. Verifikasi Server Sementara (Port 3210)

Sebelum penayangan ke preview:
- Server sementara dijalankan pada port bebas di atas 3200: `./node_modules/.bin/next start -p 3210`
- PID proses `next-server`: `3291983`
- Hasil cek via `curl http://127.0.0.1:3210/`:
  - Status HTTP: **200 OK**
  - H1: `Solusi Sedot WC dan Saluran Limbah untuk <span class="text-[#0879D9]">Rumah Anda</span>` (persis)
  - Tautan WhatsApp: `wa.me/6287754545586` (terkonfirmasi ada)
  - Ukuran respons: 51.461 byte
  - Verifikasi CSS terkompilasi: `.contents`, `.order-1`, `.order-2`, `.order-3`, `.lg\:order-none`, `.lg\:block` ada di chunk CSS.
- Pembersihan server sementara:
  - Proses `kill 3291983` dieksekusi.
  - Verifikasi `ss -tulpn | grep 3210`: port 3210 terbukti bersih (tidak ada proses tertinggal).

---

## 5. Penayangan & Verifikasi PM2

- Aksi penayangan: `pm2 restart beduda-preview && pm2 save`
- **PM2 `yokuhost`**:
  - PID sebelum sesi: `2758335`
  - PID sesudah sesi: `2758335` (**TETAP SAMA, TIDAK TERSENTUH**)
  - Status: online
- **PM2 `beduda-preview`**:
  - PID sebelum restart: `3287942`
  - PID sesudah restart: `3292336`
  - Status: online, restart terencana: 1, unstable restarts: 0
- Tidak ada proses server/PM2 lain yang dibiarkan hidup.

---

## 6. Verifikasi Pratinjau VPS & Live

1. **Lokal VPS (Port 3100)**:
   - `curl -sI http://127.0.0.1:3100/` → **HTTP/1.1 200 OK**
   - Ukuran: **51.461 byte**
   - H1: `Solusi Sedot WC dan Saluran Limbah untuk <span class="text-[#0879D9]">Rumah Anda</span>`
2. **Domain Live Demo (End-to-end via Nginx & Cloudflare)**:
   - `curl -sI https://demo.xvannn07.me/` → **HTTP/2 200**
   - Ukuran: **51.823 byte**
   - HTML memuat class order mobile responsif:
     - `order-1 lg:order-none` (Title Hero & Title Tentang)
     - `order-2 lg:order-none` (Gambar Hero & Gambar Tentang)
     - `order-3 lg:order-none` (Sisa teks Hero & Sisa teks Tentang)

---

## 7. Hal yang Belum Terverifikasi

- **Cek visual nyata pada layar ponsel oleh pemilik situs**: Mandor dan agy memverifikasi struktur DOM, CSS styling, dan kode HTML end-to-end melalui inspeksi VPS. Penilaian visual akhir kenyamanan membaca pada ragam ukuran layar HP tetap memerlukan konfirmasi langsung oleh pemilik.
