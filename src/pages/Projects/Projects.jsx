
import { useState } from 'react';
import styles from './Projects.module.css';

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
    <section className={styles.projects}>
      <h1>Proyek StackCraft</h1>
      <div className={styles.grid}>
        {projects.map((p, idx) => (
          <div
            key={p.title}
            className={styles.projectCard}
            style={{ animationDelay: `${0.1 + idx * 0.13}s` }}
            onClick={() => setSelected(idx)}
          >
            <div className={styles.projectTitle}>{p.title}</div>
            <div className={styles.projectDesc}>{p.description}</div>
            <div className={styles.projectTech}>{p.tech}</div>
          </div>
        ))}
      </div>
      {selected !== null && (
        <div className={styles.modalOverlay} onClick={() => setSelected(null)}>
          <div className={styles.detailBox} onClick={e => e.stopPropagation()}>
            <h2 style={{ color: '#4fd1c5', fontWeight: 900, marginBottom: 8 }}>{projects[selected].title}</h2>
            <p style={{ color: '#bfc9d9', fontSize: '1.08rem', marginBottom: 12 }}>{projects[selected].detail}</p>
            <div className={styles.projectTech}>{projects[selected].tech}</div>
            <button
              style={{
                marginTop: 18,
                background: 'linear-gradient(90deg, #4fd1c5 60%, #63b3ed 100%)',
                color: '#232a34',
                border: 'none',
                borderRadius: 8,
                padding: '8px 22px',
                fontWeight: 700,
                fontSize: '1.05rem',
                cursor: 'pointer',
                boxShadow: '0 2px 12px 0 rgba(44,62,80,0.13)',
                transition: 'background 0.2s',
              }}
              onClick={() => setSelected(null)}
            >Tutup</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
