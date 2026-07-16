-- ╔══════════════════════════════════════════════════╗
-- ║  admin_course_stats: remove produto cartesiano   ║
-- ╚══════════════════════════════════════════════════╝
-- Auditoria CTO (#11): dois LEFT JOIN (enrollments x certificates) no mesmo
-- course_id geravam E×C linhas antes do count(distinct). A view roda em TODA
-- navegação do painel admin. Reescrita com LEFT JOIN LATERAL (agregados
-- independentes), mesmo padrão de instructor_course_stats. Saída idêntica.
-- APLICADA EM PRODUÇÃO em 2026-07-16.
CREATE OR REPLACE VIEW admin_course_stats AS
SELECT c.id, c.titulo, c.nivel, c.categoria, c.tipo, c.ativo, c.total_aulas, c.avaliacao_media,
       COALESCE(e.total_alunos, 0) AS total_alunos,
       COALESCE(cert.total_certificados, 0) AS total_certificados,
       e.progresso_medio,
       c.created_at
FROM courses c
LEFT JOIN LATERAL (
  SELECT count(DISTINCT en.user_id) AS total_alunos,
         round(avg(en.progresso), 1) AS progresso_medio
  FROM enrollments en
  WHERE en.course_id = c.id AND en.status = 'ativo'::enrollment_status
) e ON true
LEFT JOIN LATERAL (
  SELECT count(DISTINCT cert2.id) AS total_certificados
  FROM certificates cert2
  WHERE cert2.course_id = c.id
) cert ON true;
