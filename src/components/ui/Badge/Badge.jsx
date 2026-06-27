
export default function Badge({ icon: Icon, name,color ,className = "" }) {
  return (
    <div
      className={`absolute flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg border border-neutral-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <Icon className="text-lg"/>
      <span className="text-sm font-medium text-[var(--text)]">
        {name}
      </span>
    </div>
  );
}
