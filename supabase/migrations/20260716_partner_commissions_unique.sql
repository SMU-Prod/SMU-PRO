-- ╔══════════════════════════════════════════════════╗
-- ║  partner_commissions: UNIQUE(enrollment_id)      ║
-- ╚══════════════════════════════════════════════════╝
-- Auditoria CTO 2026-07-16 (#27): sem UNIQUE, um retry de checkout/webhook gerava
-- comissão em dobro para a mesma matrícula. Com o UNIQUE, registerCommission
-- (upsert onConflict enrollment_id) é idempotente.
-- APLICADA EM PRODUÇÃO em 2026-07-16 (tabela vazia, sem conflito).

ALTER TABLE partner_commissions
  ADD CONSTRAINT partner_commissions_enrollment_id_unique UNIQUE (enrollment_id);
