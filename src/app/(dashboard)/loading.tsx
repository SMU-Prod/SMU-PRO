export default function DashboardLoading() {
  return (
    <div className="p-4 sm:p-6 space-y-6 animate-pulse">
      <div className="h-8 w-48 bg-surface-3 rounded-lg" />
      <div className="h-4 w-72 bg-surface-2 rounded" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-48 bg-surface-2 rounded-xl border border-border" />
        ))}
      </div>
    </div>
  );
}
