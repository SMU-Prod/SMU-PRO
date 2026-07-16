-- ╔══════════════════════════════════════════════════╗
-- ║  live_engagement_counts — contagem no banco      ║
-- ╚══════════════════════════════════════════════════╝
-- Auditoria CTO (#15): getLiveEngagementCounts baixava TODAS as linhas de
-- live_attendance e live_messages (chat de live popular tem milhares) só para
-- contar em JS, a cada carregamento do painel admin. Esta função conta no banco.
-- APLICADA EM PRODUÇÃO em 2026-07-16.
CREATE OR REPLACE FUNCTION live_engagement_counts(p_ids uuid[])
RETURNS TABLE(live_event_id uuid, participantes bigint, mensagens bigint)
LANGUAGE sql
STABLE
AS $$
  SELECT e.id,
         (SELECT count(*) FROM live_attendance a WHERE a.live_event_id = e.id),
         (SELECT count(*) FROM live_messages m WHERE m.live_event_id = e.id)
  FROM live_events e
  WHERE e.id = ANY(p_ids);
$$;
