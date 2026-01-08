import { useState } from 'react';

const valueProps = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="14" stroke="#4fd1c5" strokeWidth="2"/>
        <path d="M10 16l4 4 8-8" stroke="#63b3ed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Skalabilitas',
    desc: 'Solusi yang tumbuh bersama bisnis Anda.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <rect x="6" y="10" width="20" height="12" rx="4" stroke="#4fd1c5" strokeWidth="2"/>
        <path d="M16 14v4" stroke="#63b3ed" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Keamanan',
    desc: 'Data dan sistem Anda selalu terlindungi.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <path d="M16 6v20M6 16h20" stroke="#4fd1c5" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="14" stroke="#63b3ed" strokeWidth="2"/>
      </svg>
    ),
    title: 'Efisiensi',
    desc: 'Teknologi yang memudahkan proses bisnis.'
  }
];

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

const projects = [
  { title: 'Atlas', description: 'Platform SaaS multi-tenant untuk analitik bisnis.', tech: 'React, Node.js, Azure' },
  { title: 'API Gateway', description: 'Gerbang API terintegrasi untuk microservices.', tech: 'Go, Kubernetes, AWS' },
  { title: 'E-Commerce Core', description: 'Backend untuk e-commerce dengan trafik tinggi.', tech: 'Java, Spring Boot, GCP' },
];

