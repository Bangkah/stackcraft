
const Contact = () => (
  <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-20">
    <div className="max-w-xl mx-auto px-4 pt-16 pb-10 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4 drop-shadow-lg">Hubungi StackCraft</h1>
      <p className="text-lg md:text-xl text-slate-300 mb-8 font-medium">Kami siap membantu Anda membangun solusi digital, backend, dan cloud terbaik untuk bisnis Anda.</p>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 rounded-full mb-2" />
    </div>
    <form className="max-w-lg mx-auto bg-gradient-to-br from-slate-800/90 to-slate-900/80 rounded-2xl shadow-2xl p-10 flex flex-col gap-6 border-2 border-cyan-700 backdrop-blur-xl" autoComplete="off" onSubmit={e => e.preventDefault()}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-slate-200 font-semibold">Nama</label>
        <input id="name" name="name" type="text" placeholder="Nama Anda" required className="rounded-lg px-4 py-2 bg-slate-900 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-slate-200 font-semibold">Email</label>
        <input id="email" name="email" type="email" placeholder="you@email.com" required className="rounded-lg px-4 py-2 bg-slate-900 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-slate-200 font-semibold">Pesan</label>
        <textarea id="message" name="message" rows="5" placeholder="Bagaimana kami bisa membantu Anda?" required className="rounded-lg px-4 py-2 bg-slate-900 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
      </div>
      <button type="submit" className="mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-bold px-8 py-3 rounded-xl shadow-xl text-lg hover:scale-110 hover:bg-cyan-400/80 transition-transform duration-300">Kirim Pesan</button>
    </form>
    <div className="flex flex-col items-center gap-2 mt-10 text-slate-300 text-base">
      <span>Email: <a href="mailto:hello@stackcraft.com" className="text-cyan-400 hover:underline">hello@stackcraft.com</a></span>
      <span>GitHub: <a href="https://github.com/stackcraft" className="text-cyan-400 hover:underline" target="_blank" rel="noopener">github.com/stackcraft</a></span>
      <span>LinkedIn: <a href="https://linkedin.com/company/stackcraft" className="text-cyan-400 hover:underline" target="_blank" rel="noopener">linkedin.com/company/stackcraft</a></span>
    </div>
  </div>
);

export default Contact;
