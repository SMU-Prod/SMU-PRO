export default function AdminLoading() {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      <div className="h-8 w-56 bg-surface-3 rounded-lg" />
      <div className="h-4 w-80 bg-surface-3/50 rounded" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-24 bg-surface-3/50 rounded-xl border border-border" />
        ))}
      </div>
      <div className="h-64 bg-surface-3/50 rounded-xl border border-border" />
    </div>
  );
}
