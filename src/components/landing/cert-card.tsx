"use client";

import { useState } from "react";
import styles from "./landing.module.css";

const QR = (
  <svg viewBox="0 0 100 100" shapeRendering="crispEdges" fill="#0A0A0B">
    <rect x="0" y="0" width="30" height="30" />
    <rect x="8" y="8" width="14" height="14" fill="#fff" />
    <rect x="70" y="0" width="30" height="30" />
    <rect x="78" y="8" width="14" height="14" fill="#fff" />
    <rect x="0" y="70" width="30" height="30" />
    <rect x="8" y="78" width="14" height="14" fill="#fff" />
    <rect x="40" y="0" width="8" height="8" />
    <rect x="52" y="0" width="8" height="8" />
    <rect x="40" y="12" width="8" height="8" />
    <rect x="0" y="40" width="8" height="8" />
    <rect x="14" y="40" width="8" height="8" />
    <rect x="28" y="40" width="8" height="8" />
    <rect x="40" y="40" width="8" height="8" />
    <rect x="52" y="52" width="8" height="8" />
    <rect x="64" y="40" width="8" height="8" />
    <rect x="76" y="40" width="8" height="8" />
    <rect x="88" y="52" width="8" height="8" />
    <rect x="40" y="64" width="8" height="8" />
    <rect x="52" y="76" width="8" height="8" />
    <rect x="64" y="64" width="8" height="8" />
    <rect x="76" y="76" width="8" height="8" />
    <rect x="88" y="64" width="8" height="8" />
    <rect x="64" y="88" width="8" height="8" />
    <rect x="40" y="88" width="8" height="8" />
  </svg>
);

export function CertCard({
  logoSrc,
  name = "Erick Russo",
  course = "Pleno — Sonorização · 12h45 · nota 92",
  date = "15/07/2026",
  code = "SMU-PL-SOM-4F2A",
}: {
  logoSrc: string;
  name?: string;
  course?: string;
  date?: string;
  code?: string;
}) {
  const [scanning, setScanning] = useState(false);
  const [done, setDone] = useState(false);
  const [label, setLabel] = useState("🔍 Verificar certificado");

  const verify = () => {
    if (scanning || done) return;
    setScanning(true);
    setLabel("Verificando…");
    setTimeout(() => {
      setScanning(false);
      setDone(true);
      setLabel("✓ Certificado autêntico");
    }, 1200);
  };

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-gradient-to-br from-surface to-[#0e0e10] p-8 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)]">
        <div className="relative mb-6 flex items-start justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="SMU" className="h-12 w-auto" />
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 px-2.5 py-1 text-[10px] text-emerald-400">
            ✓ Verificável
          </span>
        </div>
        <div className="mb-2 text-xs uppercase tracking-[0.15em] text-muted-light">
          Certificado de conclusão
        </div>
        <div className="mb-1 font-serif text-3xl" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
          {name}
        </div>
        <div className="mb-6 text-sm text-amber-400">{course}</div>
        <div className="relative flex items-end justify-between">
          <div>
            <small className="block text-[10px] text-muted-light">Emitido em</small>
            <b className="text-[13px]">{date}</b>
            <small className="mt-2 block text-[10px] text-muted-light">Código</small>
            <b className="text-[13px]">{code}</b>
          </div>
          <div className={`${styles.qr} ${scanning ? styles.scanning : ""}`}>
            <div className={styles.scan} />
            {QR}
          </div>
        </div>
      </div>
      <button className={`${styles.verifyBtn} ${done ? styles.done : ""}`} onClick={verify}>
        {label}
      </button>
    </div>
  );
}
