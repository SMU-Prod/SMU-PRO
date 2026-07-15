# Guia de estilo — aulas de PRODUÇÃO (SMU)

## O que é o arquivo

Cada aula é um **fragmento HTML** (`aula-NN-slug.fragment.html`). **Não** é um documento completo:
sem `<!DOCTYPE>`, sem `<html>`, sem `<head>`, sem `<body>`, sem `<style>`, sem `<script>`.
Começa direto no primeiro `<h2>`. O player já aplica a tipografia do site.

## Estrutura obrigatória

```html
<h2>1. Título da primeira seção</h2>
<p>Prosa...</p>

<h2>2. Título da segunda seção</h2>
<p>Prosa...</p>
<ul><li><strong>Termo:</strong> explicação.</li></ul>

<h2>3. ...</h2>
...
```

- **4 a 6 seções `<h2>` numeradas** por aula.
- Alvo: **5.000 a 7.000 caracteres** de HTML por aula (básico: 4.000–5.500).
- Tags permitidas: `h2`, `h3`, `p`, `ul`, `ol`, `li`, `strong`, `em`, `table`, `thead`, `tbody`, `tr`, `th`, `td`, `blockquote`, `code`.
- **Sem** `class=` e **sem** `style=`, exceto em `<table>` (ver abaixo).
- Token de imagem: `{{IMG:slug-da-imagem}}` numa linha sozinha. Só use os slugs que o brief te der.

## Tabelas

Quando a informação for comparativa (preço, prazo, quem faz o quê), **use tabela** — é o que separa
material de universidade de material de blog.

⚠️ **Tabela SEMPRE vai dentro de um container rolável.** `width:100%` **não** impede vazamento: as
células têm largura mínima de conteúdo, e uma tabela de 4 colunas estoura os 375px do celular e faz
a **página inteira** rolar de lado. Formato obrigatório:

```html
<div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:16px 0">
<table style="width:100%;min-width:560px;border-collapse:collapse;font-size:14px">
<thead><tr style="background:#1b2230">
  <th style="padding:8px;border:1px solid #2a3444;text-align:left">Coluna</th>
  <th style="padding:8px;border:1px solid #2a3444;text-align:left">Coluna</th>
</tr></thead>
<tbody>
  <tr><td style="padding:8px;border:1px solid #2a3444">Célula</td>
      <td style="padding:8px;border:1px solid #2a3444">Célula</td></tr>
</tbody>
</table>
</div>
```

## Diagramas (SVG inline)

Foto precisa de gerador de imagem; **diagrama não**. Para organograma, linha do tempo, cascata de
custo e fluxo de decisão, diagrama é melhor que foto. Use SVG inline — sem arquivo externo, sem custo.

⚠️ **A armadilha do tamanho de fonte, que já quebrou os 11 diagramas uma vez (15/07):**
`font-size` no SVG está em **unidades do viewBox**, não em pixels de tela. Num viewBox de 800
renderizado numa coluna de ~332px (tela de 375), a escala é **0,41** — uma fonte 13 vira **5,4px na
tela**. Ilegível. **Não adianta exigir "mínimo 13px" sem dizer em qual escala.**

Formato obrigatório (o `min-width` é o que segura a legibilidade: 760/800 = 0,95 → fonte 13 sai a
~12,3px na tela, e o diagrama rola no próprio container em vez de arrastar a página):

```html
<figure style="margin:18px 0">
  <div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
  <svg viewBox="0 0 800 ALTURA" style="width:100%;min-width:760px;height:auto;display:block"
       xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DESCRIÇÃO ACESSÍVEL">
    ...
  </svg>
  </div>
  <figcaption style="font-size:13px;color:#94a3b8;margin-top:6px;line-height:1.4">Legenda que ENSINA.</figcaption>
</figure>
```

Regras: `viewBox` sempre 800 de largura · **fonte mínima 13 em unidades de viewBox** · sem
`<foreignObject>` · sem `width`/`height` fixos no `<svg>` raiz · cores do tema escuro (blocos
`#161c26`/`#1b2230`, borda `#2a3444`, texto `#e7edf5`, fraco `#8794a8`, âmbar `#f59e0b`, ok
`#22c55e`, erro `#ef4444`) — **nada de fundo branco** · `aria-label` descritivo, porque o SVG é a
única versão daquela informação para quem usa leitor de tela.

**Valide medindo no navegador, não no código:** renderize num iframe de 375px e confira
`documentElement.scrollWidth <= 375` (a página não rola) e `font-size × (larguraRenderizada/800) >= 11`
(o texto é legível). Foi essa medição que pegou o bug — a validação estática dizia "ok".

## Voz

- **Português do Brasil.** Tratamento por "você". Presente do indicativo.
- **Técnico e concreto.** Número, prazo, valor em R$, nome de documento, jargão real.
  Ruim: "é importante se organizar". Bom: "o alvará leva 30 a 45 dias na maioria das capitais;
  quem pede em cima da hora não faz o evento".
- **Sem motivacional, sem enchimento, sem 'neste artigo vamos ver'.** Nada de "no mundo dinâmico dos eventos".
- **Sem emoji.**
- Explique **por que**, não só **o que**. O aluno tem que sair sabendo a razão técnica/econômica.
- Quando houver erro clássico de iniciante, **nomeie o erro e diga o que ele custa**.
- **Não invente** norma, lei, artigo ou percentual que você não tem certeza. Se precisar citar,
  use o que é notório do mercado brasileiro (ECAD, ART/CREA, NR-35 para trabalho em altura,
  Lei 13.103/2015 do motorista, Simples Nacional). Prefira "costuma ficar em torno de" a inventar precisão falsa.

## Fecho da aula

A última seção `<h2>` deve se chamar **"N. Na prática"** e amarrar a aula ao simulador
(quando a aula tiver um), dizendo o que o aluno vai fazer nele e qual erro ele vai cometer.
Se a aula não tiver simulador, "Na prática" traz um roteiro do que fazer no próximo evento real.

## Quiz

Cada aula tem um `aula-NN-slug.quiz.json`:

```json
{
  "titulo": "Quiz — Título da aula",
  "questoes": [
    { "texto": "Pergunta?",
      "explicacao": "Por que a correta é correta — em uma ou duas frases técnicas.",
      "opcoes": [["Alternativa certa", true], ["Errada", false], ["Errada", false], ["Errada", false]] }
  ]
}
```

- **4 questões** por aula, **4 alternativas** cada, **exatamente uma** correta.
- A posição da correta deve **variar** entre as questões (não deixe sempre na primeira).
- As erradas têm que ser **plausíveis** — o erro que um iniciante realmente cometeria, não absurdo.
- Pergunte **aplicação**, não decoreba. Ruim: "o que significa ROS?".
  Bom: "O caminhão atrasou 2h. O que você comprime primeiro?".
