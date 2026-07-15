# SPEC — Motor de Simulador de DSP / Processador de Sistema (Web Audio)

**Projeto:** curso `pleno-dsp` — SMU Produções
**Status:** especificação de engenharia (pré-implementação)
**Data:** 2026-07-14

---

## 0. Princípio inegociável

> **O simulador É o software real do fabricante.**

Cada modelo do curso ganha um simulador cuja **pele reproduz a tela oficial do fabricante**
(DriveRack PA2 app, Audio Architect, Lake Controller, Q-SYS Designer, ArmoníaPlus…),
mas **todos compartilham o mesmo motor de áudio** descrito aqui.

Regras herdadas da frota de mesas (ver `MEMORY.md` → *feedback-sim-fidelidade-real*):

1. **Nunca inventar layout.** Manual/fotos/telas oficiais primeiro.
2. **Nunca clonar a pele de outra marca.** Cada fabricante tem a SUA tela.
3. **Método = reescrever só a pele; o motor fica intacto.**
4. **Nada de mock-up ilustrativo.** Se um botão existe na tela, ele faz alguma coisa
   de verdade no áudio — ou não é desenhado.

---

## 1. Arquitetura geral

### 1.1 Divisão motor × pele

```
┌──────────────────────────────────────────────────────────┐
│  PELE (por modelo)  — HTML/CSS/Canvas                     │
│  Reproduz a tela oficial: cores, tipografia, widgets,     │
│  nomes dos parâmetros, ordem das abas, ranges do fabricante│
├──────────────────────────────────────────────────────────┤
│  ADAPTADOR (por modelo) — `MODEL` descriptor              │
│  Declara: nº de entradas/saídas, tipos de filtro, slopes, │
│  nº de bandas de PEQ, ranges, delay máx, limiter…         │
├──────────────────────────────────────────────────────────┤
│  MOTOR (compartilhado) — `dsp-engine.js`                  │
│  Web Audio: matriz, crossover, PEQ, delay, limiter, gain, │
│  polaridade, solo de saída, medição, RTA                   │
└──────────────────────────────────────────────────────────┘
```

O motor **não sabe qual marca está rodando**. Ele recebe um `MODEL` descriptor
(seção 6) e constrói o grafo. Isso é o que permite 12+ modelos sem 12 motores.

### 1.2 Onde o DSP vive na cadeia real (e no sim)

```
[mesa de som] ──► [DSP / processador] ──► [amplificadores] ──► [caixas]
      ▲                    ▲
      │                    └── É AQUI que o aluno está sentado
      └── as bases multitrack do SMU (stems somados = "saída da mesa")
```

As bases (`SONGS` / `sim_bases`) entram **somadas** como programa estéreo
— exatamente o que sai de uma mesa e entra no processador.

---

## 2. Caminho de sinal (o coração da spec)

### 2.1 Diagrama

```
   BASE (stems) ─┬─► soma L ──┐
                 └─► soma R ──┤
   GERADOR ──────────────────►├─► ENTRADA A ─► [gain][polarity][PEQ in][delay in] ─┐
   (pink/sine/sweep)          ├─► ENTRADA B ─► [gain][polarity][PEQ in][delay in] ─┤
                              └─► ENTRADA C (mono sum) ──────────────────────────  ─┤
                                                                                    │
                              ┌─────────────────────────────────────────────────────┘
                              ▼
                   ╔══════════════════════════════════╗
                   ║   MATRIZ DE ROTEAMENTO           ║   in × out, ganho por cruzamento
                   ║   (GainNode por cruzamento)      ║
                   ╚══════════════════════════════════╝
                              │
        ┌─────────────┬───────┴───────┬─────────────┐
        ▼             ▼               ▼             ▼
     SAÍDA 1       SAÍDA 2         SAÍDA 3       SAÍDA n
      (SUB)         (LOW)           (MID)         (HIGH)
        │             │               │             │
        └──── cada saída roda a MESMA cadeia: ──────┘

   ┌────────────────────────────────────────────────────────────────┐
   │  1. HPF   — cascata de biquads (tipo + slope reais)            │
   │  2. LPF   — cascata de biquads (tipo + slope reais)            │
   │  3. PEQ   — n bandas (bell/shelf/notch/allpass)                │
   │  4. DELAY — DelayNode                                          │
   │  5. LIMITER — DynamicsCompressorNode                           │
   │  6. GAIN  — GainNode                                           │
   │  7. POLARITY — GainNode (±1)                                   │
   │  8. MUTE  — GainNode (0/1)                                     │
   │  9. ANALYSER (medição por saída)                               │
   └────────────────────────────────────────────────────────────────┘
        │
        ▼
   ┌──────────────────┐
   │ soloGain[saída]  │  ◄── ★ A FUNÇÃO-ASSASSINA (seção 4)
   └──────────────────┘
        │
        ▼
   BUS MONITOR ─► masterGain ─► masterAnalyser (RTA) ─► destination
```

### 2.2 Ordem é normativa

A ordem **HPF → LPF → PEQ → DELAY → LIMITER → GAIN → POLARITY** é a ordem real dos
processadores de gerenciamento de caixas, e é a ordem que o aluno vê no fluxograma
da tela oficial. **Não reordenar.** Consequências reais que o aluno precisa sentir:

