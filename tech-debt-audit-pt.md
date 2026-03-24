# Auditoria de Dívida Técnica — SMU PRO

**Plataforma LMS | Next.js 16 · Supabase · Clerk · Asaas**
**103 arquivos fonte | 80 dependências | 14 rotas de API**
**Data: 9 de março de 2026**

---

## Resumo Executivo

Esta auditoria identificou **15 itens de dívida técnica** em 6 categorias no codebase do SMU PRO. A descoberta mais crítica é a cobertura de testes praticamente inexistente: apenas 2 dos 103 arquivos fonte possuem testes, deixando processamento de pagamentos, webhooks e toda a lógica de negócio completamente desprotegidos contra regressões.

O codebase tem fundações sólidas (TypeScript strict mode, Next.js 16 moderno, Supabase com RLS), mas o desenvolvimento rápido de features acumulou dívida principalmente em testes, type safety, duplicação de código e arquitetura de componentes.

| Crítico | Alto | Médio | Baixo |
|---------|------|-------|-------|
| 1 item | 6 itens | 5 itens | 3 itens |

**Estimativa total de remediação:** 10–14 semanas (faseado junto ao desenvolvimento de features).

---

## Matriz de Prioridade

Cada item é pontuado com: **Prioridade = (Impacto + Risco) × (6 − Esforço)**. Pontuações mais altas indicam itens de alto impacto e relativamente fáceis de corrigir.

| ID | Cat. | Título | Sev. | Imp | Risco | Esf | Score | Estimativa |
|----|------|--------|------|-----|-------|-----|-------|------------|
| TD-001 | Teste | Cobertura de testes quase zero (2/103 arquivos) | Crítico | 5 | 5 | 4 | 20 | 3–4 semanas |
| TD-004 | Código | Helpers de auth duplicados (resolveUserUUID, assertAdmin) | Alto | 4 | 4 | 1 | 40 | 2–3 dias |
| TD-007 | Infra | Pipeline de CI não executa testes | Alto | 3 | 4 | 1 | 35 | 1 dia |
| TD-005 | Código | 12+ `.catch(() => {})` silenciando erros | Alto | 3 | 5 | 2 | 32 | 3–5 dias |
| TD-002 | Código | 78+ usos de `as any` burlando TypeScript | Alto | 4 | 5 | 3 | 27 | 1–2 semanas |
| TD-008 | Código | Magic strings para status, tamanhos, limites | Médio | 3 | 3 | 2 | 24 | 3–5 dias |
| TD-009 | Infra | console.log ao invés de logging estruturado | Médio | 3 | 3 | 2 | 24 | 3–5 dias |
| TD-010 | Doc | Documentação de API e arquitetura ausente | Médio | 3 | 3 | 2 | 24 | 3–5 dias |
| TD-012 | Infra | Validação de env loga warning ao invés de falhar | Médio | 2 | 4 | 1 | 30 | 1 dia |
| TD-003 | Arq. | Componentes gigantes (1.188 e 831 linhas) | Alto | 4 | 4 | 4 | 16 | 2–3 semanas |
| TD-006 | Arq. | Sem camada de acesso a dados (queries espalhadas) | Alto | 4 | 3 | 4 | 14 | 2–3 semanas |
| TD-011 | Arq. | Estrutura de rotas duplicada (redirects legados) | Médio | 2 | 2 | 1 | 20 | 1–2 dias |
| TD-013 | Dep. | 4 dependências potencialmente não utilizadas | Baixo | 2 | 1 | 1 | 15 | 1 dia |
| TD-014 | Infra | Sem containerização ou flexibilidade de deploy | Baixo | 2 | 2 | 2 | 16 | 2–3 dias |
| TD-015 | Doc | Sem templates de PR/issue ou guia de testes | Baixo | 2 | 1 | 1 | 15 | 1 dia |

---

## Achados Detalhados

### TD-001: Cobertura de testes quase zero — CRÍTICO

**Problema:** Apenas `asaas.test.ts` e `utils.test.ts` existem. As 12 rotas de API, 7 server actions, todos os componentes e handlers de webhook estão completamente sem testes. Os fluxos de pagamento e matrícula não possuem nenhuma rede de segurança.

**Correção recomendada:** Adicionar testes para o webhook de pagamento, checkout, server actions (courses, progress, quiz), e depois testes de componentes. Definir thresholds de cobertura mínima no CI.

---

### TD-002: 78+ usos de `as any` burlando TypeScript — ALTO

**Problema:** Queries do Supabase fazem cast para `any` em courses.ts (12x), collections.ts (6x), progress.ts (4x), quiz.ts (2x). A regra do ESLint `@typescript-eslint/no-explicit-any` está desabilitada. Causa raiz: queries relacionais do Supabase não possuem tipos gerados.

