import { useState } from 'react';

const projects = [
  {
    title: 'Project Atlas',
    description: 'Multi-tenant SaaS platform untuk analitik dan pelaporan bisnis.',
    tech: 'React, Node.js, Azure',
    detail: 'Atlas adalah platform SaaS yang mendukung analitik real-time, pelaporan, dan integrasi data multi-tenant untuk perusahaan skala besar.'
  },
  {
    title: 'API Gateway',
    description: 'Gerbang API terintegrasi untuk microservices dan autentikasi.',
    tech: 'Go, Kubernetes, AWS',
    detail: 'API Gateway StackCraft mengelola routing, autentikasi, dan monitoring API untuk arsitektur microservices.'
  },
  {
    title: 'E-Commerce Core',
    description: 'Backend untuk platform e-commerce dengan trafik tinggi.',
    tech: 'Java, Spring Boot, GCP',
    detail: 'Solusi backend yang scalable dan aman untuk e-commerce, mendukung ribuan transaksi per detik dan integrasi pembayaran.'
  },
  {
    title: 'Realtime Chat',
    description: 'Infrastruktur chat real-time untuk web dan mobile.',
    tech: 'TypeScript, Socket.io, Azure',
    detail: 'StackCraft membangun chat server yang scalable, mendukung notifikasi, grup, dan integrasi multi-platform.'
  }
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-20">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4 drop-shadow-lg animate-[fadeInDown_0.6s_ease-out]">
          Proyek & Studi Kasus StackCraft
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8 font-medium animate-[fadeIn_0.8s_ease-out]">
          Portofolio solusi digital, backend, dan cloud yang telah kami bangun untuk klien dari berbagai industri.
        </p>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 rounded-full animate-[expandWidth_0.8s_ease-out]" />
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, idx) => (
          <div
            key={p.title}
            className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl p-8 flex flex-col gap-3 border-2 border-cyan-700 hover:scale-[1.04] hover:border-blue-400 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer relative overflow-hidden"
            style={{ 
              animation: `fadeInUp 0.6s ease-out ${0.1 + idx * 0.13}s both`
            }}
            onClick={() => setSelected(idx)}
          >
            {/* Glow Effect */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl group-hover:scale-150 group-hover:bg-cyan-400/20 transition-all duration-300" />
            
            {/* Icon Badge */}
            <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
              {p.title[0]}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-blue-300 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-3">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tech.split(', ').map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Click Indicator */}
            <div className="relative z-10 mt-auto pt-4 flex items-center gap-2 text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Lihat Detail</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected !== null && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-[fadeIn_0.2s_ease-out]" 
          onClick={() => setSelected(null)}
        >
          <div 
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-cyan-400 rounded-2xl shadow-2xl p-8 md:p-10 max-w-2xl w-full flex flex-col relative animate-[scaleIn_0.3s_ease-out]" 
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Icon Badge */}
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg mx-auto">
              {projects[selected].title[0]}
            </div>

            {/* Content */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 text-center">
              {projects[selected].title}
            </h2>
            
            <p className="text-slate-200 mb-6 text-center text-base leading-relaxed">
              {projects[selected].detail}
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {projects[selected].tech.split(', ').map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center mt-4">
              <button 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-900 font-bold px-8 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300" 
                onClick={() => setSelected(null)}
              >
                Tutup
              </button>
              <button 
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
              >
                Kontak Kami
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;