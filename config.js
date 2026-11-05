/* ============================================================
   FLOWERCIE — PUSAT PENGATURAN ♡
   Semua yang perlu kamu ganti ada di file ini.
   Cara edit: ganti tulisan di antara tanda kutip "..." saja.
   Jangan hapus tanda kutip, koma (,) di ujung baris, atau titik koma.
   ============================================================ */

window.FLOWERCIE = {

  /* ---------- 1. NAMA TOKO ---------- */
  // Nama yang tampil di navigasi.
  storeName: "Flowercie",
  // Nama domain yang tampil di footer.
  storeDomain: "flowercie.co",

  /* ---------- 2. GAMBAR ---------- */
  // Taruh gambar di folder assets/images/ lalu tulis nama filenya di sini.
  // Boleh .png, .jpg, .webp, atau .svg.
  logo: "assets/images/logo.png",              // logo kecil (kotak / bulat)
  heroBanner: "assets/images/hero-banner.jpg", // banner besar di atas (disarankan rasio 16:9 atau 2:1)
  tncImage: "assets/images/tnc.svg",           // gambar di kartu T&C (disarankan rasio 3:2, mis. 900x600)

  // Tulisan kartun di bagian bawah banner.
  // Kalau banner buatanmu sendiri sudah ada tulisannya, kosongkan: heroText: "",
  heroText: "flowercie.co!",

  /* ---------- 3. LINK ----------
     Link di bawah sudah diisi. Kalau ada yang masih berisi kata GANTI,
     Selama masih ada kata GANTI, tombolnya hanya menampilkan
     pesan "link belum diisi" supaya tidak membuka halaman salah.
     Ganti dengan link aslimu, contoh:
       pricelistUrl: "https://namawebmu.vercel.app",
  ------------------------------------------------------------ */
  pricelistUrl:    "https://flowerciee.netlify.app",     // website pricelist
  whatsappUrl:     "https://wa.me/6285290593454",               // contoh isi: https://wa.me/6281234567890
  instagramUrl:    "https://www.instagram.com/flowercie.co?psln=aGlmenh5ZmRkdGs2",    // profil Instagram
  xUrl:            "https://x.com/cecilkesyil",             // profil X / Twitter
  telegramUrl:     "https://t.me/phqone",       // akun / channel Telegram
  testimonialsUrl: "https://t.me/readiy",       // channel Telegram testimoni

  /* ---------- 4. MUSIK LATAR ----------
     Taruh file MP3 di folder assets/music/ lalu tulis namanya di sini.
     Musik TIDAK jalan otomatis; hanya jalan setelah pengunjung menekan tombol musik.
     Kalau file belum ada, website tetap normal. */
  music: {
    file: "assets/music/background.mp3", // nama file MP3
    title: "Little Flower Day",          // judul lagu yang tampil di player
    artist: "Flowercie",                 // nama artis / pembuat
    volume: 0.6                          // 0 (hening) sampai 1 (maksimal)
  },

  /* ---------- 5. ISI TERMS & CONDITIONS ----------
     Ini isi halaman terms.html. Ganti dengan T&C milikmu.
     Satu blok { title, text } = satu bagian.
     Tambah bagian baru: copy satu blok { ... }, tempel di bawahnya, jangan lupa koma.
     Hapus bagian: hapus satu blok { ... } itu.
     Teks ditulis di antara tanda ` (backtick, di sebelah angka 1 pada keyboard,
     atau tahan tombol ' di keyboard HP). Boleh banyak baris.
     Beri satu baris kosong untuk memisahkan paragraf. */
  tnc: {
    sections: [
      {
        title: "1. Judul bagian pertama",
        text: `GANTI dengan isi T&C kamu di sini.

Ini paragraf kedua. Pisahkan paragraf dengan satu baris kosong.`
      },
      {
        title: "2. Judul bagian kedua",
        text: `GANTI dengan isi T&C kamu di sini.`
      },
      {
        title: "3. Judul bagian ketiga",
        text: `GANTI dengan isi T&C kamu di sini.`
      }
    ]
  }
};