- O **limiter vem depois do PEQ** → subir um PEQ empurra o limiter.
- O **gain vem depois do limiter** → gain não protege o driver.
- O **delay vem antes do limiter** → alinhar não muda a proteção.

> ⚠️ Modelos que documentem ordem diferente (ex.: limiter pré-gain vs pós-gain) devem
> declarar isso no `MODEL.chainOrder`. Confirmar no manual **antes** de codar.

---

## 3. Matemática dos filtros (VERIFICADA)

### 3.1 A pegadinha do Web Audio: **Q em dB no LPF/HPF**

Esta é a armadilha que quebra qualquer crossover feito "no olho".

No `BiquadFilterNode`:

| tipo | como o `Q` é interpretado |
|---|---|
| `lowpass`, `highpass` | **em DECIBÉIS** — `alphaQdB = sin(w0) / (2 · 10^(Q/20))` |
| `bandpass`, `notch`, `allpass`, `peaking` | **linear** — `alphaQ = sin(w0) / (2·Q)` |
| `lowshelf`, `highshelf` | **Q não é usado** (usa S=1 interno) |

Fonte: MDN — *BiquadFilterNode.Q*: "Lowpass and highpass — Q is interpreted in dB".

**Portanto, no crossover é OBRIGATÓRIO converter:**

```js
// Q linear (teoria de filtros) -> valor do parametro Web Audio (dB) p/ LPF/HPF
const qToParam = qLin => 20 * Math.log10(qLin);
```

Errar isso faz o crossover somar torto e ninguém entende por quê.

### 3.2 Slopes = cascata de seções de 2ª ordem

Cada `BiquadFilterNode` é **uma seção de 2ª ordem = 12 dB/oct**.
Slope de N·6 dB/oct → filtro de **ordem N** = cascata de seções.

**Butterworth de ordem N PAR**, seção k = 1…N/2:

```
Q_k = 1 / ( 2 · cos( (2k−1)·π / (2N) ) )
```

**Butterworth de ordem N ÍMPAR** = **1 seção de 1ª ordem (polo real)** +
(N−1)/2 seções de 2ª ordem, k = 1…(N−1)/2:

```
Q_k = 1 / ( 2 · cos( k·π / N ) )
```

**Linkwitz-Riley de ordem N** = **dois Butterworth de ordem N/2 em cascata**.

> ⚠️ **ORDENS ÍMPARES SÃO OBRIGATÓRIAS.** O manual do dbx DriveRack PA2 (confirmado,
> pág. 41-42) oferece **BW 6, BW 18, BW 30, BW 42** — ordens 1, 3, 5 e 7. E o
> **`BiquadFilterNode` NÃO consegue fazer 1ª ordem** (é sempre 2ª ordem). Ver 3.2.1.

#### 3.2.1 ★ A seção de 1ª ordem exige `IIRFilterNode`

Sem isso, BW6/BW18/BW30/BW42 e **LR36** (= 2× BW18) são impossíveis de reproduzir
fielmente. Coeficientes por transformada bilinear, com `K = tan(π·fc/Fs)`:

```js
function firstOrder(ac, kind, fc){
  const K = Math.tan(Math.PI * fc / ac.sampleRate);
  const a = [1, (K - 1) / (K + 1)];
  if (kind === 'lowpass'){ const n = K/(1+K); return ac.createIIRFilter([n, n], a); }
  const h = 1/(1+K);      return ac.createIIRFilter([h, -h], a);   // highpass
}
```

⚠️ **`IIRFilterNode` tem coeficientes IMUTÁVEIS após a criação.** Mudar a frequência
de corte exige **recriar o nó e refazer as conexões**. Padrão obrigatório:

- manter a seção de 1ª ordem **isolada entre dois `GainNode`** (`preIIR` → IIR → `postIIR`),
  para trocar o nó do meio sem tocar no resto da cadeia;
- ao trocar, **rampa curta** nos gains de contorno para não estourar clique;
- **modelos que só têm ordens pares (LR12/LR24/LR48, BW12/BW24/BW48) não pagam esse
  custo** — só instanciar o caminho IIR quando o `MODEL` declarar slope ímpar.

**Verificado fora do navegador** (Fs = 48 kHz, fc = 1 kHz): a 1ª ordem acima dá
**−3.010 dB em fc** e **≈6 dB/oct** de slope. ✅

`getFrequencyResponse()` também existe no `IIRFilterNode`, então a curva da tela
(seção 3.7) continua saindo dos mesmos nós que processam o áudio.

### 3.3 Tabela de Q (calculada, não chutada)

