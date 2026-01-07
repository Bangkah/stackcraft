import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>StackCraft</div>
    <ul className={styles.navLinks}>
      <li><NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>Tentang</NavLink></li>
      <li><NavLink to="/services" className={({ isActive }) => isActive ? styles.active : ''}>Layanan</NavLink></li>
      <li><NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>Proyek</NavLink></li>
      <li><NavLink to="/artikel" className={({ isActive }) => isActive ? styles.active : ''}>Artikel</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Kontak</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
