
import styles from './Home.module.css';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Bangun Masa Depan Digital Bisnis Anda</h1>
            <p className={styles.tagline}>StackCraft adalah partner teknologi yang membantu bisnis Anda tumbuh, berinovasi, dan menjadi yang terdepan.</p>
            <p className={styles.subtitle}>Kami merancang solusi backend & full-stack modern, scalable, dan aman. Fokus kami adalah menghadirkan fondasi digital yang kokoh agar bisnis Anda siap bersaing di era digital.</p>
            <Link to="/contact" className={styles.cta}>Mulai Konsultasi Gratis</Link>
          </div>
          <div className={styles.heroIllustration}>
            <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="110" cy="160" rx="90" ry="18" fill="#4fd1c5" fillOpacity="0.13"/>
              <rect x="40" y="40" width="140" height="80" rx="18" fill="#63b3ed" fillOpacity="0.18"/>
              <rect x="60" y="60" width="100" height="60" rx="14" fill="#4fd1c5" fillOpacity="0.22"/>
              <path d="M80 90h60M80 110h60" stroke="#63b3ed" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="110" cy="80" r="18" fill="#63b3ed" fillOpacity="0.32"/>
              <circle cx="110" cy="80" r="10" fill="#4fd1c5" fillOpacity="0.7"/>
            </svg>
          </div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.accentLine}></div>
        <h2>Tentang StackCraft</h2>
        <p className={styles.subtitle}>
          StackCraft adalah perusahaan teknologi modern yang berfokus pada solusi backend dan full-stack. Kami membantu tim dan bisnis membangun sistem digital yang scalable, aman, dan mudah dikembangkan.
        </p>
        <h3>Visi & Misi</h3>
        <ul className={styles.visionList}>
          <li><strong>Visi:</strong> Memberdayakan bisnis Indonesia dengan fondasi teknologi yang kuat dan siap masa depan.</li>
          <li><strong>Misi:</strong> Menyediakan solusi backend dan full-stack berkualitas tinggi untuk mendorong inovasi dan pertumbuhan bisnis.</li>
        </ul>
        <h3>Fokus Kami</h3>
        <p>
          Kami berfokus pada rekayasa backend, pengembangan API, arsitektur sistem, dan deployment cloud-native. Tim StackCraft siap membantu Anda membangun solusi digital yang scalable dan efisien.
        </p>
      </section>

      <section className={styles.valuePropsSection}>
        <div className={styles.accentLine}></div>
        <h2>Keunggulan StackCraft</h2>
        <div className={styles.valueProps}>
          {valueProps.map((v, i) => (
            <div key={i} className={styles.valueCard} style={{animationDelay: `${i * 0.15 + 0.1}s`}}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.accentLine}></div>
        <h2>Mengapa StackCraft?</h2>
        <ul className={styles.whyList}>
          <li>Tim berpengalaman di backend & cloud</li>
          <li>Solusi custom sesuai kebutuhan bisnis</li>
          <li>Fokus pada keamanan dan skalabilitas</li>
          <li>Support & konsultasi berkelanjutan</li>
        </ul>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.accentLine}></div>
        <h2>Layanan Unggulan Kami</h2>
        <div className={styles.cards}>
          {services.map((s, idx) => (
            <div key={s.title} onClick={() => setSelected(idx)} style={{cursor:'pointer', width:'100%'}}>
              <div className={styles.valueCard} style={{animationDelay: `${idx * 0.18 + 0.2}s`}}>
                <span className={styles.serviceIcon}>
                  {idx === 0 && (
                    <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect x="6" y="10" width="24" height="16" rx="5" stroke="#4fd1c5" strokeWidth="2"/><path d="M18 14v8" stroke="#63b3ed" strokeWidth="2" strokeLinecap="round"/></svg>
                  )}
                  {idx === 1 && (
                    <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" stroke="#4fd1c5" strokeWidth="2"/><path d="M12 18l6 6 12-12" stroke="#63b3ed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                  {idx === 2 && (
                    <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><path d="M18 8v20M8 18h20" stroke="#4fd1c5" strokeWidth="2" strokeLinecap="round"/><circle cx="18" cy="18" r="15" stroke="#63b3ed" strokeWidth="2"/></svg>
                  )}
                  {idx === 3 && (
                    <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><ellipse cx="18" cy="30" rx="14" ry="4" fill="#4fd1c5" fillOpacity="0.13"/><rect x="8" y="12" width="20" height="12" rx="5" fill="#63b3ed" fillOpacity="0.18"/><rect x="12" y="16" width="12" height="8" rx="3" fill="#4fd1c5" fillOpacity="0.22"/></svg>
                  )}
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selected !== null && (
          <div className={styles.detailBox}>
            <h2>{services[selected].title}</h2>
            <p>{services[selected].detail}</p>
            <button className={styles.closeBtn} onClick={() => setSelected(null)}>Tutup</button>
          </div>
        )}
      </section>

      <section className={styles.featuredProjects}>
        <div className={styles.accentLine}></div>
        <h2>Portofolio & Proyek Terbaik</h2>
        <p className={styles.projectDesc}>Inilah beberapa solusi digital yang telah kami bangun untuk klien dari berbagai industri. Setiap proyek dirancang untuk memberikan dampak nyata dan pertumbuhan bisnis.</p>
        <div className={styles.cards}>
          {projects.map((p) => (
            <Card key={p.title} title={p.title} description={p.description} accent="#63b3ed">
              <div className={styles.tech}>{p.tech}</div>
            </Card>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.accentLine}></div>
        <h2>Siap Membawa Bisnis Anda ke Level Selanjutnya?</h2>
        <p className={styles.ctaDesc}>Jangan ragu untuk konsultasi gratis bersama StackCraft. Kami siap membantu Anda mewujudkan ide, mengoptimalkan sistem, dan mempercepat pertumbuhan bisnis digital Anda.</p>
        <Link to="/contact" className={styles.ctaAlt}>Diskusi Sekarang</Link>
      </section>
    </div>
  );
};

export default Home;
