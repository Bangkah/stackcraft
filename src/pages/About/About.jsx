
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

const timeline = [
  { year: '2020', desc: 'StackCraft didirikan dengan visi membangun fondasi digital yang kuat.' },
  { year: '2021', desc: 'Mulai membantu startup dan perusahaan skala menengah.' },
  { year: '2022', desc: 'Ekspansi ke solusi cloud dan arsitektur microservices.' },
  { year: '2023', desc: 'Menjadi partner teknologi untuk transformasi digital.' },
  { year: '2026', desc: 'Fokus pada inovasi dan keamanan digital.' }
];

const About = () => (
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
        <section className={styles.timelineSection}>
          <h2>Filosofi & Timeline</h2>
          <div className={styles.timeline}>
            {timeline.map((t, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{t.year}</div>
                <div className={styles.timelineDesc}>{t.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default About;
