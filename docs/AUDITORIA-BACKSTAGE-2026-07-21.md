# Auditoria completa — Escola SMU Backstage (www.smuproducoes.com)
**Data:** 21/07/2026 · **Escopo:** 17 cursos ativos · 112 módulos · 408 aulas · 256 simuladores · código do player · imagens

Método: estrutura conferida por SQL + `auditar-banco.mjs`; os 256 sims testados um a um em navegador real (sonda de erros injetada + interações simuladas + testes funcionais manuais nos flagships); as 408 aulas lidas na íntegra por 7 revisores; código do player auditado e os achados graves confirmados manualmente no fonte; as 205 URLs de imagem testadas uma a uma.

---

## 1. VEREDITO GERAL

| Área | Estado |
|---|---|
| Estrutura no banco (ids, faixas, ordem, órfãos, total_aulas) | ✅ Íntegra — nenhum problema |
| Simuladores (256) | ✅ 253 funcionam · ❌ 2 defeitos reais (DMX ×2 cursos, NR-35 preso) |
| Imagens (205 URLs) | ✅ Todas no ar, todas no storage próprio |
| Código do player | ⚠️ Robusto no geral, mas 3 bombas para quem edita direto no banco |
| Conteúdo | ✅ 12 cursos prontos ou com ressalvas leves · ❌ 3 precisam de trabalho (normas-nrs, panorama, pleno-efeito*) · pleno-produtor precisa de reorganização |

\* pleno-efeito: o corpo das aulas é bom; o problema está concentrado nos blurbs `smu-efe_*`.

---

## 2. SIMULADORES — teste real dos 256

**Resultado da bateria:** 256 carregados; 253 sem nenhum erro de runtime sob interação; flagships verificados funcionalmente (ATEM: preview→CUT→program muda estado ✓; CL5, grandMA3, rider técnico: vivos e respondendo ✓).

### Defeitos reais (corrigir)
1. **Sim DMX512 — quebrado em 2 cursos** (`luz-basico` m2-a1 "DMX512: o idioma entre a mesa e as luzes" e `pleno-luz` m2-a1 "O que é DMX512 e como o sinal viaja" — mesmo HTML).
   Causa: `document.getElementById('next').onclick=()=>{};` — não existe elemento `next`; o script morre aí e tudo que vem depois nunca roda: card de missões fica **vazio**, botão "Próxima missão ▸" nunca é criado, `fit()` (ajuste de tela) não é aplicado. Confirmado ao vivo.
   Correção: apagar essa linha (e a linha seguinte `getElementById('mission').addEventListener('click',()=>{})` é inócua mas também é lixo). Republicar via pipeline de publish.
2. **Sim da aula NR-35 preso em `status='generating'`** (`normas-regulamentar-nrs`, ai_animations id `a01d7eee-4f6e-4a48-a495-c9e211dfd2c1`).
   Efeito: o player renderiza `null` — aluno nunca vê o sim, sem mensagem de erro, e cada visita re-consulta por 5 minutos. Corrigir a linha no banco (gerar o sim ou apagar a linha).

### Fragilidades (não bloqueiam aluno)
- **Sim DJ "Pioneiros do DJing"**: `selectTech()` usa `event.currentTarget` global — funciona no clique real, falha em invocação programática/browsers antigos. Correção de 1 linha: passar `event` como parâmetro no `onclick`.
- **17 sims dependem de CDN externa (unpkg React)**: 15 no pleno-som + 1 efeito-basico + 1 estruturas. Sem internet no unpkg, o sim não abre. Recomendação: fazer o build inline do React nesses sims quando forem tocados de novo.
- **Contrato de tela cheia `html.smu-fs`: só 58/256 implementam.** Distribuição: pleno-luz 37/44, pleno-video 19/32, luz-basico 1/6, video-basico 1/12, demais 0. O player degrada bem (coluna única), mas o corte de tela cheia que motivou o contrato persiste nos ~198 sims sem ele.

---

## 3. CÓDIGO — pode incluir, apagar e editar sem quebrar?

