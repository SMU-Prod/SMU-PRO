# SMU PRO

Plataforma EdTech completa para a **SMU — Escola de Música e Eventos**. Sistema de cursos online com vídeo-aulas, quizzes, certificados, pagamentos e painel administrativo.

## Stack Tecnológico

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| Runtime | React | 19.2.3 |
| Linguagem | TypeScript | 5.x (strict) |
| Estilização | Tailwind CSS | 4.x |
| Autenticação | Clerk | 7.0.1 |
| Banco de Dados | Supabase (PostgreSQL) | 2.98.0 |
| Pagamentos | Asaas | Custom client |
| Email | Resend | 6.9.3 |
| Observabilidade | Highlight.io | 7.9.38 |
| Feature Flags | LaunchDarkly | 9.10.9 |
| Formulários | React Hook Form + Zod | 7.71 / 4.3 |
| Rich Text | TipTap | 3.20 |
| Gráficos | Recharts | 3.7.0 |
| Estado | Zustand | 5.0.11 |
| PDF | @react-pdf/renderer | 4.3.2 |

## Arquitetura do Projeto

```
smu-pro/
├── src/
│   ├── app/                        # Next.js 15 App Router
│   │   ├── (admin)/admin/          # 10 rotas admin (route group)
│   │   ├── (dashboard)/            # 9 rotas autenticadas (route group)
│   │   ├── api/                    # 8 endpoints REST
│   │   └── [public pages]          # 9 páginas públicas
│   ├── components/                 # 26 componentes React
│   │   ├── admin/       (11)       # Painel administrativo
│   │   ├── lesson/      (4)        # Player de aulas
│   │   ├── layout/      (3)        # Sidebar, Header
│   │   ├── ui/          (5)        # Primitivos (Card, Button, Badge...)
│   │   ├── course/      (1)        # Botão de matrícula
│   │   ├── payment/     (1)        # UI de pagamento
│   │   └── profile/     (1)        # Formulário de perfil
│   ├── lib/                        # Lógica server-side
│   │   ├── actions/     (6 files)  # 51 server actions
│   │   ├── supabase/    (2)        # Clients (anon + admin)
│   │   ├── asaas.ts                # Gateway de pagamento
│   │   ├── email.ts                # Templates Resend
│   │   ├── launchdarkly.ts         # Feature flags
│   │   └── utils.ts                # Helpers
│   ├── types/database.ts           # Tipos do banco (237 linhas)
│   ├── middleware.ts               # Auth Clerk
│   └── instrumentation.ts          # Highlight.io
├── supabase/
│   ├── schema.sql                  # Schema completo (14 tabelas)
│   └── migrations/                 # Migrations incrementais
├── .github/workflows/ci.yml        # CI/CD (lint + typecheck + build)
└── [configs]                       # next, tsconfig, postcss, eslint
```

### Padrão Arquitetural

- **Server Components** por padrão — Client Components apenas para interatividade
- **Server Actions** para mutações (não API routes para CRUD interno)
- **API Routes** apenas para webhooks, pagamentos e certificados
- **Admin Client** (`createAdminClient()`) bypassa RLS para operações privilegiadas
- **Separação por domínio**: actions, components, types organizados por feature

## Banco de Dados

**14 Tabelas** + 2 Views + 8 Enums + 4 Functions + 5 Triggers

| Tabela | Descrição |
|---|---|
| `users` | Contas (synced com Clerk via webhook) |
| `courses` | Catálogo de cursos |
| `modules` | Módulos de curso |
| `lessons` | Aulas individuais |
| `enrollments` | Matrículas (unique: user_id + course_id) |
| `progress` | Progresso por aula (unique: user_id + lesson_id) |
| `quizzes` | Definições de quiz |
| `quiz_questions` | Questões (multiple_choice, true_false) |
| `quiz_options` | Opções de resposta |
| `quiz_attempts` | Tentativas do aluno |
| `notes` | Notas com timestamp de vídeo |
| `certificates` | Certificados com código de verificação |
| `course_ratings` | Avaliações (unique: user_id + course_id) |
| `activity_log` | Audit trail (jsonb metadata) |
| `collections` | Trilhas de aprendizado |
| `collection_courses` | Relação collection-curso |
| `webhook_log` | Deduplicação de webhooks |
| `settings` | Configurações da plataforma |

**Segurança**: RLS habilitado em todas as tabelas com 53+ policies. Functions auxiliares: `is_admin()`, `user_has_course_access()`.

## Fluxos Principais

### Autenticação

```
Usuário → Clerk (Login/Cadastro)
  → Webhook → /api/webhooks/clerk (verificação Svix)
    → Upsert users table no Supabase
    → Email de boas-vindas (Resend)
  → Middleware intercepta rotas protegidas
```

### Pagamento

```
Aluno → Página do curso → EnrollButton
  → POST /api/payments/checkout
    → Cria/recupera customer no Asaas
    → Cria enrollment (status: pendente)
    → Cria pagamento (PIX / Boleto / Cartão)
  → Aluno paga
  → Asaas webhook → /api/webhooks/asaas
    → Verifica token (timingSafeEqual)
    → Deduplicação via webhook_log
    → Ativa enrollment (status: ativo)
    → Email de confirmação
```

