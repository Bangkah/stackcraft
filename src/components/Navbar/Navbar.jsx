import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="w-full flex items-center justify-between px-8 py-4 bg-slate-900 border-b border-slate-800 shadow sticky top-0 z-50">
    <div className="text-2xl font-extrabold text-cyan-400 tracking-wide px-3 py-1 rounded-lg bg-slate-800/80 shadow">StackCraft</div>
    <ul className="flex gap-6 flex-wrap items-center m-0 p-0 list-none">
      <li><NavLink to="/" end className={({ isActive }) => isActive ? 'text-cyan-400 font-bold underline underline-offset-4' : 'text-slate-200 hover:text-cyan-400 transition'}>Home</NavLink></li>
      <li><NavLink to="/services" className={({ isActive }) => isActive ? 'text-cyan-400 font-bold underline underline-offset-4' : 'text-slate-200 hover:text-cyan-400 transition'}>Layanan</NavLink></li>
      <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'text-cyan-400 font-bold underline underline-offset-4' : 'text-slate-200 hover:text-cyan-400 transition'}>Proyek</NavLink></li>
      <li><NavLink to="/artikel" className={({ isActive }) => isActive ? 'text-cyan-400 font-bold underline underline-offset-4' : 'text-slate-200 hover:text-cyan-400 transition'}>Artikel</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-cyan-400 font-bold underline underline-offset-4' : 'text-slate-200 hover:text-cyan-400 transition'}>Kontak</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