**Resumo: INCLUIR pode à vontade. EDITAR pode (cuidados abaixo). APAGAR aula/módulo funciona mas tem 2 bombas silenciosas; curso NUNCA deletar — desativar.**

### Graves (confirmados manualmente no fonte)
1. **GET da API apaga a linha do sim** — `src/app/api/animation/generate/route.ts:277-286`: se uma linha `ready` tiver `urls` sem `html`/`image` (nem que seja por um instante durante edição manual), o primeiro aluno que abrir a aula **deleta o registro**. Correção: retornar `not_found` sem DELETE.
2. **Apagar aula não recalcula progresso** — `supabase/schema.sql`: `recalculate_enrollment_progress` só dispara em INSERT/UPDATE de `progress`; não há trigger de DELETE. Aluno com 28/29 aulas cuja aula faltante for apagada fica preso em 96% para sempre — sem certificado. Correção: trigger AFTER DELETE em `lessons` (ou rodar recálculo em todo apply que apague aula).
3. **Deletar curso apaga certificados emitidos** — `schema.sql:250` (`on delete cascade`): links públicos de certificado viram 404 para quem já compartilhou. Regra operacional: `ativo=false`, nunca DELETE.

### Médios
4. Linha `generating` esconde o sim para sempre (player renderiza `null`, poll de 5 min) — tratar `generating` velho como `not_found` + mostrar aviso no timeout.
5. `conteudo_rico` < 100 caracteres esconde o simulador (gate `hasContent` em `animation-player.tsx:133`) — encurtar demais o texto da aula some com o sim.
6. "Duplicar curso" não copia `categorias` → o clone muda de escola (vaza do aula para o backstage); também perde `parent_id` de submódulos.
7. Página pública `/cursos/[slug]` não filtra portal — por URL direta, curso de uma escola abre na outra.
8. Reordenar módulos/aulas engole erro do banco silenciosamente (`courses.ts:573-595`).
9. SSR renderiza `conteudo_rico` sem sanitizar (DOMPurify só no cliente) — um `<script>` inserido no banco executa no navegador de todo aluno.

### O que está bem defendido (verificado)
Módulo sem aula, curso sem módulo, `urls[0].html` null, `conteudo_rico` null, divisões por zero, slug inexistente → tudo degrada sem exceção. Ordem não precisa ser contígua; `total_aulas` é mantido por trigger e é só cosmético. Sandbox do iframe do sim está correto (`allow-scripts`, sem `same-origin`). Tudo dinâmico reflete edição na hora; vitrine pública em até 10 min (`revalidate: 600`).

---

## 4. CONTEÚDO — veredito por curso

