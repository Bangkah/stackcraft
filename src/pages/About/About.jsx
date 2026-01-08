
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


import { useState } from 'react';

const services = [
  {
    title: 'Pengembangan Website',
    description: 'Aplikasi web modern, responsif, dan mudah dikembangkan sesuai kebutuhan bisnis Anda.',
    detail: 'Kami membangun website dengan teknologi terbaru, desain responsif, dan performa optimal. Mulai dari landing page, portal, hingga aplikasi web kompleks.'
  },
  {
    title: 'Backend & API',
    description: 'Sistem backend yang tangguh, API yang aman, dan microservices untuk skalabilitas maksimal.',
    detail: 'StackCraft merancang backend yang scalable, aman, dan mudah diintegrasikan. API kami mendukung berbagai platform dan kebutuhan bisnis.'
  },
  {
    title: 'Arsitektur Sistem',
    description: 'Desain sistem yang scalable, aman, dan siap mendukung pertumbuhan bisnis jangka panjang.',
    detail: 'Kami membantu Anda memilih dan membangun arsitektur sistem yang tepat, mulai dari monolit hingga microservices dan cloud-native.'
  },
  {
    title: 'Cloud & Deployment',
    description: 'Implementasi cloud-native, CI/CD, dan DevOps agar aplikasi Anda selalu siap digunakan.',
    detail: 'Solusi cloud, deployment otomatis, dan DevOps untuk efisiensi dan keandalan aplikasi Anda. Kami mendukung AWS, Azure, GCP, dan lainnya.'
  }
];

const About = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="min-h-screen bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <section className="mb-16">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-2xl shadow-lg p-6 border-2 border-blue-400 flex flex-col gap-2">
              <h2 className="text-xl font-bold text-cyan-400 mb-2">Visi</h2>
              <p className="text-slate-200 text-base">Memberdayakan bisnis Indonesia dengan fondasi teknologi yang kuat dan siap masa depan.</p>
            </div>
            <div className="bg-slate-800 rounded-2xl shadow-lg p-6 border-2 border-blue-400 flex flex-col gap-2">
              <h2 className="text-xl font-bold text-cyan-400 mb-2">Misi</h2>
              <p className="text-slate-200 text-base">Menyediakan solusi backend dan full-stack berkualitas tinggi untuk mendorong inovasi dan pertumbuhan bisnis.</p>
            </div>
            <div className="bg-slate-800 rounded-2xl shadow-lg p-6 border-2 border-blue-400 flex flex-col gap-2">
              <h2 className="text-xl font-bold text-cyan-400 mb-2">Fokus</h2>
              <p className="text-slate-200 text-base">Rekayasa backend, pengembangan API, arsitektur sistem, dan deployment cloud-native.</p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl p-8 flex flex-col gap-3 border-2 border-blue-400 hover:scale-[1.04] hover:border-cyan-400 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${0.1 + i * 0.13}s` }}
                onClick={() => setSelected(i)}
              >
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-300" />
                <div className="text-lg font-bold text-blue-300 mb-1 group-hover:text-cyan-400 transition">{s.title}</div>
                <div className="text-slate-200">{s.description}</div>
              </div>
            ))}
          </div>
          {selected !== null && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
              <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/80 border-2 border-cyan-400 rounded-2xl shadow-2xl p-10 max-w-md w-full flex flex-col items-center animate-fadeIn backdrop-blur-xl" onClick={e => e.stopPropagation()}>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2 text-center">{services[selected].title}</h3>
                <p className="text-slate-200 mb-4 text-center text-base leading-relaxed">{services[selected].detail}</p>
                <button className="mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold px-8 py-2 rounded-lg shadow hover:scale-105 transition" onClick={() => setSelected(null)}>Tutup</button>
              </div>
            </div>
          )}
          <div className="max-w-4xl mx-auto px-4 mt-16">
            <h2 className="text-2xl font-bold text-blue-300 mb-4 text-center">Kenapa StackCraft?</h2>
            <ul className="list-disc pl-6 text-slate-200 text-base grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <li>Tim berpengalaman di backend & cloud</li>
              <li>Solusi custom sesuai kebutuhan bisnis</li>
              <li>Fokus pada keamanan dan skalabilitas</li>
              <li>Support & konsultasi berkelanjutan</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
