-- ╔══════════════════════════════════════════════════╗
-- ║  Chat da Live — autor na mensagem                ║
-- ╚══════════════════════════════════════════════════╝
-- Spec: docs/superpowers/specs/2026-07-15-lives-aulas-palestras-podcasts-design.md §6
--       ("chat em tempo real com identidade Clerk")
--
-- POR QUE DESNORMALIZADO, e nao um join com users:
-- o Realtime entrega a LINHA CRUA de live_messages no navegador — postgres_changes
-- nao faz join. Alem disso a policy de RLS do anon nao le a tabela users. Logo, se
-- o nome nao estiver na propria linha, a mensagem chega anonima no cliente. Nao e
-- conveniencia: e a unica forma que funciona neste caminho.
--
-- autor_role e um SNAPSHOT de quem a pessoa era quando falou (nao segue mudanca de
-- cargo depois). Num chat de aula, distinguir a mensagem do instrutor e a
-- informacao mais util da tela — e o que o YouTube resolve com badge de moderador.

ALTER TABLE live_messages
  ADD COLUMN IF NOT EXISTS autor_nome TEXT,
  ADD COLUMN IF NOT EXISTS autor_role user_role;

-- Backfill das mensagens que ja existem, para o NOT NULL nao quebrar.
UPDATE live_messages m
SET autor_nome = COALESCE(u.nome, 'Aluno'),
    autor_role = u.role
FROM users u
WHERE m.user_id = u.id AND m.autor_nome IS NULL;

-- Sobra alguma sem usuario correspondente? Nao deveria (ha FK), mas o NOT NULL
-- abaixo nao pode falhar por causa de um caso de borda.
UPDATE live_messages SET autor_nome = 'Aluno' WHERE autor_nome IS NULL;

ALTER TABLE live_messages ALTER COLUMN autor_nome SET NOT NULL;
