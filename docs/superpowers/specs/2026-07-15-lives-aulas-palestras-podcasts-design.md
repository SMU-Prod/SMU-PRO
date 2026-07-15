# SMU PRO — Lives: Aulas, Palestras e Podcasts ao Vivo

**Data:** 2026-07-15
**Status:** Aguardando revisão do spec
**Autor:** Erick + Claude
**Branch base:** `master`

---

## 0. Contexto

O SMU PRO entrega vídeo hoje **exclusivamente por embed do YouTube** (`src/components/lesson/video-player.tsx` monta um iframe a partir de `lessons.youtube_id`). Não existe nenhuma noção de evento, agenda ou transmissão no schema.

O pedido: **aulas, palestras e podcasts ao vivo, com boa qualidade, delay mínimo e custo baixo ou zero.**

Esses três objetivos são parcialmente contraditórios — delay mínimo e custo zero são opostos em streaming. Este spec resolve a contradição **segmentando por tipo de acesso** em vez de buscar um meio-termo ruim para todos os casos.

### 0.1 Decisões tomadas na sessão de brainstorming

| # | Decisão | Justificativa |
|---|---|---|
| 1 | **Híbrido por evento**: YouTube para live aberta, Cloudflare Stream para live restrita | O custo cai exatamente sobre o conteúdo que gera receita; o conteúdo sem receita direta custa R$0 |
| 2 | **Lives abertas são públicas (listadas) no YouTube** | Alcance e funil. Views em embed do próprio canal são monetizadas e contam normalmente |
| 3 | **Chat próprio (Supabase Realtime)**, não o chat do YouTube | Postar no chat do YouTube exige OAuth do aluno em escopo sensível com teto vitalício de 100 usuários — inviável (ver §7) |
| 4 | **`portal`: `aula` \| `main` \| `ambos`** | Curso pertence a uma escola; podcast/palestra de topo de funil serve as duas |
| 5 | **Log de presença desde a fase 1**, mesmo sem exigência ativa hoje | Exigido pela NR-01 Anexo II 4.7.1 quando virar produto; trivial agora, retrabalho depois |
| 6 | **Sem palco interativo na fase 1** | Ninguém pediu ainda; o YouTube já resolve o broadcast e o palco custa dinheiro e complexidade |

### 0.2 Terminologia — manter a distinção

- **Broadcast** — o palestrante transmite, alunos assistem e interagem **por escrito**. Delay 2-5s. É o escopo deste spec.
- **Palco interativo** — aluno entra no ar com câmera/mic. Exige WebRTC sub-500ms. **Fora do escopo** (fase 2, §11).

Não chamar broadcast de "interativo em tempo real". Com 2-5s de delay não existe conversa, e vender isso internamente leva a decisões erradas.

---

## 1. Objetivo e não-objetivos

### Objetivo
Permitir que a SMU transmita aulas, palestras e podcasts ao vivo dentro do SMU PRO, com chat e presença próprios, **sem custo de infraestrutura para conteúdo aberto** e com custo proporcional e controlado para conteúdo restrito.

### Escopo (in)
1. Tabela `live_events` + agenda + sala do evento.
2. `<LivePlayer>` com despacho por provider (YouTube \| Cloudflare).
3. Isolamento por portal, incluindo o novo valor `ambos`.
4. Chat em tempo real (Supabase Realtime) com identidade Clerk.
5. **Log de presença auditável** (heartbeat → `live_attendance`).
6. Admin: CRUD de eventos com guard de portal.
7. Gravação vira aula VOD do curso.

### Não-objetivos (fora deste spec)
- **Palco WebRTC / aluno no ar** — fase 2, ver §11.
- **Q&A com upvote e quiz durante a live** — alto valor, spec próprio (§11).
- Legendas ao vivo, transcrição, resumo por IA.
- Breakout rooms, Super Chat/gorjeta, leaderboard na live, replay com chat sincronizado — **decidido não construir** (§10).
- Qualquer mudança no fluxo de pagamento existente.

---

## 2. Modelo de dados

Migration: `supabase/migrations/20260721_live_events.sql`

