# Yamaha LS9 (LS9-16 / LS9-32) — Spec para simulador (Owner's Manual oficial)

## ⚠️ Duas correções críticas (verificadas no manual)
1. **LS9 NÃO tem touchscreen.** LCD 320×240 colorido **não-touch**. Navega-se por **DATA ENTRY** (cursor ↑↓←→, dial, DEC/INC, ENTER) + **DISPLAY ACCESS** keys + encoders SELECTED CHANNEL. (Diferença maior que CL/M7 — modelar entrada como cursor, não toque.)
2. **LS9 NÃO tem DCA.** Só **8 Mute Groups**. `[CHANNEL JOB]` = Channel Link / Mute Group / Recall Safe. NÃO construir DCA.

## Modelos
| | LS9-16 | LS9-32 |
|---|---|---|
| Inputs mono (via camadas) | 32 | 64 |
| Strips físicos | 16 | 32 |
| Total faders | 17 (16+STEREO) | 33 (32+STEREO) |
| Mic/line rear (HA recall) | 16 | 32 |
| OMNI OUT | 8 | 16 |
| Mini-YGDAI | 1 | 2 |
Faders 100mm motorizados. **Sem meter bridge** (metering na tela + LEDs).

## Superfície física
- Por strip: fader, ON, CUE, SEL, LEDs.
- **SELECTED CHANNEL** (à direita do LCD): 8 encoders — HA GAIN, PAN, SELECTED SEND, DYN1(thr), DYN2(thr), EQ Q, EQ FREQ, EQ GAIN — + band keys HIGH/HI-MID/LO-MID/LOW + HOME. Atende o canal com SEL. (HIGH+LOW juntos = reset 4 bandas.)
- **DATA ENTRY**: cursor, dial, DEC/INC, ENTER (edição no LCD).
- **DISPLAY ACCESS** (8): SCENE MEMORY, MONITOR, SETUP, CHANNEL JOB, RECORDER, METER, RACK 1-4, RACK 5-8 + HOME.
- **LAYER** (crucial — poucos faders, muitos canais): [1-16]/[17-32] (ou 1-32/33-64), [MASTER] (MIX 1-16 (+MATRIX/MONO no LS9-32)), [CUSTOM FADER]. No LS9-16 MATRIX/MONO só via CUSTOM.
- USER DEFINED KEYS 12; MIX/MATRIX SELECT 1-16; SCENE STORE/RECALL/UNDO; STEREO master; USB; PHONES.

## Telas (LCD, navegadas)
- **SELECTED CH VIEW**, **OVERVIEW** (8 canais).
- **EQ 4-band**: Freq 20–20k, Gain ±18, Q 0.10–10; LOW bell/shelf/HPF, HIGH bell/shelf/LPF; ATT pre-EQ; HPF 20–600 Hz 12dB/oct.
- **DYN 1&2** (input 2, output 1): GATE/DUCKING/COMP/EXPANDER/COMPANDER-H/S/DE-ESSER. GATE thr −54..0, range −∞/−69..0, atk 0–120, hold, decay. COMP thr −54..0, ratio 1:1–∞(16), atk 0–120, rel, out 0..+18, knee Hard/1–5. COMPANDER ratio 1:1–20, out −18..0, WIDTH 1–90, knee 2. DE-ESSER freq 1k–12.5k. GR meter + curva + threshold.
- **HA**: gain −62..+10, PAD auto, +48V, Ø, HPF.
- **SENDS ON FADER**: 16 MIX + 8 MATRIX; PRE/POST; MIX VARI/FIXED, mono/stereo; SELECTED SEND encoder.
- **MUTE 8** (sem DCA).
- **SCENE 000–300** (300 usuário); guarda HA gain + +48V; faders motorizados; STORE/RECALL/UNDO, Recall Safe, Focus, fade time.
- **RACK (8 slots)**: 1-4 GEQ; 5-8 GEQ ou Effect. GEQ 31-band (±15dB) ou Flex15 (2/rack → 16 GEQ). Até **4 efeitos SPX** simultâneos. Tipos: REV HALL/ROOM/PLATE/STAGE, EARLY REF, GATE/REVERSE REVERB, MONO/STEREO/MOD/LCR DELAY, ECHO, CHORUS, FLANGE, SYMPHONIC, PHASER, AUTOPAN, TREMOLO, PITCH, ROTARY, RING MOD, FILTER, DIST, AMP SIM, FREEZE, M.BAND DYNA/COMP, REV-X HALL/ROOM/PLATE, combos.
- **MATRIX 8** (cada com EQ 4-band + comp + fader), **METER**, **MONITOR/CUE** (oscillator, talkback, dimmer), **SETUP** (user level, VARI/FIXED, word clock), **PATCH**.

## Counts
Inputs 32/64 + 4 ST IN; MIX 16; MATRIX 8; STEREO 1 (LCR); MONO 1; CUE 1; **DCA 0**; MUTE 8; rack 8 (≤4 FX); scenes 300; UDK 12; 44.1/48 kHz; LCD 320×240 non-touch; recorder USB 2-track MP3.

## Interação (state machine)
1. Escolher **LAYER** (ação mais frequente — superfície pequena).
2. **SEL** no strip → foco do SELECTED CHANNEL + tela.
3. Editar por **encoders** (HA/PAN/SEND/DYN/EQ) — modelo "strip analógico", sem toque.
4. Editar no LCD por **cursor + dial + ENTER** (sem eventos de toque).
5. **SENDS ON FADER** por MIX/MATRIX SELECT.
6. **Mute groups** (8, geralmente em USER KEYS). Sem DCA.
7. **Scene recall**: número → RECALL → faders animam; Recall Safe/Focus.

**Diferença didática-chave vs CL/M7**: LCD não-touch + cursor/dial + troca pesada de camadas + sem DCA. Modelar o loop cursor+dial+ENTER é o maior fator de autenticidade. Ver [[cl5]], [[smu-plataforma-cursos]].