**Métodos suportados**: PIX (QR code + copy-paste), Boleto (3 dias), Cartão de Crédito.

### Progresso e Certificação

```
Aluno → LessonPlayer → marca aula completa
  → Server Action: markLessonComplete()
    → Upsert progress (concluido: true)
    → DB Trigger: recalculate_enrollment_progress()
    → Se 100%: trigger cria certificado automaticamente
    → Email de conclusão
```

## Painel Admin

| Rota | Funcionalidade |
|---|---|
| `/admin` | Dashboard com métricas |
| `/admin/cursos` | Lista de cursos + bulk actions |
| `/admin/cursos/novo` | Wizard de criação (5 etapas) |
| `/admin/cursos/[id]` | Detalhes + 4 tabs (conteúdo, alunos, quiz, analytics) |
| `/admin/usuarios` | Gerenciamento de usuários com filtros |
| `/admin/trilhas` | Collections / trilhas de aprendizado |
| `/admin/configuracoes` | Configurações do sistema |
| `/admin/relatorios` | Analytics e relatórios |
| `/admin/certificados` | Certificados emitidos |

**Roles**: `admin` (acesso total) e `content_manager` (criar/editar sem delete/publish).

## Segurança

- Webhook verification com `timingSafeEqual` (Asaas) e Svix (Clerk)
- Sanitização XSS com `isomorphic-dompurify` no conteúdo rico
- File upload com whitelist de extensões server-side
- Verificação de enrollment antes de submissão de quiz
- Deduplicação de webhooks via unique constraint
- Proteção contra double charge no checkout
- Error boundaries customizados por route group
- Mensagens de erro genéricas para o client (sem leak de internals)

## Setup do Projeto

### Pré-requisitos

- Node.js 20+
- npm
- Conta Supabase (projeto criado)
- Conta Clerk (aplicação criada)
- Conta Asaas (sandbox para dev)
- Conta Resend (domínio verificado)

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/SMU-Prod/SMU-PRO.git
cd smu-pro

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local
```

### Variáveis de Ambiente

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=

# Asaas
ASAAS_API_KEY=
ASAAS_WEBHOOK_TOKEN=
ASAAS_ENVIRONMENT=sandbox  # sandbox | production

# Resend
RESEND_API_KEY=

# Highlight.io
NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID=

# LaunchDarkly
LAUNCHDARKLY_SDK_KEY=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Banco de Dados

Execute os scripts SQL no Supabase SQL Editor na seguinte ordem:

1. `supabase/schema.sql` — Schema completo (tabelas, enums, functions, triggers, RLS)
2. `supabase/migrations/001_fixes.sql` — Correções iniciais
3. `supabase/migrations/002_quiz_question_types.sql` — Tipos de questão
4. `supabase/migrations/003_collections_and_fixes.sql` — Collections, webhook_log, fixes de RLS e progresso

### Webhooks

Configure os webhooks nos serviços externos:

**Clerk** (Painel Clerk → Webhooks):
- URL: `https://seu-dominio.com/api/webhooks/clerk`
- Events: `user.created`, `user.updated`, `user.deleted`

**Asaas** (Minha Conta → Integrações → Webhooks):
- URL: `https://seu-dominio.com/api/webhooks/asaas`
- Events: `PAYMENT_RECEIVED`, `PAYMENT_CONFIRMED`, `PAYMENT_REFUNDED`, `PAYMENT_OVERDUE`

### Executar

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

## CI/CD

Pipeline GitHub Actions (`.github/workflows/ci.yml`):

- **Trigger**: push para `main`/`develop` e PRs para `main`
- **Steps**: checkout → Node 20 → `npm ci` → lint → typecheck → build
- Variáveis de ambiente configuradas via GitHub Secrets

## Monitoramento

| Ferramenta | Cobertura |
|---|---|
| Highlight.io (Client) | Session replay, network recording, error tracking |
| Highlight.io (Server) | Backend errors via `instrumentation.ts` |
| LaunchDarkly | Feature flags |
| Activity Log | Tabela no banco com audit trail |
| Health Check | `GET /api/health` — status da app + conectividade do banco |

## Deploy

A plataforma é otimizada para deploy na **Vercel**:

```bash
# Via Vercel CLI
npx vercel --prod
```

Ou conecte o repositório GitHub ao projeto Vercel para deploy automático.

**Checklist de deploy**:
- [ ] Todas as env vars configuradas na Vercel
- [ ] Migrations executadas no Supabase
- [ ] Webhooks apontando para o domínio de produção
- [ ] `ASAAS_ENVIRONMENT=production`
- [ ] Domínio verificado no Resend
- [ ] `NEXT_PUBLIC_APP_URL` com o domínio final

## Licença

Projeto proprietário — SMU Escola de Música e Eventos. Todos os direitos reservados.
