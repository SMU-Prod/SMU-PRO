"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export type ExerciseLevel = "Básico" | "Intermediário" | "Avançado" | "Contextualizado";

export type ExerciseOption = {
  letter: string;
  text: ReactNode;
  correct?: boolean;
};

type Props = {
  level: ExerciseLevel;
  title: string;
  statement: ReactNode;
  options: ExerciseOption[];
  resolution?: ReactNode;
};

const levelColors: Record<ExerciseLevel, string> = {
  "Básico": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "Intermediário": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "Avançado": "bg-orange-500/15 text-orange-400 border-orange-500/30",
  "Contextualizado": "bg-purple-500/15 text-purple-400 border-purple-500/30",
};

export function ExerciseCard({ level, title, statement, options, resolution }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const correctOption = options.find((o) => o.correct);
  const answered = selected !== null;
  const isCorrect = answered && selected === correctOption?.letter;

  function handleSelect(letter: string) {
    if (answered) return;
    setSelected(letter);
  }

  function handleReset() {
    setSelected(null);
  }

  return (
    <div className="notaon-exercise-card rounded-xl border border-border bg-surface-2 p-5 space-y-4 my-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-foreground text-base leading-snug">{title}</h3>
        <span
          className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full border ${levelColors[level] ?? "bg-surface text-muted"}`}
        >
          {level}
        </span>
      </div>

      <div className="text-sm text-muted leading-relaxed">{statement}</div>

      <div className="space-y-2">
        {options.map((opt) => {
          const isSelected = selected === opt.letter;
          const showCorrect = answered && opt.correct;
          const showWrong = answered && isSelected && !opt.correct;

          let cls =
            "w-full flex items-start gap-3 px-4 py-3 rounded-lg border text-sm text-left transition-colors ";
          if (showCorrect)
            cls += "border-emerald-500 bg-emerald-500/10 text-emerald-300";
          else if (showWrong)
            cls += "border-red-500 bg-red-500/10 text-red-300";
          else if (isSelected)
            cls += "border-amber-400 bg-amber-400/10 text-amber-300";
          else
            cls += "border-border bg-surface text-muted hover:border-amber-400/40 hover:bg-amber-400/5 disabled:opacity-60 disabled:cursor-not-allowed";

          return (
            <button
              key={opt.letter}
              type="button"
              className={cls}
              disabled={answered}
              onClick={() => handleSelect(opt.letter)}
            >
              <span className="font-bold shrink-0 w-5">{opt.letter})</span>
              <span className="flex-1">{opt.text}</span>
              {showCorrect && <span className="shrink-0 text-emerald-400 font-bold">✓</span>}
              {showWrong && <span className="shrink-0 text-red-400 font-bold">✗</span>}
            </button>
          );
        })}
      </div>

      {answered && (
        <div
          className={`rounded-lg px-4 py-3 text-sm font-medium ${
            isCorrect
              ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
              : "bg-red-500/10 border border-red-500/30 text-red-300"
          }`}
        >
          {isCorrect ? (
            "✓ Resposta correta!"
          ) : (
            <>
              ✗ Resposta incorreta.{" "}
              A alternativa correta é <strong>{correctOption?.letter}</strong>.
            </>
          )}
        </div>
      )}

      {answered && resolution && (
        <details className="group">
          <summary className="cursor-pointer text-xs font-semibold text-amber-400 hover:text-amber-300 select-none">
            Ver solução comentada
          </summary>
          <div className="mt-3 text-sm text-muted leading-relaxed border-t border-border pt-3">
            {resolution}
          </div>
        </details>
      )}

      {answered && (
        <button
          type="button"
          onClick={handleReset}
          className="text-xs text-muted hover:text-amber-400 transition-colors underline underline-offset-2"
        >
          Tentar novamente
        </button>
      )}
    </div>
  );
}
