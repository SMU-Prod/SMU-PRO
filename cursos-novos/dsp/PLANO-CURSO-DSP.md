# PLANO DE CURSO — DSP / Processadores de Sistema (Loudspeaker Management)

**Curso:** `pleno-dsp` — escola profissionalizante (portal **aula**)
**Estrutura:** **Módulo = FABRICANTE · Aula = MODELO** (mesma lógica do `pleno-som`)
**Idioma:** PT-BR
**Data:** 2026-07-14

---

## 0. Princípio do curso

> **O simulador É o software real do fabricante.**
> Sem mock-up ilustrativo. UI real + funções reais + áudio real.

O aluno **baixa o software oficial** no PC dele e **treina no simulador do SMU com a
mesma tela**. O sim existe porque o software oficial, sozinho, **não toca áudio**
(ver §1.3) — o SMU entrega a parte que falta: **o som**.

Engenharia do motor: **`SPEC-SIMULADOR-DSP.md`** (nesta mesma pasta).

---

## 1. Achados da pesquisa que moldam o curso

### 1.1 ★ dbx DriveRack VENU360 tem **modo VIRTUAL** (confirmado)

O changelog oficial do **VENU360 Control App v2.0.5** diz, literalmente:

> *"Enabled 'System Setup Wizard' for virtual VENU360"*
> *"Added support for simulating BLU Link and Dante hardware types"*

Ou seja: **o software oficial do VENU360 roda sem hardware nenhum.** O aluno instala,
cria um VENU360 virtual e navega a interface REAL. É o caminho de menor atrito do curso
inteiro — e é por isso que ele é o **modelo nº 1** (§4).

### 1.2 Quase todo software de DSP tem modo offline/design

| Software | Offline sem hardware? | Confirmação |
|---|---|---|
| **dbx VENU360 Control App** | ✅ **device virtual** | changelog v2.0.5 (citado acima) |
| **Q-SYS Designer** | ✅ **Emulate (F6)**, sem licença | help oficial da QSC |
| **Biamp Tesira** | ✅ design offline | *"Once offline, you will be able to make all possible edits"* |
| **BSS Audio Architect** | ✅ *Offline Design ribbon* | help HARMAN (Quick Start Guide) |
| **Lake Controller** | ✅ **Virtual Frames** | manual OM-LC ⚠️ *alcançado só via mirror* |
| **Symetrix Composer** | ⚠️ projeta, **não emula** | *"does not currently offer a feature of simulating logic circuitry actively working"* |
| **Xilica Designer** | ✅ design offline | *"Projects can be designed Offline (no devices connected)"* |
| **Powersoft ArmoníaPlus** | ✅ amps **virtuais** | fluxo Design→Match |
| **Yamaha ProVisionaire Design** | ✅ design offline | *"lets you **virtually place** power amps"* |
| **EV/Dynacord IRIS-Net** | ✅ design offline | *"can be done **offline** … without connection between the PC and the Dx46"* |
| **★ A&H AHM System Manager** | ✅ **o mais completo** | *"Run Offline AHM"* + *"Simulated AHM"*, **persistente**, **Win+Mac** |
| **LD OCS** | ✅ device virtual | *"Add Virtual Device … testing an amp preset offline"* |
| **dbx PA2 Control App** | ⚠️ **[A CONFIRMAR]** | testar ao instalar (§4) |
| **Behringer DCX2496 editor** | ⚠️ **[A CONFIRMAR]** | site Behringer estava em manutenção |
| **RCF RDNet** | ❌ **não serve** | *"All device parameters … are **not** edited before switching to the Online mode"* |

**Plataforma — dado que muda o curso:** **todos são Windows-only**, exceto
**Xilica Designer** e **AHM System Manager** (Win+Mac). O **Tesira nem em VM** roda.
→ **o aluno de Mac/iPad depende do nosso sim.**

### 1.3 ★ O ponto que justifica o curso inteiro

**O Q-SYS Designer em Emulate NÃO processa áudio.** Help oficial da QSC:

> *"In the Emulate (F6) mode you can make initial control settings and process control
> logic… **no audio is processed**."*
> *"During Emulation, there is no audio… passed through the design."*

Isso vale para **praticamente todos** os softwares acima. Pesquisa confirmada nos quatro
grandes de instalação:

| Software | Modo offline | Sem hardware? | **Emula áudio?** |
|---|---|---|---|
| **Q-SYS Designer** | Emulate (F6) | ✅ explícito | ❌ *"You cannot pass audio"* |
| **Audio Architect** | Offline Design ribbon | ✅ | ❌ não documentado |
| **Lake Controller** | Virtual Frames | ✅ | ❌ não documentado |
| **Tesira Software** | Design + Compile | ✅ (compilador deriva o HW) | ❌ |

**Os quatro projetam offline. NENHUM emula áudio.** *(A única exceção conhecida em todo o
levantamento é o **VENU360 virtual** — e mesmo nele o áudio ainda é [A CONFIRMAR].)*

> ## **Conclusão estratégica — é a tese do curso**
> O software oficial ensina **onde ficam os botões**.
> O simulador do SMU ensina **o que cada botão FAZ no som**.
> Os dois juntos = o curso. **Nenhum dos dois sozinho resolve.**
> É exatamente isso que a função-assassina (**solo de saída**) entrega.
>
> Some-se a isso: **Q-SYS Designer e Tesira são só Windows** — e o Tesira **nem em VM
> roda** (*"Virtual machines … are not supported"*). O aluno de Mac/iPad **não tem
> alternativa** a não ser o nosso sim, que roda no navegador.

### 1.4 O dbx PA2 é mais difícil do que parece (confirmado no manual)

Manual oficial do PA2 (5044138-B, pág. 41-42), texto exato:

> *"selectable **Butterworth or Linkwitz-Riley** filter types and filter slopes ranging
> from **6 dB/octave to 48 dB/octave**"*
> `HP TYPE [BW 6, BW 12, BW 18, BW 24, BW 30, BW 36, BW 42, BW 48, LR 12, LR 24, LR 36, LR 48]`

Três consequências:

1. **O PA2 não tem Bessel.** Nada de desenhar um botão "Bessel" nele.
2. **Tem ordens ÍMPARES** (BW 6/18/30/42 e LR 36 = 2× BW18). O `BiquadFilterNode` do
   Web Audio **é sempre 2ª ordem** → essas ordens exigem **`IIRFilterNode`**
   (spec §3.2.1, já resolvido e verificado: −3.010 dB em fc, 6 dB/oct).
