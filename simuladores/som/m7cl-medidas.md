# M7CL-48 — spec do painel físico

## Proporções (MEDIDAS, duas fontes independentes que batem)

| Fonte | Valor | Razão L/A |
|---|---|---|
| Cotas oficiais, p.299 | 1274 mm × 701 mm | **1,817** |
| Vista de topo p.17, medida por pixel | 1349 × 734 px | **1,838** |

O simulador usa palco 1920 × 1044 (= 1,839).

**Profundidade dos andares** (caixa de 734 px): andar de cima 330 px = **45 %**,
andar de baixo 310 px = **42 %**, faixa frontal 94 px = **13 %**.

**Larguras** (% da largura da mesa; 1 strip de input = **1,885 %**, valor que
confere nos dois blocos, o de 16 e o de 8):

| Seção | % | Strips |
|---|---|---|
| INPUT esquerdo (1-16 / 17-32) | 30,3 | 16 |
| vão de chassi | 8,3 | — |
| SELECTED CHANNEL | **11,1** | — |
| Display (moldura toda) | **24,5** | — |
| — tela LCD (razão **1,31**, ~4:3) | 16,8 | — |
| — placa YAMAHA / M7CL | 6,7 | — |
| vão de chassi | 6,1 | — |
| INPUT direito (33-40 / 41-48) | 15,0 | 8 |

> ⚠️ **Erro corrigido em 30/07:** a 1ª versão usou 21,5 % no SELECTED CHANNEL
> (quase o dobro) e fez a tela ocupar toda a moldura, em widescreen. Era o que
> deixava a mesa "fora de parâmetro". Os valores certos saíram de um **recorte
> ampliado** da região central da p.17 — a medição por densidade de pixel na
> página inteira não separava o painel de knobs do display.
>
> **Altura** do conjunto selected-channel/display: 198 px de 734 = **27 %**;
> só o LCD: 172 px = **23,4 %**.
| ST IN | 7,6 | 4 (1,90 % cada) |
| vão da marca Centralogic | 6,2 | — |
| Centralogic | 19,3 | 8 (2,41 % cada — mais largos que os de input) |
| SCENE / UDK / NAV | 6,7 | — |
| STEREO / MONO | 4,3 | 2 (2,15 % cada) |

## Cores (MEDIDAS na foto real; o manual é line art e não serve para cor)

- Corpo do chassi: **preto fosco** — a 1ª versão usou cinza grafite (estimativa
  minha) e o dono reprovou. Blocos de strip em cinza-chumbo mais escuro.
- Topo de cada strip: **etiqueta azul** com o número do canal.
- Nome do canal: **fita branca** de escrever (não faixa preta).
- Meter LEDs: verde na faixa útil, âmbar em −6, **vermelho só no OVER**.
- Os 16 encoders MIX/MATRIX do SELECTED CHANNEL: **bordô**.
- A meter bridge atravessa por cima do SELECTED CHANNEL **e** da tela —
  é bem mais larga que a tela sozinha. Logo YAMAHA à direita dela, "M7CL"
  impresso à direita da tela.
- Telas: OVERVIEW tem fundo cinza-escuro (p.98); SELECTED CHANNEL VIEW tem
  fundo **azul** (p.90 e foto). As duas coisas estão certas, muda com a tela.


**Fonte:** `manuais/yamaha-M7CL-v3-owners.pdf`, cap. 2 "Panels and controls", p. 17–23.
Páginas rasterizadas em `p017.png`–`p023.png` (zoom 3×, 1785×2526).
Nada aqui é estimado — tudo foi lido na figura oficial.

## Mapa geral do top panel (p. 17)

```
┌──────────────┬───────────────────────────────────┬──────────────┐
│ INPUT 17-24  │        Meter bridge (opcional)    │ INPUT 41-48  │
│ INPUT 25-32  ├──────────────┬────────────────────┤              │
│              │  SELECTED    │   DISPLAY (touch)  │              │
│              │  CHANNEL     │   + logo YAMAHA    │              │
├──────────────┼──────┬───────┴────┬──────┬────────┼──────────────┤
│ INPUT  1-8   │ ST IN│ Centralogic│ UDK  │ STEREO │ INPUT 33-40  │
│ INPUT  9-16  │ 1-4  │ (8 strips) │ NAV  │ MONO   │              │
│              │      │            │ SCENE│        │              │
└──────────────┴──────┴────────────┴──────┴────────┴──────────────┘
```

