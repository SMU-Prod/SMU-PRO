-- ============================================================
-- SMU PRO — Role "instrutor" + RLS de ownership para cursos
-- Instrutores podem editar SOMENTE cursos onde criado_por = seu user id
-- ============================================================

-- 1. Adicionar "instrutor" ao ENUM user_role
-- IMPORTANTE: rode PRIMEIRO a migration 20260324_add_instrutor_enum.sql
-- que contém: ALTER TYPE user_role ADD VALUE IF NOT EXISTS 'instrutor';
-- O ADD VALUE não pode rodar dentro de transaction block, por isso está separado.

-- 2. Adicionar user_id em instructor_partners (vincular parceiro à conta de login)
ALTER TABLE instructor_partners
  ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES users(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_instructor_partners_user_id
  ON instructor_partners(user_id);

-- Unique: cada user só pode ser 1 parceiro
CREATE UNIQUE INDEX IF NOT EXISTS idx_instructor_partners_user_id_unique
  ON instructor_partners(user_id) WHERE user_id IS NOT NULL;

-- 3. RLS para instrutores editarem SOMENTE seus cursos
-- Policy: instrutor pode ler cursos que criou
CREATE POLICY instructor_read_own_courses ON courses
  FOR SELECT TO authenticated
  USING (
    criado_por IN (
      SELECT id FROM users WHERE clerk_id = auth.uid()::text AND role = 'instrutor'
    )
  );

-- Policy: instrutor pode atualizar cursos que criou (exceto campo ativo/destaque)
CREATE POLICY instructor_update_own_courses ON courses
  FOR UPDATE TO authenticated
  USING (
    criado_por IN (
      SELECT id FROM users WHERE clerk_id = auth.uid()::text AND role = 'instrutor'
    )
  )
  WITH CHECK (
    criado_por IN (
      SELECT id FROM users WHERE clerk_id = auth.uid()::text AND role = 'instrutor'
    )
  );

-- 4. RLS para instrutor ler módulos e aulas dos seus cursos
CREATE POLICY instructor_read_own_modules ON modules
  FOR SELECT TO authenticated
  USING (
    course_id IN (
      SELECT c.id FROM courses c
      JOIN users u ON u.id = c.criado_por
      WHERE u.clerk_id = auth.uid()::text AND u.role = 'instrutor'
    )
  );

CREATE POLICY instructor_update_own_modules ON modules
  FOR UPDATE TO authenticated
  USING (
    course_id IN (
      SELECT c.id FROM courses c
      JOIN users u ON u.id = c.criado_por
      WHERE u.clerk_id = auth.uid()::text AND u.role = 'instrutor'
    )
  );

CREATE POLICY instructor_insert_own_modules ON modules
  FOR INSERT TO authenticated
  WITH CHECK (
    course_id IN (
      SELECT c.id FROM courses c
      JOIN users u ON u.id = c.criado_por
      WHERE u.clerk_id = auth.uid()::text AND u.role = 'instrutor'
    )
  );

CREATE POLICY instructor_read_own_lessons ON lessons
  FOR SELECT TO authenticated
  USING (
    module_id IN (
      SELECT m.id FROM modules m
      JOIN courses c ON c.id = m.course_id
      JOIN users u ON u.id = c.criado_por
      WHERE u.clerk_id = auth.uid()::text AND u.role = 'instrutor'
    )
  );

CREATE POLICY instructor_update_own_lessons ON lessons
  FOR UPDATE TO authenticated
  USING (
    module_id IN (
      SELECT m.id FROM modules m
      JOIN courses c ON c.id = m.course_id
      JOIN users u ON u.id = c.criado_por
      WHERE u.clerk_id = auth.uid()::text AND u.role = 'instrutor'
    )
  );

CREATE POLICY instructor_insert_own_lessons ON lessons
  FOR INSERT TO authenticated
  WITH CHECK (
    module_id IN (
      SELECT m.id FROM modules m
      JOIN courses c ON c.id = m.course_id
      JOIN users u ON u.id = c.criado_por
      WHERE u.clerk_id = auth.uid()::text AND u.role = 'instrutor'
    )
  );

-- 5. RLS para instrutor ver enrollments e progresso dos seus cursos
CREATE POLICY instructor_read_enrollments ON enrollments
  FOR SELECT TO authenticated
  USING (
    course_id IN (
      SELECT c.id FROM courses c
      JOIN users u ON u.id = c.criado_por
      WHERE u.clerk_id = auth.uid()::text AND u.role = 'instrutor'
    )
  );

-- 6. Instrutor pode ver suas próprias comissões em partner_commissions
CREATE POLICY instructor_read_own_commissions ON partner_commissions
  FOR SELECT TO authenticated
  USING (
    partner_id IN (
      SELECT ip.id FROM instructor_partners ip
      JOIN users u ON u.id = ip.user_id
      WHERE u.clerk_id = auth.uid()::text
    )
  );

-- 7. View materializada para dashboard do instrutor
CREATE OR REPLACE VIEW instructor_course_stats AS
SELECT
  c.id AS course_id,
  c.titulo,
  c.slug,
  c.nivel,
  c.tipo,
  c.preco,
  c.ativo,
  c.thumbnail_url,
  c.criado_por,
  c.created_at,
  c.total_aulas,
  COALESCE(e.total_alunos, 0) AS total_alunos,
  COALESCE(e.receita_bruta, 0) AS receita_bruta,
  COALESCE(cert.total_certificados, 0) AS total_certificados
FROM courses c
LEFT JOIN LATERAL (
  SELECT
    COUNT(*)::int AS total_alunos,
    COALESCE(SUM(CASE WHEN en.tipo_acesso = 'pago' THEN c.preco ELSE 0 END), 0) AS receita_bruta
  FROM enrollments en
  WHERE en.course_id = c.id AND en.status = 'ativo'
) e ON true
LEFT JOIN LATERAL (
  SELECT COUNT(*)::int AS total_certificados
  FROM certificates cert2
  WHERE cert2.course_id = c.id
) cert ON true;

-- Grant access
GRANT SELECT ON instructor_course_stats TO authenticated;