> **Nota sobre a data:** as migrations existentes já contêm arquivos com data à frente de hoje (`20260716_content_translations`, `20260720_sim_bases`). `20260721` garante ordenação correta. **Vale investigar por que essas datas estão adiantadas** — não é problema deste spec, mas é um sintoma.

### 2.1 `live_events`

| Campo | Tipo | Nota |
|---|---|---|
| `id` | uuid pk | |
| `titulo`, `slug`, `descricao` | text | `slug` único |
| `tipo` | enum `live_type` | `aula` \| `palestra` \| `podcast` |
| `portal` | enum `live_portal` | `aula` \| `main` \| `ambos` |
| `acesso` | enum `live_access` | `aberto` \| `restrito` |
| `provider` | enum `live_provider` | `youtube` \| `cloudflare` |
| `course_id` | uuid fk nullable | obrigatório se `acesso = restrito` |
| `youtube_id` | text nullable | obrigatório se `provider = youtube` |
| `cf_live_input_id` | text nullable | obrigatório se `provider = cloudflare` |
| `cf_video_uid` | text nullable | preenchido ao encerrar |
| `status` | enum `live_status` | `agendado` \| `ao_vivo` \| `encerrado` \| `cancelado` |
| `inicio_previsto` | timestamptz | |
| `inicio_real`, `fim_real` | timestamptz nullable | |
| `recording_lesson_id` | uuid fk nullable | aula VOD gerada |
| `criado_por` | uuid fk users | auditoria |
| `created_at`, `updated_at` | timestamptz | |

**Invariantes (CHECK constraints, não só validação em app):**
- `acesso = 'restrito'` → `course_id IS NOT NULL`
- `provider = 'youtube'` → `youtube_id IS NOT NULL`
- `provider = 'cloudflare'` → `cf_live_input_id IS NOT NULL`
- `acesso = 'restrito'` → `provider = 'cloudflare'` — **impede o erro caro**: marcar restrito e publicar no YouTube por engano.

### 2.2 `live_attendance` — o log de compliance

| Campo | Tipo | Nota |
|---|---|---|
| `id` | uuid pk | |
| `live_event_id` | uuid fk | |
| `user_id` | uuid fk users | |
| `joined_at` | timestamptz | |
| `last_seen_at` | timestamptz | atualizado pelo heartbeat |
| `duracao_segundos` | int | derivado, materializado |
| `ip`, `user_agent` | text | rastreabilidade (Anexo II 4.6.2) |

Índice único em `(live_event_id, user_id)` — uma linha por aluno por evento; reconexão atualiza, não duplica.

**Retenção: mínimo 2 anos** após o fim da validade do curso (NR-01 Anexo II 4.7.1). **Nunca incluir esta tabela em rotina de limpeza** sem checar a norma.

### 2.3 Índices
- `live_events (status, inicio_previsto)` — agenda.
- `live_events (portal, status)` — listagem por portal.
- `live_attendance (live_event_id)` — relatório.

---

## 3. Isolamento por portal

O `src/lib/portal.ts` estabelece a regra do dono (08/07/2026): *"cada domínio é uma escola independente; o login é o mesmo, o acervo é separado."*

**Curso deriva o portal implicitamente** de `categorias` (contém `tecnico`/`renda-em-casa` → aula). **Live não pode fazer isso**: palestra e podcast não têm `course_id`, logo não têm `categorias`, logo não há origem para derivar. Live carrega **coluna `portal` explícita**.

Isso não é inconsistência gratuita — é que a fonte da derivação não existe. E corrige de saída o modo de falha já registrado em `src/lib/actions/courses.ts:270` (*"aula recebia só a categoria do assunto (ex.: ['som']) e caía no backstage"*), que é exatamente o portal implícito falhando.

Acréscimo ao `portal.ts`:

```ts
export type LivePortal = "aula" | "main" | "ambos";

/** Uma live pertence ao portal se for dele ou de "ambos". */
export function liveBelongsToPortal(livePortal: LivePortal, portal: Portal): boolean {
  return livePortal === "ambos" || livePortal === portal;
}
```

**Validação cruzada:** quando `course_id` está presente, `live.portal` precisa bater com `courseBelongsToPortal(course.categorias, live.portal)`. Sem isso dá para pendurar live do backstage em curso do aula. `portal = 'ambos'` com `course_id` é **proibido** — curso pertence a uma escola, então a live dele também.