| Curso | Veredito | Destaques |
|---|---|---|
| producao-basico | ✅ **Pronto** | Voz uniforme, 12/12 com SVG rico, sequência exemplar. 2 expressões estranhas. |
| video-basico | ✅ Pronto c/ ressalvas leves | 12/12 com imagem+alt+legenda. 1 spec Belden a conferir. |
| luz-basico | ✅ Pronto c/ ressalvas mínimas | 11/11 ilustradas. 2 ajustes: "gobos de cor"→filtros dicroicos; "mic 75Ω" é chute. |
| som-basico | ✅ Pronto c/ ressalvas leves | 12/14 com imagem. 3 frases a corrigir; falta imagem em microfonia e ordem liga/desliga. |
| efeito-basico | ✅ Pronto c/ ressalvas leves | 13/14 ilustradas. FISPQ→FDS (NBR 14725:2023); falta 1ºs socorros do operador. |
| eletronica-para-eventos | ✅ Pronto c/ ressalvas | Texto impecável (1 erro em 24 aulas). 2 imagens estão na aula errada; 15 aulas sem imagem. |
| estruturas-rigging | ✅ Pronto c/ ressalvas | Tecnicamente sólido. Falta: plano de resgate NR-35, critérios de descarte de cabo/cinta. 1 typo ("treços"). |
| introducao-para-eventos | ⚠️ Pronto c/ ressalvas | M2 repete a si mesmo (a03≈a05, a04≈a07); tom "gestão corporativa" destoa do backstage. |
| junior-profissoes | ⚠️ Pronto c/ ressalvas | 2 notas editoriais vazadas ("material-base"), typo "somido", BNC "que rosqueia" (é baioneta), m03-a06 (rigging) está no módulo de Eletrônica. |
| dj | ⚠️ Pronto c/ ressalvas | Contradição na mesma aula: corpo atribui o scratch a Grandmaster Flash, blurb (correto) a Grand Wizzard Theodore; m06-a03 diz "encerra o curso" mas existe M7; 22/28 sem imagem. |
| pleno-som | ⚠️ Pronto c/ ressalvas | "LEYACOUSTIC LEO" (corrupção de L-Acoustics+Meyer) em m07-a04; notas "fiel ao material-base" vazadas (m01-a03, m04-a02); nome do M8 desatualizado (tem DM7 e TF5); M2×M7 com ~40% de sobreposição; 34/44 sem imagem; UHF "470–698 MHz" a conferir (pós-repack ~470–608). |
| pleno-luz | ⚠️ Pronto c/ ressalvas | "convivenciais"→convencionais (m07-a06); 2 "material-base" vazados; m06-a02 diz "fecha o curso" mas vêm M7–M11; título do M8 diz só "grandMA3" para 5 consoles; M3×M7 repetem; 34/44 sem imagem; faltam timecode e followspot. |
| pleno-video | ⚠️ Pronto c/ ressalvas | **Erro fator 8**: m02-a01 dá taxas HAP em MB/s (250–400 MB/s; o certo ~Mbps — m06-a01 tem os números bons) e conclui errado sobre SSD SATA; "tbetha/tvONE" corrompido; M7 duplica M2–M4; 25fps dado como padrão BR (verificar: BR é 29,97/30); falta aula de streaming. |
| pleno-produtor | ❌ Precisa de reorganização | Duas gerações de aulas misturadas: pares redundantes lado a lado (orçamento 2×, cronograma 3×, equipe 2×, logística 2×, fechamento 3×); contradição margem×markup entre m05-a01/a02/a03; 3 imagens na aula errada (organograma, caminho crítico, settlement); m10-a04 promete glossário de jargões e entrega 2; ~21 aulas sem visual. |
| pleno-efeito | ❌ Blurbs precisam de reescrita | Corpo das aulas: bom. **Quase todos os erros moram nos blocos `smu-efe_*`**: mesa de disparo descrita como console DMX (contradiz a própria aula), blurb de delay de PA (conteúdo de SOM) na aula de delay pirotécnico, classificação F1–F4 (europeia) contradizendo o T1–T5 (ABNT) do m06-a01, decreto revogado citado como vigente, "50–230 bar" para CO2, números de distância sem fonte. M8 duplica M3–M5 (~70%). Falta: segurança de laser, NR-35, 1ºs socorros. |
| normas-regulamentar-nrs | ❌ **Precisa de trabalho — o pior do acervo** | (a) **Tabelas de ruído NR-15 e NR-01 ERRADAS** (limites de exposição que não batem com o Anexo 1; NR-01 usa dobra de 3 dB que não é da norma; NR-06 com nível de ação 85→correto 80 dB); (b) **lixo de pipeline de IA publicado**: prompt "Nanobanana" na NR-06, "[IMAGE PROMPT - DO NOT TRANSLATE]" na NR-26; (c) **NR-26 inteira sem acentuação**; (d) casos "reais" falsos na NR-18 (Roskilde na "Bélgica", "Hillsong UK 2013", "Madonna Portugal 2006"); Kiss descrita errado na NR-20; (e) itens de NR revogada citados como vigentes (NR-23/1978, 18.15.x); (f) dezenas de números legais a conferir (NR-28 prazos/penas, NR-05 horas, NR-10 zonas, NR-16, NR-24); (g) NR-01 desvia para minicurso de som; (h) prefixos-artefato nos títulos ("PT", "RE", "CK", "CO"); (i) falta NR-33 (espaços confinados). Cursos NR-06/26/10/18 sem NENHUMA imagem. |
| panorama-das-profissoes | ❌ Precisa de trabalho | m06-a03 é duplicata literal de m06-a01; m05-a04 tem o texto inteiro 2× dentro da aula; m06-a05 "Propagação" tem conteúdo trocado (é aula de mixer); final da m07-a01 vazou resposta de IA ("Se quiser, também posso montar as próximas aulas…"); LaTeX cru publicado ("\cdot", "\frac{P}{V}"); "núcleos"→cores; 37/38 aulas sem imagem; módulo diz "Seguraça de Trabalho"; não existe aula da profissão Técnico de Som num curso de "profissões"; falta roadie/rigger/stage manager e um organograma "quem é quem". `dur: 0` em 12 aulas. |

