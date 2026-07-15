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
material de universidade de material de blog. Formato:

```html
<table style="width:100%;border-collapse:collapse;font-size:14px;margin:16px 0">
<thead><tr style="background:#1b2230">
  <th style="padding:8px;border:1px solid #2a3444;text-align:left">Coluna</th>
  <th style="padding:8px;border:1px solid #2a3444;text-align:left">Coluna</th>
</tr></thead>
<tbody>
  <tr><td style="padding:8px;border:1px solid #2a3444">Célula</td>
      <td style="padding:8px;border:1px solid #2a3444">Célula</td></tr>
</tbody>
</table>
```

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
