# Yamaha M7CL — Spec para simulador (V3 Owner's Manual + datasheet)

## Modelos
| | M7CL-32 | M7CL-48 | M7CL-48ES |
|---|---|---|---|
| Inputs analógicos | 32 mono + 4 ST | 48 mono + 4 ST | EtherSound (SB168-ES) + 8 OMNI |
| Rede | 3× Mini-YGDAI | 3× Mini-YGDAI | EtherSound (48/24 @48k) |
Mesmo motor/software/telas; diferem só no front-end e nº de faders de input.

## ⚠️ Traço definidor
**Sem camadas de fader de input** — cada canal mono tem fader físico dedicado (48/32), sempre visível. Edição "profunda" via **SELECTED CHANNEL** (knobs físicos) + **CENTRALOGIC** (8 faders assignáveis + touchscreen). Touchscreen resistivo (tem toque, ≠ LS9).

## Counts
Inputs 48/32 mono + 4 ST IN; **MIX 16**; **MATRIX 8** (+ INPUT TO MATRIX → ~24 saídas); STEREO 1 (LCR); MONO 1; **DCA 8**; **MUTE 8**; racks 8 (1-4 GEQ, 5-8 GEQ/FX, ≤4 efeitos); scenes 300; OMNI OUT 16/8; 3 slots MY; 44.1/48 kHz; +48V/canal.

Cadeia: HA→Ø→AD→ATT→HPF→EQ 4-band→DYN1→DYN2→FADER→ON→PAN→ST/MONO/16MIX/8MTX/DIRECT/INSERT.

## Superfície física
- Strip de input: fader 100mm motorizado + ON + CUE + SEL + LEDs + nome. (-48: INPUT 1-32 à esquerda, 33-48 à direita da tela; -32: só bloco esquerdo.)
- **SELECTED CHANNEL** (esq. da tela): GAIN (−62..+10), +48V, Ø, HPF (20–600), DYN1/DYN2 threshold, EQ Q/FREQ/GAIN por banda, PAN, MIX/MTX send.
- **Touchscreen** TFT largo (resistivo) + USB host.
- **CENTRALOGIC** (centro, abaixo da tela): 8 faders assignáveis + 8 encoders multifunção + SEL/CUE/ON + nav keys; espelha o OVERVIEW; encoders seguem a linha selecionada (pan/send/GEQ band).
- Master: STEREO fader + ON/CUE; **USER DEFINED KEYS 12**; SCENE STORE/RECALL/INC/DEC; TALKBACK; MONITOR; meter bridge MBM7CL opcional.

## Telas (touch)
- **SELECTED CHANNEL VIEW**, **OVERVIEW** (8 canais, espelha CENTRALOGIC).
- **EQ 4-band**: Freq 20–20k (1/12), Gain ±18, Q 0.10–10; LOW PEAK/L.SHELF/HPF, HIGH PEAK/H.SHELF/LPF; **Type I / Type II**; ATT −96..+24; HPF 20–600 −12dB/oct.
- **DYN 1** (GATE/DUCKING/COMP/EXPANDER) **DYN 2** (COMP/COMPANDER-H/S/DE-ESSER). GATE thr −72..0, range −∞/−69..0, atk 0–120, hold, decay. COMP thr −54..0, ratio 16 passos 1:1..∞, atk 0–120, rel 5ms–42.3s, knee Hard/1–5, out 0..+18. COMPANDER ratio 1:1–20, width 1–90, out −18..0. DE-ESSER freq 1k–12.5k. Curva + GR + key-in.
- **HA** −62..+10, +48V, Ø, HPF (guardado em cena).
- **SENDS ON FADER**: 16 MIX / 8 MATRIX; faders viram sends; ON vira send-on; PRE/POST.
- **DCA 8 + MUTE 8** (assign; masters no CENTRALOGIC ou USER KEYS).
- **SCENE 300**: lista, STORE/RECALL/UPDATE, Fade Time, Recall Safe, Focus, Global Paste (inclui HA).
- **RACK 8**: GEQ 31-band (±15dB) ou Flex15 (16 GEQ); GEQ bands dirigidos pelos 8 faders do CENTRALOGIC; efeitos (5-8): 48 algoritmos + REV-X + VCM (V3: Comp276, EQ601…).
- **MATRIX 8** (EQ/dyn/delay/insert), **METER**, **MONITOR/CUE** (oscillator, talkback), **SETUP** (VARI/FIXED, word clock, security), **PATCH**.

## Interação
SEL → knobs SELECTED CHANNEL + telas; touch drag no EQ/dinâmica; CENTRALOGIC banca inputs/MIX/MTX/DCA via nav keys; SENDS ON FADER; DCA master; scene recall com faders motorizados.

## M7CL × CL (didática)
- **Sem camadas** (fader dedicado por input) vs CL **em camadas** (bancos 8+8+8).
- MIX 16 vs **CL 24**; MATRIX 8 = 8.
- **EtherSound** vs **Dante** (CL).
- CL tem **Touch-and-Turn**, LCDs de nome coloridos, **Premium Rack** (Rupert Neve Portico/U76/Opt-2A), **Dan Dugan automix**, **gain compensation** — M7CL não.
- EQ M7CL: Type I/II (CL: PRECISE/AGGRESSIVE/SMOOTH/LEGACY).

Ver [[cl5]], [[ls9]], [[smu-plataforma-cursos]].