| Alinhamento | dB/oct | seções | Q linear | **Q param Web Audio (dB)** |
|---|---|---|---|---|
| **Butterworth** BW1 | 6 | 1ª ordem (IIR) | — | *(ver 3.2.1)* |
| **Butterworth** BW2 | 12 | 1 | 0.7071 | **−3.010** |
| **Butterworth** BW3 | 18 | 1ª ordem + 1 | 1.0000 | **0.000** |
| **Butterworth** BW4 | 24 | 2 | 0.5412 · 1.3066 | **−5.333 · 2.323** |
| **Butterworth** BW6 | 36 | 3 | 0.5176 · 0.7071 · 1.9319 | **−5.719 · −3.010 · 5.719** |
| **Butterworth** BW5 | 30 | 1ª ordem + 2 | 0.6180 · 1.6180 | **−4.180 · 4.180** |
| **Butterworth** BW7 | 42 | 1ª ordem + 3 | 0.5550 · 0.8019 · 2.2470 | **−5.115 · −1.917 · 7.032** |
| **Butterworth** BW8 | 48 | 4 | 0.5098 · 0.6013 · 0.9000 · 2.5629 | **−5.852 · −4.418 · −0.915 · 8.175** |
| **Linkwitz-Riley** LR2 | 12 | 1 | 0.5 | **−6.021** |
| **Linkwitz-Riley** LR4 | 24 | 2 | 0.7071 · 0.7071 | **−3.010 · −3.010** |
| **Linkwitz-Riley** LR6 | 36 | 2× (1ª ordem + 1) | 1.0000 · 1.0000 | **0.000 · 0.000** |
| **Linkwitz-Riley** LR8 | 48 | 4 | 0.5412 · 1.3066 · 0.5412 · 1.3066 | **−5.333 · 2.323 · −5.333 · 2.323** |
| **Bessel** BS2 | 12 | 1 | 0.5773 | **−4.771** ⚠️ |
| **Bessel** BS4 | 24 | 2 | 0.5219 · 0.8055 | **−5.648 · −1.878** ⚠️ |

> ⚠️ **Bessel:** os Q acima são os do protótipo. Bessel exige ainda um **fator de escala
> de frequência** por seção para o −3 dB cair em fc (≈1.2736 p/ 2ª ordem; ≈1.4192 e
> ≈1.5912 p/ 4ª ordem). O valor exato depende da convenção de normalização —
> **conferir contra tabela de referência na implementação** e validar com o teste da
> seção 8. **Butterworth e Linkwitz-Riley estão verificados; Bessel está PENDENTE.**
>
> **Bessel é obrigatório a partir do Módulo 4** (BSS, Biamp, Lake e Q-SYS têm Bessel;
> o dbx PA2 **não** tem → não bloqueia o primeiro sim). Ver `PLANO-CURSO-DSP.md` §4.5.

#### 3.3.1 ✅ Confirmação independente, de fabricante

O help oficial da **Biamp** descreve o crossover do Tesira exatamente como medimos:

> *"For the **Butterworth and Bessel** types, the cutoff frequency represents the
> **-3dB** point"* · *"For the **Linkwitz-Riley** type … the **-6dB** point"*

Bate com §3.4 (BW = −3.01 dB, LR = −6.02 dB). **A matemática do motor está certa.**

#### 3.3.2 ⚠️ Tipos de filtro além de BW/LR/Bessel — [A CONFIRMAR]

A pesquisa achou dois tipos **que não estavam no briefing** e que o `MODEL.xover.types`
vai precisar aceitar. **Matemática ainda não levantada — não implementar no chute:**

| Tipo | Onde | Slopes |
|---|---|---|
| **Neville Thiele Method (NTM)** | BSS Soundweb London | 36 e 52 dB/oct |
| **Chebyshev** | Q-SYS Designer | 6 a 96 dB/oct |

Também **fora do alcance de biquad** (fase 2+, exigem FIR/convolução):
- **Lake crossovers linear-phase** — *"transition slopes exceeding **180 dB per octave**"*;
- **Lake Mesa EQ** — EQ **assimétrico** (cada lado da campana ajustado separadamente):
  **não reusar o bloco de PEQ**, precisa de bloco próprio.

### 3.4 Verificação executada ✅

Implementei a fórmula do W3C (RBJ cookbook, com `alphaQdB`) fora do navegador e medi
a resposta em Fs = 48 kHz, fc = 1000 Hz:

```
caso              @fc      @fc/2    @fc/4     slope medido (HPF)
BW2  12dB/oct    −3.01    −0.26    −0.02        12.04 dB/oct
LR2  12dB/oct    −6.02    −1.93    −0.53        11.94 dB/oct
BW4  24dB/oct    −3.01    −0.02    −0.00        24.08 dB/oct
LR4  24dB/oct    −6.02    −0.52    −0.03        24.08 dB/oct
BW8  48dB/oct    −3.01    −0.00     0.00        48.17 dB/oct
LR8  48dB/oct    −6.02    −0.03    −0.00        48.17 dB/oct
```

**Soma complexa das bandas LR4 (HPF+LPF no mesmo fc, em fase):**

```
 125Hz  LPF  −0.00   HPF −72.30   SOMA  −0.000 dB
 250Hz  LPF  −0.03   HPF −48.25   SOMA  −0.000 dB
 500Hz  LPF  −0.52   HPF −24.64   SOMA  −0.000 dB
1000Hz  LPF  −6.02   HPF  −6.02   SOMA  −0.000 dB   ◄── −6 dB cada, soma 0 dB
2000Hz  LPF −24.75   HPF  −0.52   SOMA  −0.000 dB
4000Hz  LPF −48.95   HPF  −0.03   SOMA  −0.000 dB
8000Hz  LPF −75.59   HPF  −0.00   SOMA  −0.000 dB
```

Confirma o resultado clássico: **Butterworth = −3 dB em fc**, **Linkwitz-Riley = −6 dB
em fc e soma PLANA**. Se a conversão Q→dB estivesse errada, a soma não daria 0.000.

*(script de verificação: recriar em `scripts/verify-dsp-math.mjs` na implementação)*

### 3.5 Conteúdo didático que sai de graça daqui