3. O manual **já explica BW × LR** ao aluno ("*two Butterworth filters summed → 3 dB
   increase… two Linkwitz-Riley summed → no increase*"). **A aula usa a linguagem do
   fabricante**, não uma paráfrase.

---

## 2. Módulo 1 — FUNDAMENTOS (antes de qualquer marca)

Sem marca. Simuladores genéricos e didáticos. É o alicerce dos 11 módulos seguintes.

| # | Aula | O que o aluno aprende | Simulador |
|---|---|---|---|
| 1.1 | **O que é um DSP e por que ele existe** | onde o processador entra (mesa → **DSP** → amp → caixa); o que ele substituiu (crossover analógico + rack de EQ + delay); por que é o cérebro do PA | diagrama interativo da cadeia; A/B "com DSP × sem DSP" |
| 1.2 | **Crossover: por que dividir o espectro** | por que um driver não faz 20 Hz–20 kHz; grave/médio/agudo; 2, 3, 4 vias; passivo × ativo | escolher fc e ouvir o woofer tentando fazer agudo |
| 1.3 | **Frequências de corte na prática** | onde cortar sub/low/mid/high; por que o corte segue o **driver**, não o gosto; região de cruzamento | mover fc e ouvir; RTA ao vivo |
| 1.4 | **Tipos de filtro: Butterworth, Linkwitz-Riley, Bessel** | BW soma **+3 dB** em fc; LR soma **plano** (−6 dB cada); Bessel = melhor fase; por que LR24 é o padrão do mercado | curva **real** (`getFrequencyResponse`) + soma das bandas; ouvir o bump do BW |
| 1.5 | **Slopes: 6/12/24/48 dB/oct** | slope = ordem do filtro; suave protege menos, íngreme protege mais e mexe mais na fase; por que 24 dB/oct é o *default* | mesma fc, trocar o slope, **ouvir e ver** |
| 1.6 | **Polaridade** | polaridade ≠ fase; por que **LR12 e LR36 pedem inversão** e **LR24/LR48 não**; cancelamento na região de cruzamento | 2 saídas mesma banda, inverter uma → **ouvir sumir** |
| 1.7 | **Alinhamento de tempo (delay)** | por que driver/caixa/torre chegam em tempos diferentes; ms ↔ metros (**343 m/s**); alinhamento de driver × torre de delay | régua de delay + ouvir o comb filter sumir |
| 1.8 | **PEQ × GEQ** | paramétrico (f/G/Q) × gráfico (bandas fixas ISO); bell/shelf/notch; quando usar cada um; por que **EQ não conserta caixa ruim** | PEQ e GEQ lado a lado na mesma fonte |
| 1.9 | **Limiter: proteger o driver** | threshold/attack/release; **peak × RMS**; por que o limiter vem **antes do gain**; por que limiter não é compressor de mix | limiter com medidor de **gain reduction** + ouvir bombear |
| 1.10 | **Estrutura de ganho** | ganho unitário; onde ganhar e onde perder; ruído × clip; por que o **gain depois do limiter não protege nada** | cadeia com medidor em cada ponto |
| 1.11 | **Matriz de roteamento** | quem entra em quem; mono × estéreo; soma; zonas | matriz clicável, ouvir o resultado |
| 1.12 | **Medição: RTA, ruído rosa e SMAART** | RTA × FFT dupla; ruído rosa; o que o RTA **não** mostra (fase); noções de SMAART/Open Sound Meter | RTA 1/3 de oitava + gerador |
| 1.13 | **Segurança do sistema** | ordem de ligar/desligar; mute antes de mexer; **preset errado queima driver**; travar preset com senha; conferir antes do show | checklist + simulação de "o que queima" |

---

## 3. Árvore do curso — Módulo = FABRICANTE, Aula = MODELO

Ordem de ensino: **o que o aluno encontra no Brasil primeiro.**

### Módulo 2 — dbx *(o mais comum no Brasil)*

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 2.1 | **DriveRack PA2** | o processador de PA mais vendido do país; Wizard; AutoEQ; AFS; **BW/LR de 6 a 48 dB/oct**; 2 in / 6 out | **PA2 Control App v1.1.4** (Win/Mac/iOS/Android) | ⚠️ [A CONFIRMAR] |
| 2.2 | **DriveRack VENU360** | o irmão grande: **3 in / 6 out**, 2 AES; PEQ 12 bandas na entrada, 8 na saída; GEQ 31; **delay de torre até 1000 ms/saída**; até **6 vias mono** | **VENU360 Control App v2.0.5** | ✅ **device virtual** |
| 2.3 | **DriveRack 260** | o clássico que ainda está em meio Brasil; herança do 260 no PA2/VENU360 | **DriveWare v2.6.2** (Win) | ⚠️ [A CONFIRMAR] |

**Downloads (oficiais):**
- PA2 Control App: https://dbxpro.com/en-US/softwares/pa2-control-app-v1-1-4-windows
- VENU360 Control App: https://dbxpro.com/en-US/softwares/venu360-control-app-v2-0-5-windows
  (binário direto, 27.1 MB: `https://adn.harmanpro.com/softwares/wares/423_1453092126/VENU360.exe`)
- DriveWare (260): https://dbxpro.com/en-US/softwares/driveware-v2-6-2-windows
- Manual PA2 (usado nesta pesquisa): https://dbxpro.com/en-US/product_documents/driverack_pa2_manual_5044138-apdf

**Specs confirmados (manual PA2 5044138-B):** 2 line in + 1 RTA mic in · 6 line out ·
XOVER full-range/2-way/3-way · `HP/LP TYPE [BW 6…48, LR 12…48]` · fc `16 Hz – 20 kHz` +
`OUT` · `GAIN [-60 dB → +20 dB]` · `POLARITY [NORMAL, INVERTED]` · PEQ **8 bandas**,
`20 Hz–20 kHz`, `-12/+12 dB`, `Q 0.1–15.909`, shelf slope `3–14.295 dB/oct` ·
GEQ 31 · Input Delay **100 ms** · Alignment Delay **10 ms/canal (60 ms total)`.
**[A CONFIRMAR]:** ranges do limiter (threshold/attack/release), resolução do delay.

**Specs confirmados (página oficial VENU360):** 3 line in (2 AES compartilhados) ·
6 line out · RTA mic in com +48V · entrada: comp dbx, GEQ 31, **PEQ 12 bandas** (c/ notch),
AFS, subharmonic, noise gate · saída: **PEQ 8 bandas**, AutoEQ 12 (8 auto + 4 user),
limiting dbx, **tower delay até 1000 ms/saída**, alignment delay, AGC · até 6 vias mono.
**[A CONFIRMAR]:** tipos/slopes do crossover e ranges do limiter (pegar no manual).

---

### Módulo 3 — Behringer

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 3.1 | **Ultradrive PRO DCX2496** | o mais barato e onipresente; 24-bit/96 kHz; **3 in / 6 out**; tem **Bessel** além de BW/LR; navegação só por encoder | editor DCX2496 (**v1.16a**, Win legado, via RS-232) | ⚠️ [A CONFIRMAR] |

- Página do produto: https://www.behringer.com/product.html?modelCode=P0B6H
- ⚠️ O site da Behringer estava **em manutenção** durante a pesquisa → **link direto do
  editor [A CONFIRMAR]**. O editor é legado (Win 2000/XP, RS-232 + adaptador USB), então
  **o sim do SMU vale mais aqui do que em qualquer outro modelo**: o software oficial
  praticamente não roda em PC moderno.
- Specs do DCX2496 (I/O, bandas de PEQ, delay, limiter, tipos de filtro): **[A CONFIRMAR
  no manual oficial]** antes de codar.

---

### Módulo 4 — BSS Audio *(padrão de instalação)*

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 4.1 | **Soundweb London BLU-100** | I/O **fixo 12 in / 8 out**; DSP **aberto** (você desenha arrastando blocos); BLU link 48 ch; DSP 400 MHz | **Audio Architect v2.55.3** | ✅ *Offline Design ribbon* |
| 4.2 | **Soundweb London BLU-160 / BLU-806DA** | I/O **por cards** (4 slots, **16 canais no total**); BLU link 256 ch; 806DA + **Dante 64×64**; DSP 800 MHz | **Audio Architect v2.55.3** | ✅ |

**⚠️ Duas correções de premissa (confirmadas no datasheet oficial do BLU-100):**

1. **"Fixed" × "open architecture" não são opostos na BSS.** O mesmo datasheet diz
   *"offers a **fixed configuration** of 12 inputs and 8 outputs"* **e** *"The BLU-100 has
   **open architecture** which is fully configurable through HiQnet"*. **BLU-100, BLU-160
   e BLU-806DA são TODOS open architecture** — o que é fixo no BLU-100 é o **I/O**, não o
   DSP. Arquitetura fixa de verdade = **BLU-BIB / BOB / DA** (breakouts por DIP switch,
   sem DSP programável). **A aula tem que ensinar isso certo.**
2. **BLU-806 e BLU-806DA são o MESMO produto** — *"Formerly known as BLU-806"*. Não são
   duas aulas.

**Confirmado (Audio Architect Help — objetos de processamento):**
- **Crossover:** *"Butterworth **6, 12, 18, 24 and 48** dB/Octave"* · *"Bessel **12 and 24**"* ·
  *"Linkwitz-Riley **12 and 24**"* · ★ **"Neville Thiele Method **36 and 52** dB/Octave"**
  (tipo que não estava no briefing) · **1–6 bandas** · polaridade por banda · limiter de
  mid-band embutido. ⚠️ **Tem ordens ímpares (BW 6/18) → `IIRFilterNode`** (spec §3.2.1).
- **PEQ:** **máx. 24 bandas** · bell / high-pass shelving / low-pass shelving.
- **Delay:** 1–16 canais · unidades **ms / metros / pés+pol / frames**.
- **Limiter:** proteção **de dois estágios** (1º ballistics lentas p/ proteção de longo
  prazo; 2º rápidas contra sobre-excursão) — Threshold/Attack/Release.
- **Source Matrix:** **2–128 entradas × 2–128 saídas**.
- **Sample rate 48 kHz** confirmado (BLU link "256 channel (48kHz)").

**⚠️ [A CONFIRMAR] — a BSS NÃO publica os ranges numéricos** (freq/ganho/Q do PEQ, ranges
do limiter, delay máximo, peak×RMS), ao contrário de QSC e Biamp. Para um sim fiel isso
vira **medição no próprio Audio Architect** (ou no equipamento). **Bloqueia o Módulo 4.**

- Audio Architect v2.55.3 (13/mai/2024, Win 7SP1/8.1/10, **518 MB**):
  https://audioarchitect.harmanpro.com/en-US/softwares/hiqnet-audio-architect-v2-55-3-windows-7-sp1-8-1-10
- London Architect v6.02.R3 (legado): https://bssaudio.com/en-US/softwares/hiqnet-london-architect-v6-02-r3-windows
- Datasheet BLU-100: https://adn.harmanpro.com/product_documents/documents/1448_1506524707/BLU-100_Data_Sheet_18-0717-B_original.pdf
- ⚠️ **Nota de mercado:** a partir do **Soundweb OMNI**, a HARMAN migrou para a suíte
  **AVX** (2024). Audio Architect segue para a linha BLU. Mencionar na aula.
- ⚠️ **Offline = projetar, não ouvir.** O *Offline Design ribbon* é confirmado
  (*"Click the **Go Online** button… **At this point** you should have all the devices…
  physically connected"*), mas **não há emulação de áudio documentada**.

---

### Módulo 5 — Lake / Lab.gruppen *(padrão de turnê)*

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 5.1 | **Lake LM26 / LM44** | o processador de turnê; **Mesa EQ** assimétrico; **2 módulos Lake**; Iso-Float | **Lake Controller** | ✅ **Virtual Frames** |
| 5.2 | **Lab.gruppen PLM+ / D Series** | amplificador **com** Lake dentro (**4 módulos**); RPM; **LimiterMax peak+RMS**; failover p/ analógico | **Lake Controller** | ✅ |

**Confirmado (labgruppen.com/en/lake-processing):**
- ★ **Mesa EQ** — o diferencial que vende o Lake, e **não é um PEQ comum**:
  *"the Mesa EQ offers **asymmetrical filtering, with the ability to separate the sides of
  a parametric section**, change center frequencies, and independently adjust slopes"*,
  para *"match the **asymmetrical** responses of loudspeakers"*. **Cada lado da campana é
  independente** → o motor precisa de um bloco próprio, não dá para reusar o PEQ.
- **Crossovers clássicos:** *"**Bessel, Butterworth and Linkwitz-Riley** … selectable
  **up to 48 dB per octave**"*.
- **Crossovers linear-phase:** *"capable of transition slopes **exceeding 180 dB per
  octave**"* → **impossível com biquad**; exigiria FIR/convolução. **Fase 2, no mínimo.**
- **LimiterMax:** *"peak and **RMS** limiters"* → RMS exige `AudioWorklet` (spec §5.5).
  **Não prometer RMS fiel na fase 1.**
- **Módulos:** LM Series = *"**two** full-featured Lake Processor contour modules"*;
  PLM/D Series = *"**four** full-featured Lake modules"*.

**⚠️ Lake é a marca com MAIS lacunas — e não por falta de busca.** O CDN oficial
(`mediadl.musictribe.com`) está inacessível e o site é uma SPA que devolve 404 no servidor.
- **I/O do LM26 / LM44: NÃO CONFIRMADO.** (O nome sugere 2 in/6 out e 4 in/4 out, e um
  mirror do manual diz isso — **mas não é fonte oficial. Não codar em cima disso.**)
- **Status do LM26/LM44: NÃO CONFIRMADO** — sumiram do catálogo atual (73 produtos, nenhum
  LM). Pode ser migração para a marca Lake ou descontinuação.
- **Sample rate, bit depth, latência, delay máximo: NÃO CONFIRMADO** para todos os Lake.
- **"Ideal Graphic EQ": NÃO CONFIRMADO** em fonte oficial acessível — só apareceu em
  mirrors. **Não tratar como verificado.**
- **URL de download do Lake Controller: NÃO CONFIRMADO** (a página devolve 404). Rota:
  labgruppen.com → Downloads.
- **Virtual Frames** (*"create a complete system configuration **offline**"*) está no
  *Lake Controller Operation Manual* (**item OM-LC, documento oficial**) — mas só foi
  alcançado via **mirror de terceiro**. Conteúdo oficial, host não verificado.

> **Ação:** ao instalar o Lake Controller, **baixar e arquivar o OM-LC localmente**
> enquanto está acessível. É de onde sai quase todo o Módulo 5.

- Lake Processing: https://www.labgruppen.com/lake-processing.html
- Manual OM-LC (mirror — arquivar): https://www.eviaudio.fr/wp-content/uploads/2020/04/Lake_Controller_Operation_Manual.pdf
- Confirmados: PLM 20K44 SP = 20.000 W/4 ch · D 40:4L = 4.000 W/4 ch · D 120:4L = 12.000 W/4 ch.

---

### Módulo 6 — QSC

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 6.1 | **Q-SYS Core (Nano / 8 Flex / 110f)** | plataforma sobre **TI padrão**; desenhar o DSP em blocos; UCI; **48 kHz / 32-bit float** | **Q-SYS Designer v10.4** | ✅ **Emulate (F6)** — ⚠️ **sem áudio** |
| 6.2 | **CX-Q (amplificadores de rede)** | DSP dentro do amplificador; Intrinsic Correction; presets de caixa | **Q-SYS Designer** | ✅ |

**⚠️ Correção importante: o CXD está FORA DE LINHA.** Página oficial de descontinuados:
**CXD4.2/4.3/4.5 → *"June 2022 / End of Service"*** e **toda a família CXD-Q → *"August
2020 / End of Service"***. **Não existe "CXD-Q atual".** O sucessor de rede é a série
**CX-Q** → a Aula 6.2 mira **CX-Q**, não CXD. *(O CXD pode virar nota histórica.)*

**Confirmado (help oficial — a QSC publica TODOS os ranges, o que facilita muito o sim):**
- **Plataforma:** *"The only sample rate currently supported is **48 kHz**"* ·
  *"Audio samples are in **32-bit floating point**"*.
- **Crossover:** **Butterworth, Linkwitz-Riley, Bessel-Thomson, ★ Chebyshev** ·
  **6 a 96 dB/oct** (16 passos de 6 em 6 → **inclui todas as ordens ímpares**) ·
  **2 a 6 vias** · **10 Hz–20 kHz** · ganho/banda **−100 a +20 dB** · Invert e Mute/banda.
- **PEQ:** **1–32 bandas** · **10–20.000 Hz** · ganho **−18 a +18 dB** · master **±20 dB** ·
  **bandwidth 0.010–4.00 oitavas** (default 1.00) · Parametric / Low-shelf / High-shelf ·
  Bypass / **Invert** / Mute · 2–256 canais.
- **Delay:** Max Delay **0.001 a 60 s** · **0–100 ms por tap** · até **256 canais**,
  **512 taps/canal** · arredonda ao sample, com modo **fractional delay** (interpolação
  sub-sample — casa com o `DelayNode`, spec §5.4).
- **Peak Limiter:** Threshold **−60 a +20 dB** · Attack **0.0001–100 s** ·
  Release **0.010–10 s** · Detector **0.0001–100 s** · gain in/out **±20 dB**.
  ⚠️ Attack até 100 s **estoura o range do `DynamicsCompressorNode`** (0–1 s, spec §5.5)
  → **clamp + nota honesta na aula**.
- **Core Nano** = **zero I/O analógico**; **8 Flex** = 8 Flex I/O; **110f** = 8 in + 8 out
  + 8 Flex.

⚠️ **Armadilha de revisão (relevante p/ a pele):** o **Core 110f v2** (fabricado após
**out/2022**) **perdeu os 16×16 GPIO, o display OLED frontal e as 2 USB-A frontais**.
O sim precisa **escolher e declarar qual revisão replica**.

⚠️ **Q-SYS Designer é só Windows** (11 Pro/Home 21H2 x64, 16 GB RAM recomendado). Para Mac,
a QSC só homologa **Parallels Desktop**. Dizer isso na aula antes do aluno tentar.
✔ **Licença não é necessária para o Emulate:** *"Licensed features can always be run in
Emulate Mode"* → o aluno roda de graça.

- Download: https://www.qsys.com/resources/software-and-firmware/q-sys-designer-software/
- Emulate Mode: https://help.qsys.com/Content/Q-Sys_Designer/003_Emulate_Mode.htm
- ★ **A aula tem que dizer isso na cara do aluno:** *"o Emulate te deixa desenhar e testar
  a lógica, mas — **palavras da QSC** — ***'You cannot pass audio'***. É exatamente aqui
  que o simulador do SMU entra."* Ver §1.3.
- ℹ️ Domínio mudou: `qsc.com` → `qscaudio.com` → **`qsys.com`**; `q-syshelp.qsc.com` →
  **`help.qsys.com`**. Atualizar qualquer link antigo.

---

### Módulo 7 — Biamp

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 7.1 | **TesiraFORTÉ AVB / X** | o caixa-fechada de instalação (**12 in / 8 out**); AVB 128×128; AEC | **Tesira Software v5.7.0** | ✅ *"all possible edits"* |
| 7.2 | **Tesira SERVER-IO** | modular (até **3 cards DSP-2**, **48 canais** de I/O); o **compilador** dimensiona o hardware | **Tesira Software v5.7.0** | ✅ |

**★ Confirmado (Biamp Help) — e ISTO VALIDA A MATEMÁTICA DA NOSSA SPEC:**

> *"For the **Butterworth and Bessel** types, the cutoff frequency represents the **-3dB**
> point"* · *"For the **Linkwitz-Riley** type … the **-6dB** point"*

É **exatamente** o que medimos fora do navegador (spec §3.4: BW = −3.01 dB, LR = −6.02 dB).
**Confirmação independente, de fabricante, da matemática do motor.**

- **Crossover:** `BUTTERWORTH`, `LINKWITZ_RILEY`, `BESSEL` · **BW e Bessel: 6, 12, 18, 24,
  30, 36, 42, 48 dB/oct** · **LR: 12, 24, 36, 48** · **20–20.000 Hz** · **2/3/4 vias** ·
  polaridade (`outputInvert`) e mute por banda.
  ⚠️ Ordens ímpares **e** Bessel → precisa de **`IIRFilterNode`** (spec §3.2.1) **e** do
  **Bessel resolvido** (spec §3.3, hoje **PENDENTE**).
- **PEQ:** **1–16 bandas** · **20,0–20.000,0 Hz** · Max Gain **0 a +15 dB**, Min Gain
  **−30 a 0 dB** (★ **assimétrico** — não é ±15) · **bandwidth 0,01–4,0 oitavas**.
- **Delay:** **até 2000 ms** por bloco · *"Each Tesira DSP-2 card has a maximum of
  **150 seconds** of delay memory"* · unidades ms **ou** cm/m/in/ft · até 32 canais.
- **Peak Limiter:** Threshold **−20 a +28 dB** · Release **1–10.000 ms** ·
  ★ **NÃO tem Attack** — *"The available timing control is limited to release time only"*.
  → a pele **não pode desenhar** um Attack que o Tesira não tem.
- **Plataforma:** Dante **48 kHz / 32-bit**; *"(Tesira does **not** offer 96kHz sample rate
  support.)"*

⚠️ **Correções de nomenclatura/status (confirmadas):**
- **"TesiraFORTÉ X 400M" não existe.** A família é **X 400 / X 800 / X 1600**.
- **TesiraFORTÉ VI e TI estão descontinuados** (*"The **Use discontinued devices** setting
  must be checked…"*).
- **Tesira Software é só Windows** (mín. Win 10 1903) e — ⚠️ ao contrário do Q-SYS —
  *"**Virtual machines or tablets running Windows are not supported**"*. **Não adianta
  mandar o aluno de Mac rodar em VM.** Mais um ponto a favor do sim do SMU.

- Download v5.7.0: https://downloads.biamp.com/assets/docs/default-source/sw-fw/tesira-software-5-7-0.exe
- Índice: https://www.biamp.com/support/downloads · https://support.biamp.com/Tesira/Software-Firmware
- ⚠️ **[A CONFIRMAR]:** tipos de filtro por banda do PEQ; resolução do delay; tamanho máx.
  da matriz; existência de limiter RMS dedicado.
- ⚠️ **Offline = projetar, não ouvir.** O **compilador** *"analyses and validates the
  layout, calculates I/O and DSP processing requirements"* e **deriva o hardware a partir
  do projeto** — mas **não emula áudio**.

---

### Módulo 8 — Symetrix

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 8.1 | **Radius NX / Prism** | DSP aberto de instalação; **Super Matrix 128×128**; SymVue | **Composer 9.0.3** | ⚠️ design sim, **emulação NÃO** |
| 8.2 | **Edge / Solus NX** | linhas menores; escolher o tamanho certo | **Composer** | ⚠️ idem |

**Confirmado:** Radius NX 4×4 / 12×8 (SC587 500 MHz, **Super Matrix 128×128**, **174 s** de
delay, latência **1,04 ms**) · Prism 4×4/8×8/12×12/16×16 (SHARC 21489 400 MHz, **24-bit /
48 kHz + 40-bit float**, latência **0,88 ms**) · Edge (4 slots, até 16 ch locais + Dante
64×64) · **Solus NX 4×4/8×8/16×8 — sem Dante**.

⚠️ **Citação oficial que reforça a tese do curso (§1.3):**
> *"Composer **does not currently offer a feature of simulating** logic circuitry actively
> working."*

Ou seja: **nem a lógica** o Composer emula — menos ainda o áudio.

⚠️ **[A CONFIRMAR]:** bandas de PEQ, slopes e ranges dos módulos DSP — **vivem só no help
interno do Composer**, não no site. Levantar **com o software instalado**.

- Download: https://www.symetrix.co/software-downloads · produto: https://www.symetrix.co/composer
- Composer inclui o **SymVue**; firmware vem no pacote. **Só Windows.**

---

### Módulo 9 — Xilica

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 9.1 | **Solaro QR1 / FR1** | a linha **atual**; Dante; 48 kHz / **40-bit float** | **Xilica Designer 4.12** (Win/Mac) | ✅ *"Projects can be designed Offline"* |
| 9.2 | **Neutrino** *(legado)* | o que ainda está em campo | **Xilica Designer ≤ 4.9** ⚠️ | ✅ |

**Confirmado (manual Solaro):** 48 kHz, **40-bit float**, conversores 32-bit ·
**PEQ 8 bandas, −30/+15 dB** (★ assimétrico), **bandwidth 0,02–4 oct** — ★ **Q numérico
não é usado**, é largura de banda · **GEQ 10/15/31** · **XOver: Butterworth /
Linkwitz-Riley / Bessel, 6–48 dB/oct** (→ ímpares + Bessel) · **delay máx. 2 s** ·
**limiter com ratio FIXO em 40:1** (★ acima do teto de 20:1 do `DynamicsCompressorNode`
— spec §5.5) · Gain **−100/+15 dB**.

⚠️ **Correções confirmadas:**
- **Xilica Designer NÃO é browser-based** (era a premissa do briefing). É **desktop
  instalável**: `XilicaDesignerSetup_4.12.0.zip` (Win) / `.pkg` (macOS). ✔ Cross-platform,
  ❌ browser.
- **Neutrino e XP estão EOL** (lista oficial). **XP usa `XConsole`, não o Designer.**
- **Armadilha de versão:** a partir da **4.9.1** o suporte a **Neutrino e Uno foi REMOVIDO**
  → para Neutrino é obrigatório **4.9 ou anterior**. Isso vira aula.
- ✔ Citação oficial: *"Projects can be designed **Offline** (no devices connected) and the
  design can be loaded to your devices at a later time."*

- Download: https://support.xilica.com/en/articles/3947394

---

### Módulo 10 — Powersoft

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 10.1 | **Quattrocanali / Duecanali / Ottocanali / Mezzo** | DSP dentro do amplificador; o processador **sumiu** dentro do amp | **ArmoníaPlus 2.9.2** | ✅ amps **virtuais** |
| 10.2 | **X4 / X8** | topo de linha; **crossover FIR linear-phase**; limiters TruePower | **ArmoníaPlus** | ✅ |

**Confirmado:**
- **X4/X8:** crossovers **linear phase (FIR), hybrid (FIR-IIR), Butterworth, LR, Bessel,
  6→48 dB/oct** · PEQ IIR **peaking / shelving / all-pass / band-pass / band-stop** ·
  **input delay 2 s, output delay 100 ms** · limiters **TruePower / RMS voltage /
  RMS current + Peak** · **matriz 4×4**.
- **Quattrocanali / Ottocanali / Duecanali / Mezzo:** 24-bit @ 48 kHz, **32-bit float**,
  **latência fixa 2,5 ms**, delay 100 ms.
- ArmoníaPlus **2.9.2.120, Windows x64**. Fluxo **Design → Match**: amps **virtuais**
  (borda azul) → match → *"push your design to the devices"*.

⚠️ **Limites do motor (spec §5.5 / §3.3.2):** **FIR linear-phase** e **TruePower/RMS**
estão **fora do alcance do biquad + `DynamicsCompressorNode`**. O Módulo 10 é **fase 2**,
ou entra com **escopo reduzido e declarado** (só o caminho IIR).
⚠️ **Não confundir:** `ArmoniaPlus-2.9.2.120_**offline_setup**_x64.exe` é **instalador
offline** (baixa tudo de uma vez) — **não** é "modo de design offline". Coisas diferentes.

- Download: https://www.powersoft.com/en/download/software/armoniaplus

---

### Módulo 11 — Yamaha

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 11.1 | **DME7** | a plataforma atual; arquitetura aberta; ★ **Dante-only** | **ProVisionaire Design v2.0.0+** (Win 10/11) | ✅ *"virtually place"* |
| 11.2 | **MRX7-D** | DSP aberto: **8×8 analógico** + Dante 64×64 + YDIF 16 | **ProVisionaire Design** | ✅ |
| 11.3 | **DME64N / DME24N** *(descontinuados)* | o clássico ainda em campo; 96 kHz, **sem Dante** | **DME Designer** | ⚠️ [A CONFIRMAR] |

**Confirmado:**
- ★ **O DME7 NÃO TEM I/O ANALÓGICO — é Dante-only** (64×64 expansível a 256×256) + USB-C.
  Isso muda a aula inteira: **não existe "plugar o XLR no DME7"**. A pele tem que refletir
  isso.
- **MRX7-D:** 8×8 analógico + Dante 64×64 + YDIF 16 · 48/44,1 kHz.
- **Filtros:** `Thru / AdjustGc / Butterworth / Bessel / Linkwitz` ·
  slopes **6 / 12 / 18 / 24 / 36 / 48** — ★ **não existe 30 nem 42** (≠ dbx e Biamp).
  Não desenhar o que a Yamaha não tem.
- **GEQ 7 / 15 / 31** · **Speaker Processor** 1/2/3/4 vias + **APF** + **Horn EQ** + limiter.
- **MTX3 não tem Dante; MTX5-D tem 16×16.**
- ✔ Offline confirmado, seção **"2.2. If you cannot connect the device(s) to the computer"**:
  *"This method lets you **virtually place** power amps, and then synchronize with the power
  amps later."*

⚠️ **[A CONFIRMAR]:** freq/ganho/Q/delay máx. — **a Yamaha simplesmente não publica esses
ranges** (conferido em 2 manuais). Levantar **dentro do ProVisionaire Design instalado**.

- ProVisionaire Design: https://usa.yamaha.com/support/updates/provisionaire_design.html
- DME7: https://usa.yamaha.com/products/proaudio/processors/dme7/downloads.html
- MRX7-D: https://usa.yamaha.com/products/proaudio/processors/mrx7-d/downloads.html
- ✔ Sinergia: o aluno já viu Yamaha nas mesas (`pleno-som`, Mód. 8-13).

---

### Módulo 12 — Crown

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 12.1 | **DriveCore Install (DCi) Network / DA** | DSP no amp; BLU link e Dante; **mesma família HARMAN do dbx/BSS** | **Audio Architect v2.55.3** | ✅ |
| 12.2 | **CDi DriveCore** | 96 kHz / 32-bit float; **FIR 1024 taps** | **Audio Architect** | ✅ |

**⚠️ Confirmado — os números MUDAM entre famílias. Não generalizar "Crown":**

| | DCi Network | DCi DA | CDi DriveCore |
|---|---|---|---|
| Rede | BLU link | **Dante 8×8** | — |
| Sample rate | **NÃO CONFIRMADO** | **48 kHz** | **96 kHz / 32-bit float** |
| Input delay | 2 s | 2 s | **1 s** |
| Crossover LR | **24 / 36 / 48** | — | **desde 12** |
| PEQ | **±24 dB** | — | **±20 dB** |
| FIR | — | — | **1024 taps** |

⚠️ **Correções de terminologia (confirmadas):**
- **"PeakX" é terminologia dbx/DriveRack, NÃO Crown.** Na Crown o limiter é **LevelMAX™**.
- **"DCi DA-Q" não existe.** As famílias oficiais são **Analog, Network, Network Display, DA**.
- ✔ **System Architect é oficialmente legado** → usar **Audio Architect**. *(Estava
  [A CONFIRMAR] no rascunho — agora está resolvido.)*

- Audio Architect: https://audioarchitect.harmanpro.com/en-US

---

### Módulo 13 — Electro-Voice / Dynacord

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 13.1 | **EV Dx46 / Dynacord DSP 600** *(gêmeos)* | processador clássico de PA; **48-bit double precision**; FIR 512 taps | **IRIS-Net** | ✅ **citação literal** |
| 13.2 | **Dynacord DSP 260** | o irmão menor | ⚠️ **"DSP 260 Editor"** — **não** IRIS-Net | [A CONFIRMAR] |
| 13.3 | **NetMax N8000** | matriz grande; 32 ch; CobraNet/Dante | **IRIS-Net** | ✅ |

**⚠️ ERRO CORRIGIDO:** **DC-One e DSP 260 NÃO usam IRIS-Net** — usam **"DC-One Editor"** e
**"DSP 260 Editor"**. Tratá-los como IRIS-Net é erro (estava errado no rascunho deste plano).

**★ Melhor documentado de todo o levantamento — Dx46 / DSP 600 (gêmeos), 100% confirmado:**
48 kHz / 24-bit / **48-bit double precision** · **PEQ in 10 bandas + GEQ 31** ·
**PEQ out 6 bandas + Allpass** · **XOver: `Thru, 6dB, 12dB/Q 0,5–2,0, Bessel 12/18/24,
Butterworth 12/18/24, LR 12 ou 24`** (★ **LR não tem 18**) · **FIR 512 taps** ·
limiter **look-ahead peak + RMS**, thr **−9/+21 dBu**, attack **0–50 ms**, release
**10–1000 ms** · Level **−100/+6 dB** · **matriz 2×6**.

**DSP 260 (manual extraído):** 48 kHz/24-bit/**32-bit float**, 111 dB · **PEQ in 9 bandas**
+ GEQ 31 · **PEQ out 5 bandas** · mesmo XOver do Dx46 · ★ **input delay −200/+700 ms,
output −200/+680 ms** (delay **negativo** — vira aula) · limiter thr −9/+21 dBu, release
50–300 ms.

**N8000:** 4 slots × 8 = **32 ch**, CobraNet/Dante, 48 kHz, **48-bit processing**.

✔ **Offline — a citação mais limpa de todo o levantamento** (Dx46 Manual V1.1 §2.3 p.10,
idêntica no DSP 600):
> *"The configuration of the Dx46 can be done **offline** (i.e. **without connection between
> the PC and the Dx46**) on the PC."*

⚠️ **Toda a linha EV/Dynacord deste módulo está DESCONTINUADA** → o módulo é **legado
consciente** (o parque instalado no Brasil é enorme). A linha nova (IPX/TGX) usa
**SONICUE**: https://products.dynacord.com/na/en/software
🐞 **Curiosidade real p/ a aula:** o manual oficial **se contradiz** — input delay
*"2 seconds"* (inglês) × *"1 Sekunde"* (alemão), **no Dx46 e no DSP 600**. Bom exemplo de
"por que a gente mede em vez de confiar".

- IRIS-Net: https://products.electrovoice.com/na/en/iris-net · https://products.dynacord.com/ap/en/iris-net/

---

### Módulo 14 — Allen & Heath ★ *(promovido: era "avaliar", virou prioridade)*

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 14.1 | **AHM-16 / 32 / 64** | DSP de instalação; core **FPGA 96 kHz**; sinergia direta com o **SQ** que ele já viu no `pleno-som` | **AHM System Manager** (Win **e Mac**) | ✅ **"Run Offline AHM" + "Simulated AHM"** |

**Por que subiu para módulo próprio — é o 🥇 da pesquisa depois do dbx:**
- ★ **O offline mais completo de TODOS os fabricantes levantados:** *"Run Offline AHM"* +
  *"Simulated AHM"*, com **programação persistente**.
- ★ **Único com Mac nativo** (todos os outros são Windows-only; o Tesira nem em VM roda).
- **Grátis** e com **datasheet completo publicado** (raro): PEQ **8 bandas ±15 dB, Q
  0,50–6,00** · **GEQ 28** · **XOver 2/3/4 vias assimétrico, BW 12/18/24, LR 12/24** ·
  **delay 683 ms** · core **FPGA 96 kHz**.
- **A&H é pão-com-manteiga no Brasil** e o aluno **já conhece a marca** do módulo de mesas.

⚠️ **Correção:** o software chama-se **AHM System Manager** — *"AHM Director" não existe*
("Director" é da linha **dLive**).

---

### Módulo 15 — LD Systems *(entrada de mercado)*

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 15.1 | **DSP 45 K** | ⚠️ é **amplificador 4 canais COM DSP**, não processador standalone | **LD OCS** | ✅ *"Add Virtual Device"* |

**Confirmado:** PEQ **16 bandas (Q 0,2–20)** · XOver **BW/LR/Bessel 6–48 dB/oct** · FIR ·
*"Add Virtual Device … testing an amp preset **offline**"*. Contra: **Windows-only**.
Distribuição real no Brasil + preço de entrada → **vale a aula**.

---

### Módulo 16 — Klark Teknik ⚠️ *(pesquisa NÃO concluída)*

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 16.1 | **DN9848 / DN9848E** | processador clássico de PA britânico | **[A CONFIRMAR]** | **[A CONFIRMAR]** |
| 16.2 | **Helix DN9340 / DN9344** | EQ digital + processamento | **[A CONFIRMAR]** | **[A CONFIRMAR]** |

### Módulo 17 — Ashly ⚠️ *(pesquisa NÃO concluída)*

| Aula | Modelo | O que aprende | Software oficial | Offline? |
|---|---|---|---|---|
| 17.1 | **Protea ne24.24M / 4.8SP** | Protea = padrão de instalação americano | **Protea software** | **[A CONFIRMAR]** |
| 17.2 | **Pema** | amp + DSP integrado | **[A CONFIRMAR]** | **[A CONFIRMAR]** |

> ⚠️ **Declaração honesta de cobertura:** a pesquisa de **Klark Teknik** e **Ashly**
> **não foi concluída** dentro desta rodada — ao contrário das demais marcas, **nenhum
> dado destes dois módulos foi confirmado em fonte oficial**. Eles estão aqui porque
> constam do escopo pedido, **não porque foram verificados**. São os **últimos da fila**
> (Klark/Ashly têm presença menor no Brasil que dbx/A&H/BSS) e **precisam de uma rodada
> de pesquisa própria** antes de virarem aula. **Nada aqui pode virar código.**

---

### Marcas AVALIADAS E CORTADAS *(com o porquê — para não reabrir a discussão)*

| Marca | Veredito | Motivo confirmado |
|---|---|---|
| **RCF RDNet** | ⚠️ **entra só como design de array**, não como DSP | *"All device parameters (such as equalizers, gains, delays, etc.) are **not** edited before switching to the Online mode"* + exige controller CONTROL 2/8 |
| **RCF DX 2006 / 4008** | 🔴 **cortar** | badge **ARCHIVED** oficial; XLink RS-232 de 2018 |
| **RCF "TDX"** | 🔴 **não existe** | zero ocorrências em rcf.it — **"TDx" é da SPL**, outra marca. Era erro do briefing |
| **Peavey MediaMatrix NION / nWare** | 🔴 **cortar** | nicho de install corporativo; nX/nE descontinuados; sucedido pelo **SCION**; no Brasil quem domina é Q-SYS/Tesira/BSS |
| **Allen & Heath iLive** | 🔴 **cortar** | fora de produção desde 2015; editor congelado |

---

## 4. Próximos passos

### 4.1 Qual modelo construir PRIMEIRO

> ## ★ **dbx DriveRack VENU360** — Módulo 2, Aula 2.2

**Por quê (nesta ordem de peso):**

1. **É o único software oficial com device VIRTUAL confirmado.** *"Enabled 'System Setup
   Wizard' for **virtual VENU360**"*. Instala e roda **sem hardware** → conseguimos
   capturar **todas** as telas reais sem comprar um VENU360.
2. **Gratuito, 27.1 MB, download direto**, Win/Mac/iOS/Android.
3. **dbx é a marca mais comum no Brasil** — máximo de alunos atendidos no primeiro tiro.
4. **Cobre o curso inteiro de uma vez:** 3 in / 6 out, crossover até 6 vias, PEQ in e out,
   GEQ 31, delay de torre até 1000 ms, limiter, AutoEQ, RTA. Um modelo exercita **todos**
   os blocos do motor.
5. **O PA2 nasce quase de graça depois:** mesma família, mesmo motor, pele menor.

**Por que NÃO começar pelo PA2** (mesmo sendo o mais vendido): o modo offline do PA2
Control App é **[A CONFIRMAR]**, e o PA2 exige **ordens ímpares** (BW6/18/30/42, LR36 →
`IIRFilterNode`, spec §3.2.1) — mais risco no primeiro sim. **PA2 = segundo**, aproveitando
o motor já validado. *(Se o teste de instalação do §4.2 mostrar que o PA2 Control App também
roda virtual, a ordem pode inverter — mas o VENU360 continua cobrindo mais blocos.)*

**Os dois vice-campeões considerados** (registrando para não reabrir a discussão):

- **Allen & Heath AHM-64** — tem o **melhor modo offline de todos** (*"Run Offline AHM"* +
  *"Simulated AHM"*, persistente, **Win e Mac**, datasheet completo publicado). **Perde
  só no alcance**: no Brasil o dbx está em muito mais palco. É o **3º da fila**, e é o
  **melhor plano B** se o VENU360 virtual decepcionar na instalação.
- **Q-SYS Designer** — Emulate documentado e sem licença, ranges todos publicados. Mas é
  **AV/instalação corporativa**, não o PA que o aluno do SMU opera. **Fica no Módulo 6.**

### 4.2 ★ O que o cliente precisa baixar/instalar

*(exatamente como ele fez com o zip do Yamaha CL Editor → `simuladores/som/_ref-cl-editor/`)*

**PRIORIDADE 1 — para o primeiro sim:**

| # | O quê | Link |
|---|---|---|
| 1 | **VENU360 Control App v2.0.5 (Windows)** — 27.1 MB | https://dbxpro.com/en-US/softwares/venu360-control-app-v2-0-5-windows |
| 2 | **Manual do VENU360** (PDF) — para os ranges do crossover/limiter que faltam | https://dbxpro.com/en-US/support_downloads/product/driverack-venu360 |

**O que precisamos que ele faça depois de instalar:**

1. Abrir o app e criar um **VENU360 virtual** (System Setup Wizard, sem hardware).
2. **Print de tela cheia (PNG, 100% de zoom, sem redimensionar)** de cada tela:
   - Home / Signal Path (o fluxograma) · Wizard · **Crossover** (★ o mais importante:
     precisamos ver a **lista exata de tipos/slopes** e o desenho da curva) ·
     PEQ da entrada (12 bandas) · PEQ da saída (8 bandas) · GEQ 31 · Limiter ·
     Delay (alinhamento **e** torre) · AutoEQ · RTA · AFS · Compressor · Matriz/roteamento ·
     menu de saídas.
3. Jogar tudo em **`D:\Show smu producoes\SMU-PRO\simuladores\som\_ref-venu360\`**
   (mesma convenção do `_ref-cl-editor`).
4. Se der, **um vídeo curto de tela** mexendo no crossover → mostra as **animações e
   estados** que o print não pega.

**PRIORIDADE 2 — para os módulos seguintes** (todos gratuitos, todos com offline):

| Software | Link | Nota |
|---|---|---|
| dbx PA2 Control App v1.1.4 | https://dbxpro.com/en-US/softwares/pa2-control-app-v1-1-4-windows | Módulo 2 |
| **★ A&H AHM System Manager** | allen-heath.com → Software | **Win+Mac**, offline persistente |
| Q-SYS Designer v10.4 | https://www.qsys.com/resources/software-and-firmware/q-sys-designer-software/ | Win only; Emulate sem licença |
| BSS Audio Architect v2.55.3 (518 MB) | https://audioarchitect.harmanpro.com/en-US/softwares/hiqnet-audio-architect-v2-55-3-windows-7-sp1-8-1-10 | **serve Crown também** |
| Lake Controller | labgruppen.com → Downloads ⚠️ | **URL [A CONFIRMAR]** — página 404 |
| **★ Lake OM-LC (manual)** | https://www.eviaudio.fr/wp-content/uploads/2020/04/Lake_Controller_Operation_Manual.pdf | ⚠️ **arquivar** — CDN oficial fora do ar |
| Biamp Tesira v5.7.0 | https://downloads.biamp.com/assets/docs/default-source/sw-fw/tesira-software-5-7-0.exe | Win only, **nem VM** |
| Symetrix Composer 9.0.3 | https://www.symetrix.co/software-downloads | ranges só no help interno |
| Xilica Designer 4.12 | https://support.xilica.com/en/articles/3947394 | **Win+Mac**; Neutrino → ≤4.9 |
| Powersoft ArmoníaPlus 2.9.2 | https://www.powersoft.com/en/download/software/armoniaplus | Win x64 |
| Yamaha ProVisionaire Design | https://usa.yamaha.com/support/updates/provisionaire_design.html | ranges só no software |
| EV/Dynacord IRIS-Net | https://products.electrovoice.com/na/en/iris-net | linha nova → SONICUE |

### 4.3 Ordem de trabalho

1. **Motor** `dsp-engine.js` + `verify-dsp-math.mjs` (spec §10) — **independe de print
   nenhum, pode começar já.**
2. Cliente instala o VENU360 Control App e manda os prints (§4.2).
3. **Pele do VENU360** + `MODEL` a partir dos prints e do manual.
4. Verificação V1–V14 (spec §8), com destaque para **V5 = a função-assassina**.
5. Congelar o motor → **PA2** (só pele + `MODEL` + ligar o caminho `IIRFilterNode`).
6. Daí em diante: **1 modelo = 1 pele**.

### 4.4 Pendências que bloqueiam código (não adivinhar)

- **VENU360:** tipos e slopes do crossover; ranges do limiter → **manual**.
- **PA2:** ranges do limiter (threshold/attack/release); resolução do delay → **manual**.
- **DCX2496:** link do editor + specs completos → **site Behringer** (estava em manutenção).
- **Bessel:** fator de escala de frequência → **PENDENTE** na spec §3.3. O PA2 **não tem**
  Bessel → **não bloqueia o primeiro sim**. **Mas BSS, Biamp, Lake e QSC TÊM** → resolver
  antes dos Módulos 4-7.
- **BSS:** ranges numéricos de PEQ/limiter/delay — **a BSS não publica**. Medir no Audio
  Architect. **Bloqueia o Módulo 4.**
- **Lake:** I/O e status do LM26/LM44; sample rate; delay máx.; "Ideal Graphic EQ";
  URL de download → **tudo do OM-LC**. **Arquivar o PDF ao instalar.**
- **Symetrix / Yamaha:** ranges numéricos **não são publicados** — levantar **com o
  software instalado** (help interno do Composer / ProVisionaire).
- **Crown DCi Network:** sample rate do DSP.
- **PA2 / DCX2496 / DriveWare / DME Designer / DSP 260 Editor:** confirmar modo offline
  **ao instalar**.
- ✅ **RESOLVIDO:** Crown = **Audio Architect** (System Architect é oficialmente legado).

**Erros do briefing já corrigidos neste plano** *(não reabrir)*: Xilica não é browser ·
"RCF TDX" não existe (é SPL) · LD DSP 45 K é amplificador · "AHM Director" → **AHM System
Manager** · "PeakX" é dbx, na Crown é **LevelMAX** · "DCi DA-Q" não existe · **DC-One e
DSP 260 não usam IRIS-Net** · BLU-806 = BLU-806DA (mesmo produto) · BSS fixed×open estava
invertido · "TesiraFORTÉ X 400M" não existe · **CXD está End of Service** (→ CX-Q).

### 4.5 Impactos na spec do motor (`SPEC-SIMULADOR-DSP.md`)

A pesquisa mexeu no motor. Já refletido na spec:

- ✅ **`IIRFilterNode` para ordens ímpares** (§3.2.1) — **não é caso de canto**: PA2
  (BW 6/18/30/42, LR36), **BSS** (BW 6/18), **Biamp** (BW/Bessel 6/18/30/42, LR36) e
  **Q-SYS** (6→96 de 6 em 6) **todos** têm ordens ímpares. Verificado: −3.010 dB em fc.
- ✅ **BW = −3 dB / LR = −6 dB em fc** — nossa medição bate **literalmente** com o texto
  oficial da Biamp. Matemática do motor **confirmada por fabricante**.

Ainda **a fazer** na spec (não bloqueiam o VENU360):

- ⚠️ **Bessel** — PENDENTE (§3.3). Necessário para BSS/Biamp/Lake/QSC.
- ⚠️ **Tipos de filtro fora do briefing**, descobertos agora:
  **Neville Thiele Method (NTM) 36 e 52 dB/oct** (BSS) e **Chebyshev** (Q-SYS).
  → o `MODEL.xover.types` precisa aceitá-los; **matemática [A CONFIRMAR]**.
- ⚠️ **Lake Mesa EQ** — EQ **assimétrico** (cada lado da campana independente).
  **Não dá para reusar o bloco de PEQ.** Bloco próprio, fase 2.
- ⚠️ **Lake linear-phase >180 dB/oct** — **impossível com biquad**; exigiria FIR/convolução.
- ⚠️ **Ranges que estouram o Web Audio:** Q-SYS Peak Limiter tem **Attack até 100 s**
  (`DynamicsCompressorNode` vai até **1 s**) e Biamp **não tem Attack nenhum**.
  → `MODEL` precisa declarar **clamp** e a aula precisa ser honesta sobre o limite.

---

## 5. Fontes

**Manual oficial lido nesta pesquisa (fonte dos specs confirmados do PA2):**
- dbx DriveRack PA2 Owner's Manual 5044138-B — https://dbxpro.com/en-US/product_documents/driverack_pa2_manual_5044138-apdf
  (págs. 30, 41-42: PEQ, XOVER, GAIN, POLARITY)

**Páginas oficiais de produto e software:**
- dbx software (índice): https://dbxpro.com/en-US/software
- dbx VENU360 Control App v2.0.5 (Win) — **changelog do "virtual VENU360"**: https://dbxpro.com/en-US/softwares/venu360-control-app-v2-0-5-windows
- dbx DriveRack VENU360: https://dbxpro.com/en-US/products/driverack-venu360
- dbx DriveRack PA2: https://dbxpro.com/en-US/products/driverack-pa2
- dbx DriveWare v2.6.2 (DriveRack 260): https://dbxpro.com/en-US/softwares/driveware-v2-6-2-windows
- Behringer DCX2496: https://www.behringer.com/product.html?modelCode=P0B6H *(site em manutenção)*
- BSS/HARMAN Audio Architect: https://audioarchitect.harmanpro.com/en-US · https://help.harmanpro.com/audio-architect-installer-1-75-0
- QSC Q-SYS Designer: https://www.qsys.com/resources/software-and-firmware/q-sys-designer-software/
- QSC **Emulate Mode** ("no audio is processed"): https://help.qsys.com/q-sys_9.4/content/Q-SYS_Designer/003_Emulate_Mode.htm
- Lab.gruppen Lake Processing: https://www.labgruppen.com/lake-processing.html · download: https://labgruppen.com/support/download-software
- Lake Controller Operation Manual: https://www.eviaudio.fr/wp-content/uploads/2020/04/Lake_Controller_Operation_Manual.pdf
- Biamp downloads: https://www.biamp.com/support/downloads · https://support.biamp.com/Tesira/Software-Firmware
- Symetrix Composer: https://www.symetrix.co/composer · https://www.symetrix.co/software-downloads
- Xilica Designer: https://support.xilica.com/en/articles/3947394
- Powersoft ArmoníaPlus: https://www.powersoft.com/en/download/software/armoniaplus

**Help/manual oficiais (fonte dos ranges confirmados):**
- BSS Audio Architect Help — objetos de processamento (crossover/PEQ/delay/limiter/matriz):
  `adn.harmanpro.com/static/archimedia/aa_help/…/Signal_Processing_Objects/…`
- Datasheet BLU-100: https://adn.harmanpro.com/product_documents/documents/1448_1506524707/BLU-100_Data_Sheet_18-0717-B_original.pdf
- Q-SYS Schematic Library (PEQ/crossover/delay/peak limiter): https://help.qsys.com/Content/Schematic_Library/
- Q-SYS descontinuados (**CXD End of Service**): https://www.qsys.com/products-solutions/discontinued-products/amplifiers/
- Biamp Tesira Help — crossover (**"-3dB" BW/Bessel × "-6dB" LR**):
  `tesira-help.biamp.com/Component_Objects/Audio/Crossovers/…` ·
  `…/Attribute_tables/Crossover_Blocks/Crossover.htm`
- Biamp Peak Limiter (**sem Attack**): `tesira-help.biamp.com/…/Dynamic_Blocks/Peak_Limiter.htm`
- Biamp Compiler (design offline): `tesira-help.biamp.com/System_Design/Compiler.htm`
- Lab.gruppen Lake Processing (Mesa EQ, LimiterMax, linear-phase): https://www.labgruppen.com/lake-processing.html
- EV Dx46 Manual V1.1 §2.3 (citação de offline) · Dynacord DSP 600 / DSP 260 manuais
- Xilica — manual Solaro (PEQ/XOver/delay/limiter)
- Yamaha — manuais DME7 / MRX7-D / ProVisionaire Design §2.2
- Yamaha ProVisionaire Design: https://usa.yamaha.com/support/updates/provisionaire_design.html · DME7: https://usa.yamaha.com/products/proaudio/processors/dme7/downloads.html · MRX7-D: https://usa.yamaha.com/products/proaudio/processors/mrx7-d/downloads.html
- EV IRIS-Net: https://products.electrovoice.com/na/en/iris-net · Dynacord: https://products.dynacord.com/ap/en/iris-net/ · SONICUE: https://products.dynacord.com/na/en/software

**Técnicas (motor):**
- MDN — `BiquadFilterNode.Q` (**"Lowpass and highpass — Q is interpreted in dB"**): https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/Q
- W3C Web Audio API 1.1 (`DelayNode.maxDelayTime` ≤ 180 s): https://www.w3.org/TR/webaudio-1.1/

**Internas:**
- `SPEC-SIMULADOR-DSP.md` (esta pasta) — motor, matemática verificada, verificação
- `D:\Show smu producoes\SMU-PRO\simuladores\som\yamaha-cl5-real.html` — framework
- `D:\Show smu producoes\SMU-PRO\simuladores\som\_ref-cl-editor\` — precedente de captura de telas

> **Nota de rigor:** tudo marcado **[A CONFIRMAR]** / **NÃO CONFIRMADO** **não foi
> confirmado em fonte oficial** e **não pode virar código** antes de sair do manual do
> fabricante. **Nada neste documento foi preenchido por suposição.**

### Cobertura desta rodada de pesquisa

| Marca | Cobertura |
|---|---|
| **dbx** (PA2) | ✅ **manual oficial lido** — crossover, PEQ, gain, polaridade, delay |
| **dbx** (VENU360) | ✅ página oficial + changelog · ⚠️ crossover/limiter no manual |
| **BSS · Lake · QSC · Biamp** | ✅ pesquisa completa (help/datasheets oficiais) |
| **Symetrix · Xilica · Powersoft · Yamaha · EV/Dynacord · Crown** | ✅ pesquisa completa |
| **A&H · LD · RCF · Peavey** | ✅ avaliados, com veredito |
| **Behringer** | ⚠️ **parcial** — site oficial em manutenção |
| **Klark Teknik · Ashly** | 🔴 **NÃO PESQUISADOS** — rodada própria pendente |

**Nada disso bloqueia o começo:** o motor (spec §10) e o **VENU360** (§4.1) estão com
dados suficientes para arrancar já.