const Home = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMjcsMjU1LDIxMiwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="w-full relative z-10 px-0 flex flex-col">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-[fadeInUp_0.8s_ease-out]">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Bangun Masa Depan <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Digital</span> Bisnis Anda
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                StackCraft adalah partner teknologi yang membantu bisnis Anda tumbuh, berinovasi, dan menjadi yang terdepan.
              </p>
              <p className="text-lg text-gray-400">
                Kami merancang solusi backend & full-stack modern, scalable, dan aman. Fokus kami adalah menghadirkan fondasi digital yang kokoh agar bisnis Anda siap bersaing di era digital.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-teal-500/30 transform hover:scale-105 transition-all duration-300">
                Mulai Konsultasi Gratis
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
            
            <div className="flex justify-center animate-[fadeInUp_1s_ease-out]">
              <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
                <ellipse cx="110" cy="160" rx="90" ry="18" fill="#4fd1c5" fillOpacity="0.13"/>
                <rect x="40" y="40" width="140" height="80" rx="18" fill="#63b3ed" fillOpacity="0.18"/>
                <rect x="60" y="60" width="100" height="60" rx="14" fill="#4fd1c5" fillOpacity="0.22"/>
                <path d="M80 90h60M80 110h60" stroke="#63b3ed" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="110" cy="80" r="18" fill="#63b3ed" fillOpacity="0.32"/>
                <circle cx="110" cy="80" r="10" fill="#4fd1c5" fillOpacity="0.7"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
        <section className="relative overflow-hidden py-24 px-0 w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 animate-gradient-x">
          {/* Animated gradient background */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-tr from-cyan-900/30 via-blue-800/20 to-teal-900/30 animate-pulse-slow" />
          </div>
          <div className="w-full relative z-10 flex flex-col">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              <div className="space-y-8 animate-[fadeInUp_0.8s_ease-out]">
                <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl">
                  <span className="block">Bangun Masa Depan</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 animate-gradient-x">Digital Bisnis Anda</span>
                </h1>
                <p className="text-2xl text-slate-200 font-medium leading-relaxed drop-shadow mb-4">
                  StackCraft adalah partner teknologi untuk pertumbuhan, inovasi, dan keunggulan digital bisnis Anda.
                </p>
                <button className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-extrabold text-xl rounded-2xl shadow-2xl hover:scale-110 hover:shadow-cyan-400/30 transition-all duration-300 animate-bounce-slow">
                  🚀 Konsultasi Gratis
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-center animate-[fadeInUp_1s_ease-out]">
                <svg width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
                  <ellipse cx="160" cy="200" rx="120" ry="18" fill="#4fd1c5" fillOpacity="0.13"/>
                  <rect x="70" y="60" width="180" height="100" rx="28" fill="#63b3ed" fillOpacity="0.18"/>
                  <rect x="100" y="90" width="120" height="60" rx="18" fill="#4fd1c5" fillOpacity="0.22"/>
                  <path d="M120 120h80M120 140h80" stroke="#63b3ed" strokeWidth="6" strokeLinecap="round"/>
                  <circle cx="160" cy="110" r="28" fill="#63b3ed" fillOpacity="0.32"/>
                  <circle cx="160" cy="110" r="16" fill="#4fd1c5" fillOpacity="0.7"/>
                </svg>
              </div>
            </div>
          </div>
          {/* SVG Wave transition */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
            <svg viewBox="0 0 1920 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
              <path d="M0 40C320 80 1600 0 1920 40V80H0V40Z" fill="currentColor" className="text-slate-900"/>
            </svg>
          </div>
        </section>
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
      `}</style>

      {/* About Section */}
      <section className="py-20 px-0 bg-slate-900/50 w-full">
        <div className="w-full px-0">
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mb-8"></div>
          <h2 className="text-4xl font-bold text-white mb-6">Tentang StackCraft</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            StackCraft adalah perusahaan teknologi modern yang berfokus pada solusi backend dan full-stack. Kami membantu tim dan bisnis membangun sistem digital yang scalable, aman, dan mudah dikembangkan.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-10">Visi & Misi</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong className="text-white">Visi:</strong> Memberdayakan bisnis Indonesia dengan fondasi teknologi yang kuat dan siap masa depan.</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong className="text-white">Misi:</strong> Menyediakan solusi backend dan full-stack berkualitas tinggi untuk mendorong inovasi dan pertumbuhan bisnis.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-white mb-4 mt-10">Fokus Kami</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Kami berfokus pada rekayasa backend, pengembangan API, arsitektur sistem, dan deployment cloud-native. Tim StackCraft siap membantu Anda membangun solusi digital yang scalable dan efisien.
          </p>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 px-0 w-full">
        <div className="w-full px-0">
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mb-8"></div>
          <h2 className="text-4xl font-bold text-white mb-12">Keunggulan StackCraft</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {valueProps.map((v, i) => (
              <div 
                key={i}
                className="flex gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{animation: `fadeInUp 0.8s ease-out ${i * 0.15 + 0.1}s both`}}
              >
                <div className="flex-shrink-0">{v.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-gray-400">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 px-0 bg-slate-900/50 w-full">
        <div className="w-full px-0">
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mb-8"></div>
          <h2 className="text-4xl font-bold text-white mb-8">Mengapa StackCraft?</h2>
          
          <ul className="space-y-4">
            {[
              'Tim berpengalaman di backend & cloud',
              'Solusi custom sesuai kebutuhan bisnis',
              'Fokus pada keamanan dan skalabilitas',
              'Support & konsultasi berkelanjutan'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg text-gray-300">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-0 w-full">
        <div className="w-full px-0">
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mb-8"></div>
          <h2 className="text-4xl font-bold text-white mb-12">Layanan Unggulan Kami</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, idx) => (
              <div 
                key={s.title}
                onClick={() => setSelected(idx)}
                className="cursor-pointer p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300 group"
                style={{animation: `fadeInUp 0.8s ease-out ${idx * 0.18 + 0.2}s both`}}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    {idx === 0 && (
                      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
                        <rect x="6" y="10" width="24" height="16" rx="5" stroke="#4fd1c5" strokeWidth="2"/>
                        <path d="M18 14v8" stroke="#63b3ed" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15" stroke="#4fd1c5" strokeWidth="2"/>
                        <path d="M12 18l6 6 12-12" stroke="#63b3ed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
                        <path d="M18 8v20M8 18h20" stroke="#4fd1c5" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="18" cy="18" r="15" stroke="#63b3ed" strokeWidth="2"/>
                      </svg>
                    )}
                    {idx === 3 && (
                      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
                        <ellipse cx="18" cy="30" rx="14" ry="4" fill="#4fd1c5" fillOpacity="0.13"/>
                        <rect x="8" y="12" width="20" height="12" rx="5" fill="#63b3ed" fillOpacity="0.18"/>
                        <rect x="12" y="16" width="12" height="8" rx="3" fill="#4fd1c5" fillOpacity="0.22"/>
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-400">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selected !== null && (
            <div className="mt-8 p-8 bg-gradient-to-br from-teal-900/20 to-blue-900/20 backdrop-blur-sm border border-teal-500/30 rounded-xl animate-[fadeIn_0.3s_ease-out]">
              <h2 className="text-2xl font-bold text-white mb-4">{services[selected].title}</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">{services[selected].detail}</p>
              <button 
                onClick={() => setSelected(null)}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
              >
                Tutup
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-0 bg-slate-900/50 w-full">
        <div className="w-full">
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mb-8"></div>
          <h2 className="text-4xl font-bold text-white mb-4">Portofolio & Proyek Terbaik</h2>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            Inilah beberapa solusi digital yang telah kami bangun untuk klien dari berbagai industri. Setiap proyek dirancang untuk memberikan dampak nyata dan pertumbuhan bisnis.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 w-full">
            {projects.map((p, i) => (
              <div 
                key={p.title}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {p.title[0]}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 mb-4">{p.description}</p>
                <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300">
                  {p.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-0 w-full">
        <div className="w-full px-0">
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mb-8 mx-auto"></div>
          <div className="text-center p-12 bg-gradient-to-br from-teal-900/20 to-blue-900/20 backdrop-blur-sm border border-teal-500/30 rounded-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Siap Membawa Bisnis Anda ke Level Selanjutnya?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Jangan ragu untuk konsultasi gratis bersama StackCraft. Kami siap membantu Anda mewujudkan ide, mengoptimalkan sistem, dan mempercepat pertumbuhan bisnis digital Anda.
            </p>
            <button className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-teal-500/40 transform hover:scale-105 transition-all duration-300">
              Diskusi Sekarang
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <style>{`
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;