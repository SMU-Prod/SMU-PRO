# Portal de Simuladores SMU — Design

**Data:** 2026-07-16
**Status:** Aprovado (brainstorming) → aguardando plano de implementação

## Problema

A plataforma SMU tem ~176 simuladores HTML (arquivos self-contained em `simuladores/`,
organizados por segmento), hoje acessíveis apenas embutidos dentro das aulas. Não há
um lugar único onde o aluno veja e opere todos. Falta também um índice estruturado
desses simuladores — o que impede tanto um portal quanto auditoria e reuso futuros.

## Objetivo

Uma página-portal, exclusiva para alunos logados, que reúne todos os simuladores
únicos (~155 após deduplicação) num só lugar, navegável como um portal de games:
prateleiras por segmento, busca, filtros, e cada simulador aberto em tela cheia.

## Não-objetivos (YAGNI)

- **Não** conserta os simuladores. O portal os expõe; se um estiver quebrado, aparece
  quebrado (a qualidade dos simuladores é o projeto separado #3 — auditoria).
- **Não** inclui screenshots reais nos cards no lançamento (fase 2).
- **Não** inclui favoritos, histórico, ranking ou gamificação.
- **Não** amarra simulador a matrícula específica (qualquer aluno logado vê todos).

## Decisões (do brainstorming)

| Tema | Decisão |
|------|---------|
| Acesso | Só alunos logados. Qualquer conta logada vê todos os simuladores. |
| Organização | Página única estilo Steam/Netflix: prateleiras por segmento + busca + filtros. |
| Escopo | Todos os simuladores únicos (~155), deduplicando pares `-real`/simples (mantém o `-real`). |
| Thumbnails | Arte por segmento (cor + ícone + nome) no lançamento; screenshots reais como fase 2. |
| Fullscreen | Cada simulador abre em rota própria, ocupando a tela, com botão de Fullscreen API. Resolve o projeto #2. |

## Arquitetura

### 1. Catálogo (fonte única)

Um script (`scripts/build-simulator-catalog.mjs`) varre `simuladores/`, e para cada
`.html` (ignorando helpers `_*`):
- extrai o `<title>` e limpa (remove sufixos "(SMU)", "— Simulador", etc.);
- deriva o **segmento** da pasta de topo (som, luz, dj, video, producao, efeito);
- deriva o **nível** (`basico` se a pasta termina em `-basico`, `legado` se `-legado`, senão `avancado`);
- deriva o **tipo** (`real` se nome termina em `-real`, `lab` se `-lab`, senão `sim`);
- deduplifica pares: se existe `x-real.html` e `x.html`, mantém só o `-real`.

Saída: `src/lib/simulators/catalog.ts` exportando um array tipado `Simulator[]`:

```ts
type Simulator = {
  id: string;        // slug único, ex: "som-yamaha-cl5"
  titulo: string;    // limpo, ex: "Yamaha CL5 — CL Editor"
  segmento: "som" | "luz" | "dj" | "video" | "producao" | "efeito";
  nivel: "basico" | "avancado" | "legado";
  tipo: "real" | "lab" | "sim";
  arquivo: string;   // caminho servido, ex: "/simuladores/som/yamaha-cl5-real.html"
};
```

O catálogo é gerado (commitado) e revisado uma vez; regenerável quando novos
simuladores forem adicionados.

### 2. Servir os HTMLs

Passo de build (`prebuild` ou dentro do script de catálogo) copia `simuladores/` →
`public/simuladores/`. Assim são servidos estáticos (CDN) e embutidos por `<iframe>`.
Os simuladores já são self-contained (CSS+JS inline), então funcionam isolados sem
alteração. `public/simuladores/` entra no `.gitignore` (derivado) ou é commitado —
decisão do plano de implementação (provável: gitignore + gerar no build).

### 3. Rotas (ambas exigem login)

- **`/simuladores`** — home do portal. Server Component: lê o catálogo, agrupa por
  segmento, renderiza prateleiras. Busca e filtros são client-side sobre o catálogo
  (que é pequeno — ~155 itens de metadados).
- **`/simuladores/[id]`** — página do simulador. Resolve o item pelo id no catálogo
  (404 se não existe), renderiza um `<iframe src={arquivo}>` ocupando a viewport,
  com barra mínima: voltar + botão "Tela cheia" (Fullscreen API sobre o iframe).

### 4. Autenticação

O middleware protege `/simuladores/*` (não está em `isPublicRoute`): visitante sem
sessão é levado ao login. Segue o padrão já usado nas rotas de dashboard.

## Experiência (UI)

- **Home:** título do portal + campo de busca no topo. Abaixo, uma prateleira por
  segmento (Som, Luz, DJ, Vídeo, Produção, Efeitos), cada uma com os cards do segmento.
  Filtros (nível: básico/avançado/legado; tipo: réplica/lab/simulador) filtram a grade.
- **Card:** arte por segmento (cor + ícone do segmento) + título do equipamento +
  badges (nível, tipo). Clique → `/simuladores/[id]`.
- **Página do simulador:** iframe em tela cheia; botão voltar; botão de fullscreen real.
  Em telas pequenas, o iframe ocupa 100% e o simulador cuida da própria responsividade.

## Segmentos e volume (referência)

| Segmento | Pastas | ~Bruto |
|----------|--------|--------|
| Som | som, som-basico | 32 |
| Luz | luz, luz-basico | 38 |
| DJ | dj | 21 |
| Vídeo | video, video-basico | 22 |
| Produção | producao, producao-basico, producao-legado | 45 |
| Efeitos | efeito, efeito-basico | 29 |

Total bruto ~187; ~155 após deduplicar pares `-real`/simples.

## Fases de entrega

1. Catálogo + cópia para public + rota home com prateleiras e cards (arte por segmento)
2. Rota do simulador individual com fullscreen
3. Busca e filtros na home
4. (depois) Screenshots reais nos cards + link do portal no menu do dashboard

## Riscos

- **Simuladores quebrados aparecem quebrados** — esperado; qualidade é o projeto #3.
- **Peso do deploy** — ~155 HTMLs + assets em public. Gerar no build mitiga o repo;
  medir o tamanho final.
- **Títulos inconsistentes** — a limpeza no script pode não cobrir todos os formatos;
  o catálogo é revisável manualmente após gerado.