- **LR2 (12 dB/oct) precisa de inversão de polaridade** em uma das bandas para somar
  plano; **LR4 e LR8 somam em fase**. → aula de polaridade tem demonstração audível.
- **Butterworth soma +3 dB na região de corte** (bump), Linkwitz-Riley não.
- **Bessel** tem a melhor resposta de fase / menor overshoot, e o slope mais suave.

### 3.6 Construção do crossover

```js
// Descreve o filtro de ordem N: quantas seçoes de 1a ordem + os Q das de 2a ordem.
// Butterworth par:   N/2 biquads
// Butterworth impar: 1 seçao de 1a ordem + (N-1)/2 biquads   <- exige IIRFilterNode
function bwSections(N){
  if (N % 2 === 0) return { first: 0,
    qs: Array.from({length:N/2},(_,k)=>1/(2*Math.cos((2*(k+1)-1)*Math.PI/(2*N)))) };
  return { first: 1,
    qs: Array.from({length:(N-1)/2},(_,k)=>1/(2*Math.cos((k+1)*Math.PI/N))) };
}

function xoverSections(type, slopeDbOct){
  const N = Math.round(slopeDbOct / 6);            // ordem total
  if (type === 'BW') return bwSections(N);
  if (type === 'LR'){                              // LR(N) = 2x BW(N/2) em cascata
    const h = bwSections(N/2);
    return { first: h.first * 2, qs: [...h.qs, ...h.qs] };
  }
  if (type === 'BS') return BESSEL[N];             // ⚠️ PENDENTE — ver aviso em 3.3
}

function buildXoverChain(ac, kind /*'highpass'|'lowpass'*/, type, slope, fc){
  const { first, qs } = xoverSections(type, slope);
  const nodes = [];
  for (let i = 0; i < first; i++) nodes.push(firstOrder(ac, kind, fc));  // 3.2.1
  for (const qLin of qs){
    const f = ac.createBiquadFilter();
    f.type = kind;
    f.Q.value = 20*Math.log10(qLin);   // ★ dB — ver 3.1
    nodes.push(f);
  }
  return nodes;
}
```

> **Exemplo real (dbx PA2, confirmado no manual):** `LR 36` → `xoverSections('LR',36)`
> → N=6 → `bwSections(3)` = {first:1, qs:[1.0]} → duplicado = **2 seções de 1ª ordem +
> 2 biquads com Q=1.0**. Ou seja: o PA2 **não roda sem `IIRFilterNode`**.

**Bypass do crossover:** NÃO desconectar nós (clique/pop). Empurrar a frequência para
fora da banda: HPF → 10 Hz, LPF → 20 000 Hz. (Mesmo padrão do CL5,
`yamaha-cl5-real.html:2293-2294`.)

### 3.7 A curva da tela é a curva REAL

A tela oficial desses softwares desenha a resposta do filtro. **Não desenhar uma curva
"ilustrativa".** Usar `getFrequencyResponse()` **nos mesmos biquads que processam o
áudio** e multiplicar as magnitudes:

```js
function chainResponse(nodes, freqs){
  const mag = new Float32Array(freqs.length).fill(1);
  const m = new Float32Array(freqs.length), p = new Float32Array(freqs.length);
  for (const n of nodes){
    n.getFrequencyResponse(freqs, m, p);
    for (let i=0;i<freqs.length;i++) mag[i] *= m[i];   // cascata = produto
  }
  return mag;   // -> 20*log10(mag) para plotar
}
```

Assim a curva **não pode divergir do som**: é o mesmo objeto. Isto é o que torna o sim
"o software real" e não um desenho.

---

## 4. ★ A FUNÇÃO-ASSASSINA — solo de saída

> Pedido do cliente: *"mudando a saída vai sair o som do corte, e vai refletir os
> parâmetros determinados pelo usuário"*

### 4.1 Comportamento exigido

O aluno **seleciona/solá uma saída (SUB / LOW / MID / HIGH)** e **ouve exatamente
aquela banda do crossover**, processada com **os parâmetros que ELE ajustou**.
Mexeu no corte → o som muda na hora. Mexeu no PEQ daquela saída → ouve. Mexeu no
limiter → ouve bombeando. Inverteu polaridade → ouve na soma.

### 4.2 Implementação

Cada saída termina num `soloGain` próprio antes do bus monitor:

```js
out.soloGain = ac.createGain();
out.polarity.connect(out.soloGain);
out.soloGain.connect(monitorBus);
```

Regra de solo:

```js
function applySolo(){
  const anySolo = OUTS.some(o => o.solo);
  const t = ac.currentTime;
  OUTS.forEach(o => {
    // sem solo -> TODAS as saidas somam (= o sistema completo tocando no PA)
    // com solo -> so a(s) soloada(s) chega(m) ao monitor
    const on = (!anySolo || o.solo) && !o.mute ? 1 : 0;
    o.soloGain.gain.setTargetAtTime(on, t, 0.015);   // rampa: sem clique
  });
}
```

- **Sem solo** → todas as saídas somam → é o som do sistema inteiro (e, com LR4 bem
  ajustado, deve soar **igual ao bypass**: prova que o crossover está certo).
- **Com solo em SUB** → só passa o que o HPF/LPF do SUB deixou passar, **já com o PEQ,
  delay, limiter, gain e polaridade daquela saída aplicados**.
- **Solo múltiplo** permitido (ouvir SUB+LOW juntos = ouvir a região de cruzamento).

