# Laporan Verifikasi — Galeri, Peta Kantor, Jam 24 Jam, Testimoni Asli + Animasi

**Waktu Pelaksanaan:** 2026-10-31  
**Pelaksana:** agy (tanpa Ponytail, karena Ponytail tidak terpasang/tersedia di VPS ini sesuai instruksi)  
**Status Keseluruhan:** Berhasil terverifikasi & ditayangkan (live di demo https://demo.xvannn07.me)

---

## 1. Verifikasi Checksum MD5 Berkas Gambar Baru

Semua berkas foto baru di `public/` diverifikasi MD5-nya sebelum implementasi kode:

| Berkas | MD5 Terverifikasi | Status |
| :--- | :--- | :--- |
| `public/beduda-proses-1.jpg` | `9d36a19e4ab4fedf5db9300cf666e55a` | **MATCH** |
| `public/beduda-proses-2.jpg` | `7dd3f0426630b51e3f34f0aed794ed57` | **MATCH** |
| `public/beduda-armada.jpg` | `ca0a2401074f7f71892c7d12c3cce216` | **MATCH** |
| `public/beduda-proses-3.png` | `5cf400ff47b5784d8db347757b19f2ca` | **MATCH** |

---

## 2. Berkas yang Diubah

Hanya 5 berkas yang diubah:
1. `components/beduda/gallery.tsx`
   - Judul H2 diubah menjadi `Proses dan Armada BEDUDA`.
   - Paragraf deskripsi diubah menjadi `Proses pengerjaan dan armada BEDUDA`.
   - Mengganti 4 gambar lama dengan urutan:
     1. `/beduda-proses-1.jpg` — caption `Pengerjaan sedot WC di rumah`
     2. `/beduda-proses-2.jpg` — caption `Armada di lokasi pelanggan`
     3. `/beduda-armada.jpg` — caption `Armada BEDUDA`
     4. `/beduda-proses-3.png` — caption `Selang pengerjaan di lokasi`
   - Caption dan alt teks tanpa kata `(demo)`.
   - `sm:row-span-2` dihapus sehingga keempat kotak sama lebar dan sama tinggi dengan rasio `aspect-[3/4]` dan `object-cover` rapi tanpa distorsi/stretching.
2. `components/beduda/areas.tsx`
   - Mengganti div dekoratif `map-grid` dengan Google Maps `<iframe>`:
     - `src="https://maps.google.com/maps?q=-8.1448984,115.0897827&z=17&output=embed"`
     - `title="Peta kantor BEDUDA"`
     - Tinggi minimal 360px (`h-[360px] min-h-[360px] w-full border-0`), `loading="lazy"`.
   - Kartu kecil `PETA KANTOR BEDUDA` di bawah peta dengan tombol `Buka di Google Maps` mengarah ke URL maps persis: `https://www.google.com/maps/place/8%C2%B008'41.6%22S+115%C2%B005'23.2%22E/@-8.1448984,115.0872078,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-8.1448984!4d115.0897827?hl=id&entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D` (`target="_blank"`, `rel="noreferrer"`).
   - Tidak ada alamat jalan yang dikarang.
   - Daftar area layanan dan tombol "Tanyakan jangkauan" tetap utuh.
3. `components/beduda/contact.tsx`
   - Komentar `// CONTOH — ganti dengan jam operasional asli Beduda` dihapus.
   - Array `operatingHours` diubah menjadi satu baris: `['Senin–Minggu: 24 jam']`.
   - Label `Jadwal contoh — akan disesuaikan dengan jam operasional sebenarnya.` dihapus sepenuhnya.
   - Form kontak dan bagian lainnya tidak diubah.
4. `components/beduda/testimonials.tsx`
   - Menghapus data contoh lama (3 entri `Contoh pelanggan`, `data contoh`, eyebrow `CONTOH TESTIMONI`).
   - Eyebrow diubah menjadi `TESTIMONI PELANGGAN`, H2 tetap `Pengalaman pelanggan`.
   - Memasukkan 12 ulasan asli pelanggan secara persis.
   - Tiap kartu lebar tetap (`w-[320px] shrink-0`), 5 bintang, ulasan, nama, dan area.
   - Implementasi animasi auto-scroll loop mulus:
     - Menggandakan kartu (`aria-hidden="true"` pada set kedua) dengan track `flex w-max`.
     - Keyframes marquee `translateX(0)` ke `translateX(-50%)` durasi 60s `linear infinite`.
     - `IntersectionObserver` (threshold 0.2) untuk mengaktifkan running state saat section masuk ke layar.
     - Animasi pause saat hover (`:hover`).
     - Menghormati `prefers-reduced-motion`.
5. `app/globals.css`
   - Menambahkan deklarasi `@keyframes marquee`, `.testimonial-track`, `.testimonial-track.is-running`, `.testimonial-track:hover`, dan fallback `prefers-reduced-motion`.

> **Catatan Integritas:** Teks H1 Hero (`Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda`), Hero, About, Services, FAQ, Footer, `/root/rest-api`, Docker, dan Pterodactyl TIDAK disentuh sama sekali.

---

## 3. Kompilasi & BUILD_ID

- **Perintah Build:**
  ```bash
  NEXT_PUBLIC_SITE_URL=https://demo.xvannn07.me NODE_OPTIONS=--max-old-space-size=1024 pnpm build
  ```
- **BUILD_ID Lama:** `4cqhQGwLUC58FbpzGN-O_`
- **BUILD_ID Baru:** `H6dodkoiT3ebGzd9-JCPI`
- **Hasil Build:** Berhasil dikompilasi tanpa error menggunakan Turbopack.

---

## 4. Hasil Pengujian Port Sementara (Port 3250)

Sebelum menyentuh proses produksi PM2, server Next.js dijalankan sementara pada port `3250`:

- **Status Server Sementara:** Dijalankan dan dihentikan setelah tes selesai (**Port 3250 sudah dimatikan sepenuhnya**).
- **HTTP Status:** `200 OK`
- **H1 Header:** `Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda` (**PASS — tidak berubah**)
- **Galeri:**
  - H2: `Proses dan Armada BEDUDA` (**PASS**)
  - Paragraf: `Proses pengerjaan dan armada BEDUDA` (**PASS**)
  - 4 Foto baru: `/beduda-proses-1.jpg`, `/beduda-proses-2.jpg`, `/beduda-armada.jpg`, `/beduda-proses-3.png` (**PASS**)
  - Tanpa kata `(demo)` atau kata `demo` (**PASS**)
  - Grid rapi tanpa `sm:row-span-2`, rasio `aspect-[3/4]` & `object-cover` (**PASS**)
- **Peta Kantor:**
  - Iframe Google Maps koordinat `-8.1448984,115.0897827` dengan `title="Peta kantor BEDUDA"`, min-h 360px, `loading="lazy"` (**PASS**)
  - Tombol tautan Google Maps persis URL user (**PASS**)
  - Tanpa karangan alamat jalan (**PASS**)
- **Jam Layanan:**
  - `Senin–Minggu: 24 jam` (**PASS**)
  - Label `Jadwal contoh` sudah terhapus (**PASS**)
- **Testimoni:**
  - Eyebrow `TESTIMONI PELANGGAN` (**PASS**)
  - Seluruh 12 nama testimoni asli ada di HTML:
    - Made Wirata (Denpasar Selatan)
    - Ketut Ardana (Badung - Kuta)
    - Putu Lestari (Gianyar - Ubud)
    - Komang Sudarma (Tabanan - Kediri)
    - Gede Wibawa (Buleleng - Singaraja)
    - Ayu Saraswati (Badung - Mengwi)
    - Kadek Agus (Klungkung - Semarapura)
    - Nyoman Suardika (Bangli - Kintamani)
    - Ilham Saputra (Jembrana - Negara)
    - Wayan Sudiarta (Karangasem - Amlapura)
    - Luh Sari (Denpasar - Renon)
    - Agus Pratama (Tabanan - Canggu)
  - Teks `data contoh` dan `Contoh pelanggan` terhapus sepenuhnya (**PASS**)
  - Animasi keyframes marquee dan class `testimonial-track` terverifikasi ada (**PASS**)

---

## 5. Status Proses PM2

| Proses PM2 | PID Sebelum | PID Sesudah | Status |
| :--- | :--- | :--- | :--- |
| **yokuhost (id 2)** | `2758335` | `2758335` | **TIDAK disentuh / PID persis sama** |
| **beduda-preview (id 19)** | `3485197` | `3492172` | Restart berhasil & `pm2 save` dijalankan |

---

## 6. Hasil Pengujian Live Demo (https://demo.xvannn07.me)

Pengujian langsung terhadap URL demo publik:

1. **HTTP Status:** `HTTP/2 200`
2. **H1:** `Solusi Sedot WC dan Saluran Limbah untuk Rumah Anda` (Valid).
3. **Galeri Baru:**
   - Judul H2: `Proses dan Armada BEDUDA`
   - Deskripsi: `Proses pengerjaan dan armada BEDUDA`
   - 4 Gambar baru: HTTP/2 200 OK dengan MD5 checksum sesuai data asli.
   - Format: 4 kartu seragam `aspect-[3/4]` & `object-cover`.
4. **Peta Kantor:**
   - Iframe Google Maps koordinat `-8.1448984,115.0897827` termuat.
   - Tombol "Buka di Google Maps" dengan href link asli pengguna.
5. **Jam Layanan:**
   - Teks `Senin–Minggu: 24 jam` aktif. Label `Jadwal contoh` tidak ditemukan.
6. **Testimoni Pelanggan:**
   - 12 ulasan asli dengan nama, area, dan teks persis permintaan pengguna.
   - Animasi marquee otomatis loop mulus berjalan saat masuk layar (IntersectionObserver), jeda saat kursor di atas kartu (hover pause), dan menghormati reduced-motion.
