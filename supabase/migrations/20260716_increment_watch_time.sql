-- ╔══════════════════════════════════════════════════╗
-- ║  increment_watch_time — tempo assistido atômico  ║
-- ╚══════════════════════════════════════════════════╝
-- Auditoria CTO (#39): updateWatchTime gravava o tempo ABSOLUTO e watchTimeRef
-- reinicia em 0 a cada montagem — ao voltar para a aula, o valor menor sobrescrevia
-- o maior e o tempo assistido "andava para trás". Incremento atômico resolve.
-- APLICADA EM PRODUÇÃO em 2026-07-16.
CREATE OR REPLACE FUNCTION increment_watch_time(p_user_id uuid, p_lesson_id uuid, p_delta int)
RETURNS void
LANGUAGE sql
AS $$
  INSERT INTO progress (user_id, lesson_id, tempo_assistido)
  VALUES (p_user_id, p_lesson_id, GREATEST(p_delta, 0))
  ON CONFLICT (user_id, lesson_id)
  DO UPDATE SET tempo_assistido = COALESCE(progress.tempo_assistido, 0) + GREATEST(p_delta, 0);
$$;
