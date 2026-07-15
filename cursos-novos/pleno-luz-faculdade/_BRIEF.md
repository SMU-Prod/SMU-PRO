# Brief de autoria — aulas de teoria NÍVEL FACULDADE do Pleno de Iluminação (SMU)

Você escreve o **conteúdo HTML** de UMA aula de teoria avançada de um curso profissionalizante de **iluminação cênica de show/palco** (nível PLENO/faculdade — forma o engenheiro/light designer/road). O aluno já sabe o básico (DMX, fixtures, patch, mesa). Aqui é aprofundamento técnico real, como faculdade.

## Formato de saída (OBRIGATÓRIO)
- APENAS o corpo HTML (sem `<html>/<head>/<body>/DOCTYPE`). Fragmento inserido num viewer já estilizado.
- Só estas tags: `<p>`, `<strong>`, `<em>`, `<h3>`, `<ul>`, `<li>`, `<ol>`, `<table>/<tr>/<td>/<th>`. NADA de `<script>/<style>/<iframe>/<img>`/classes/ids/inline-style.
- Português do Brasil, tom técnico e denso mas didático — um professor de faculdade que também é road experiente. Sem enrolação.
- ~60–90 linhas. Comece com `<p>` de gancho em **negrito**. Termine com `<h3>Resumo prático</h3>`.
- Use `<table>` para comparar conectores/padrões/bitolas. Use `<ul>`/`<ol>` para listas técnicas.

## Imagens
- Insira `{{IMG:slug}}` numa linha isolada onde a aula pede foto real. Use EXATAMENTE os slugs do seu briefing. Não invente.

## Precisão técnica (crítico)
- **Art-Net / sACN (E1.31):** DMX sobre rede Ethernet. Um cabo de rede (Cat5/6) transporta MUITOS universos. Node = caixa que converte Art-Net/sACN ↔ DMX físico (saídas XLR). Art-Net (broadcast/unicast, UDP) e sACN (multicast, padrão ESTA E1.31) são os dois protocolos; sACN tem prioridade por universo. Universos endereçados por número; casar o universo da mesa/node com o patch. etherCON = RJ45 travável e robusto (Neutrik) para palco. Vantagem: menos cabos, muitos universos, longas distâncias; cuidado: rede dedicada, switches de qualidade, evitar loops.
- **RDM (E1.20):** DMX bidirecional — a mesa/node CONVERSA com a fixture pelo mesmo par de DMX: descobre (discovery), lê e SETA endereço/modo/temperatura remotamente, lê sensores/erros. Precisa de equipamento RDM-capable (splitters RDM). Economiza subir na truss para endereçar.
- **Energia trifásica:** rede trifásica = 3 fases (L1/L2/L3) + neutro + terra. Tensão entre fase-neutro (ex. 127/220V) e fase-fase (220/380V). Distro (main distro) divide em circuitos; **equilibrar a carga entre as 3 fases** (não sobrecarregar uma). Corrente por fase = potência da fase / tensão. Disjuntores por circuito e geral; DR/aterramento. Gerador em eventos externos.
- **Conectores de palco (saber cada um):** **powerCON / powerCON TRUE1** (Neutrik, energia travável; TRUE1 pode conectar/desconectar sob carga; azul=IN cinza=OUT no powerCON antigo); **Socapex (Soca)** = multicabo de 19 pinos que leva 6 circuitos (6x fase+neutro+terra) num conector — liga rack de dimmer a breakout de 6 tomadas; **CEE / P17** = plugues industriais azuis (monofásico 16A/32A) e vermelhos (trifásico 16/32/63A), à prova de intempérie; **Harting** = conector multipino industrial (Han) usado em quadros/motores; **etherCON** (rede) e **DMX XLR 5/3 pinos** (dados). Cada um: energia ou dados, nunca misture.
- **Bitola de cabo x corrente:** cabo fino demais esquenta/derrete/queda de tensão. Regra: mais corrente → seção maior (mm²). Ex. 1,5mm² ~ até ~15A, 2,5mm² ~ até ~20-25A, 4mm² ~ 30A (referência, depende de norma/temperatura/comprimento). Sempre com folga.
- **Rigging/truss:** truss de alumínio (box/quadrada, triangular, ladder/escada, circular). **Motor/talha de corrente** (chain hoist, ex. 500kg/1000kg/2000kg) iça a truss; controle por motor controller. **SWL/WLL** (carga de trabalho segura) da truss e do motor — NUNCA ultrapassar; considerar carga distribuída x pontual, span (vão) entre pontos. **Bumper** (viga sob o motor). **Ground support** (torres no chão) quando não há ponto no teto. **Ponto de rigging** = onde a estrutura do local aguenta (calculado por engenheiro). Cabo de aço de segurança em toda fixture. Shackle/manilha, cinta (round sling), clamp. NR (NR35 altura, NR12/rigging), ART (análise de risco), pessoas embaixo de carga = não.
- **Pixel mapping / media server:** fixtures de LED endereçáveis pixel a pixel (barras/pixel bar, matrizes, LED tape) formam uma "tela" de baixa resolução; o **media server** (ou o efeito de pixel da mesa) mapeia VÍDEO/conteúdo sobre esses pixels (cada pixel = alguns canais DMX RGB). Consome MUITOS universos (por isso Art-Net/sACN). Diferença de painel de LED (telão) que recebe vídeo por processadora, não DMX.

## Estilo — EXEMPLO (pegada de uma aula boa):
```html
<p><strong>Um cabo de rede pode carregar 32 universos DMX de uma vez.</strong> Quando o show cresce...</p>
<h3>O que é um node</h3>
<ul><li><strong>Node:</strong> converte Art-Net/sACN da rede em saídas DMX físicas (XLR).</li>...</ul>
<h3>Resumo prático</h3>
<p><strong>...</strong></p>
```
Replique a pegada (gancho negrito, h3, listas com termo em negrito + explicação, tabela ao comparar, resumo final), para o tema avançado do seu briefing.
