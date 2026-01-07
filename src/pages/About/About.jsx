
import styles from './About.module.css';

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
    <div className={styles.about}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <section className={styles.intro}>
            <h1>Tentang StackCraft</h1>
            <p className={styles.subtitle}>
              StackCraft adalah perusahaan teknologi modern yang berfokus pada solusi backend dan full-stack. Kami membantu tim dan bisnis membangun sistem digital yang scalable, aman, dan mudah dikembangkan.
            </p>
          </section>
          <section className={styles.visionMission}>
            <div className={styles.accentLine}></div>
            <h2>Visi & Misi</h2>
            <ul>
              <li><strong>Visi:</strong> Memberdayakan bisnis Indonesia dengan fondasi teknologi yang kuat dan siap masa depan.</li>
              <li><strong>Misi:</strong> Menyediakan solusi backend dan full-stack berkualitas tinggi untuk mendorong inovasi dan pertumbuhan bisnis.</li>
            </ul>
          </section>
          <section className={styles.focus}>
            <div className={styles.accentLine}></div>
            <h2>Fokus Kami</h2>
            <p>
              Kami berfokus pada rekayasa backend, pengembangan API, arsitektur sistem, dan deployment cloud-native. Tim StackCraft siap membantu Anda membangun solusi digital yang scalable dan efisien.
            </p>
          </section>
          <section className={styles.servicesSection}>
            <div className={styles.accentLine}></div>
            <h2>Layanan StackCraft</h2>
            <div className={styles.cards}>
              {services.map((s, idx) => (
                <div key={s.title} onClick={() => setSelected(idx)} style={{cursor:'pointer', width:'100%'}}>
                  <div className={styles.valueCard}>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
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
        </div>
        <div className={styles.right}>
          <section className={styles.valuePropsSection}>
            <h2>Value Proposition</h2>
            <div className={styles.valueProps}>
              {valueProps.map((v, i) => (
                <div key={i} className={styles.valueCard}>
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
            <h2>Why StackCraft?</h2>
            <ul className={styles.whyList}>
              <li>Tim berpengalaman di backend & cloud</li>
              <li>Solusi custom sesuai kebutuhan bisnis</li>
              <li>Fokus pada keamanan dan skalabilitas</li>
              <li>Support & konsultasi berkelanjutan</li>
            </ul>
          </section>
          {/* Timeline dihapus sesuai permintaan */}
        </div>
      </div>
    </div>
  );
};

export default About;
