# Flowercie ♡ Website Portfolio

Website statis (HTML + CSS + JavaScript biasa). Tanpa backend, tanpa database, gratis di Vercel.

## Isi folder

```
index.html     halaman utama
terms.html     halaman Terms & Conditions
style.css      tampilan (warna ada di bagian paling atas)
script.js      fitur (menu, musik, ukuran teks) - tidak perlu diedit
config.js      PUSAT PENGATURAN: semua link, gambar, musik, isi T&C
assets/images  logo, banner, gambar T&C
assets/music   file musik
```

**Kamu hanya perlu mengedit `config.js` dan mengganti file di folder `assets`.**

---

## A. Cara mengedit di HP

1. Buka repository kamu di GitHub (lewat Chrome).
2. Tap file yang mau diedit, misalnya `config.js`.
3. Tap ikon pensil (Edit this file).
4. Ganti tulisan di antara tanda kutip `"..."`. Jangan hapus tanda kutip dan koma.
5. Tap **Commit changes...** lalu **Commit changes**.
6. Tunggu sekitar 30 detik. Vercel memperbarui website otomatis.

---

## B. Mengganti URL

Buka `config.js`, cari bagian `3. LINK`. Ganti yang ada kata GANTI:

| Baris | Isi dengan |
|---|---|
| `pricelistUrl` | link website pricelist kamu |
| `whatsappUrl` | `https://wa.me/628xxxxxxxxxx` (nomor tanpa + dan tanpa 0 di depan) |
| `instagramUrl` | `https://instagram.com/usernamekamu` |
| `xUrl` | `https://x.com/usernamekamu` |
| `telegramUrl` | `https://t.me/usernamekamu` |
| `testimonialsUrl` | link channel Telegram testimoni |

Selama masih ada kata GANTI, tombol hanya memunculkan pesan "Link ini belum diisi".

## C. Mengganti logo

1. Siapkan gambar logo (kotak, mis. 400x400, PNG/JPG/WebP/SVG).
2. Di GitHub buka folder `assets/images`, tap **Add file > Upload files**, pilih gambarmu, lalu Commit.
3. Di `config.js` ganti `logo: "assets/images/logo.png"` menjadi nama filemu, mis. `logo: "assets/images/logo.png"`.
4. Untuk ikon tab browser, ganti juga file `favicon.png` (opsional).

## D. Mengganti banner

1. Siapkan banner rasio 2:1 (mis. 1600x800). Bagian tengah sebaiknya tidak terlalu ramai.
2. Upload ke `assets/images`.
3. Di `config.js` ganti `heroBanner`.
4. Kalau banner buatanmu sudah ada tulisannya, ubah `heroText: "flowercie.co!"` menjadi `heroText: ""`.

## E. Mengganti foto T&C

Upload gambar rasio 3:2 (mis. 900x600) ke `assets/images`, lalu ganti `tncImage` di `config.js`.

## F. Mengisi teks Terms & Conditions

Di `config.js` cari bagian `5. ISI TERMS & CONDITIONS`. Ganti judul dan teks di tiap blok `{ title, text }`. Tambah bagian dengan menyalin satu blok. Pengunjung bisa memperbesar teks lewat tombol A+ / A− di halaman T&C.

## G. Mengganti musik

1. Siapkan file MP3 (disarankan di bawah 5 MB supaya cepat dibuka).
2. Upload ke folder `assets/music`. Beri nama `background.mp3`, atau ganti `file` di bagian `music` pada `config.js`.
3. Ganti juga `title` dan `artist` supaya tampil di player.

Musik tidak jalan otomatis. Pengunjung menekan tombol musik di navigasi untuk memulai. Status musik berlanjut saat pindah halaman (kalau browser memblokir, pengunjung tinggal menekan tombol play).

---

## H. Upload ke Vercel dari HP Android (gratis, tanpa laptop)

### 1. Ambil file website
Unduh ZIP `flowercie.zip` dari chat Claude, lalu tap file yang terunduh.

### 2. Ekstrak ZIP
Buka aplikasi **Files by Google** > **Download** > tap `flowercie.zip` > **Extract** > **Done**. Akan muncul folder `flowercie`.

### 3. Buat akun dan repository GitHub
1. Buka Chrome, masuk ke **github.com** > **Sign up** (gratis), lalu verifikasi email.
2. Tap ikon **+** di kanan atas > **New repository**.
3. Isi nama, misalnya `flowercie`. Pilih **Public**. Tap **Create repository**.

### 4. Upload file ke GitHub
GitHub di HP tidak bisa mengunggah folder sekaligus, jadi lakukan dalam 3 tahap kecil:

**Tahap 1: file utama.** Di repository tap **uploading an existing file** (atau **Add file > Upload files**). Pilih 6 file ini dari folder `flowercie`: `index.html`, `terms.html`, `style.css`, `script.js`, `config.js`, `README.md`. Tunggu selesai, lalu tap **Commit changes**.

**Tahap 2: folder gambar.**
1. Tap **Add file > Create new file**.
2. Di kolom nama ketik `assets/images/catatan.txt` (tanda `/` otomatis membuat folder). Isi teks bebas, mis. `x`. Tap **Commit changes**.
3. Buka folder `assets` > `images`, tap **Add file > Upload files**, pilih 4 file: `logo.png`, `favicon.png`, `hero-banner.jpg`, `tnc.svg`. Tap **Commit changes**.

**Tahap 3: folder musik.** Ulangi cara yang sama dengan nama `assets/music/catatan.txt`. Lalu buka folder `assets/music` dan upload `background.mp3` milikmu (kalau sudah punya).

Tips: kalau tombol upload sulit ditekan, di Chrome buka menu **⋮ > Desktop site**.

### 5. Login ke Vercel
Buka **vercel.com** > **Sign Up** > pilih **Continue with GitHub** > izinkan (Authorize). Pilih paket **Hobby** (gratis).

### 6. Hubungkan repository
1. Di dashboard tap **Add New... > Project**.
2. Di daftar **Import Git Repository**, cari `flowercie` lalu tap **Import**. Kalau belum muncul, tap **Adjust GitHub App Permissions** dan izinkan repository itu.

### 7. Pengaturan deployment
Biarkan semuanya bawaan:
- **Framework Preset**: Other
- **Root Directory**: `./`
- **Build Command** dan **Output Directory**: kosongkan (jangan diisi)

### 8. Deploy
Tap **Deploy**. Tunggu sekitar 30-60 detik sampai muncul tulisan **Congratulations**.

### 9. Ambil link website
Tap gambar preview atau tombol **Visit**. Linknya seperti `https://flowercie-xxxx.vercel.app`. Link ini bisa kamu pasang di bio, atau bagikan ke pelanggan.

### 10. Memperbarui website
Edit file lewat GitHub (lihat bagian A). Setiap kali kamu menekan Commit, Vercel otomatis memperbarui website dalam sekitar 30 detik. Kalau perubahan belum terlihat, tutup tab lalu buka lagi, atau muat ulang halaman.

Kalau suatu hari mau memakai domain sendiri (misalnya flowercie.co): Vercel > project > **Settings > Domains**.

---

## Catatan
- Font dimuat dari Google Fonts. Kalau offline, otomatis memakai font cadangan.
- Kalau file MP3 belum ada, website tetap normal. Saat tombol musik ditekan akan muncul pesan kecil.
- Semua path file memakai relative path, jadi folder bisa dipindah ke hosting statis mana pun.
