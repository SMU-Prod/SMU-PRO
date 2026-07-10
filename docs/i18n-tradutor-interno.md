# Tradutor interno da interface (i18n EN/ES)

A interface do portal **aula** é traduzida por um dicionário PT→EN/ES consultado
em tempo de execução. Este documento explica como manter **tudo traduzido
automaticamente** quando você altera ou adiciona textos da interface.

> Escopo: **interface** (menus, botões, rótulos, mensagens). O conteúdo dos
> cursos (aulas, quizzes) é traduzido por outro mecanismo e **não** é tratado aqui.

## Como funciona

Toda string de interface é envolvida em `t("…")`:

```tsx
import { useT } from "@/lib/i18n/ui";        // client components
const t = useT();
<button>{t("Salvar")}</button>

// server components:
import { getServerT } from "@/lib/i18n/server";
const t = await getServerT();
<h1>{t("Meus Cursos")}</h1>
```

A função `tr(texto, idioma)` resolve a tradução nesta ordem:

1. **`dict.ts` → `DICT`** — traduções curadas à mão (têm prioridade).
2. **`dict.generated.ts` → `DICT_AUTO`** — preenchido pelo **tradutor interno**.
3. **Fallback** — devolve o próprio texto em PT (é o que aparece quando falta tradução).

Ou seja: se uma string em `t("…")` não está em nenhum dos dois dicionários, ela
aparece em português mesmo com o idioma em EN/ES. O tradutor interno existe para
que isso **não aconteça**.

## O tradutor interno

Script: [`scripts/i18n-sync.mjs`](../scripts/i18n-sync.mjs). Ele varre `src/`,
encontra toda string usada em `t("…")`, descobre as que ainda não têm tradução e
as traduz para EN/ES via OpenAI (modelo `gpt-4.1`, a mesma infra que o app já usa),
gravando em `src/lib/i18n/dict.generated.ts`.

Requer `OPENAI_API_KEY` (lida do ambiente, de `.env.local` ou `.env`).

```bash
npm run i18n:sync     # traduz o que falta e grava dict.generated.ts
npm run i18n:check    # só verifica; sai com erro se faltar (não precisa de chave)
npm run i18n:list     # lista as strings sem tradução
```

Propriedades importantes:

- **Idempotente e não-destrutivo:** rodar de novo só **adiciona** chaves novas;
  nunca sobrescreve traduções existentes. Correções manuais são preservadas.
- **`DICT` (curado) tem prioridade:** para ajustar uma tradução específica à mão,
  adicione/edite a entrada em `dict.ts` — ela vence a versão automática.
- **Grava incrementalmente:** se interromper no meio, o que já traduziu fica salvo.

## Automático a cada commit

O hook de pré-commit ([`.husky/pre-commit`](../.husky/pre-commit)) roda o tradutor
ao commitar. Se `OPENAI_API_KEY` estiver disponível, ele traduz as strings novas e
inclui `dict.generated.ts` no commit; caso contrário, apenas avisa. **Nunca bloqueia
o commit.** Para garantir cobertura no CI, use `npm run i18n:check` (sem chave).

## Fluxo ao adicionar/alterar texto da interface

1. Escreva o texto sempre dentro de `t("Texto em português")`.
2. Rode `npm run i18n:sync` (ou apenas commite, se o hook estiver ativo).
3. Pronto — EN/ES preenchidos. Se quiser refinar alguma tradução, edite em `dict.ts`.
