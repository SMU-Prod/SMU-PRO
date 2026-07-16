-- ╔══════════════════════════════════════════════════╗
-- ║  Fecha escrita anônima: RLS + REVOKE grants anon ║
-- ╚══════════════════════════════════════════════════╝
-- Auditoria CTO 2026-07-16. blog_posts e ai_explanations estavam com RLS OFF e
-- a role anon (key pública, embutida no bundle) com INSERT/UPDATE/DELETE/TRUNCATE
-- — permitindo escrita anônima (XSS armazenado no /blog, envenenamento do cache
-- de IA, defacement). A migration 20260324_blog_rls.sql nunca foi aplicada (drift).
--
-- Todo acesso legítimo do app é server-side via service_role, que bypassa RLS e
-- ignora estes grants. Portanto o anon não precisa de escrita nenhuma. Fail-closed.
-- APLICADA EM PRODUÇÃO em 2026-07-16 (projeto pshynylvvkhhohftouoe).

-- ── blog_posts ──────────────────────────────────────
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Leitura pública só de posts publicados (defense-in-depth; hoje o app lê via
-- service_role, mas mantém a porta certa aberta caso algo leia via anon).
DROP POLICY IF EXISTS "blog_public_read" ON blog_posts;
CREATE POLICY "blog_public_read" ON blog_posts
  FOR SELECT USING (publicado = true);

-- Nota: NÃO criamos policies admin baseadas em auth.uid() — este app não tem
-- ponte Clerk→Supabase, auth.uid() é sempre NULL aqui. Admin escreve via
-- service_role (createAdminClient), que bypassa RLS.
REVOKE INSERT, UPDATE, DELETE, TRUNCATE ON blog_posts FROM anon, authenticated;

-- ── ai_explanations ────────────────────────────────
-- Cache de IA servido a alunos: anon não deve tocar de forma alguma (nem ler,
-- para não permitir envenenamento nem dump). Só service_role acessa.
ALTER TABLE ai_explanations ENABLE ROW LEVEL SECURITY;
REVOKE INSERT, UPDATE, DELETE, TRUNCATE, SELECT ON ai_explanations FROM anon, authenticated;
