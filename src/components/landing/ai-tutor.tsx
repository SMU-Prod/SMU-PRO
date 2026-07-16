"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./landing.module.css";

/**
 * Barras da waveform. Determinístico (só depende de `i`), então é constante de
 * módulo: não depende de nada, calcula uma vez por processo e é idêntico no
 * servidor e no cliente — que era a razão original de não usar Math.random.
 * Antes vivia num useRef lido durante o render, o que o React proíbe.
 */
const BARS = Array.from({ length: 48 }, (_, i) =>
  Math.min(30, Math.round(6 + 18 * Math.abs(Math.sin(i * 0.7)) + 8 * Math.abs(Math.sin(i * 1.7 + 1)))),
);

const ANSWERS: Record<string, string> = {
  "Qual a diferença entre PA e monitor?":
    "A PA é o som que vai pro público; o monitor (ou retorno) é o som que o artista ouve no palco. São mixes diferentes — o público quer a mistura final, o músico quer se ouvir. Veja em 04:12 na aula.",
  "O que é gate no som ao vivo?":
    "Gate é um \"portão\" que só deixa passar o som acima de um limiar. Serve pra cortar vazamento e ruído entre as batidas — clássico na bateria. Ajuste o threshold com cuidado pra não comer o ataque.",
  "Como escolher um moving head?":
    "Olhe 3 coisas: tipo (beam, spot ou wash), potência/alcance pro tamanho do palco, e recursos (gobo, zoom, CMY). Pra igreja/bar um wash LED resolve; pra show grande, beam de alta potência.",
};

type Row = { who: "ia" | "us"; text: string; typing?: boolean };

export function AiTutor() {
  const [rows, setRows] = useState<Row[]>([
    { who: "ia", text: "Oi! Sou o tutor da SMU. Toca numa dúvida abaixo que eu explico. 👇" },
  ]);
  const [typing, setTyping] = useState(false);
  const areaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (areaRef.current) areaRef.current.scrollTop = areaRef.current.scrollHeight;
  }, [rows]);

  const ask = (q: string) => {
    if (typing) return;
    setTyping(true);
    setRows((r) => [...r, { who: "us", text: q }, { who: "ia", text: "", typing: true }]);
    const full = ANSWERS[q] ?? "…";
    let idx = 0;
    const iv = setInterval(() => {
      idx += 2;
      setRows((r) => {
        const copy = [...r];
        const last = copy.length - 1;
        copy[last] = { who: "ia", text: full.slice(0, idx), typing: idx < full.length };
        return copy;
      });
      if (idx >= full.length) {
        clearInterval(iv);
        setTyping(false);
      }
    }, 22);
  };

  return (
    <div className={`${styles.mock} ${styles.aiMock}`}>
      <div className={styles.chatArea} ref={areaRef}>
        {rows.map((r, i) => (
          <div key={i} className={`${styles.chatRow} ${r.who === "us" ? styles.me : ""}`}>
            <span className={`${styles.av} ${r.who === "ia" ? styles.ia : styles.us}`}>
              {r.who === "ia" ? "IA" : "EU"}
            </span>
            <div className={`${styles.bubble} ${r.who === "ia" ? styles.ia : styles.us}`}>
              {r.text}
              {r.typing && <span className={styles.cursor} />}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.qchips}>
        {Object.keys(ANSWERS).map((q) => (
          <button key={q} onClick={() => ask(q)}>
            {q}
          </button>
        ))}
      </div>
      {/* Ilustração do recurso "narração em áudio" — não é um player real. */}
      <div className={styles.audioBar} aria-hidden="true">
        <span className={styles.pp}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="#0A0A0B">
            <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm7 9a7 7 0 0 1-6 6.92V21a1 1 0 1 1-2 0v-.08A7 7 0 0 1 5 12a1 1 0 1 1 2 0 5 5 0 0 0 10 0 1 1 0 1 1 2 0z" />
          </svg>
        </span>
        <div className={styles.wave}>
          {BARS.map((h, i) => (
            <i key={i} style={{ height: h, animationDelay: `${(i % 12) * 0.09}s` }} />
          ))}
        </div>
        <span className={styles.tm}>{"Narração da aula · 03:20"}</span>
      </div>
    </div>
  );
}
