# Yamaha RIVAGE PM7 — Spec para simulador (pesquisa oficial)

> PM7 = membro **integrado** (superfície CSD-R7 = surface + DSP no mesmo chassi). PM10 = **modular** (CS-R10 + DSP-R10 externo). Mesma GUI/workflow/"feel"; diferem em capacidade de DSP, redundância e 1 bay/tela.

## Counts (usar figuras clássicas de marketing para o contraste didático)
| Spec | PM7 (clássico) | PM10 (clássico) | Unificado moderno (ambos) |
|---|---|---|---|
| Canais de entrada | 120 | 144 | 120 |
| MIX | 60 | 72 | 48 |
| MATRIX | 24 | 36 | 24 |
| STEREO / MONO | 2 / 1 | 2 / 1 | 2 / 1 |
| DCA | 24 | 24 | 24 |
| Mute groups | 12 | 12 | 12 |
| Scenes | 1000 | 1000 | 1000 |
| GEQ mounts | 48 | 48 | 48 |
| PEQ entrada / saída | 4-band / 8-band | igual | igual |
| Sample rate | 96 kHz | 96 kHz | 96 kHz |
| Faders | 26 (12+12+2) ou 38 | 38 (12+12+12+2) | — |
| Telas touch | 1–2 × 15" | 2 × 15" | — |
| DSP | integrado (CSD-R7) | externo (DSP-R10) | — |
| DSP Mirroring (failover) | Não | Sim | — |

## Superfície física
- Bays de 12 faders (100mm motorizados, touch-sensitive) + SEL/CUE/ON, nome/cor por strip, Custom Fader Bank (6×2 por bay).
- **Selected Channel** (centro, físico): HA/GAIN + +48V + Ø; SILK on + RED/BLUE + TEXTURE; HPF/LPF; EQ 4 bandas (Q/Freq/Gain por banda com anel de LED); DYN 1&2 (thr/range/ratio/atk/rel/gain); PAN; SEND. Cada rotativo é push-encoder com anel de LED.
- **TouchAndTurn** (2 knobs): toca parâmetro na tela → prende no knob → gira.
- **USER DEFINED KEYS** 12×4=48; **USER DEFINED KNOBS** 4×4=16.
- **SCENE**: STORE/RECALL, up/down, 1000 cenas, focus/safe, fade time, preview.
- **GEQ/PEQ on Faders**: os 12 faders do bay viram as 31 bandas (em bancos).

## Telas / parâmetros
- **HA/SILK**: HA analógico ~−6..+66 dB + trim digital; +48V; Ø; SILK Off/RED(brilho)/BLUE(corpo) + TEXTURE contínuo; HPF −6/−12/−18/−24 dB/oct ~20–600 Hz; LPF −6/−12 dB/oct ~1k–20k (também key-in filter da dinâmica).
- **EQ**: entrada 4 bandas / saída 8 bandas paramétricas; LOW/HIGH shelving; 4 algoritmos: **PRECISE / AGGRESSIVE / SMOOTH / LEGACY**. Gain ±18 dB, Q ~0.1–10, Freq 20–20k.
- **DYN 1&2** (independentes): GATE/DUCKING/EXPANDER/COMPRESSOR (Legacy Comp, Comp260/VCM, FET, Diode Bridge), DE-ESSER. Gate thr −72..0, range −∞..0, atk 0–120ms, hold 0.02ms–2.13s, rel 5ms–42.3s. Comp ratio 1:1→∞ (1,1.5,2,2.5,3,4,5,8,10,20,∞), knee Hard/1–5, makeup 0..+18dB. Curva de transferência + medidor GR, arrastável (multi-touch).
- **SENDS ON FADER**: MIX (VARI/FIXED, mono/stereo) 60 (PM7); MATRIX 24; STEREO 2; MONO 1. Send level −∞..+10 dB, on/off, PRE/POST, pan.
- **DCA 24 / MUTE 12**.
- **SCENE**: 1000, Recall Focus/Safe, Fade Time, Preview, Global Paste.
- **RACK**: GEQ 31-band + Flex15; PEQ 8-band; Dan Dugan automix (64ch); 50+ efeitos; até 256 instâncias de plugin / 384 slots.
- **Plugins-chave**: Rupert EQ 773/810, Rupert Comp 754/830, Portico 5033/5043/5045, U76/Comp276, REV-X, DaNSe, Bricasti Y7, Eventide H3000/SP2016, TC VSS4HD.
- **MATRIX** (24, com PEQ 8-band + delay), **METER**, **MONITOR/CUE** (2 saídas, delay + PEQ 8-band), **SETUP**, **PATCH**, **TWINLANe** (400ch@96k) + Dante.

## PM7 × PM10 (o que ensinar)
1. Integração: PM7 tudo em uma caixa (CSD-R7); PM10 surface + DSP separados.
2. Escala: PM7 menor (120/60/24 vs 144/72/36) e 1 bay/tela a menos.
3. Redundância: DSP Mirroring só no PM10.
4. Mesma GUI, Silk, VCM, plugins.

## O que torna Rivage diferente de CL/M7/LS9 (ângulo didático)
- Mic pre híbrido + **SILK** (emulação de transformador Rupert Neve) em toda entrada.
- EQ/dinâmica VCM co-desenvolvidos com Rupert Neve + plugins Portico.
- 4 algoritmos de EQ, dinâmica dupla completa por canal.
- Counts muito maiores, 96 kHz, rede TWINLANe, redundância de DSP.

Fonte definitiva de ranges exatos: **RIVAGE PM series Data List** (download.yamaha.com). Ver [[smu-plataforma-cursos]].
