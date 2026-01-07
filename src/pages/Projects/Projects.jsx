import styles from './Projects.module.css';
import Card from '../../components/Card/Card';

const projects = [
  {
    title: 'Project Atlas',
    description: 'Multi-tenant SaaS platform for analytics and reporting.',
    tech: 'React, Node.js, Azure'
  },
  {
    title: 'API Gateway',
    description: 'Unified API gateway for microservices and authentication.',
    tech: 'Go, Kubernetes, AWS'
  },
  {
    title: 'E-Commerce Core',
    description: 'Backend for high-traffic e-commerce platform.',
    tech: 'Java, Spring Boot, GCP'
  },
  {
    title: 'Realtime Chat',
    description: 'Scalable chat infrastructure for web and mobile.',
    tech: 'TypeScript, Socket.io, Azure'
  }
];

const Projects = () => (
  <div className={styles.projects}>
    <h1>Our Projects</h1>
    <div className={styles.grid}>
      {projects.map((p) => (
        <Card key={p.title} title={p.title} description={p.description}>
          <div className={styles.tech}>{p.tech}</div>
        </Card>
      ))}
    </div>
  </div>
);

export default Projects;
