-- ╔══════════════════════════════════════════════════╗
-- ║  insert_quiz_attempt_guarded — limite atômico    ║
-- ╚══════════════════════════════════════════════════╝
-- Auditoria CTO (#20): o limite de tentativas era count-then-insert no app, sem
-- atomicidade — N requests paralelos liam count=0 e todos inseriam, burlando o
-- limite (brute-force do quiz embaralhado → alimenta certificado NR). Esta função
-- serializa por (user, quiz) com advisory lock transacional.
-- APLICADA EM PRODUÇÃO em 2026-07-16.
CREATE OR REPLACE FUNCTION insert_quiz_attempt_guarded(
  p_user_id uuid,
  p_quiz_id uuid,
  p_nota numeric,
  p_aprovado boolean,
  p_respostas jsonb,
  p_max_tentativas int
) RETURNS quiz_attempts
LANGUAGE plpgsql
AS $$
DECLARE
  v_count int;
  v_row quiz_attempts;
BEGIN
  PERFORM pg_advisory_xact_lock(hashtextextended(p_user_id::text || ':' || p_quiz_id::text, 0));

  SELECT count(*) INTO v_count
  FROM quiz_attempts
  WHERE user_id = p_user_id AND quiz_id = p_quiz_id;

  IF v_count >= p_max_tentativas THEN
    RAISE EXCEPTION 'Tentativas esgotadas' USING ERRCODE = 'P0001';
  END IF;

  INSERT INTO quiz_attempts (user_id, quiz_id, nota, aprovado, respostas)
  VALUES (p_user_id, p_quiz_id, p_nota, p_aprovado, p_respostas)
  RETURNING * INTO v_row;

  RETURN v_row;
END;
$$;
