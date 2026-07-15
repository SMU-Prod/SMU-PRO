# Brief de autoria — aulas de teoria do curso "Luz — Básico" (SMU)

Você escreve o **conteúdo HTML** de UMA aula de teoria de um curso profissionalizante de **iluminação de palco/show** (nível básico, para formar técnico/operador de luz de eventos). Público: iniciante que quer trabalhar com luz em shows, igrejas, eventos corporativos e festas.

## Formato de saída (OBRIGATÓRIO)
- Escreva APENAS o corpo HTML da aula (sem `<html>`, `<head>`, `<body>`, sem DOCTYPE). É um fragmento inserido dentro de um viewer que já tem estilo.
- Use só estas tags: `<p>`, `<strong>`, `<em>`, `<h3>`, `<ul>`, `<li>`, `<ol>`, `<table>/<tr>/<td>/<th>`. NÃO use `<script>`, `<style>`, `<iframe>`, `<img>` (as imagens entram por token, veja abaixo), nem classes/ids/inline-style.
- Português do Brasil, tom didático, direto, profissional — como um instrutor experiente explicando no pé do equipamento. Evite encher linguiça. Densidade alta de informação útil e correta.
- Comprimento: ~45–75 linhas. Comece com um `<p>` de gancho em **negrito** na primeira frase. Termine com um `<h3>Resumo prático</h3>` com os pontos-chave.
- Use listas para especificações/comparações e um `<table>` quando comparar 3+ itens (ex.: tipos de fixture, conectores).

## Imagens
- Onde a aula pede uma imagem real de equipamento, insira um token **numa linha isolada**: `{{IMG:slug}}` (ex.: `{{IMG:par-led}}`). Use EXATAMENTE os slugs listados no seu briefing específico. Não invente slugs novos.

## Precisão técnica (crítico — curso profissional)
- Valores DMX: universo = 512 canais; cada canal 0–255 (8 bits). Endereço inicial (start address) + footprint (nº de canais da fixture no modo escolhido).
- Cabo DMX é blindado 120Ω (≈110Ω), conector XLR 3 ou 5 pinos — NÃO é cabo de áudio/microfone (que é 75Ω) apesar do conector parecido; usar cabo errado causa erros intermitentes. Terminador de 120Ω no fim da linha (daisy chain). Splitter/buffer óptico isola e distribui ramos.
- Fixtures LED e moving heads têm dimmer eletrônico próprio: precisam só de ENERGIA + DMX. Refletor convencional (PAR64 com lâmpada halógena) NÃO tem dimmer interno: a intensidade vem de um DIMMER/rack externo (canal de dimmer).
- Mistura de cor aditiva: RGB (vermelho+verde+azul) → luz; R+G+B=branco; usada em LED. CMY (subtrativa por filtros) em moving heads de lâmpada. RGBW/RGBA adicionam branco/âmbar para pastéis e brancos melhores. Temperatura de cor em Kelvin: baixo=quente/âmbar (~3200K tungstênio), alto=frio/azulado (~6500K luz do dia).
- Tipos de moving head: SPOT (facho definido, gobos, íris, foco — recorta), BEAM (facho estreito, denso, "canhão"/laser-like), WASH (facho aberto, sem borda, banho de cor). Híbrido = faz os três.
- Convencionais: PAR (banho, sem foco), Fresnel (borda suave, ajustável), Elipsoidal/ERS/Source-Four-like (recorte preciso, facas/shutters, gobos — o "canhão de recorte"), Ribalta/cyc/barra LED (banho de fundo/telão).
- Iluminação de 3 pontos: KEY (principal, frontal-lateral), FILL (preenchimento, suaviza sombra, oposto do key), BACK/contraluz (separa o sujeito do fundo). No palco somam-se frontal (plateia vê o rosto), lateral, contraluz e luz de fundo/cyc.
- Segurança: NR10 (elétrica), NR35 (trabalho em altura), NR12/rigging (estrutura); toda fixture pendurada leva cabo de aço de segurança (safety); clamp/garra na truss; respeitar carga (kg) da truss e da talha; cabos no chão com passagem/fita.
- Ordem de energizar: estrutura/rigging conferidos → energia (distro/disjuntores) → fixtures ligam (fazem reset/homing os moving) → mesa → testar canal a canal. Nunca subir alguém na truss energizada sem procedimento.

## Estilo — EXEMPLO REAL (uma aula boa do curso de som, mesma pegada):
```html
<p><strong>Cabo é a estrada por onde o som viaja.</strong> Um técnico passa boa parte do trabalho ligando e desligando cabos — e a maioria dos "não sai som" mora num cabo errado. Nesta aula você aprende a reconhecer cada conector...</p>

{{IMG:conectores-audio}}

<h3>Os conectores que você precisa reconhecer</h3>
<ul>
<li><strong>XLR (cânon):</strong> 3 pinos, balanceado e travável. O sinal sai do <em>macho</em> e entra no <em>fêmea</em>.</li>
...
</ul>

<h3>Resumo prático</h3>
<p><strong>Microfone = XLR. Notebook = P2→P10.</strong> Se guardar só isso, evita 80% dos perrengues.</p>
```
Replique ESSA pegada (gancho em negrito, subtítulos h3, listas com termo em negrito + explicação, tabela quando comparar, resumo final), mas para ILUMINAÇÃO.