**Correção recomendada:** Gerar tipos via `supabase gen types typescript`. Criar helpers de query tipados que encapsulem os padrões `.from().select()`. Reabilitar a regra do ESLint como warning.

---

### TD-003: Componentes gigantes (1.188 e 831 linhas) — ALTO

**Problema:** `course-content-manager.tsx` (1.188 linhas) gerencia CRUD de módulos/aulas/quiz. `course-form.tsx` (831 linhas) gerencia formulário de 4 etapas + uploads. Também excedem limites: `lesson-player.tsx` (519 linhas), `quiz-tab.tsx` (463 linhas), `tts/route.ts` (687 linhas).

**Correção recomendada:** Dividir em ModuleManager, LessonEditor, QuizManager. Extrair etapas do formulário em componentes separados. Mover lógica de TTS para camada de serviço.

---

### TD-004: Helpers de auth duplicados — ALTO

**Problema:** `resolveUserUUID()` copiado identicamente em courses.ts, progress.ts, notifications.ts. `assertAdmin()` duplicado em courses.ts e users.ts com verificações de role levemente diferentes. A resolução de ID Clerk-para-Supabase é repetida em 15+ arquivos.

**Correção recomendada:** Criar `/lib/auth-helpers.ts` com `resolveUserUUID()`, `assertAdmin()`, `assertRole()` compartilhados. Importar em todos os lugares.

---

### TD-005: 12+ `.catch(() => {})` silenciando erros — ALTO

**Problema:** Criação de notificações, envio de emails e side-effects de webhooks engolem erros silenciosamente. Encontrado em users.ts, quiz.ts, courses.ts, certificates/generate, webhooks/asaas. Notificações ou emails que falham passam despercebidos.

**Correção recomendada:** Substituir por `.catch(err => logger.warn('non-critical', err))`. Adicionar logging estruturado. Monitorar taxas de falha silenciosa.

---

### TD-006: Sem camada de acesso a dados (queries espalhadas) — ALTO

**Problema:** Páginas admin, páginas do dashboard, rotas de API e server actions fazem queries diretamente no Supabase. `createAdminClient()` é chamado 96 vezes. Padrões complexos de select (course + modules + lessons) duplicados em múltiplos arquivos.

**Correção recomendada:** Criar `/lib/repositories/` com CourseRepository, EnrollmentRepository, UserRepository. Centralizar queries complexas. Reduzir chamadas de `createAdminClient()`.

---

### TD-007: Pipeline de CI não executa testes — ALTO

**Problema:** O workflow do GitHub Actions só executa lint, typecheck e build. `npm test` nunca é executado. Sem scanning de segurança, sem verificação de bundle size, sem validação do schema do banco.

**Correção recomendada:** Adicionar step `npm run test`. Adicionar step `npm audit`. Adicionar reporter de bundle size.

---

### TD-008: Magic strings para status, tamanhos e limites — MÉDIO

**Problema:** Status de matrícula (`'ativo'`, `'pendente'`, `'cancelado'`) hardcoded em todo lugar. PAGE_SIZE varia (20, 24) com nomenclatura inconsistente. Limites de arquivo (50MB), constantes de retry inline.

**Correção recomendada:** Criar `/lib/constants.ts` com STATUS, PAGE_SIZE, FILE_LIMITS. Usar tipo EnrollmentStatus do database.ts consistentemente.

---

### TD-009: console.log ao invés de logging estruturado — MÉDIO

**Problema:** 62+ statements de console.log. Handlers de webhook usam logging com emoji. Sem request IDs, sem contexto de usuário, sem níveis de log. Highlight.io só captura erros, não logs estruturados.

**Correção recomendada:** Adotar pino ou similar. Criar utilitário de logger com contexto (requestId, userId). Substituir chamadas de console.log.

---

### TD-010: Documentação de API e arquitetura ausente — MÉDIO

**Problema:** 14 rotas de API sem documentação. Sem ADRs. Sem guia de integração de webhooks. README cobre o básico mas não existe diretório `/docs/`. Tipos em database.ts (237 linhas) sem documentação de campos.

**Correção recomendada:** Criar `/docs/` com API.md, ARCHITECTURE.md, DATABASE.md. Adicionar JSDoc em server actions e tipos.

---

### TD-011: Estrutura de rotas duplicada (redirects legados) — MÉDIO

**Problema:** Rotas em `/cursos/[slug]/aulas/[lessonId]` redirecionam para `/dashboard/cursos/[slug]/aulas/[lessonId]`. Padrão de compatibilidade retroativa que adiciona confusão.

**Correção recomendada:** Documentar o padrão de redirect. Planejar remoção com redirect 301 no nível de CDN/middleware.

---

### TD-012: Validação de env loga warning ao invés de falhar — MÉDIO

