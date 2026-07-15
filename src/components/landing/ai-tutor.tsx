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

  // audio
  const [playing, setPlaying] = useState(false);
  const [barsOn, setBarsOn] = useState(0);
  const [curT, setCurT] = useState("00:00");
  const playRef = useRef(playing);
  useEffect(() => { playRef.current = playing; }, [playing]);
  const posRef = useRef(0);


  useEffect(() => {
    if (areaRef.current) areaRef.current.scrollTop = areaRef.current.scrollHeight;
  }, [rows]);

  useEffect(() => {
    const total = 200;
    const id = setInterval(() => {
      if (!playRef.current) return;
      posRef.current = (posRef.current + 1) % (total + 1);
      const p = posRef.current / total;
      setBarsOn(Math.round(p * BARS.length));
      const s = Math.round(p * 200);
      setCurT(`${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`);
    }, 50);
    return () => clearInterval(id);
  }, []);

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
      <div className={styles.audioBar}>
        <button className={styles.pp} aria-label="Play" onClick={() => setPlaying((v) => !v)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A0A0B">
            {playing ? (
              <>
                <rect x="6" y="5" width="4" height="14" />
                <rect x="14" y="5" width="4" height="14" />
              </>
            ) : (
              <path d="M8 5v14l11-7z" />
            )}
          </svg>
        </button>
        <div className={styles.wave}>
          {BARS.map((h, i) => (
            <i key={i} style={{ height: h, opacity: i <= barsOn ? 0.95 : 0.3 }} />
          ))}
        </div>
        <span className={styles.tm}>{curT} / 03:20</span>
      </div>
    </div>
  );
}
