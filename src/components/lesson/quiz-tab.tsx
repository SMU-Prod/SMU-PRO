"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { submitQuizAttempt } from "@/lib/actions/quiz";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { Quiz, QuizQuestion, QuizOption, QuizAttempt } from "@/types/database";
import {
  CheckCircle2, XCircle, Trophy, RotateCcw, HelpCircle,
  AlertCircle, Clock, Ban,
} from "lucide-react";

interface QuizTabProps {
  lesson: { id: string; tem_quiz: boolean; quizzes?: any[] };
  quizAttempts: QuizAttempt[];
  quizData?: any;
  userId: string;
  onQuizPassed?: () => void;
}

type QuizWithQuestions = Quiz & {
  quiz_questions: (QuizQuestion & { quiz_options: QuizOption[] })[];
};

/** Embaralha array (Fisher-Yates) */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Formata segundos como MM:SS */
function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export function QuizTab({ lesson, quizAttempts, quizData, userId, onQuizPassed }: QuizTabProps) {
  const [quiz, setQuiz] = useState<QuizWithQuestions | null>(() => {
    if (!quizData) return null;
    return {
      ...quizData,
      quiz_questions: (quizData.quiz_questions ?? [])
        .sort((a: any, b: any) => a.ordem - b.ordem)
        .map((q: any) => ({
          ...q,
          tipo: q.tipo ?? "multiple_choice",
          quiz_options: (q.quiz_options ?? []).sort((a: any, b: any) => a.ordem - b.ordem),
        })),
    };
  });
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{ nota: number; aprovado: boolean } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  const lessonAttempts = quizAttempts.filter((a) => quiz && a.quiz_id === quiz.id);

  const bestAttempt = lessonAttempts.reduce<QuizAttempt | null>(
    (best, a) => (!best || a.nota > best.nota ? a : best),
    null
  );

  // Verifica se o aluno esgotou as tentativas
  const attemptsExhausted = quiz
    ? lessonAttempts.length >= quiz.tentativas_permitidas && !lessonAttempts.some((a) => a.aprovado)
    : false;

  const alreadyPassed = lessonAttempts.some((a) => a.aprovado);

  // Embaralha questões e opções ao iniciar (memoizado por quiz)
  const displayQuestions = useMemo(() => {
    if (!quiz) return [];
    const sorted = [...quiz.quiz_questions].sort((a, b) => a.ordem - b.ordem);
    const questions = quiz.embaralhar_questoes ? shuffle(sorted) : sorted;
    return questions.map((q) => ({
      ...q,
      quiz_options: q.tipo === "true_false"
        ? q.quiz_options.sort((a, b) => a.ordem - b.ordem)
        : shuffle(q.quiz_options),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz, started]);


  // Timer countdown
  useEffect(() => {
    if (!started || !quiz?.tempo_limite_min || submitted) return;

    const totalSeconds = quiz.tempo_limite_min * 60;
    setTimeLeft(totalSeconds);
    startTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      const remaining = totalSeconds - elapsed;
      if (remaining <= 0) {
        setTimeLeft(0);
        if (timerRef.current) clearInterval(timerRef.current);
        // Auto-submit quando tempo acaba
        handleAutoSubmit();
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, submitted]);

  if (!lesson.tem_quiz) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <HelpCircle size={40} className="text-muted-light mb-3" />
        <p className="text-muted-light text-sm">Esta aula não possui quiz.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-16 rounded-xl shimmer" />
        ))}
      </div>
    );
  }

  if (!quiz) return null;

  const totalQuestions = displayQuestions.length;
  const answeredCount = Object.keys(answers).length;
  const canSubmit = answeredCount === totalQuestions;

  const calculateResult = () => {
    let correct = 0;
    let totalPoints = 0;
    for (const q of quiz.quiz_questions) {
      totalPoints += q.pontos;
      const chosen = answers[q.id];
      const correctOption = q.quiz_options.find((o) => o.correta);
      if (correctOption && chosen === correctOption.id) {
        correct += q.pontos;
      }
    }
    const nota = totalPoints > 0 ? Math.round((correct / totalPoints) * 100) : 0;
    const aprovado = nota >= quiz.nivel_minimo_aprovacao;
    return { nota, aprovado };
  };

  const saveAttempt = async (nota: number, aprovado: boolean) => {
    setSubmitError(null);
    setSubmitting(true);
    try {
      await submitQuizAttempt(quiz.id, nota, aprovado, answers);
      setResult({ nota, aprovado });
      setSubmitted(true);
      if (aprovado && onQuizPassed) onQuizPassed();
    } catch (err: any) {
      console.error("[Quiz] Erro ao salvar tentativa:", err);
      setSubmitError(err.message || "Erro ao salvar tentativa. Tente novamente.");
      // Still show result even if save failed, so user sees their score
      setResult({ nota, aprovado });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleAutoSubmit = async () => {
    const { nota, aprovado } = calculateResult();
    await saveAttempt(nota, aprovado);
  };

  const handleSubmit = async () => {
    if (!canSubmit || submitting) return;
    if (timerRef.current) clearInterval(timerRef.current);
    const { nota, aprovado } = calculateResult();
    await saveAttempt(nota, aprovado);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setResult(null);
    setStarted(false);
    setTimeLeft(null);
  };

  // ── Tela de resultado ──────────────────────────────────────
  if (submitted && result) {
    const remainingAttempts = quiz.tentativas_permitidas - (lessonAttempts.length + 1);
    const canRetry = !result.aprovado && remainingAttempts > 0;

    return (
      <div className="animate-fade-in space-y-5">
        {submitError && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400 flex items-center gap-2">
            <AlertCircle size={16} className="shrink-0" />
            <div>
              <p className="font-medium">Erro ao salvar tentativa</p>
              <p className="text-xs text-red-400/80 mt-0.5">{submitError}</p>
            </div>
          </div>
        )}
        <div
          className={cn(
            "rounded-xl border p-6 text-center",
            result.aprovado
              ? "border-emerald-500/20 bg-emerald-500/10"
              : "border-red-500/20 bg-red-500/10"
          )}
        >
          {result.aprovado ? (
            <Trophy size={48} className="mx-auto mb-3 text-amber-500" />
          ) : (
            <AlertCircle size={48} className="mx-auto mb-3 text-red-500" />
          )}
          <h3 className="text-xl font-bold text-foreground mb-1">
            {result.aprovado ? "Parabéns!" : "Tente novamente"}
          </h3>
          <p className="text-muted-light mb-4">
            {result.aprovado
              ? "Você foi aprovado no quiz desta aula."
              : `Você precisa de ${quiz.nivel_minimo_aprovacao}% para passar.`}
          </p>
          <div className="flex items-center justify-center gap-6">
            <div>
              <p className="text-4xl font-bold gradient-text">{result.nota}%</p>
              <p className="text-xs text-muted-light mt-1">Sua nota</p>
            </div>
            <div className="h-12 w-px bg-surface-3" />
            <div>
              <p className="text-2xl font-bold text-foreground">{quiz.nivel_minimo_aprovacao}%</p>
              <p className="text-xs text-muted-light mt-1">Nota mínima</p>
            </div>
          </div>
          {!result.aprovado && (
            <p className="text-xs text-muted-light mt-3">
              {canRetry
                ? `Você tem mais ${remainingAttempts} tentativa${remainingAttempts > 1 ? "s" : ""}.`
                : "Você esgotou todas as tentativas."}
            </p>
          )}
        </div>

        {/* Gabarito */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Gabarito</h4>
          {displayQuestions.map((q) => {
            const chosen = answers[q.id];
            const correct = q.quiz_options.find((o) => o.correta);
            const isRight = chosen === correct?.id;
            const isTrueFalse = q.tipo === "true_false";

            return (
              <div key={q.id} className="rounded-xl border border-border bg-surface p-4">
                <div className="flex items-start gap-3 mb-3">
                  {isRight ? (
                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                  ) : (
                    <XCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                  )}
                  <div className="flex items-center gap-2">
                    {isTrueFalse && (
                      <Badge variant="secondary" className="text-[9px] px-1.5 py-0">V/F</Badge>
                    )}
                    <p className="text-sm text-foreground">{q.texto}</p>
                  </div>
                </div>
                <div className="space-y-2 pl-6">
                  {q.quiz_options.map((opt) => (
                    <div
                      key={opt.id}
                      className={cn(
                        "flex items-center gap-2 text-xs px-3 py-2 rounded-lg border",
                        opt.correta
                          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                          : chosen === opt.id
                          ? "border-red-500/20 bg-red-500/10 text-red-400"
                          : "border-border text-muted-light"
                      )}
                    >
                      {opt.correta && <CheckCircle2 size={12} />}
                      {chosen === opt.id && !opt.correta && <XCircle size={12} />}
                      {opt.texto}
                    </div>
                  ))}
                </div>
                {q.explicacao && (
                  <p className="mt-3 text-xs text-muted-light pl-6 italic">{q.explicacao}</p>
                )}
              </div>
            );
          })}
        </div>

        {canRetry && (
          <Button onClick={handleReset} variant="secondary" className="w-full">
            <RotateCcw size={16} /> Tentar Novamente
          </Button>
        )}
      </div>
    );
  }

  // ── Tela de início ─────────────────────────────────────────
  if (!started) {
    return (
      <div className="animate-fade-in">
        <div className="rounded-xl border border-border bg-surface p-6 text-center">
          <HelpCircle size={40} className="mx-auto mb-3 text-amber-400" />
          <h3 className="font-bold text-foreground mb-1">{quiz.titulo}</h3>
          <p className="text-sm text-muted-light mb-5">{quiz.descricao}</p>
          <div className="flex justify-center gap-6 mb-5 text-sm">
            <div className="text-center">
              <p className="font-bold text-foreground">{totalQuestions}</p>
              <p className="text-xs text-muted-light">questões</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-foreground">{quiz.nivel_minimo_aprovacao}%</p>
              <p className="text-xs text-muted-light">para passar</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-foreground">{quiz.tentativas_permitidas}</p>
              <p className="text-xs text-muted-light">tentativas</p>
            </div>
            {quiz.tempo_limite_min && (
              <div className="text-center">
                <p className="font-bold text-foreground">{quiz.tempo_limite_min} min</p>
                <p className="text-xs text-muted-light">tempo limite</p>
              </div>
            )}
          </div>

          {bestAttempt && (
            <Badge variant={bestAttempt.aprovado ? "success" : "danger"} className="mb-4">
              Melhor nota: {bestAttempt.nota}%
            </Badge>
          )}

          {lessonAttempts.length > 0 && (
            <p className="text-xs text-muted-light mb-3">
              {lessonAttempts.length}/{quiz.tentativas_permitidas} tentativas usadas
            </p>
          )}

          {attemptsExhausted && !alreadyPassed ? (
            <div className="flex flex-col items-center gap-2 pt-2">
              <Ban size={24} className="text-muted-light" />
              <p className="text-sm text-muted-light">Tentativas esgotadas.</p>
            </div>
          ) : alreadyPassed ? (
            <div className="flex flex-col items-center gap-2 pt-2">
              <CheckCircle2 size={24} className="text-emerald-500" />
              <p className="text-sm text-emerald-600 font-medium">Quiz aprovado!</p>
            </div>
          ) : (
            <Button onClick={() => setStarted(true)} className="w-full">
              Iniciar Quiz
            </Button>
          )}
        </div>
      </div>
    );
  }

  // ── Quiz em andamento ──────────────────────────────────────
  return (
    <div className="animate-fade-in space-y-5">
      {/* Header do quiz */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-light">
          {answeredCount}/{totalQuestions} respondidas
        </span>
        <div className="flex items-center gap-3">
          {timeLeft !== null && (
            <span
              className={cn(
                "flex items-center gap-1 text-sm font-mono font-semibold",
                timeLeft <= 60 ? "text-red-500 animate-pulse" : "text-muted"
              )}
            >
              <Clock size={14} />
              {formatTime(timeLeft)}
            </span>
          )}
          <Progress value={(answeredCount / totalQuestions) * 100} className="w-24 h-1.5" />
        </div>
      </div>

      {/* Questões */}
      {displayQuestions.map((q, qIdx) => {
        const isTrueFalse = q.tipo === "true_false";

        return (
          <div key={q.id} className="rounded-xl border border-border bg-surface p-5">
            <div className="flex items-center gap-2 mb-4">
              {isTrueFalse && (
                <Badge variant="secondary" className="text-[9px] px-1.5 py-0">V/F</Badge>
              )}
              <p className="text-sm font-medium text-foreground">
                <span className="text-muted-light mr-2">{qIdx + 1}.</span>
                {q.texto}
              </p>
            </div>
            <div className={cn("space-y-2", isTrueFalse && "grid grid-cols-2 gap-2 space-y-0")}>
              {q.quiz_options.map((opt) => {
                const selected = answers[q.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.id }))}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-lg border text-sm text-left transition-all",
                      selected
                        ? "border-amber-500 bg-amber-500/10 text-amber-400"
                        : "border-border text-muted hover:border-amber-500/20 hover:text-foreground",
                      isTrueFalse && "justify-center text-center font-medium"
                    )}
                  >
                    {!isTrueFalse && (
                      <div
                        className={cn(
                          "h-4 w-4 rounded-full border-2 shrink-0 transition-all",
                          selected ? "border-amber-500 bg-amber-500" : "border-border-strong"
                        )}
                      />
                    )}
                    {opt.texto}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <Button
        onClick={handleSubmit}
        disabled={!canSubmit}
        loading={submitting}
        size="lg"
        className="w-full"
      >
        Enviar Respostas ({answeredCount}/{totalQuestions})
      </Button>
    </div>
  );
}