### 4.3 Por que solo ANTES do bus e não mute nas outras

Mutar as outras saídas mataria os medidores/limiters delas. O `soloGain` é um **tap de
monitoração**: o processamento continua rodando em todas as saídas (VU/GR continuam
mexendo, como num processador real com solo de PFL), só o que chega ao **fone do aluno**
muda. Isso é o comportamento real e é o que o cliente pediu.

### 4.4 Modos de escuta (barra do sim, fora da pele do fabricante)

| Modo | O que faz |
|---|---|
| **SISTEMA** | todas as saídas somadas (default) |
| **SOLO saída n** | só aquela banda |
| **BYPASS** | entrada direto no monitor, sem DSP → A/B instantâneo |
| **A/B** | alterna preset atual × preset guardado |

> A barra de escuta é **chrome do SMU**, visualmente separada da pele do fabricante,
> para não falsificar a tela oficial (que não tem esses botões).

---

## 5. Blocos — implementação normativa

### 5.1 Matriz de roteamento

`GainNode` por cruzamento (in × out). Modelos com matriz de ganho contínuo usam o dB
real; modelos com matriz on/off usam 0/1.

```js
matrix[i][o] = ac.createGain();
inputs[i].tap.connect(matrix[i][o]);
matrix[i][o].connect(outs[o].chainHead);
matrix[i][o].gain.value = 0;   // default: nada roteado ate o preset dizer
```

### 5.2 PEQ

`BiquadFilterNode` em cascata. **Q linear aqui** (peaking/notch/allpass), ver 3.1.

| tipo na tela | `BiquadFilterNode.type` |
|---|---|
| Bell / Parametric | `peaking` |
| Low Shelf | `lowshelf` |
| High Shelf | `highshelf` |
| Notch / Band Reject | `notch` |
| All-Pass | `allpass` |

Banda desligada/bypass → `gain = 0` (**não** desconectar).

```js
b.frequency.setTargetAtTime(clamp(band.f, 20, 20000), t, 0.02);
b.gain.setTargetAtTime(band.on ? band.g : 0, t, 0.02);
b.Q.setTargetAtTime(clamp(band.q, 0.05, 40), t, 0.02);   // linear (peaking)
```

### 5.3 GEQ (modelos que têm)

n `peaking` em cascata com frequências ISO fixas. O CL5 já faz isso com 31 bandas
(`yamaha-cl5-real.html:2199-2201`, Q = 4.3) — **reaproveitar o padrão**.

### 5.4 Delay

```js
const d = ac.createDelay(MODEL.delayMaxMs / 1000);   // maxDelayTime fixo na criacao!
d.delayTime.setTargetAtTime(ms/1000, t, 0.02);
```

- `maxDelayTime` é **imutável após a criação** → dimensionar pelo máximo do modelo.
- Limite do spec: `0 < maxDelayTime ≤ 180 s` (verificado no W3C Web Audio 1.1).
- A tela do fabricante mostra **ms / metros / pés** — converter com **343 m/s** e deixar
  a temperatura ajustável se o software real deixar (vira aula de alinhamento).

### 5.5 Limiter

`DynamicsCompressorNode`. **Limitações honestas — documentar na aula:**

| param | range Web Audio | uso no limiter |
|---|---|---|
| `threshold` | −100…0 dB | threshold do modelo |
| `knee` | 0…40 dB | **0** (limiter = hard knee) |
| `ratio` | 1…20 | **20** (máximo — não existe ∞:1) |
| `attack` | 0…1 s | do modelo |
| `release` | 0…1 s | do modelo |

⚠️ **Não é um brickwall verdadeiro** (ratio máx. 20:1, curva própria do navegador, e o
nó tem *lookahead* na implementação do Chrome). Consequências:

- O sim **não deve prometer** proteção de driver bit-exata — a aula ensina **o conceito
  e o comportamento** (threshold, attack, release, ganho de redução).
- A **latência do compressor é comum a todas as saídas** → **não corrompe o alinhamento
  relativo** entre SUB/LOW/MID/HIGH. Só não misturar com o bypass sem compensar.
⚠️ **Ranges reais que ESTOURAM o `DynamicsCompressorNode`** (confirmados na pesquisa):

| Modelo | Realidade | Conflito |
|---|---|---|
| **Q-SYS Peak Limiter** | Attack **0.0001–100 s** | o nó vai até **1 s** → **clamp** |
| **Biamp Peak Limiter** | ★ **não tem Attack** — *"limited to release time only"* | não desenhar Attack |
| **Biamp** | Threshold **−20 a +28 dB** | o nó vai só até **0 dB** → **clamp** |
| **BSS** | limiter de **dois estágios** (lento + rápido) | precisa de **2 nós em série** |

→ `MODEL.limiter` declara o range **real do fabricante**; o motor faz o **clamp** e a aula
**diz a verdade** sobre onde o navegador não alcança.

- **Limiter RMS** (dbx/Lake) não existe nativo. Duas opções:
  1. aproximar com `attack`/`release` longos e documentar como aproximação;
  2. `AudioWorkletNode` com detector RMS real → **recomendado para os modelos onde o
     RMS é a feature vendida (Lake, dbx)**, mas fica para a fase 2.
- Medidor de **Gain Reduction** = `compressor.reduction` (read-only, em dB).

### 5.6 Gain / Polaridade / Mute

