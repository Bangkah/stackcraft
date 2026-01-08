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
  <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-24">
    <div className="max-w-5xl xl:max-w-7xl 2xl:max-w-screen-xl mx-auto px-4 pt-20 pb-12 text-center">
      <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-cyan-400 mb-6 drop-shadow-lg tracking-tight">Artikel StackCraft</h1>
      <p className="text-lg md:text-xl 2xl:text-2xl text-slate-300 mb-10 font-medium">Wawasan, tips, dan inspirasi seputar teknologi backend, cloud, dan pengembangan digital untuk bisnis modern.</p>
      <div className="w-32 h-1 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 rounded-full mb-4" />
    </div>
    <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 xl:gap-10">
      {artikelList.map((a, idx) => (
        <div
          key={idx}
          className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl p-8 2xl:p-10 flex flex-col gap-3 border-2 border-cyan-700 hover:scale-[1.04] hover:border-blue-400 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[260px]"
          style={{ animationDelay: `${0.1 + idx * 0.13}s` }}
        >
          <div className="absolute -top-6 -right-6 w-20 h-20 2xl:w-28 2xl:h-28 bg-cyan-400/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-300" />
          <h2 className="text-xl 2xl:text-2xl font-bold text-blue-300 mb-1 group-hover:text-cyan-400 transition">{a.title}</h2>
          <p className="text-slate-200 mb-2 text-base 2xl:text-lg leading-relaxed">{a.excerpt}</p>
          <span className="text-cyan-400 text-xs 2xl:text-sm font-semibold mt-auto">{a.date}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Artikel;
