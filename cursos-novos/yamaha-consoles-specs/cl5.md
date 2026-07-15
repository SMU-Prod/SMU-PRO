# Yamaha CL5 — Spec para simulador (pesquisa oficial: Reference Manual + Data Sheet)

## ⚠️ Correções a aplicar no simulador atual
| Assumido antes | CL5 real |
|---|---|
| 16 MIX | **24 MIX** |
| 8 DCA | **16 DCA** |
| 6 mute | **8 mute groups** |
| 96 kHz (header do sim) | **44.1 / 48 kHz apenas** (Dante 64×64) — CORRIGIR header |
| Dyn1=Gate fixo / Dyn2=Comp fixo | Ambos são **slots selecionáveis** (ver Dynamics) |
| 72 mono + 8 stereo | ✓ correto |

## Arquitetura / counts
- Inputs: **72 mono + 8 stereo (80)**. Faders físicos: **16 + 8 + 8 + 2 (34)**.
- MIX **24**, MATRIX **8** (Input-to-Matrix ok), STEREO 1, MONO 1, CUE 1 (2º cue V4).
- DCA **16**, MUTE **8**. Effect racks 8 (**54 programas**), GEQ racks **16**, Premium racks 8 (VCM).
- Scenes **300**. Inserts/canal 2. 48 kHz. Tela **10" touch**. Faders 100mm, 1024 passos, +10..−138/−∞ dB.

## Superfície física (touch × físico)
- **Físico**: todos os faders + ON/CUE/SEL + LCD nome/cor; encoders **SELECTED CHANNEL** (GAIN, HPF, PEQ Q/FREQ/GAIN das 4 bandas, DYN1&2 threshold, PAN, SENDS); **USER DEFINED KEYS 16×4=64**; **USER DEFINED KNOBS 4**; **TOUCH AND TURN**; SCENE INC/DEC/STORE/RECALL; MONITOR LEVEL; bank-select; page-access keys; talkback.
- **Touch (tela)**: todo o resto — edição de parâmetros, patch, lista de cenas, racks, roteamento, arraste de EQ/dinâmica, engate sends-on-fader, DCA/mute assign, custom bank.
- Blocos de fader: LEFT 16 (bancos Input 1-16/17-32…), **CENTER = Centralogic 8** (espelha o bloco escolhido na tela), RIGHT 8, MASTER 2 (ST A/B ou ST+MONO).
- Meter bridge no topo.

## Telas (tela touch)
### SELECTED CHANNEL VIEW (1 canal)
HA gain (−6..+66), digital gain (−96..+24), +48V, Ø, GC; HPF 20–600 Hz (−6/−12 dB/oct); EQ 4-band; DYN1 & DYN2 mini-graph + GR; PAN/BAL, TO ST/MONO; INSERT/DIRECT OUT; MIX/MATRIX sends; DCA/MUTE; nome/nº/cor, fader, ON.

### OVERVIEW
8 strips do banco lado a lado (HA, Ø, thumbnail EQ, Dyn GR, pan, send/fader, ON, meter). Tela padrão de mix.

### EQ (4 bandas paramétricas)
Bandas LOW / LOW-MID / HIGH-MID / HIGH. **Freq 20 Hz–20 kHz** (1/12 oct). **Gain −18..+18 dB**. **Q 0.10–10.0** (41). LOW: BELL/L.SHELF/HPF. HIGH: BELL/H.SHELF/LPF. Tipos: **PRECISE/AGGRESSIVE/SMOOTH/LEGACY** (V4) ou TYPE I/II. ATT −96..0 antes do EQ. RTA overlay. (Q some quando banda vira shelf/pass.)

### DYNAMICS 1 & 2 (slots selecionáveis)
- Input DYN1: Gate / Ducking / Compressor / Expander
- Input DYN2: Compressor / Compander-H / Compander-S / De-esser
- Output DYN1: Compressor / Expander / Compander-H/S
- Curva de transferência + GR + linha de threshold arrastável. Key-in SELF/outro/MIX + key-in filter (V4).

**GATE**: THR −72..0; RANGE −∞,−69..0; ATK 0–120ms; HOLD 0.02ms–1.96s; DECAY 5ms–42.3s.
**DUCKING**: THR −54..0; RANGE −70..0; ATK/HOLD/DECAY.
**COMPRESSOR**: THR −54..0; RATIO 1:1–∞ (16); ATK 0–120ms; REL 5ms–42.3s; OUT GAIN 0..+18; KNEE HARD/1–5.
**EXPANDER**: campos do comp (RATIO 1:1–∞).
**COMPANDER-H/S**: THR −54..0; RATIO 1:1–20; ATK; REL; OUT GAIN −18..0; WIDTH 1–90dB; KNEE fixo 2.
**DE-ESSER**: THR −54..0; FREQ min 1k–12.5k; TYPE HPF/BPF; Q 0.10–10.

### SENDS ON FADER
Faders viram send para uma MIX (1–24) ou MATRIX (1–8). Por send: level, ON, PRE/POST, pan p/ stereo. Master fader = bus destino.

### TO ST/MONO + PAN
ST/MONO on/off; PAN −63..C..+63; BAL p/ stereo; LCR.

### DCA (16) & MUTE (8)
DCA assign matrix (qualquer canal→DCA), DCA master fader + ON, DCA Roll-Out. MUTE 8 (mute-master via User Key), dimmer.

### SCENE (300)
Lista (nº, nome, comentário, protect). STORE/RECALL/INC/DEC. **Focus Recall**, **Fade Time 0–60s**, **Recall Safe**, **Preview**, **Global Paste**.

### RACKS
- Effect (8): 54 programas — reverb (hall/room/plate), delay (mono/stereo/ping-pong/tempo), mod (chorus/flanger/phaser), pitch, combos. Stereo/mono patchável.
- GEQ (16): **31-band**, Flex15, PEQ 8-band (V3), Dugan Automixer (V3). Gain ±15 dB. RTA.
- Premium (8) VCM: Portico 5033 EQ, Portico 5043 comp, U76, Opt-2A, EQ-1A (Pultec), Dynamic EQ, Buss Comp 369, MBC4.

### MATRIX (8), METER, MONITOR/CUE, OSCILLATOR, SETUP/USER SETUP, PATCH (Dante 64×64), CUSTOM FADER BANK.

## Modelo de interação
- **SEL** define o canal em foco; encoders SELECTED CHANNEL + a SELECTED CHANNEL VIEW re-apontam pra ele; tocar strip no OVERVIEW também seleciona.
- **Touch+drag** no EQ (X=freq, Y=gain; Q por encoder/TouchAndTurn); dinâmica arrasta linha de threshold; GR anima.
- **Sends on fader**: aperta master MIX/MATRIX → faders viram sends; ON vira send-ON.
- **DCA**: assign na página, master trima membros (VCA, sem somar), ON muta, Roll-Out espalha.
- **Scene recall**: seleciona + RECALL; Focus/Recall-Safe filtram; Fade Time rampa; faders motorizados se movem.

## Workflow didático
Patch (Dante do stage rack Rio) → HA/+48V/Ø → nomear/cor + Custom Fader Banks → GEQ nos MIX(monitor)/STEREO(PA) → HPF/EQ/Dyn por canal com CUE → monitores via SENDS ON FADER (pre) → DCA/Mute → Effect Rack (reverb/delay) + Premium no vocal → Scenes por música (Fade Time + Recall Safe) → mix no ST/MONO, meter bridge, Preview.

Fonte: CL5/CL3/CL1 Reference Manual + Data Sheet. Ver [[smu-simuladores-fit-fullscreen]], [[smu-plataforma-cursos]].