---

## 4. Arquitetura de provider

A fronteira que impede o híbrido de vazar pelo código:

```
<LivePlayer event={...} />
   ├── provider === "youtube"    → <YouTubeLivePlayer youtubeId={...} />
   └── provider === "cloudflare" → <CloudflareLivePlayer signedUrl={...} />
```

**Todo o resto do app é cego ao provider.** Página do evento, chat, presença, agenda, admin: nenhum deles sabe qual player está tocando. É isso que torna a troca de provider uma mudança de um componente e não da arquitetura.

`acesso` é a verdade de negócio; `provider` é consequência derivada e default no admin (`aberto` → youtube, `restrito` → cloudflare), travada pelo CHECK do §2.1.

### 4.1 YouTube (provider `youtube`)
- Reusa o padrão do `video-player.tsx`.
- **Ultra-Low Latency (2-5s)** — configurar no YouTube Studio **antes** de iniciar; não muda depois e **não suporta 4K**.
- Transmissão: OBS (chave RTMP) ou webcam do próprio YouTube pelo Chrome — **sem mínimo de inscritos**, só canal verificado e 24h de espera na primeira ativação. **Não construímos estúdio de navegador: o YouTube já tem um, de graça.**
- Custo: **R$0**, qualquer audiência.

### 4.2 Cloudflare Stream (provider `cloudflare`)
- Ingest **RTMPS**, saída **LL-HLS** (3-10s).
- **Não usar WHIP/WHEP** apesar do sub-segundo: não grava, e gravação é inegociável aqui.
- `recording.mode: "automatic"` — grava sozinho, disponível em ~60s.
- **`deleteRecordingAfterDays` obrigatório no dia 1** — sem isso o armazenamento cresce para sempre. É o vetor de conta-surpresa nº 1.
- LL-HLS exige GOP 2-8s, closed GOP, **sem B-frames** (B-frame quebra em silêncio).
- Custo: **US$1/1.000 min entregues** + US$5/1.000 min armazenados (pré-pago, arredonda pra cima; piso ~US$5/mês).

Ordem de grandeza real: live de 1h com 200 alunos = 12.000 min = **~US$12**.

---

## 5. Controle de acesso

Reusa a regra já estabelecida em `src/lib/actions/access.ts` — admin passa, curso `free` passa, resto exige matrícula `ativo` — e o RPC `user_has_course_access(p_user_id, p_course_id)` que já existe no banco. **Nenhuma lógica de acesso nova.**

- `acesso = 'aberto'` → sem gate. Qualquer um assiste, inclusive deslogado.
- `acesso = 'restrito'` → Server Action valida sessão Clerk + `user_has_course_access`, e só então emite o signed URL do Cloudflare.

### 5.1 Limite honesto do signed URL — ler antes de prometer

**Signed URL do Cloudflare não é DRM por usuário.** O claim `sub` do token é o ID do vídeo, não o do aluno. É um **bearer token**: quem o tiver assiste até expirar. Cloudflare é explícito que associação a usuário "requer lógica de aplicação".

Mitigações (parciais, não cadeado):
- `exp` **curto — minutos, não a 1h default** (teto do Cloudflare é 24h).
- `accessRules` com `ip.src` fixando o IP do requisitante.

**Isto é melhor que link não-listado do YouTube, mas não impede aluno compartilhar com aluno.** Não vender internamente como proteção total.

---

## 6. Chat (Supabase Realtime)

Tabela `live_messages` (`live_event_id`, `user_id`, `texto`, `created_at`, `oculto`), broadcast por Supabase Realtime, identidade real via Clerk.

- Rate limit por usuário (server-side).
- Sanitização com `isomorphic-dompurify` (já no projeto).
- `oculto` para moderação (soft delete — preserva o log).
- Restrito → só matriculado escreve. Aberto → qualquer logado escreve; deslogado só lê.

**Opcional (fase 1.5):** espelhar o chat do YouTube em modo leitura no nosso chat, unificando as duas plateias. Ler é barato e só exige API key (sem OAuth). Ver §7.

---

