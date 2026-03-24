-- ╔══════════════════════════════════════════════════╗
-- ║  Blog Posts — Row Level Security Policies       ║
-- ╚══════════════════════════════════════════════════╝

-- Habilitar RLS (idempotente)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- ── Leitura pública: apenas posts publicados ──
DROP POLICY IF EXISTS "blog_public_read" ON blog_posts;
CREATE POLICY "blog_public_read" ON blog_posts
  FOR SELECT
  USING (publicado = true);

-- ── Admin: leitura total (incluindo rascunhos) ──
DROP POLICY IF EXISTS "blog_admin_read" ON blog_posts;
CREATE POLICY "blog_admin_read" ON blog_posts
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.clerk_id = auth.uid()::text
        AND users.role IN ('admin', 'content_manager')
    )
  );

-- ── Admin: inserir posts ──
DROP POLICY IF EXISTS "blog_admin_insert" ON blog_posts;
CREATE POLICY "blog_admin_insert" ON blog_posts
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.clerk_id = auth.uid()::text
        AND users.role IN ('admin', 'content_manager')
    )
  );

-- ── Admin: atualizar posts ──
DROP POLICY IF EXISTS "blog_admin_update" ON blog_posts;
CREATE POLICY "blog_admin_update" ON blog_posts
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.clerk_id = auth.uid()::text
        AND users.role IN ('admin', 'content_manager')
    )
  );

-- ── Admin: deletar posts ──
DROP POLICY IF EXISTS "blog_admin_delete" ON blog_posts;
CREATE POLICY "blog_admin_delete" ON blog_posts
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.clerk_id = auth.uid()::text
        AND users.role IN ('admin', 'content_manager')
    )
  );

-- ── Service role (backend): acesso total para increment de views ──
-- O service_role do Supabase (createAdminClient) já bypassa RLS por padrão,
-- então não precisa de policy específica. As policies acima cobrem:
-- • Visitantes anônimos → leem apenas posts publicados
-- • Admins/Content Managers → CRUD completo
-- • Backend (service_role) → acesso irrestrito via createAdminClient
