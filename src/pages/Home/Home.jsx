import styles from './Home.module.css';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';


const services = [
  { title: 'Pengembangan Website', description: 'Aplikasi web modern, skalabel, dan mudah dirawat.' },
  { title: 'Backend & API', description: 'Sistem backend yang tangguh dan API yang andal.' },
  { title: 'Arsitektur Sistem', description: 'Desain sistem yang aman, scalable, dan handal.' },
  { title: 'Cloud & Deployment', description: 'Deploy cloud-native dan praktik DevOps terbaik.' },
];

const projects = [
  { title: 'Atlas', description: 'Platform SaaS multi-tenant untuk analitik bisnis.', tech: 'React, Node.js, Azure' },
  { title: 'API Gateway', description: 'Gerbang API terintegrasi untuk microservices.', tech: 'Go, Kubernetes, AWS' },
  { title: 'E-Commerce Core', description: 'Backend untuk e-commerce dengan trafik tinggi.', tech: 'Java, Spring Boot, GCP' },
];



const Home = () => (
  <div className={styles.home}>
    <section className={styles.hero}>
      <h1>Kami Merancang Stack Anda</h1>
      <p className={styles.tagline}>Solusi backend & full-stack modern untuk bisnis yang ingin tumbuh pesat.</p>
      <p className={styles.subtitle}>StackCraft membantu Anda membangun aplikasi digital yang scalable, aman, dan siap berkembang. Fokus kami pada backend dan full-stack memastikan fondasi teknologi bisnis Anda kuat dan efisien.</p>
      <Link to="/contact" className={styles.cta}>Konsultasi Gratis</Link>
    </section>

    <section className={styles.servicesPreview}>
      <h2>Layanan Kami</h2>
      <div className={styles.cards}>
        {services.map((s) => (
          <Card key={s.title} title={s.title} description={s.description} accent="#4fd1c5" />
        ))}
      </div>
    </section>

    <section className={styles.featuredProjects}>
      <h2>Proyek Unggulan</h2>
      <p className={styles.projectDesc}>Beberapa hasil karya StackCraft yang telah membantu klien kami tumbuh dan berinovasi di dunia digital.</p>
      <div className={styles.cards}>
        {projects.map((p) => (
          <Card key={p.title} title={p.title} description={p.description}>
            <div className={styles.tech}>{p.tech}</div>
          </Card>
        ))}
      </div>
    </section>

    <section className={styles.ctaSection}>
      <h2>Siap membangun solusi digital Anda?</h2>
      <p className={styles.ctaDesc}>Diskusikan kebutuhan Anda bersama tim StackCraft dan dapatkan solusi terbaik untuk bisnis Anda.</p>
      <Link to="/contact" className={styles.ctaAlt}>Hubungi StackCraft</Link>
    </section>
  </div>
);

export default Home;
