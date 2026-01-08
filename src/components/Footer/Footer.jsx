
const Footer = () => (
  <footer className="w-full bg-slate-900 border-t border-slate-800 shadow-inner py-6 px-4 flex flex-col items-center gap-3 text-slate-300 text-base mt-auto">
    <div>© {new Date().getFullYear()} StackCraft. All rights reserved.</div>
    <div className="flex flex-wrap justify-center gap-4 mt-1">
      <a href="#" aria-label="GitHub" className="text-cyan-400 font-semibold px-3 py-1 rounded hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:text-slate-900 transition">GitHub</a>
      <a href="#" aria-label="LinkedIn" className="text-cyan-400 font-semibold px-3 py-1 rounded hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:text-slate-900 transition">LinkedIn</a>
      <a href="mailto:hello@stackcraft.com" aria-label="Email" className="text-cyan-400 font-semibold px-3 py-1 rounded hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:text-slate-900 transition">Email</a>
    </div>
  </footer>
);

export default Footer;