### Padrões transversais (todos os cursos)
- **Notas editoriais vazadas**: "material-base", "conteúdo de enriquecimento técnico", prompts de imagem, placeholders "[Nome do Evento]" — remover em todos (aparecem em junior, pleno-luz, pleno-som, NRs, panorama).
- **`alt=""` vazio** nas imagens do bucket `imagem/` (pleno-produtor, pleno-som, pleno-luz, estruturas) — preencher (acessibilidade); os cursos básicos novos são o padrão a seguir (alt + figcaption).
- **Módulos "catálogo" duplicando teoria** (M7 pleno-som, M7 pleno-luz, M7 pleno-video, M8 pleno-efeito): declarar como "catálogo de modelos/consulta" na abertura ou fundir com as aulas gêmeas.
- **Aulas "fecha o curso" fora do lugar** após expansões (pleno-luz m06-a02, dj m06-a03).
- Divergências numéricas entre cursos a harmonizar: 120Ω vs 110–120Ω (DMX), line check 30–60min vs 1h, fluido de fumaça 120–200°C vs 250–300°C, fatores de rigging invertidos entre NR-35×NR-18.

---

## 5. PRIORIDADES DE AÇÃO (ordem sugerida)

1. **Banco (5 min):** resolver a linha `generating` da NR-35; corrigir o sim DMX512 (2 cursos) e republicar.
2. **Código (3 correções pequenas):** GET sem DELETE (`route.ts`); trigger de recálculo em DELETE de `lessons`; timeout de `generating` com aviso no player. Com isso, operar direto no banco vira seguro.
3. **Conteúdo urgente (erro público):** tabelas de ruído NR-15/NR-01/NR-06; lixo de IA visível (NR-06, NR-26, panorama m07-a01, OS do m05-a02); NR-26 sem acentos; duplicatas do panorama (m06-a03, m05-a04); casos falsos NR-18/NR-20.
4. **Correções pontuais de texto** (lista completa nos relatórios por curso acima): ~40 itens, maioria de 1 linha.
5. **Reorganização:** pleno-produtor (fundir pares redundantes); blurbs `smu-efe_*` do pleno-efeito (reescrever); módulos-catálogo (declarar ou fundir).
6. **Enriquecimento:** imagens nas aulas visuais sem imagem (prioridades listadas por curso); contrato smu-fs nos 198 sims restantes; React inline nos 17 sims com CDN.

---

## 6. Verificações que passaram limpas (para registro)
- `auditar-banco.mjs`: nenhum prefixo cruzando curso, nenhum id fora de faixa, nenhum órfão, nenhum módulo vazio nos cursos Backstage.
- `total_aulas` bate com a contagem real em todos os 17 cursos; nenhuma `ordem` duplicada.
- 205/205 imagens respondem 200 OK; todas hospedadas no storage do projeto (zero hotlink externo).
- Nenhum sim com `custo_usd` null (o bug que derrubava o player já está sanado).
- Specs de hardware conferidas pelos revisores (consoles Yamaha/A&H/DiGiCo/X32/Soundcraft/PreSonus, VENU360, fones DJ, MPC, NovaStar/LEDVISION/Tessera, treliças/ligas): corretas — com as exceções pontuais listadas na tabela acima.