**Problema:** `env.ts` `validateEnv()` só faz `console.warn` para variáveis ausentes. Comentário diz "não quebrar builds", mas isso mascara problemas de configuração em produção. `CLERK_SECRET_KEY` ausente só aparecerá quando o middleware de auth rodar.

**Correção recomendada:** Lançar erros em produção, warn em desenvolvimento. Fail fast para secrets críticos.

---

### TD-013: 4 dependências potencialmente não utilizadas — BAIXO

**Problema:** recharts, date-fns, @react-pdf/renderer, @radix-ui/react-tooltip sem imports encontrados em src/. Impacto no bundle size e overhead de manutenção.

**Correção recomendada:** Verificar uso. Remover pacotes não utilizados. Rodar `depcheck` para análise automatizada.

---

### TD-014: Sem containerização ou flexibilidade de deploy — BAIXO

**Problema:** Sem Dockerfile, docker-compose ou configuração de deploy fora da Vercel. Preso a uma única plataforma. Sem ambiente local full-stack com banco de dados.

**Correção recomendada:** Criar Dockerfile e docker-compose.yml para desenvolvimento local e portabilidade de deploy.

---

### TD-015: Sem templates de PR/issue ou guia de testes — BAIXO

**Problema:** Diretório `.github/` existe mas sem templates de PR, templates de issue e guia de testes. Qualidade de PR inconsistente, sem caminho de onboarding para escrever testes.

**Correção recomendada:** Adicionar PULL_REQUEST_TEMPLATE.md, templates de issue, guia TESTING.md.

---

## Plano de Remediação Faseado

Este plano é projetado para rodar junto ao desenvolvimento de features, alocando ~20–30% da capacidade da sprint para redução de dívida.

### Fase 1: Fundação (Semanas 1–2)

**Objetivo:** Estabelecer redes de segurança e quick wins antes de refatorações mais profundas.

1. **TD-007** — Adicionar execução de testes e npm audit ao pipeline de CI (1 dia)
2. **TD-004** — Extrair helpers de auth compartilhados para `/lib/auth-helpers.ts` (2–3 dias)
3. **TD-005** — Substituir `.catch(() => {})` silenciosos por logging estruturado de erros (3–5 dias)
4. **TD-012** — Fazer validação de env falhar em produção (1 dia)

### Fase 2: Cobertura de Testes (Semanas 3–6)

**Objetivo:** Cobrir caminhos críticos de pagamento e matrícula com testes.

1. Escrever testes para handler do webhook Asaas (pagamento recebido, reembolso, vencimento)
2. Escrever testes para rota de checkout, criação de matrícula, geração de certificado
3. Escrever testes para server actions (courses, progress, quiz, users)
4. Definir thresholds mínimos de cobertura (meta: 60% para caminhos críticos)

### Fase 3: Arquitetura (Semanas 7–10)

**Objetivo:** Melhorar organização do código, type safety e estrutura de componentes.

1. **TD-002** — Gerar tipos do Supabase e substituir casts `as any` progressivamente
2. **TD-003** — Dividir `course-content-manager.tsx` em ModuleManager, LessonEditor, QuizManager
3. **TD-003** — Dividir `course-form.tsx` em componentes de etapa com form context compartilhado
4. **TD-006** — Criar camada de repository para as 3 entidades mais consultadas (courses, enrollments, users)
5. **TD-008** — Centralizar constantes (status, tamanhos de página, limites de arquivo)

### Fase 4: Polimento (Semanas 11–14)

**Objetivo:** Documentação, melhorias de infraestrutura e limpeza de dependências.

1. **TD-009** — Substituir console.log por biblioteca de logging estruturado
2. **TD-010** — Criar `/docs/` com referência de API, guia de arquitetura, docs do banco
3. **TD-011** — Limpar redirects de rotas legadas
4. **TD-013** — Auditar e remover dependências não utilizadas
5. **TD-014** — Adicionar Dockerfile e docker-compose para desenvolvimento local
6. **TD-015** — Adicionar templates de PR/issue e guia de testes

---

## Metodologia de Pontuação

Cada item foi avaliado em três dimensões (escala 1–5):

- **Impacto:** Quanto isso desacelera o time? (1 = atrito menor, 5 = bloqueio importante)
- **Risco:** O que acontece se não corrigirmos? (1 = cosmético, 5 = incidentes em produção)
- **Esforço:** Quão difícil é a correção? (1 = trivial, 5 = refatoração grande)

**Score de Prioridade = (Impacto + Risco) × (6 − Esforço)**

A fórmula recompensa itens de alto impacto e alto risco que são relativamente fáceis de corrigir. O plano faseado respeita essas prioridades enquanto agrupa trabalho relacionado para eficiência.
