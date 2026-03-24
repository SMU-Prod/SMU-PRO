"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import SignaturePadLib from "signature_pad";
import { Eraser, Check, X, Maximize2 } from "lucide-react";

interface SignaturePadProps {
  onSave: (dataUrl: string) => Promise<void>;
  onCancel?: () => void;
  label?: string;
}

export function SignaturePad({
  onSave,
  onCancel,
  label = "Desenhe sua assinatura",
}: SignaturePadProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const padRef = useRef<SignaturePadLib | null>(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [saving, setSaving] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const setupCanvas = useCallback(() => {
    if (!canvasRef.current || !containerRef.current) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;

    const rect = container.getBoundingClientRect();
    const ratio = Math.max(window.devicePixelRatio || 1, 1);

    // Save existing data before resize
    const existingData = padRef.current && !padRef.current.isEmpty()
      ? padRef.current.toData()
      : null;

    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(ratio, ratio);

    if (!padRef.current) {
      padRef.current = new SignaturePadLib(canvas, {
        backgroundColor: "rgba(255, 255, 255, 0)",
        penColor: "#1a365d",
        minWidth: 1.5,
        maxWidth: 3.5,
        throttle: 0,
      });
      padRef.current.addEventListener("endStroke", () => {
        setIsEmpty(padRef.current?.isEmpty() ?? true);
      });
    }

    // Restore data after resize
    if (existingData) {
      padRef.current.fromData(existingData);
      setIsEmpty(false);
    }
  }, []);

  useEffect(() => {
    setupCanvas();

    const observer = new ResizeObserver(() => setupCanvas());
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      padRef.current?.off();
      padRef.current = null;
    };
  }, [setupCanvas, fullscreen]);

  const handleClear = () => {
    padRef.current?.clear();
    setIsEmpty(true);
  };

  const handleSave = async () => {
    if (!padRef.current || padRef.current.isEmpty()) return;
    setSaving(true);
    try {
      const dataUrl = padRef.current.toDataURL("image/png");
      await onSave(dataUrl);
    } catch {
      // error handled by parent
    } finally {
      setSaving(false);
    }
  };

  const toggleFullscreen = () => {
    // Save data before toggling
    setFullscreen((prev) => !prev);
  };

  // Fullscreen mode — fills the entire viewport
  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-[100] bg-white flex flex-col">
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
          <p className="text-sm font-semibold text-gray-800">{label}</p>
          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100"
          >
            <X size={14} /> Minimizar
          </button>
        </div>

        {/* Canvas area — fills all available space */}
        <div ref={containerRef} className="flex-1 relative">
          <canvas
            ref={canvasRef}
            className="cursor-crosshair absolute inset-0"
            style={{ touchAction: "none" }}
          />
          {isEmpty && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <p className="text-lg text-gray-300 select-none">Assine aqui</p>
                <p className="text-xs text-gray-300 select-none mt-1">Use o dedo ou mouse para desenhar</p>
              </div>
            </div>
          )}
          {/* Guide line */}
          <div className="absolute bottom-[30%] left-[10%] right-[10%] h-px bg-gray-200 pointer-events-none" />
        </div>

        {/* Action bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-t border-gray-200">
          <button
            onClick={handleClear}
            disabled={isEmpty}
            className="flex items-center gap-1.5 rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-40"
          >
            <Eraser size={16} /> Limpar
          </button>
          <div className="flex-1" />
          {onCancel && (
            <button
              onClick={() => { setFullscreen(false); onCancel(); }}
              className="flex items-center gap-1.5 rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
            >
              <X size={16} /> Cancelar
            </button>
          )}
          <button
            onClick={handleSave}
            disabled={isEmpty || saving}
            className="flex items-center gap-1.5 rounded-lg bg-blue-500 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-600 disabled:opacity-40"
          >
            <Check size={16} /> {saving ? "Salvando..." : "Confirmar"}
          </button>
        </div>
      </div>
    );
  }

  // Normal mode — responsive inline pad
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <button
          onClick={toggleFullscreen}
          className="flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-[10px] text-muted-light hover:bg-surface transition-colors"
          title="Tela cheia para assinar melhor"
        >
          <Maximize2 size={12} /> Tela cheia
        </button>
      </div>

      {/* Canvas container — 100% width, height adapts */}
      <div
        ref={containerRef}
        className="relative rounded-xl border-2 border-dashed border-border bg-white overflow-hidden w-full"
        style={{ height: "clamp(140px, 25vw, 200px)" }}
      >
        <canvas
          ref={canvasRef}
          className="cursor-crosshair absolute inset-0"
          style={{ touchAction: "none" }}
        />
        {isEmpty && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-sm text-gray-300 select-none">Assine aqui</p>
          </div>
        )}
        {/* Guide line */}
        <div className="absolute bottom-[25%] left-[8%] right-[8%] h-px bg-gray-200 pointer-events-none" />
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleClear}
          disabled={isEmpty}
          className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-light hover:bg-surface transition-colors disabled:opacity-40"
        >
          <Eraser size={14} /> Limpar
        </button>
        <div className="flex-1" />
        {onCancel && (
          <button
            onClick={onCancel}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-light hover:bg-surface transition-colors"
          >
            <X size={14} /> Cancelar
          </button>
        )}
        <button
          onClick={handleSave}
          disabled={isEmpty || saving}
          className="flex items-center gap-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-600 transition-colors disabled:opacity-40"
        >
          <Check size={14} /> {saving ? "Salvando..." : "Confirmar Assinatura"}
        </button>
      </div>
    </div>
  );
}
