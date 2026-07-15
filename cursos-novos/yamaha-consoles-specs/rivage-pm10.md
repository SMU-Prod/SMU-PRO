# Yamaha RIVAGE PM10 — Spec para simulador (pesquisa oficial)

> Flagship **modular**: superfície **CS-R10** (só controle, sem DSP) + engine **DSP-R10** + racks de I/O **RPio** via rede **TWINLANe** (anel redundante, 96 kHz/32-bit). PM7 = versão integrada.

## Arquitetura modular
| Bloco | Componente | Papel |
|---|---|---|
| Surface | CS-R10 (full) / CS-R10-S (compact) | Faders/telas/encoders; SEM processamento. |
| DSP | DSP-R10 | Todo o mix; 144/72/36; DSP Mirroring (redundância hot-standby). |
| I/O | RPio622 / RPio222 | Mic/line/AES na stage/amp. |
| Cards HY | HY256-TL (TWINLANe), HY144-D (Dante), HY128-MD (MADI) | Transporte. |
| Cards RY | **RY16-ML-SILK** (16 mic/line com SILK), RY16-DA, RY16-AE | Preamp/SILK vive AQUI. |

TWINLANe: 256 in/out por card, anel redundante, MM ~300m / SM até 2km.

## Superfície CS-R10
- 2× 15" multi-touch; **38 faders** (3 bays × 12 + 2 master), 100mm motorizados touch-sensitive.
- Selected Channel (bloco físico à direita): encoders p/ cada parâmetro do canal SEL.
- USER DEFINED KEYS 12×4=48; KNOBS 4×4=16; **TouchAndTurn** ×1; PSU redundante.
- CS-R10-S: 1× 15", 26 faders (2×12+2).
- Strip vertical contínua (Centralogic evoluído): tela acima espelha o fader.

## Counts (clássico DSP-R10)
| Spec | PM10 | PM7 | DSP-RX (novo) | DSP-RX-EX (novo) |
|---|---|---|---|---|
| Inputs | 144 | 120 | 120 | 288 |
| MIX | 72 | 60 | 48 | 72 |
| MATRIX | 36 | 24 | 24 | 36 |
| STEREO/MONO | 2/1 | 2/1 | 2/1 | 2/1 |
| DCA / Mute | 24 / 12 | 24/12 | 24/12 | 24/12 |
| Plugin instances | ~192 | menos | 384 | 512 |
| Sample rate | 96 kHz | 96 | 96 | 96 |
| DSP Mirroring | Sim | Não | Sim | Sim |

## Cadeia do canal (input)
Patch(RY16-ML-SILK) → HA gain → SILK → Ø → HPF → EQ 4-band → Dyn1 → Dyn2 → LPF → Delay → Fader/ON → Pan → Sends → Stereo/Mono.

- **HA** −6..+66 dB analógico + trim −96..+24; +48V; Ø; HPF THRU–8kHz (−6/−12/−18/−24); LPF (−6/−12).
- **SILK**: RED (harmônicos médio-agudo, brilho) / BLUE (grave-médio, corpo) + **TEXTURE 0–10** (saturação).
- **EQ**: input 4-band / output 8-band; Freq 20–20k, Gain ±18, Q 0.1–16; tipos **PRECISE/AGGRESSIVE/SMOOTH/LEGACY** (Precise adds Q nos shelves 0.1–10).
- **DYN 1&2** independentes: GATE/EXPANDER/DUCKING/DE-ESSER/LEGACY COMP/COMP260(VCM). Thr ~−54..0, ratio 1:1..∞, atk 0–120ms, rel 5ms–42s, range gate −70..0, knee Hard/1–5, makeup 0..+18, key-in self/other/filter. Curva + medidor GR.

## Buses/grupos
- MIX 72 (VARI/FIXED, mono/stereo, pre/post); MATRIX 36; STEREO/MONO; Sends on Fader (38 faders viram sends); DCA 24 (inclui output DCA); Mute 12 (+ Mute Safe); LCR.

## Telas
SELECTED CHANNEL, OVERVIEW, EQ (curva multi-touch + tipo + RTA), DYNAMICS (curva + GR), SENDS ON FADER, RACK (GEQ 31/Flex15 ×48, PEQ, efeitos, plugins), GEQ/PEQ on Fader, MATRIX, PATCH (TWINLANe/Dante grid), SCENE (Focus/Recall Safe/Global Paste/Preview), METER, MONITOR/CUE (2 saídas, 8 combos), SETUP, USER SETUP.

## Plugins (50+)
Rupert EQ 773/810, Rupert Comp 754/830; Portico 5033/5043/5045/P2MB; VCM EQ-1A/Equalizer601/Dynamic EQ; VCM dyn U76/Comp276/Opt-2A/MBC4/Buss Comp 369/OpenDeck; REV-X, Bricasti Y7, Eventide SP2016/H3000, TC VSS4HD/NonLin2, Analog Delay, DaNSe.

## Diferenciais e didática
- **Theatre Mode**: 4 bancos de EQ/Dyn por canal; cenas guardam qual banco está ativo (por ator/cue).
- TouchAndTurn, multi-touch EQ/dyn, Sends/GEQ on fader, Scene Focus/Preview/Overlay.
- PM10 × PM7: modular vs integrado; counts maiores; DSP Mirroring só PM10; mesmo software/look.
- Rivage × CL/M7/LS9: SILK/mic-pre híbrido + VCM/Rupert/Portico + 96k + TWINLANe.

Ranges exatos: Data List PDF. Ver [[rivage-pm7]] e [[smu-plataforma-cursos]].