O M7CL-32 **não tem** o bloco INPUT da direita (canais 33–48). Mesmo software.

## Strip de INPUT (p. 18) — de cima para baixo

1. Número do canal
2. `[SEL]` — seleciona o canal p/ SELECTED CHANNEL + touch screen.
   Em SENDS ON FADER, os SEL de **todos** os canais acendem.
3. `[CUE]`
4. **Meter LEDs — 6:** `OVER`, `-6`, `-12`, `-18`, `-30`, `-60`
5. `[ON]` — LED aceso = canal ligado. Em SENDS ON FADER vira send-on do bus atual.
6. Faixa preta do nome do canal
7. Fader 100 mm. Escala impressa: `10, 5, 0, -5, -10, -20, -30, -40, -50, -60, -∞`
8. Número do canal (repetido no rodapé)

**ST IN 1–4:** strips idênticos; `[SEL]` alterna entre L e R a cada toque.
LEDs de meter mostram o **máximo entre L e R**.

## SELECTED CHANNEL (p. 19) — 33 knobs

Bloco esquerdo — **MIX/MATRIX: 16 encoders**, 2 colunas × 8 linhas,
numerados 1,2 / 3,4 / 5,6 / 7,8 ‖ 9,10 / 11,12 / 13,14 / 15,16
(risco separando 8 e 9 — MIX 1-16; em canal de saída viram sends p/ MATRIX).

Bloco direito, de cima para baixo:
| Linha | Esquerda | Direita |
|---|---|---|
| 1 | `HA` (gain do head amp) | `DYNAMICS 1` — THRESHOLD |
| 2 | `PAN` | `DYNAMICS 2` — THRESHOLD |
| 3 | `HPF` — FREQUENCY | — |
| 4 | **EQ HIGH** | Q · FREQUENCY · GAIN |
| 5 | **EQ HIGH MID** | Q · FREQUENCY · GAIN |
| 6 | **EQ LOW MID** | Q · FREQUENCY · GAIN |
| 7 | **EQ LOW** | Q · FREQUENCY · GAIN |

Nota do manual: o **PAD** entra/sai sozinho quando o ganho de HA cruza
**−14 dB / −13 dB**. Isso é comportamento real, não enfeite.

## Centralogic (p. 21) — 8 strips

Encoder multifunção (topo, seguem os knobs da tela) → `[SEL]` → `[CUE]` →
6 meter LEDs → `[ON]` → fader → número 1–8.
Os faders podem virar **controle de banda do GEQ** (p. 177).

## SCENE MEMORY / MONITOR (p. 22)

`[STORE]` (esq) · `[▲]`/`[▼]` (centro, empilhados) · `[RECALL]` (dir) ·
knob `MONITOR LEVEL` (escala 0–10).
`[▲]`+`[▼]` juntos = volta para a cena atual.

## USER DEFINED KEYS (p. 22)

12 teclas, grade **4 × 3**: 1-2-3-4 / 5-6-7-8 / 9-10-11-12.
Funções atribuíveis listadas no apêndice p. 280.

## STEREO / MONO MASTER (p. 23)

2 strips (`STEREO`, `MONO`): `[SEL]` → `[CUE]` → `[ON]` → nome → fader.
No STEREO, `[SEL]` alterna L / R a cada toque.

## NAVIGATION KEYS (p. 23) — layout exato

```
 [17-24] [25-32]          [MATRIX]              [41-48]
 [1-8 ] [9-16] [ST IN]    [MIX9-16]     [STEREO] [33-40]
                          [MIX1-8]
                          [DCA]
```
- Segurar uma nav key **2 s** → ela pisca e **fixa** a Centralogic naqueles canais;
  apertar outra nav key enquanto pisca muda **só a tela**, não a Centralogic.
- `[STEREO]` põe STEREO L/R + MONO nos módulos 1–3 da Centralogic (4–8 ficam sem uso).
- `[33-40]` e `[41-48]` **só existem no M7CL-48/48ES**.
