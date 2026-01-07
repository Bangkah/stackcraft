import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div>© {new Date().getFullYear()} StackCraft. All rights reserved.</div>
    <div className={styles.socials}>
      <a href="#" aria-label="GitHub" className={styles.icon}>GitHub</a>
      <a href="#" aria-label="LinkedIn" className={styles.icon}>LinkedIn</a>
      <a href="mailto:hello@stackcraft.com" aria-label="Email" className={styles.icon}>Email</a>
    </div>
  </footer>
);

export default Footer;