## 7. Por que não o chat do YouTube — investigado, não presumido

Testado empiricamente contra endpoints reais em 14/07/2026.

**O iframe funciona:** `youtube.com/live_chat?v=ID&embed_domain=HOST`. Mecanismo não documentado: o YouTube devolve `X-Frame-Options: SAMEORIGIN` por padrão e **omite** o header quando `embed_domain` bate exatamente com o host do `Referer`. Validação server-side por Referer.

**Duas armadilhas se algum dia usarmos:**
- **`Referrer-Policy: no-referrer` quebra o embed em silêncio.** Se endurecermos security headers, cai sem aviso. O default do Chrome (`strict-origin-when-cross-origin`) funciona.
- `embed_domain` precisa ser o host exato (`www` conta) — calcular de `window.location.hostname`, nunca hardcode.

**Mas postar é intransponível:**
- `liveChatMessages.insert` exige **OAuth do próprio aluno** no escopo `youtube.force-ssl`, apresentado como *"ver, editar e apagar permanentemente seus vídeos, avaliações, comentários e legendas"*.
- Escopo sensível → app não verificado tem **teto vitalício de 100 usuários**, que o Google diz não poder ser resetado nem alterado.
- Identidade vira o canal do YouTube do aluno — sem e-mail, sem vínculo com o Clerk. Muitos alunos não têm canal.
- Safari e Firefox bloqueiam cookie de terceiro → nem isso funciona neles.

**Ler, porém, é barato:** `liveChatMessages.list` (e `streamList`, gRPC) funciona **só com API key**. Polling é server-side, uma vez por transmissão, com fan-out pelo nosso Realtime — a quota escala com transmissões, não com espectadores.

> ⚠️ **Incerteza registrada:** o custo de quota por método de live chat **não é publicado** pelo Google. Os números "list = 5 / insert = 50" que circulam são folclore de comunidade, não documentação. Se formos espelhar, medir na prática antes de confiar.

---

## 8. Presença e compliance NR

### 8.1 O achado que define a prioridade

**Live não concede nenhum privilégio regulatório.** Pelo NR-01 Anexo II, videoconferência ao vivo é **EAD, não presencial** — mesmo balde de vídeo gravado. O glossário define EAD como atividade em *"lugares **ou** tempos diversos"*; o "ou" é disjuntivo, e live tem lugares diversos. **Nunca vender live como equivalente ao presencial.**

O valor da live é pedagógico e de funil. Isso já basta — mas não confundir com compliance.

### 8.2 A cunha

> **NR-01 Anexo II 4.7.1** (extraído do PDF oficial do gov.br): *"O histórico do registro de acesso dos participantes (logs) deve ser mantido pelo prazo mínimo de 2 (dois) anos após o término da validade do curso."*

**Nenhum concorrente pesquisado exporta duração assistida** — Hotmart, Kiwify, Eduzz, Skool, Teachable, Kajabi, StreamYard, Circle. Só o Zoom. É a única feature do vertical com justificativa **regulatória**, e é trivial de construir.

### 8.3 Implementação

Heartbeat do cliente a cada 30s → Server Action → upsert em `live_attendance` (`last_seen_at`, `duracao_segundos`).

> ⚠️ **Limitação honesta:** com provider YouTube o heartbeat é **client-side e falsificável** (o iframe não expõe identidade do espectador; a Analytics API do YouTube não tem dimensão por espectador). Serve como métrica de produto e como log de acesso, **mas não é prova forte para auditoria de certificação**. Presença inviolável exige o vídeo passar por infra nossa (Cloudflare com signed URL por sessão, ou o palco WebRTC da fase 2, onde `participant_joined`/`participant_left` dão duração server-side). **Registrar isso no dia que a live virar parte de certificação NR.**

### 8.4 Risco de produto a acompanhar (fora do escopo de código)

A SMU está **em fase de teste**, sem risco ativo hoje. Ao virar produto:

- **Não vender NR-10 ou NR-35 100% online.** As duas normas são silentes quanto a modalidade, e o NR-01 1.7.9.1 exige que a NR específica **autorize expressamente** EAD para o conteúdo prático. Nenhuma das duas autoriza → a parte prática **não é válida** em EAD.
- Indício forte de **Portaria MTE 737 (DOU 01/06/2026)** tornando a prática da NR-10 explicitamente presencial a partir de ~jun/2027. ⚠️ Fonte: reprodução do DOU + LegisWeb, concordantes; **não verificado contra o PDF consolidado do gov.br**. Tratar como indício, reconfirmar antes de decidir produto.
- Modelo defensável: **teoria online (margem escalável) + prática presencial em centro parceiro**.
- **NR-23 não tem treinamento formal** (23.1.1 exige apenas "informações"). Não criar SKU de "certificado NR-23 com carga horária".

---

## 9. Rotas e arquivos

| Camada | Caminho | Nota |
|---|---|---|
| Migration | `supabase/migrations/20260721_live_events.sql` | tabelas, enums, CHECKs, índices |
| Portal | `src/lib/portal.ts` | `+ liveBelongsToPortal`, `+ LivePortal` |
| Tipos | `src/types/database.ts` | `LiveEvent*`, `LiveAttendance*`, `LiveMessage*` |
| Actions | `src/lib/actions/lives.ts` | CRUD + `assertAdmin` + guard de portal |
| Actions | `src/lib/actions/live-attendance.ts` | heartbeat |
| Actions | `src/lib/actions/live-chat.ts` | enviar/moderar |
| Cloudflare | `src/lib/cloudflare/stream.ts` | criar input, assinar URL |
| Público | `src/app/ao-vivo/page.tsx` | agenda, filtrada por portal (espelha `/cursos`) |
| Público | `src/app/ao-vivo/[slug]/page.tsx` | sala do evento |
| Aluno | `src/app/(dashboard)/dashboard/ao-vivo/page.tsx` | próximas lives da escola |
| Admin | `src/app/(admin)/admin/lives/page.tsx` + `[id]` | mesmo guard do `admin/cursos/[id]` |
| Player | `src/components/live/live-player.tsx` | despacho por provider |
| Player | `src/components/live/youtube-live-player.tsx` | |
| Player | `src/components/live/cloudflare-live-player.tsx` | |
| Chat | `src/components/live/live-chat.tsx` | Supabase Realtime |
| Gravação | reusa `lessons.youtube_id` | cai no `video-player.tsx` existente |

Segue os padrões existentes: Server Actions em `src/lib/actions/`, `assertAdmin()` para escrita, `createAdminClient()` (service_role), i18n via `useT`/`getServerT`, cores semânticas do tema.

---

## 10. Decidido NÃO construir

Cada item tem motivo, não é só corte de escopo:

| Item | Por quê |
|---|---|
| **Enquete/poll como feature de aprendizagem** | Audience response systems têm **g = 0.10 na faixa de 100-200 espectadores** — exatamente o tamanho de palestra. É feature de afeto, não de aprendizagem. O **quiz avaliativo** (retrieval practice, **g = 0.61**) é o que funciona — vem no spec de Q&A/quiz, e a enquete sai de graça da mesma UI. |
| **Leaderboard/gamificação na live** | Estudo longitudinal de 16 semanas: coorte gamificada teve **menos** motivação e **nota final pior**. Pode piorar o produto. |
| **Breakout rooms** | Evidência fraca e dependente de facilitação; estruturalmente impossível em player embutido em escala. |
| **Super Chat / gorjeta** | Distribuição power-law, Brasil não é cultura de gorjeta, vertical profissionalizante é o gênero que menos recebe. Receita de rounding error para engenharia real. |
| **Replay com chat sincronizado** | A Twitch, plataforma mais centrada em chat que existe, nunca construiu isso nativamente — é o sinal. Gera responsabilidade de moderação perpétua sobre "boa noite professor". **Persistir o Q&A** (estruturado, timestampado, vira FAQ do VOD) e descartar o chatter. |
| **Estúdio de navegador próprio** | O YouTube já tem um, grátis, sem mínimo de inscritos. |

---

## 11. Fases seguintes (specs próprios)

