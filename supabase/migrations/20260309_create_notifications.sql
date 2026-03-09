-- Notifications table
-- Run this in Supabase SQL Editor

-- Create enum if not exists
DO $$ BEGIN
  CREATE TYPE notification_type AS ENUM (
    'course_update', 'certificate', 'enrollment', 'quiz_result', 'system', 'welcome'
  );
EXCEPTION WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS notifications (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  tipo       notification_type NOT NULL DEFAULT 'system',
  titulo     text NOT NULL,
  mensagem   text,
  link       text,
  lida       boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Index for fast user queries (unread first, newest first)
CREATE INDEX IF NOT EXISTS idx_notifications_user_unread
  ON notifications (user_id, lida, created_at DESC);

-- Auto-delete notifications older than 90 days (optional — run periodically or via pg_cron)
-- DELETE FROM notifications WHERE created_at < now() - interval '90 days';

-- RLS (optional — currently using service role key server-side)
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own notifications"
  ON notifications FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Users can update own notifications"
  ON notifications FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Service role can insert (webhooks, server actions)
CREATE POLICY "Service role can insert notifications"
  ON notifications FOR INSERT
  WITH CHECK (true);
