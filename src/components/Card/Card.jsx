import styles from './Card.module.css';

const Card = ({ title, description, children, accent, ...props }) => (
  <div className={styles.card} style={accent ? { borderColor: accent } : {}} {...props}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    {children}
  </div>
);

export default Card;