```js
out.gain.gain.setTargetAtTime(dbToLin(o.gainDb), t, 0.02);
out.pol.gain.setTargetAtTime(o.invert ? -1 : 1, t, 0.005);   // polaridade = ganho -1
out.mute.gain.setTargetAtTime(o.mute ? 0 : 1, t, 0.015);
```

Polaridade como `GainNode(-1)` é o padrão já usado no CL5
(`yamaha-cl5-real.html:2292`: `dbToLin(...) * (c.phase ? -1 : 1)`).

### 5.7 Medição

- **VU por saída:** `AnalyserNode` + `getFloatTimeDomainData` → RMS → dB.
  Reaproveitar `chLevelDb()` (`yamaha-cl5-real.html:2361`).
- **RTA:** `AnalyserNode` no bus monitor, `getByteFrequencyData`, bins agrupados em
  1/3 de oitava ISO. **É o RTA que prova o solo de saída** (seção 8).
- **Gerador:** pink noise (`AudioBufferSourceNode` com buffer sintetizado, `loop=true`),
  seno (`OscillatorNode`), sweep (`frequency.exponentialRampToValueAtTime`).

---

## 6. `MODEL` descriptor (contrato motor ↔ pele)

Cada sim declara **apenas isto**; o motor faz o resto.

```js
// Exemplo REAL: valores confirmados no manual oficial do PA2 (5044138-B), pags. 30 e 41-42.
const MODEL = {
  brand: "dbx", name: "DriveRack PA2",
  software: "DriveRack PA2 Control App v1.1.4",   // software REAL que a pele imita
  ins:  [{id:"A", label:"In A"}, {id:"B", label:"In B"}],   // 2 line in (+ 1 RTA mic)
  outs: [ /* 6 line out; config full-range / 2-way / 3-way */ ],
  chainOrder: ["hpf","lpf","peq","delay","limiter","gain","polarity"],  // do manual
  xover: {
    types: ["BW","LR"],                    // ★ PA2 NAO tem Bessel (confirmado)
    slopes: { BW:[6,12,18,24,30,36,42,48], // ★ inclui ORDENS IMPARES -> ver 3.2.1
              LR:[12,24,36,48] },
    fMin: 16, fMax: 20000, allowOut: true  // "OUT" desliga o filtro (manual)
  },
  peqOut: { bands: 8, fMin:20, fMax:20000, gMin:-12, gMax:12, qMin:0.1, qMax:15.909,
            types:["peaking","lowshelf","highshelf"],
            shelfSlope:[3, 14.295] },      // dB/oct — so em LOW/HIGH SHELF (manual)
  peqIn:  { bands: 8 },
  geq:    { bands: 31 },
  delay:  { inMaxMs: 100, alignMsPerCh: 10, alignMsTotal: 60 },   // manual
  limiter:{ mode:"peak", /* ranges: [A CONFIRMAR no manual] */ },
  gain:   { min:-60, max:20 },             // "GAIN [-60 dB to +20 dB]" (manual)
  polarity: ["NORMAL","INVERTED"],         // manual
  matrix: "switch",
  _unconfirmed: ["limiter thr/atk/rel ranges", "resolucao do delay"]  // ★ bloqueiam publicacao
};
```

**Regra:** todo campo vem do **manual oficial**. O que não foi confirmado entra em
`_unconfirmed` e o sim **não publica** enquanto a lista não esvaziar. Ver
`PLANO-CURSO-DSP.md` para o que já está confirmado por modelo.

---

## 7. Reaproveitamento da frota de mesas

Referência de framework: **`D:\Show smu producoes\SMU-PRO\simuladores\som\yamaha-cl5-real.html`**
— **só o framework. NUNCA a aparência.**

| O que reusar | Onde no CL5 | Nota |
|---|---|---|
| **`SONGS` + fallback offline** | `:2040-2078` | array literal embutido = fallback |
| **`sim_bases` em runtime** | `:2087-2115` | fetch REST → substitui `SONGS`; erro → fallback |
| **`rebuildSongSel()`** | `:2118-2121` | reconstrói o `<select>` pós-fetch |
| **Placeholder da anon key** | `:2088` | `__SMU_SUPABASE_ANON_KEY__`, override `window.__SMU_SB_ANON` |
| **Botão play com progresso** | `:2365`, `:2375-2389` | `⏳ CARREGANDO BASE… n/total` |
| **Cache de buffers + token** | `:2363`, `:2378-2386` | `loadTok` evita corrida entre trocas |
| **Fit guard `screen.height`** | `:2486-2501` | ★ crítico — ver 7.2 |
| **Layout responsivo** | `:713` `calcLayout()` | `<760 phone` / `<1200 tablet` / `desktop` |
| **Touch-drag** | `:80`, `:151`, `:565-567` | `touch-action:none` + `setPointerCapture` |
| **Coalescência de render** | `:528-531` | ★ obrigatório — ver 7.3 |
| **Hook `window.__diag`** | `:2504-2518` | ★ obrigatório — ver seção 8 |

### 7.1 Bases

Os stems entram **somados** (a mesa já mixou; o DSP recebe o programa):

