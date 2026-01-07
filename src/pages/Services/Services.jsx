import styles from './Services.module.css';
import Card from '../../components/Card/Card';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, scalable, and maintainable web applications built with the latest technologies.'
  },
  {
    title: 'Backend & API Development',
    description: 'Robust backend systems, RESTful APIs, and microservices for your business needs.'
  },
  {
    title: 'System Architecture',
    description: 'Designing scalable, secure, and reliable system architectures for long-term growth.'
  },
  {
    title: 'Cloud & Deployment',
    description: 'Cloud-native deployments, CI/CD pipelines, and DevOps best practices.'
  }
];

const Services = () => (
  <div className={styles.services}>
    <h1>Our Services</h1>
    <div className={styles.cards}>
      {services.map((s) => (
        <Card key={s.title} title={s.title} description={s.description} accent="#63b3ed" />
      ))}
    </div>
  </div>
);

export default Services;
