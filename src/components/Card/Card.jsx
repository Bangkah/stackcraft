
const Card = ({ title, description, children, accent, ...props }) => (
  <div
    className={`bg-slate-800 border rounded-xl p-6 shadow flex flex-col items-start gap-2 w-full transition-all duration-200 hover:border-cyan-400 hover:shadow-lg ${accent ? '' : 'border-slate-700'}`}
    style={accent ? { borderColor: accent } : {}}
    {...props}
  >
    <h3 className="text-lg font-bold text-blue-300 mb-1">{title}</h3>
    <p className="text-slate-300 mb-1">{description}</p>
    {children}
  </div>
);

export default Card;