```js
useStems.forEach((st,i) => {
  const src = ac.createBufferSource(); src.buffer = bufs[i]; src.loop = true;
  const p = ac.createStereoPanner(); p.pan.value = clamp(st.p/63,-1,1);
  const g = ac.createGain(); g.gain.value = dbToLin(-6);   // headroom da soma
  src.connect(g); g.connect(p); p.connect(programBus);     // <- entrada do DSP
  src.start(t0); realSources.push(src);
});
```

`programBus` → `inputs[A]`/`inputs[B]` (L/R) e `inputs[C]` (soma mono), conforme o
`MODEL`. **Sem `MAXCH`**: o DSP não tem canais, soma tudo.

### 7.2 Fit guard 16:9 (obrigatório — copiar a lógica)

O player do curso roda o sim num **iframe 16:9 com `srcdoc` sandboxed**, e nele
`innerHeight` MENTE (o frame é mais alto que a tela real). Padrão do CL5 (`:2494-2498`):

```js
const scrH = (window.screen && screen.height) || vh;
const iframeTaller = vh > scrH + 8;
const visH = Math.min(vh, scrH);
const headerAllow = iframeTaller ? 84 : (vh > 700 ? 40 : 6);
const effVh = Math.max(240, visH - headerAllow);
document.body.style.alignItems = (iframeTaller || vh > 700) ? 'flex-start' : 'center';
let s = ZOOM || Math.min((vw-16)/DW, effVh/DH);
s = Math.max(0.3, Math.min(s, 2.4));
con.style.zoom = s;
```

Regras da frota (`MEMORY.md` → *smu-simuladores-fit-fullscreen*):
- **reservar faixa inferior** e **alinhar ao topo** (senão fullscreen corta a base);
- **altura do chassi NUNCA fixa** — foi isso que gerou o bug "encavalado"
  (`MEMORY.md` → *smu-simuladores-consoles*);
- em tablet/phone o app roda **fluido a 1:1**, sem zoom (`:2489-2490`).

### 7.3 Coalescência de render (obrigatório)

Redraw síncrono por `pointermove` **travou o iPad** (`MEMORY.md` →
*smu-simuladores-render-coalescing*). Todo canvas (curva do crossover, RTA, VU) usa
dirty-flag + rAF, com rede de segurança em `setTimeout` (`:528-531`):

```js
let _drawReq = 0, _drawTo = 0;
function drawCurve(){ if(_drawReq||_drawTo) return;
  _drawReq = requestAnimationFrame(_flushDraw); _drawTo = setTimeout(_flushDraw, 60); }
```

⚠️ O RTA + a curva de resposta são **muito mais pesados** que o desenho de uma mesa
(`getFrequencyResponse` sobre 200+ pontos × n filtros). **Recalcular a curva só quando
um parâmetro muda** (dirty-flag), nunca por frame. Só o RTA/VU anda a cada frame.

---

## 8. Requisitos de verificação (bloqueiam a publicação)

Cada sim expõe `window.__diag` (padrão CL5 `:2504-2518`) e roda headless via CDP
(`simuladores/som/_ref-cl-editor/_cdp.mjs`, `_verify.mjs`).

```js
window.__diag = {
  MODEL, state,
  ac: () => ac,
  out: o => OUTS[o], outNodes: o => outN[o],
  setXover: (o, kind, f, type, slope) => {...},
  setPeq: (o, band, {f,g,q,type,on}) => {...},
  setDelay: (o, ms) => {...}, setLimiter: (o, p) => {...},
  setGain: (o, db) => {...}, setPolarity: (o, inv) => {...},
  solo: o => {...}, clearSolo: () => {...}, bypass: on => {...},
  outDb: o => outLevelDb(o), monDb: () => monitorLevelDb(),
  gr: o => outN[o].limiter.reduction,
  rta: () => rtaBands(),                  // 1/3 oitava, dB
  response: o => chainResponseDb(o),      // curva REAL do encadeamento
  play, stop, isPlaying: () => playing, gen: (kind,f) => {...},
  fit: () => fitApp(), layout: () => LAYOUT
};
```

### 8.1 Testes obrigatórios

| # | Teste | Critério |
|---|---|---|
| **V1** | **Ganho em fc** — LR4 @1 kHz | −6.02 dB ±0.3 |
| **V2** | **Ganho em fc** — BW2 @1 kHz | −3.01 dB ±0.3 |
| **V3** | **Slope real** — medir 2 e 4 oitavas abaixo de fc | 12/24/48 dB/oct ±1.5 |
| **V3b** | **Slopes ímpares** (PA2: BW6/18/30/42, LR36) | 6/18/30/36/42 dB/oct ±1.5 |
| **V3c** | **Troca de fc com seção de 1ª ordem ativa** | sem clique; `-inf`→pico < −40 dBFS |
| **V4** | **Soma plana LR4** — HPF+LPF mesmo fc, sem solo | plano ±1.0 dB, 100 Hz–10 kHz |
| **V5** | **★ Solo de saída muda a banda audível** | ver 8.2 — **o teste do cliente** |
| **V6** | **PEQ** — bell +6 dB @1 kHz, Q=2 | pico +6 dB ±0.5 em 1 kHz |
| **V7** | **Delay** — impulso, achar o pico | ms pedido ±0.5 ms |
| **V8** | **Limiter** — seno 10 dB acima do threshold | saída ≈ threshold; `reduction` < −3 dB |
| **V9** | **Polaridade** — 2 saídas mesma banda, 1 invertida, sem solo | cancela: > 25 dB de queda |
| **V10** | **Bypass ≡ soma LR4** | Δ < 1.0 dB (prova que o xover não colore) |
| **V11** | **Curva da tela = áudio** | `response(o)` bate com sweep medido ±0.5 dB |
| **V12** | **Fit 16:9** — iframe `srcdoc` sandboxed | nada cortado; nenhuma barra de rolagem |
| **V13** | **Bases runtime** | `sim_bases` carrega; rede cortada → fallback toca |
| **V14** | **Perf iPad** | ≥ 30 fps com RTA ligado e 4 saídas ativas |

