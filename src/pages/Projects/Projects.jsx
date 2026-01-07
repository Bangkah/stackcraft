
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
    <div className={styles.projects}>
      <h1>Proyek StackCraft</h1>
      <div className={styles.grid}>
        {projects.map((p, idx) => (
          <div key={p.title} onClick={() => setSelected(idx)} style={{cursor:'pointer', width:'100%'}}>
            <Card title={p.title} description={p.description}>
              <div className={styles.tech}>{p.tech}</div>
            </Card>
          </div>
        ))}
      </div>
      {selected !== null && (
        <div className={styles.modalOverlay} onClick={() => setSelected(null)}>
          <div className={styles.detailBox} onClick={e => e.stopPropagation()}>
            <h2>{projects[selected].title}</h2>
            <p>{projects[selected].detail}</p>
            <div className={styles.tech}>{projects[selected].tech}</div>
            <button className={styles.closeBtn} onClick={() => setSelected(null)}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
