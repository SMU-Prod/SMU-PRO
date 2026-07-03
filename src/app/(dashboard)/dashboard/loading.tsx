import { Card, CardContent } from "@/components/ui/card";

function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`bg-surface-3 rounded-lg animate-pulse ${className}`} />;
}

export default function DashboardLoading() {
  return (
    <div className="animate-fade-in">
      {/* Header skeleton */}
      <div className="border-b border-border px-4 sm:px-6 py-5">
        <Skeleton className="h-8 w-52 mb-2" />
        <Skeleton className="h-4 w-36" />
      </div>

      <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
        {/* Study Streak + Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Streak card */}
          <div className="col-span-2 lg:col-span-2 lg:row-span-2">
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <Skeleton className="h-10 w-10 rounded-lg" />
                  <div>
                    <Skeleton className="h-5 w-32 mb-1" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <Skeleton key={i} className="h-8 w-8 rounded-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 4 stat cards */}
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-3 sm:p-4">
                <Skeleton className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg mb-2 sm:mb-3" />
                <Skeleton className="h-7 w-16 mb-1" />
                <Skeleton className="h-3 w-24 mt-1" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progresso + Atalhos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2">
            <CardContent className="p-5">
              <Skeleton className="h-5 w-36 mb-4" />
              <Skeleton className="h-3 w-full mb-2" />
              <Skeleton className="h-3 w-3/4" />
              <div className="grid grid-cols-3 gap-3 pt-4 mt-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="text-center p-3 rounded-lg bg-surface-2">
                    <Skeleton className="h-6 w-10 mx-auto mb-1" />
                    <Skeleton className="h-3 w-20 mx-auto" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <Skeleton className="h-5 w-28 mb-4" />
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg">
                    <Skeleton className="h-8 w-8 rounded-lg" />
                    <Skeleton className="h-4 w-28 flex-1" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Continuar Estudando */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <Skeleton className="h-5 w-44" />
            <Skeleton className="h-8 w-24 rounded-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-36 w-full rounded-none" />
                <CardContent className="p-4">
                  <Skeleton className="h-4 w-3/4 mb-3" />
                  <Skeleton className="h-2 w-full mb-1" />
                  <Skeleton className="h-1.5 w-full rounded-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
