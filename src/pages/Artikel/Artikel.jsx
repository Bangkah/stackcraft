import styles from './Artikel.module.css';


const artikelList = [
  {
    title: 'Mengapa Backend Penting untuk Startup?',
    excerpt: 'Backend adalah fondasi aplikasi digital. Dengan backend yang kuat, startup dapat tumbuh lebih cepat, aman, dan siap menghadapi skala besar. Pelajari strategi membangun backend yang efisien dan scalable.',
    date: '7 Januari 2026'
  },
  {
    title: 'Tips Memilih Cloud untuk Bisnis',
    excerpt: 'Cloud computing menawarkan fleksibilitas, efisiensi biaya, dan kemudahan integrasi. Simak tips memilih layanan cloud terbaik sesuai kebutuhan bisnis Anda, mulai dari keamanan hingga skalabilitas.',
    date: '5 Januari 2026'
  },
  {
    title: 'Arsitektur Microservices: Kapan Harus Mulai?',
    excerpt: 'Microservices cocok untuk aplikasi yang ingin berkembang pesat dan mudah di-maintain. Temukan tanda-tanda kapan bisnis Anda perlu migrasi ke arsitektur microservices dan langkah-langkah awal yang harus dilakukan.',
    date: '2 Januari 2026'
  },
  {
    title: 'DevOps: Kunci Kecepatan Deploy Produk Digital',
    excerpt: 'DevOps membantu tim mengotomasi proses pengembangan dan deployment. Pelajari manfaat DevOps dan cara mengimplementasikannya agar produk digital Anda lebih cepat sampai ke pengguna.',
    date: '30 Desember 2025'
  },
  {
    title: 'Keamanan Data di Era Cloud',
    excerpt: 'Keamanan data adalah prioritas utama di era cloud. Artikel ini membahas praktik terbaik menjaga data tetap aman, mulai dari enkripsi hingga manajemen akses.',
    date: '28 Desember 2025'
  }
];

const Artikel = () => (
  <div className={styles.artikel}>
    <h1>Artikel StackCraft</h1>
    <p className={styles.subtitle}>Wawasan, tips, dan inspirasi seputar teknologi backend, cloud, dan pengembangan digital untuk bisnis modern.</p>
    <div className={styles.list}>
      {artikelList.map((a, idx) => (
        <div key={idx} className={styles.card}>
          <h2 className={styles.title}>{a.title}</h2>
          <p className={styles.excerpt}>{a.excerpt}</p>
          <span className={styles.date}>{a.date}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Artikel;