1. **Q&A com upvote + quiz avaliativo ao vivo** — maior valor/custo do backlog. Q&A: ~20 perguntas/sessão, **nenhuma plataforma BR tem**. Quiz: g=0.61 e **serve como a avaliação do Anexo II 4.6** (Clerk = "identificação e senha individual").
2. **Auto live → aula VOD** — ~50% dos inscritos nunca assistem ao vivo; custo marginal ~zero.
3. **PIX-first no checkout de live** — boleto leva 1-3 dias úteis e é **estruturalmente incompatível** com "a aula começa em 10 minutos". Asaas já suporta PIX nativo.
4. **Palco WebRTC** — só quando alguém pedir aluno no ar. Vencedor: **Daily.co (~US$7/mês)** para 4 publishers × 8h/mês; RTMP a US$0,015/min, o mais barato do mercado, sem taxa de plataforma. ⚠️ **IVS não consegue mandar RTMP para o YouTube** (só canal IVS ou S3) e **Mux Real-Time foi desligado em dez/2023** — dois caminhos que parecem bons e estão mortos.

---

## 12. Erros e casos de borda

| Caso | Comportamento |
|---|---|
| Evento `agendado`, aluno entra antes | Contagem regressiva; player só monta em `ao_vivo` |
| Transmissão cai e volta | `status` permanece `ao_vivo`; presença faz upsert, não duplica |
| Restrito, aluno sem matrícula | 403 na Server Action; **signed URL nunca é emitido** |
| Signed URL expira durante a live | Cliente pede renovação; falha → mensagem clara, não tela preta |
| `youtube_id` inválido/privado | Admin valida na criação; sala mostra estado de erro |
| Cloudflare indisponível | Erro explícito + aviso ao admin. **Sem fallback automático para YouTube** — publicaria conteúdo pago |
| Live encerrada sem gravação | `recording_lesson_id` fica nulo; admin resolve manualmente |

---

## 13. Testes

Vitest já está no projeto (`npm test`), e a auditoria de julho registrou **~0% de cobertura** — este spec não conserta isso, mas não piora.

**Testes unitários obrigatórios (lógica pura, sem I/O):**
- `liveBelongsToPortal` — matriz completa: `aula`/`main`/`ambos` × `aula`/`main`.
- Validação cruzada portal↔curso, incluindo `ambos` + `course_id` → rejeita.
- Derivação `acesso` → `provider` e os CHECKs correspondentes.
- Cálculo de `duracao_segundos` com reconexão (não duplica, não zera).

**Teste de gating (o que mais importa):** aluno sem matrícula + evento restrito → Server Action nega **e nenhum signed URL é gerado**. É o mesmo tipo de brecha dos P0 de julho (`markLessonComplete` sem checar matrícula) e merece o mesmo cuidado.

---

## 14. Ordem de implementação

Custo de infra **R$0 até o passo 6**.

| # | Entrega | Infra |
|---|---|---|
| 1 | Migration + tipos + `liveBelongsToPortal` + testes | R$0 |
| 2 | Admin CRUD com guard de portal | R$0 |
| 3 | Agenda pública + sala + `<LivePlayer>` YouTube | R$0 |
| 4 | Chat Realtime | R$0 |
| 5 | Log de presença | R$0 |
| 6 | Cloudflare Stream (provider `restrito`) | ~US$5/mês + uso |
| 7 | Gravação → aula VOD | R$0 |

Passos 1-5 já entregam mais live nativa que Hotmart, Kiwify e Eduzz — as três implementam "live" como **um campo de texto onde se cola URL do YouTube**, e todas vazam o chat para o YouTube.

---

## 15. Incertezas registradas

Nada aqui bloqueia a fase 1; tudo aqui deve ser reconfirmado antes de virar decisão de produto.

| # | Incerteza | Quando importa |
|---|---|---|
| 1 | Portaria MTE 737/2026 (NR-10 prática presencial) não verificada no PDF consolidado do gov.br | Antes de vender NR-10 |
| 2 | Quota por método do live chat do YouTube não é publicada | Só se espelharmos o chat |
| 3 | LL-HLS do Cloudflare está em **beta há ~3 anos** — sem SLA | Antes de live paga crítica |
| 4 | Suporte a stream não-listada no embed de chat não testado | Só se usarmos chat do YouTube |
| 5 | Datas de migration adiantadas (`20260716`, `20260720` > hoje) | Investigar à parte |
