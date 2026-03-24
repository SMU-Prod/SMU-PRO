"use client";

import { Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StudyStreakProps {
  streakDays: number;
  loading?: boolean;
}

export function StudyStreak({ streakDays, loading = false }: StudyStreakProps) {
  return (
    <Card className="hover:border-amber-500/20 transition-colors">
      <CardContent className="p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-amber-500/10">
            <Flame size={28} className="text-amber-500 fill-amber-500 animate-pulse" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-light uppercase tracking-widest font-semibold mb-1">Sequência de Estudos</p>
            {loading ? (
              <div className="h-8 w-16 bg-surface-3 rounded animate-pulse" />
            ) : (
              <div>
                <p className="text-3xl font-bold text-amber-500">{streakDays}</p>
                <p className="text-xs text-muted-light mt-0.5">
                  {streakDays === 1 ? "1 dia" : `${streakDays} dias`} consecutivos
                </p>
              </div>
            )}
          </div>
        </div>
        <p className="text-sm text-amber-600 font-medium mt-3 flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
          Continue sua sequência de estudos!
        </p>
      </CardContent>
    </Card>
  );
}
