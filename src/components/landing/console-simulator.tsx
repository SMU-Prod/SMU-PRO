"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./landing.module.css";

/* ---------------------------------------------------------------- Fader */
function Fader({
  value,
  onChange,
  label,
  trackClass,
}: {
  value: number;
  onChange: (v: number) => void;
  label?: string;
  trackClass?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromY = useCallback(
    (clientY: number) => {
      const el = trackRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      let p = 1 - (clientY - r.top) / r.height;
      p = Math.max(0, Math.min(1, p));
      onChange(Math.round(p * 100));
    },
    [onChange],
  );

  useEffect(() => {
    const move = (e: PointerEvent) => dragging.current && setFromY(e.clientY);
    const touch = (e: TouchEvent) => {
      if (dragging.current && e.touches[0]) {
        setFromY(e.touches[0].clientY);
      }
    };
    const up = () => (dragging.current = false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("touchmove", touch, { passive: false });
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("touchmove", touch);
      window.removeEventListener("touchend", up);
    };
  }, [setFromY]);

  return (
    <div className={styles.fader}>
      <div
        ref={trackRef}
        className={`${styles.track} ${trackClass ?? ""}`}
        onPointerDown={(e) => {
          dragging.current = true;
          setFromY(e.clientY);
        }}
        onTouchStart={(e) => {
          dragging.current = true;
          if (e.touches[0]) setFromY(e.touches[0].clientY);
        }}
      >
        <div className={styles.fill} style={{ height: `${value}%` }} />
        <div className={styles.knob} style={{ bottom: `${value}%` }} />
      </div>
      {label && <small>{label}</small>}
    </div>
  );
}

/* ------------------------------------------------------------ Sound bank */
type Chan = {
  n: string;
  c: string;
  v: number;
  beat: number[];
  mute: boolean;
  solo: boolean;
};

const SOUND_DEFAULT: Omit<Chan, "mute" | "solo">[] = [
  { n: "KICK", c: "#ef4444", v: 80, beat: [1, 0, 0, 0, 1, 0, 0, 0] },
  { n: "SNARE", c: "#f97316", v: 74, beat: [0, 0, 1, 0, 0, 0, 1, 0] },
  { n: "HAT", c: "#eab308", v: 58, beat: [1, 1, 1, 1, 1, 1, 1, 1] },
  { n: "TOMS", c: "#f59e0b", v: 54, beat: [0, 0, 0, 0, 0, 1, 0, 1] },
  { n: "BASS", c: "#22c55e", v: 78, beat: [1, 0, 1, 0, 1, 0, 1, 0] },
  { n: "GTR", c: "#14b8a6", v: 64, beat: [1, 0, 0, 1, 0, 1, 0, 0] },
  { n: "KEYS", c: "#3b82f6", v: 60, beat: [1, 0, 0, 0, 0, 0, 1, 0] },
  { n: "LEAD", c: "#8b5cf6", v: 84, beat: [1, 1, 0, 1, 1, 0, 1, 1] },
  { n: "BVOX", c: "#ec4899", v: 52, beat: [0, 1, 0, 0, 0, 1, 0, 0] },
  { n: "FX", c: "#06b6d4", v: 46, beat: [0, 0, 0, 1, 0, 0, 0, 1] },
];

function dbTxt(v: number) {
  if (v <= 0) return "-∞";
  return `-${Math.round((100 - v) * 0.6)}dB`;
}

function SoundConsole() {
  const [chans, setChans] = useState<Chan[]>(
    SOUND_DEFAULT.map((c) => ({ ...c, mute: false, solo: false })),
  );
  const [masterV, setMasterV] = useState(82);
  const [mixOn, setMixOn] = useState(false);

  // Espelho de estado para o intervalo ler sempre o valor atual sem se reinscrever.
  // A escrita vai em effect: mexer em ref.current durante o render quebra com
  // StrictMode e render concorrente (o React pode descartar e refazer o render).
  const chansRef = useRef(chans);
  const masterRef = useRef(masterV);
  const mixRef = useRef(mixOn);
  useEffect(() => { chansRef.current = chans; }, [chans]);
  useEffect(() => { masterRef.current = masterV; }, [masterV]);
  useEffect(() => { mixRef.current = mixOn; }, [mixOn]);

  const meterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const masterMeter = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let step = 0;
    const id = setInterval(() => {
      const cs = chansRef.current;
      const solo = cs.some((c) => c.solo);
      let sum = 0;
      let act = 0;
      cs.forEach((c, i) => {
        const on = !c.mute && (!solo || c.solo);
        let tgt = 0;
        if (!on) tgt = 0;
        else if (mixRef.current) {
          const hit = c.beat[step % 8];
          tgt = c.v * (hit ? 1 : 0.32) * (0.72 + Math.random() * 0.28);
        } else tgt = c.v * 0.1 * Math.random();
        const m = meterRefs.current[i];
        if (m) m.style.height = `${Math.min(100, tgt)}%`;
        if (on) {
          sum += tgt;
          act += 1;
        }
      });
      const mv = mixRef.current
        ? Math.min(100, (sum / Math.max(1, act)) * 1.15 * (masterRef.current / 100))
        : 2 + Math.random() * 3;
      if (masterMeter.current) masterMeter.current.style.height = `${mv}%`;
      if (mixRef.current) step += 1;
    }, 110);
    return () => clearInterval(id);
  }, []);

  const setVal = (i: number, v: number) =>
    setChans((cs) => cs.map((c, j) => (j === i ? { ...c, v } : c)));
  const toggle = (i: number, key: "mute" | "solo") =>
    setChans((cs) => cs.map((c, j) => (j === i ? { ...c, [key]: !c[key] } : c)));

  const reset = () =>
    setChans(SOUND_DEFAULT.map((c) => ({ ...c, mute: false, solo: false })));

  return (
    <div>
      <div className={styles.mixer}>
        <div className={styles.bay}>
          {chans.map((c, i) => (
            <div key={c.n} className={styles.chan}>
              <div className={styles.scribble} style={{ background: c.c }}>
                {c.n}
              </div>
              <div className={styles.meter}>
                <div
                  className={styles.meterLvl}
                  ref={(el) => {
                    meterRefs.current[i] = el;
                  }}
                />
              </div>
              <Fader
                value={c.v}
                onChange={(v) => setVal(i, v)}
                trackClass={styles.cf}
              />
              <div className={styles.db}>{dbTxt(c.v)}</div>
              <div className={styles.ms}>
                <button
                  className={`${styles.m} ${c.mute ? styles.on : ""}`}
                  onClick={() => toggle(i, "mute")}
                >
                  M
                </button>
                <button
                  className={`${styles.s} ${c.solo ? styles.on : ""}`}
                  onClick={() => toggle(i, "solo")}
                >
                  S
                </button>
              </div>
            </div>
          ))}
          {/* master */}
          <div className={`${styles.chan} ${styles.master}`}>
            <div
              className={styles.scribble}
              style={{ background: "linear-gradient(90deg,var(--smu-amber),var(--smu-amber-light))" }}
            >
              MAIN L/R
            </div>
            <div className={styles.meter}>
              <div className={styles.meterLvl} ref={masterMeter} />
            </div>
            <Fader value={masterV} onChange={setMasterV} trackClass={styles.cf} />
            <div className={styles.db}>{dbTxt(masterV)}</div>
            <div className={styles.ms} />
          </div>
        </div>
      </div>
      <div className={styles.mixBtns}>
        <button
          className={mixOn ? styles.live : ""}
          onClick={() => setMixOn((v) => !v)}
        >
          {mixOn ? "⏸ Parar mix" : "▶ Tocar mix"}
        </button>
        <button onClick={reset}>↺ Resetar</button>
        <span className={styles.mixHint}>
          arraste os faders · toque M (mute) / S (solo)
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ Light bank */
const LIGHT_DEFAULT = [70, 40, 85, 30, 60, 50];
const PALETTES: Record<string, number[]> = {
  quente: [38, 28, 45, 20, 38, 30],
  frio: [210, 220, 190, 260, 205, 230],
  festa: [320, 45, 190, 275, 110, 15],
  branco: [45, 45, 48, 45, 45, 45],
};
const SWATCH_BG: Record<string, string> = {
  quente: "#F59E0B",
  frio: "#3B82F6",
  festa: "linear-gradient(135deg,#ec4899,#8b5cf6,#22c55e)",
  branco: "#e5e5e7",
};

function LightConsole() {
  const N = 6;
  const [vals, setVals] = useState<number[]>([...LIGHT_DEFAULT]);
  const [hues, setHues] = useState<number[]>([...PALETTES.festa]);
  const [palette, setPalette] = useState("festa");
  const [running, setRunning] = useState(false);

  // Mesmo motivo do console de som: espelho de estado, escrita em effect.
  const valsRef = useRef(vals);
  const huesRef = useRef(hues);
  const runRef = useRef(running);
  useEffect(() => { valsRef.current = vals; }, [vals]);
  useEffect(() => { huesRef.current = hues; }, [hues]);
  useEffect(() => { runRef.current = running; }, [running]);

  useEffect(() => {
    let t = 0;
    const id = setInterval(() => {
      if (!runRef.current) return;
      t += 0.35;
      setVals((vs) => vs.map((_, i) => Math.round(50 + 50 * Math.sin(t + i * 1.1))));
      setHues((hs) => hs.map((h) => (h + 7) % 360));
    }, 120);
    return () => clearInterval(id);
  }, []);

  const positions = Array.from({ length: N }, (_, i) => 12 + i * (76 / (N - 1)));

  return (
    <div>
      <div className={styles.stageview}>
        <div className={styles.haze} />
        <div className={styles.truss} />
        {positions.map((x, i) => {
          const a = vals[i] / 100;
          const hue = hues[i];
          return (
            <div key={`b${i}`}>
              <div
                className={styles.beam}
                style={{
                  left: `${x}%`,
                  width: 70,
                  height: 180,
                  marginLeft: -35,
                  clipPath: "polygon(42% 0,58% 0,100% 100%,0 100%)",
                  background: `linear-gradient(to bottom, hsla(${hue},90%,62%,${0.55 * a}), transparent 82%)`,
                  opacity: 0.25 + 0.75 * a,
                }}
              />
              <div
                className={styles.lamp}
                style={{
                  left: `${x}%`,
                  background: `hsl(${hue} 90% 60%)`,
                  boxShadow: `0 0 ${6 + 16 * a}px ${2 + 6 * a}px hsla(${hue},90%,60%,${a})`,
                }}
              />
              <div
                className={styles.spotpool}
                style={{
                  left: `${x}%`,
                  width: 60,
                  marginLeft: -30,
                  background: `radial-gradient(closest-side, hsla(${hue},90%,60%,${0.8 * a}), transparent)`,
                  opacity: a,
                }}
              />
            </div>
          );
        })}
        <div className={styles.floor} />
      </div>
      <div className={styles.console}>
        <div className={styles.faders}>
          {vals.map((v, i) => (
            <Fader
              key={`f${i}`}
              value={v}
              label={`C${i + 1}`}
              onChange={(nv) => setVals((vs) => vs.map((x, j) => (j === i ? nv : x)))}
            />
          ))}
        </div>
        <div className={styles.ctrl}>
          <div className={styles.swatches}>
            {Object.keys(PALETTES).map((k) => (
              <div
                key={k}
                title={k}
                className={`${styles.swatch} ${palette === k ? styles.on : ""}`}
                style={{ background: SWATCH_BG[k] }}
                onClick={() => {
                  setPalette(k);
                  setHues([...PALETTES[k]]);
                }}
              />
            ))}
          </div>
          <div className={styles.simBtns}>
            <button
              className={running ? styles.live : ""}
              onClick={() => setRunning((r) => !r)}
            >
              {running ? "⏸ Parar" : "▶ Animar show"}
            </button>
            <button onClick={() => setVals(vals.map(() => 0))}>■ Blackout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- Wrapper */
export function ConsoleSimulator() {
  const [tab, setTab] = useState<"som" | "luz">("som");
  return (
    <div className={styles.simwrap}>
      <div className={styles.simTop}>
        <span className={styles.dot} style={{ background: "var(--smu-red)" }} />
        <span className={styles.dot} style={{ background: "var(--smu-amber)" }} />
        <span className={styles.dot} style={{ background: "var(--smu-green)" }} />
        <span className={styles.simLbl}>
          Simulador · {tab === "som" ? "Mesa de som" : "Mesa de luz"}
        </span>
        <div className={styles.tabs}>
          <button className={tab === "som" ? styles.on : ""} onClick={() => setTab("som")}>
            🎚 Mesa de som
          </button>
          <button className={tab === "luz" ? styles.on : ""} onClick={() => setTab("luz")}>
            💡 Mesa de luz
          </button>
        </div>
        <span className={styles.simRt}>INTERATIVO</span>
      </div>
      {tab === "som" ? <SoundConsole /> : <LightConsole />}
    </div>
  );
}