### 8.2 ★ V5 — provar que o solo de saída funciona de verdade

Este é **o teste que valida o pedido do cliente**. Não basta "o botão acende".

```js
// Setup: 4 vias LR4 @ 100 / 800 / 5000 Hz, pink noise, todas as saidas roteadas.
await __diag.gen('pink');

const full = __diag.rta();          // referencia: sistema completo

__diag.solo(0);                     // SUB
const sub = __diag.rta();
// EXIGIDO: energia acima de 400 Hz cai >= 20 dB vs `full`
// EXIGIDO: energia em 50-80 Hz permanece dentro de 3 dB de `full`

__diag.solo(3);                     // HIGH
const high = __diag.rta();
// EXIGIDO: energia abaixo de 1 kHz cai >= 20 dB vs `full`
// EXIGIDO: energia em 8-12 kHz permanece dentro de 3 dB de `full`

// Reflete os parametros do usuario?
__diag.clearSolo(); __diag.solo(0);
__diag.setXover(0, 'lowpass', 300, 'LR', 24);   // aluno sobe o corte do SUB
const sub2 = __diag.rta();
// EXIGIDO: energia em 150-250 Hz sobe >= 10 dB vs `sub`  <- "reflete os parametros"

__diag.setPeq(0, 0, {f:60, g:+9, q:2, type:'peaking', on:true});
const sub3 = __diag.rta();
// EXIGIDO: bin de 63 Hz sobe 7-11 dB vs `sub2`           <- PEQ da saida soloada

__diag.setGain(0, -12);
// EXIGIDO: outDb(0) cai 12 dB +-0.5
```

**Só passa se as 3 provas baterem**: o solo **isola a banda**, o **corte** ajustado pelo
aluno **muda o que se ouve**, e o **PEQ/gain daquela saída** aparecem no som soloado.

### 8.3 Verificação de fidelidade (não-automatizável)

Antes de publicar, **comparar lado a lado com a tela oficial**:
- captura da tela real (print do software do fabricante) × print do sim;
- **todo parâmetro visível** existe no manual, com o **range do manual**;
- nomenclatura **idêntica** à do fabricante (não traduzir "Crossover" p/ "Divisor");
- `MODEL._unconfirmed` **vazio**.

---

## 9. Riscos conhecidos

| Risco | Mitigação |
|---|---|
| **Q em dB no LPF/HPF** silenciosamente errado | teste V1/V2/V4 pega na hora |
| **Ordens ímpares** (BW6/18/30/42, LR36) impossíveis só com biquad | `IIRFilterNode` (3.2.1); teste V3b |
| `IIRFilterNode` com coeficientes imutáveis | isolar entre gains e recriar o nó (3.2.1) |
| `DynamicsCompressor` não é brickwall | documentar; `AudioWorklet` RMS na fase 2 |
| Bessel com normalização errada | **marcado PENDENTE**; V1/V3 travam a publicação |
| Curva/RTA pesados no iPad | dirty-flag; curva só on-change; V14 |
| `maxDelayTime` imutável | dimensionar pelo `MODEL.delayMaxMs` na criação |
| Pele "inspirada" em vez de fiel | 8.3 + regra de MEMORY (fidelidade real) |
| Clique ao ligar/desligar bloco | sempre `setTargetAtTime`, nunca `disconnect()` |
| Direitos de imagem do software | **não embutir screenshot** do fabricante no HTML: reconstruir a UI em CSS/Canvas (mesmo método da frota de mesas) |

---

## 10. Ordem de implementação

1. **`dsp-engine.js`** — motor + `MODEL` descriptor + `__diag` (sem pele).
2. **`scripts/verify-dsp-math.mjs`** — V1…V11 headless contra um `MODEL` de teste.
3. **Primeira pele: dbx DriveRack PA2** (ver `PLANO-CURSO-DSP.md` §"Próximos passos").
4. Congelar o motor. **Daí em diante, cada modelo novo = só pele + `MODEL`.**

---

## Referências

- `D:\Show smu producoes\SMU-PRO\simuladores\som\yamaha-cl5-real.html` — framework
  (bases, fit guard, touch, coalescência, `__diag`). **Framework apenas.**
- `D:\Show smu producoes\SMU-PRO\simuladores\som\_ref-cl-editor\` — precedente de captura
  de telas reais + harness headless (`_cdp.mjs`, `_verify.mjs`, `_fit.mjs`, `_audio.mjs`).
- `D:\Show smu producoes\SMU-PRO\cursos-novos\publish-faithful-sims.mjs` — pipeline
  de publicação (UPDATE-only).
- W3C Web Audio API 1.1 — `DelayNode.maxDelayTime` ≤ 180 s (verificado).
- MDN — `BiquadFilterNode.Q`: **"Lowpass and highpass — Q is interpreted in dB"**
  (verificado; base da seção 3.1).
