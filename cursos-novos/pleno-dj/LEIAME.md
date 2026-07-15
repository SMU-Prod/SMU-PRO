# Curso DJ — fidelidade ao equipamento real

Como o curso garante que **nada é inventado**: cada rótulo, spec e comportamento dos simuladores
sai do **manual oficial do fabricante**. Este documento é o mapa de como conferir e manter isso.

Vale a regra 2 do [CLAUDE.md](../../../CLAUDE.md): *existe fonte? vá nela antes de construir.*
E a regra 5: **git é centralizado** — nada de commit/push por conta própria. Publicar no banco
(scripts daqui) é independente e segue normal.

---

## A ordem que importa

```bash
# 1. a ferramenta está lendo os manuais INTEIROS?  (nunca pule isto)
node ferramentas/pdftext.teste.mjs

# 2. baixar os manuais oficiais (uma vez; ~90 MB, vão para a pasta temporária)
node cursos-novos/pleno-dj/auditoria-nomenclatura.mjs --baixar

# 3. auditar a frota: todo rótulo da tela existe no manual da marca?
node cursos-novos/pleno-dj/auditoria-nomenclatura.mjs

# 4. o banco está íntegro? (ids, faixas, órfãos)
node cursos-novos/auditar-banco.mjs
```

**O passo 1 não é burocracia.** Extração incompleta **inverte** a conclusão: o manual "sem" o termo
faz a auditoria acusar de inventado justamente o que está escrito nele. Foi assim que a impedância
**32 Ω do HDJ-X10 — que está no manual — foi apagada do curso por engano**. Por isso a auditoria se
recusa a dar veredito quando lê menos de 5 controles de um manual: prefere dizer *"não sei"* a dizer
*"aprovado"*.

---

## O que cada coisa faz

| arquivo | papel |
|---|---|
| `auditoria-nomenclatura.mjs` | **roda sempre.** Cruza os rótulos dos 8 simuladores com os manuais das 5 marcas. Traz as URLs oficiais dos manuais. |
| `../../ferramentas/pdftext.mjs` | lê PDF de manual (decifra os protegidos da Pioneer/Roland, decodifica fonte CID). |
| `../../ferramentas/pdftext.teste.mjs` | trava os 2 bugs que já produziram conclusão falsa. |
| `apply-*.mjs` | publicam aulas/simuladores no banco (histórico da construção). |
| `gen-mod*.mjs`, `skin-v3.mjs`, `port-prime4-v2.mjs` | geradores e passes aplicados na frota. |
| `correcoes/fix-*.mjs` | **histórico auditável.** Cada correção feita, com a **fonte citada no cabeçalho** e o erro que ela conserta. Já aplicados; ficam como registro de *por que* o dado é aquele. |
| `build-sql.mjs` | migration de um curso pago separado — **nunca aplicada**, aguarda decisão do dono. |

---

## As três armadilhas (todas já custaram caro)

**1. Ferramenta não verificada não é fonte.**
Um extrator que devolve o texto pela metade produz uma *ausência convincente*: parece que o
fabricante não publica o dado. `"não achei" ≠ "não existe"`.

**2. Nomenclatura de outra marca.**
O erro mais fácil e o mais invisível — o simulador funciona, o nome é plausível, e está errado.
Achados reais:

| equipamento | exibia | é de | o certo |
|---|---|---|---|
| DJM-V10 | `MAGVEL PRO` | não existe | `CROSSFADER` (termo do manual) |
| DJM-A9 | `MAGVEL FADER PRO` | mixers de scratch (S11/S7/S5) | `MAGVEL FADER` (3ª geração) |
| Denon Prime 4+ | `TRIM`, `IN/CUE`, `MT` | Pioneer | `LEVEL`, `LOOP IN/OUT`, `KEY LOCK` |
| Technics MK7 | `TARGET` | Vestax/Numark | `STROBE` (Strobe light) |
| Akai MPC | `T.C.` | ninguém | `TC` |

**3. Manual não é a única fonte — e às vezes não é a certa.**
Para **nome de produto**, a fonte é a **página do produto**. O manual da Roland usa `SP-404MK2`
(abreviação), mas o produto se chama **`SP-404MKII`**. Trocar "pelo manual" teria estragado um acerto.
O mesmo vale para nome de tecnologia: `MAGVEL FADER` não aparece em manual nenhum (eles só dizem
`CROSSFADER`), mas é oficial — está na página do DJM-A9. Casos assim ficam registrados em
`VERIFICADO_FORA_DO_MANUAL`, dentro da auditoria, **com a fonte anotada**, para ninguém "corrigir"
um acerto depois.

---

## Onde os manuais moram

A auditoria baixa tudo com `--baixar`. Achados úteis:

- **AlphaTheta/Pioneer**: `downloads.support.alphatheta.com/manuals/<categoria>/<MODELO>/<MODELO>_<CÓDIGO>_manual.pdf`
  — **`DRI…` = manual completo; `DRH…` = quickstart** (o quickstart **não** lista os controles).
  O `403` do site de suporte é só **user-agent**: use `curl -A "Mozilla/5.0"`.
  A página *"specifications"* do produto revela a URL real do PDF.
- **Denon**: `cdn.inmusicbrands.com/Software/ENDJ5/…v5.0.0.pdf` — o `+` de "PRIME 4+" precisa virar `%2B`;
  URLs do CDN antigo são assinadas e expiram.
- **Technics**: `help.na.panasonic.com/wp-content/uploads/2023/02/SL1200MK7_TQBM0410_ENG_FRE.pdf`
- **Akai**: `cdn.inmusicbrands.com/Software/37/MPC Standalone OS - User Guide - v3.7.pdf`
- **Roland**: `static.roland.com/assets/media/pdf/SP-404MK2_v4_reference_eng02_W.pdf`

Cada manual formata a lista de peças de um jeito (`1. PLAY/PAUSE button`, `1.USB section`,
`1 Power section`, `( 18) Strobe light`) — a auditoria reconhece pelo **sufixo**, não pela numeração.

---

## O que o fabricante NÃO publica (e o curso diz isso, em vez de inventar)

- **Sennheiser** não publica o tamanho do driver do HD 25 (a spec oficial lista todo o resto).
- **beyerdynamic** não publica o do DT 990 PRO.
- **Yamaha** não publica SPL máximo da série HS — não é descuido: monitor de estúdio se vende por
  resposta plana; P.A. se vende por pressão. Cada um mostra o número que importa no seu mundo.

Cuidado com o inverso: número de capa pode ser **real e enganoso**. A QSC K12.2 é vendida como
"2000 W", mas o spec sheet diz `Peak: 1800 W (LF), 225 W (HF)` — é soma de picos, não potência
contínua. O curso ensina isso, com a prova documental.
