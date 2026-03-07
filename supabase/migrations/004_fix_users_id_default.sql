-- ============================================================
-- Migration 004: Fix users.id to auto-generate UUID
-- O campo id era preenchido manualmente com clerk_id (string),
-- causando erro pois o tipo é uuid. Agora gera automaticamente.
-- ============================================================

ALTER TABLE public.users
  ALTER COLUMN id SET DEFAULT uuid_generate_v4();
