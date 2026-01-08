

const layananList = [
  {
    title: 'Pengembangan Website',
    desc: 'Aplikasi web modern, responsif, dan scalable sesuai kebutuhan bisnis Anda.',
    detail: 'Kami membangun website dengan teknologi terbaru, desain responsif, dan performa optimal. Mulai dari landing page, portal, hingga aplikasi web kompleks.'
  },
  {
    title: 'Backend & API',
    desc: 'Sistem backend yang tangguh, API yang aman, dan microservices untuk skalabilitas maksimal.',
    detail: 'StackCraft merancang backend yang scalable, aman, dan mudah diintegrasikan. API kami mendukung berbagai platform dan kebutuhan bisnis.'
  },
  {
    title: 'Arsitektur Sistem',
    desc: 'Desain sistem yang scalable, aman, dan siap mendukung pertumbuhan bisnis jangka panjang.',
    detail: 'Kami membantu Anda memilih dan membangun arsitektur sistem yang tepat, mulai dari monolit hingga microservices dan cloud-native.'
  },
  {
    title: 'Cloud & Deployment',
    desc: 'Implementasi cloud-native, CI/CD, dan DevOps agar aplikasi Anda selalu siap digunakan.',
    detail: 'Solusi cloud, deployment otomatis, dan DevOps untuk efisiensi dan keandalan aplikasi Anda. Kami mendukung AWS, Azure, GCP, dan lainnya.'
  },
  {
    title: 'Konsultasi & Audit',
    desc: 'Konsultasi teknologi, audit sistem, dan rekomendasi solusi digital terbaik.',
    detail: 'Tim StackCraft siap membantu Anda melakukan audit sistem, konsultasi arsitektur, dan memberikan rekomendasi teknologi yang tepat.'
  },
];

const valueProps = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" stroke="#4fd1c5" strokeWidth="2"/><path d="M10 16l4 4 8-8" stroke="#63b3ed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Skalabilitas',
    desc: 'Solusi yang tumbuh bersama bisnis Anda.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="6" y="10" width="20" height="12" rx="4" stroke="#4fd1c5" strokeWidth="2"/><path d="M16 14v4" stroke="#63b3ed" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Keamanan',
    desc: 'Data dan sistem Anda selalu terlindungi.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M16 6v20M6 16h20" stroke="#4fd1c5" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="14" stroke="#63b3ed" strokeWidth="2"/></svg>
    ),
    title: 'Efisiensi',
    desc: 'Teknologi yang memudahkan proses bisnis.'
  }
];

const Services = () => (
  <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-800 pb-24">
    <div className="max-w-screen-2xl mx-auto px-4 pt-20 pb-10 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4 drop-shadow-lg">Layanan StackCraft</h1>
      <p className="text-lg md:text-xl text-slate-300 mb-8 font-medium max-w-2xl mx-auto">Solusi digital, backend, cloud, dan konsultasi teknologi untuk bisnis modern. Kami siap membantu Anda dari tahap perencanaan hingga implementasi.</p>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 rounded-full mb-8" />
    </div>

    {/* Value Props */}
    <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {valueProps.map((v, i) => (
        <div key={i} className="flex flex-col items-center gap-3 bg-slate-800 rounded-2xl shadow-lg p-8 border-2 border-blue-400">
          <div>{v.icon}</div>
          <h3 className="text-xl font-bold text-cyan-400 mb-1">{v.title}</h3>
          <p className="text-slate-200 text-base text-center">{v.desc}</p>
        </div>
      ))}
    </div>

    {/* Layanan List */}
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
      {layananList.map((l, idx) => (
        <div key={idx} className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl p-10 flex flex-col gap-3 border-2 border-cyan-700 hover:scale-[1.04] hover:border-blue-400 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden">
          <h2 className="text-2xl font-bold text-blue-300 mb-2 group-hover:text-cyan-400 transition">{l.title}</h2>
          <p className="text-slate-200 mb-2 text-base leading-relaxed">{l.desc}</p>
          <p className="text-slate-400 text-sm">{l.detail}</p>
        </div>
      ))}
    </div>

    {/* CTA Section */}
    <div className="max-w-3xl mx-auto px-4 text-center p-12 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
      <h2 className="text-3xl font-bold text-white mb-6">
        Siap Diskusi Layanan untuk Bisnis Anda?
      </h2>
      <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
        Konsultasikan kebutuhan digital Anda bersama StackCraft. Kami siap membantu Anda memilih solusi terbaik dan mengimplementasikannya dengan profesional.
      </p>
      <a href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
        Konsultasi Sekarang
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
);

export default Services;
