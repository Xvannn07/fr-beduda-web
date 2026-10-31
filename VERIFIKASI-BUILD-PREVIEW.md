# Laporan Verifikasi Build & Preview Beduda

Laporan ini disusun oleh **agy** (Antigravity) sesuai arahan dalam `/root/BRIEF-BUILD-PREVIEW.md`.
> **Catatan Pelaksana**: Ponytail tidak tersedia pada sistem/VPS ini sesuai temuan mandor; pekerjaan diselesaikan langsung oleh agy tanpa mengubah ruang lingkup atau desain/copy proyek.

---

## 1. Keadaan Awal (Sebelum Install & Build)

| Parameter | Nilai Awal | Catatan |
|---|---|---|
| **RAM (`free -m`)** | Total: 1967 MB, Used: 1174 MB, Free: 147 MB, Avail: 793 MB | Swap used: 1169 MB |
| **Disk (`df -h /`)** | Size: 40G, Used: 32G, Avail: 6.4G (84%) | Partisi `/dev/vda2` |
| **PM2 `yokuhost`** | Status: `online`, Mode: `cluster`, PID: **2758335** | Port 3000 aktif |
| **Port 3100 (`ss`)** | Bebas (tidak ada listener) | Siap untuk pratinjau |
| **Berkas Kunci Proyek** | Ditemukan lengkap | `package.json` (767 B), `app/page.tsx`, `public/beduda-truck.png` (2,054,650 B) |

---

## 2. Instalasi Dependensi

- **Corepack & pnpm**:
  - `corepack enable`
  - `corepack prepare pnpm@12.3.4 --activate`
  - Versi pnpm aktif: `12.3.4`
- **pnpm install**:
  - Lokasi: `/root/beduda-website-development`
  - Durasi: **15.3 detik**
  - Status: Selesai dengan exit code `0`
  - Paket ditambahkan: 344 paket (hard linked ke pnpm store)

---

## 3. Kompilasi & Build Produksi

- **Perintah**:
  ```bash
  NEXT_PUBLIC_SITE_URL=https://demo.xvannn07.me NODE_OPTIONS=--max-old-space-size=1024 pnpm build
  ```
- **Durasi & Log**:
  - Next.js v16.4.3 (Turbopack)
  - Compiled successfully: 8.2 detik
  - TypeScript check: 5.4 detik
  - Static page generation: 241 ms
  - Status: Exit code `0` (lulus tanpa error)
- **BUILD_ID**:
  ```
  j0atmOIHPE84et9vY8um4
  ```
- **Rute yang Dihasilkan**:
  - `○ /` (Static)
  - `○ /_not-found` (Static)
  - `○ /robots.txt` (Static)
  - `○ /sitemap.xml` (Static)

---

## 4. Uji Server Sementara (Wajib Pra-PM2)

- **Port Pengujian**: `3210` (dipilih di atas 3200, bebas konflik)
- **PID Proses Sementara**: `3287351`
- **Hasil Pengujian**:
  - `GET /`: HTTP **200 OK**
  - **Tag H1**:
    ```html
    <h1 class="mt-5 max-w-xl font-display text-5xl font-extrabold leading-[1.04] tracking-[-.055em] text-[#092C59] md:text-6xl">Solusi Sedot WC dan Saluran Limbah untuk <span class="text-[#0879D9]">Rumah Anda</span></h1>
    ```
  - **Tautan WhatsApp**: Ditemukan tautan `wa.me/6287754545586` (3 titik konversi)
  - `GET /sitemap.xml`: HTTP **200 OK**, URL terarah ke `https://demo.xvannn07.me`
  - `GET /robots.txt`: HTTP **200 OK**, `Allow: /`, mereferensikan `https://demo.xvannn07.me/sitemap.xml`
- **Pembersihan**:
  - Proses `3287351` dimatikan dengan sinyal terminate.
  - Verifikasi port `3210` via `ss -tulpn`: **Bersih (tidak ada port menggantung)**.

---

## 5. Penayangan Pratinjau via PM2 di Port 3100

- **Kondisi Port 3100**: Diverifikasi bebas sebelum startup.
- **Eksekusi PM2**:
  - Next.js dijalankan via PM2 dengan nama aplikasi `beduda-preview` pada port 3100.
  - *Catatan teknis*: Menggunakan binary Node.js `node_modules/next/dist/bin/next` di cwd `/root/beduda-website-development` agar kompatibel langsung dengan fork interpreter PM2 (menghindari wrapper shim POSIX shell pnpm).
  - Status PM2: `online`, 0 restarts.
  - Perintah simpan: `pm2 save` berhasil menyimpan konfigurasi ke `/root/.pm2/dump.pm2`.
- **Identitas Proses PM2**:
  - Nama: `beduda-preview` (ID PM2: `19`)
  - PID: **3287942**
- **Verifikasi PM2 `yokuhost`**:
  - PID `yokuhost` sebelum: **2758335**
  - PID `yokuhost` sesudah: **2758335** (tetap berjalan tanpa interupsi / restart)

---

## 6. Verifikasi Pratinjau End-to-End

| Target Uji | URL | Status Code | Ukuran Konten | Catatan |
|---|---|---|---|---|
| **Lokal** | `http://127.0.0.1:3100/` | **200 OK** | 51,209 bytes | H1 valid, aset ter-render |
| **Publik (Proxy)** | `https://demo.xvannn07.me/` | **200 OK** | 51,571 bytes | End-to-end via Nginx & Cloudflare |
| **Sitemap** | `https://demo.xvannn07.me/sitemap.xml` | **200 OK** | Content-Type: `application/xml` | Valid |
| **Robots** | `https://demo.xvannn07.me/robots.txt` | **200 OK** | Content-Type: `text/plain` | Valid |

### Metrik Sistem Akhir

- **RAM (`free -m`)**:
  - Total: 1967 MB
  - Used: 1216 MB (+42 MB dari baseline)
  - Free: 277 MB
  - Available: 750 MB
  - Swap: Used 1335 MB (stabil)
- **Disk (`df -h /`)**:
  - Size: 40G
  - Used: 32G
  - Avail: 5.6G (86% terpakai, penggunaan naik ~800 MB untuk pnpm store & cache build)
- **Berkas Baru Tercipta**:
  - `node_modules/` (542 MB)
  - `.next/` (34 MB)
  - `next-env.d.ts` (288 B)
  - `VERIFIKASI-BUILD-PREVIEW.md` (laporan ini)

---

## 7. Status & Langkah Menunggu (Pending)

Pratinjau situs Beduda telah ditayangkan secara utuh tanpa modifikasi kode/desain (as-is dari arsip pengguna).

**Item yang Masih Menunggu**:
1. **Evaluasi Pemilik**: Keputusan pemilik mengenai tampilan dan tata letak halaman yang panjang (sebelumnya diidentifikasi sebagai susunan halaman panjang, bukan ringkas 8 blok).
2. **Kelengkapan Data Usaha Riil**:
   - Skema tarif / harga resmi.
   - Rincian cakupan wilayah operasional di Buleleng & sekitarnya.
   - Jam kerja dan alamat kantor/posko fisik.
   - Dokumentasi foto armada dan proses kerja asli di lapangan.
   - Testimoni otentik pelanggan.
