"use client";

import { useState, useRef, useEffect } from "react";
import { Headphones, Pause, Play, Loader2, Volume2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AudioPlayerProps {
  lessonId: string;
  conteudo: string;
}

export function AudioPlayer({ lessonId, conteudo }: AudioPlayerProps) {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const hasContent = conteudo && conteudo.length > 20;

  async function generateAudio() {
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, text: conteudo }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao gerar áudio");
      }

      const contentType = res.headers.get("Content-Type");

      if (contentType?.includes("audio/")) {
        // Direct audio response (fallback when storage fails)
        const blob = await res.blob();
        setAudioUrl(URL.createObjectURL(blob));
      } else {
        const data = await res.json();
        setAudioUrl(data.audioUrl);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function togglePlay() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  }

  function handleTimeUpdate() {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
  }

  function handleLoadedMetadata() {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  }

  function handleEnded() {
    setPlaying(false);
    setProgress(0);
  }

  function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
    if (!audioRef.current) return;
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setProgress(time);
  }

  function cycleSpeed() {
    const speeds = [0.75, 1, 1.25, 1.5, 2];
    const idx = speeds.indexOf(speed);
    const next = speeds[(idx + 1) % speeds.length];
    setSpeed(next);
    if (audioRef.current) {
      audioRef.current.playbackRate = next;
    }
  }

  function restart() {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    setProgress(0);
    audioRef.current.play();
    setPlaying(true);
  }

  function formatTime(s: number) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }

  // Cleanup blob URL on unmount
  useEffect(() => {
    return () => {
      if (audioUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  if (!hasContent) return null;

  // Initial state — show "Ouvir conteúdo" button
  if (!audioUrl) {
    return (
      <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-2 border border-border">
        <Button
          size="sm"
          variant="secondary"
          onClick={generateAudio}
          disabled={loading}
          className="gap-2"
        >
          {loading ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <Headphones size={14} />
          )}
          {loading ? "Gerando áudio..." : "Ouvir conteúdo"}
        </Button>
        <span className="text-xs text-muted-light">
          Escute o conteúdo desta aula em áudio
        </span>
        {error && <span className="text-xs text-red-400">{error}</span>}
      </div>
    );
  }

  // Player state
  return (
    <div className="p-3 rounded-xl bg-surface-2 border border-border space-y-2">
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />

      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500 text-black hover:bg-amber-400 transition-colors"
        >
          {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
        </button>

        <div className="flex-1 space-y-1">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={progress}
            onChange={handleSeek}
            className="w-full h-1.5 rounded-full appearance-none bg-surface-3 cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-500"
          />
          <div className="flex justify-between text-[10px] text-muted-light">
            <span>{formatTime(progress)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <button
          onClick={restart}
          className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-hover transition-colors"
          title="Reiniciar"
        >
          <RotateCcw size={14} />
        </button>

        <button
          onClick={cycleSpeed}
          className="px-2 py-1 rounded-lg text-xs font-mono font-bold text-muted hover:text-foreground hover:bg-hover transition-colors min-w-[40px] text-center"
          title="Velocidade"
        >
          {speed}x
        </button>

        <Volume2 size={14} className="text-muted-light shrink-0" />
      </div>

      <div className="flex items-center gap-2">
        <Headphones size={12} className="text-amber-500" />
        <span className="text-[10px] text-muted-light">
          Áudio gerado automaticamente · Voz Francisca (PT-BR)
        </span>
      </div>
    </div>
  );
}
