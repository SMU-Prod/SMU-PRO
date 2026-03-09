-- ============================================================
-- SMU PRO — Global Notification System
-- Run in Supabase SQL Editor
-- ============================================================

-- 1. Notification type enum
DO $$ BEGIN
  CREATE TYPE notification_type AS ENUM (
    'course_update', 'certificate', 'enrollment', 'quiz_result',
    'system', 'welcome', 'payment', 'role_change', 'admin'
  );
EXCEPTION WHEN duplicate_object THEN
  -- Add new values if enum already exists
  BEGIN ALTER TYPE notification_type ADD VALUE IF NOT EXISTS 'payment'; EXCEPTION WHEN OTHERS THEN NULL; END;
  BEGIN ALTER TYPE notification_type ADD VALUE IF NOT EXISTS 'role_change'; EXCEPTION WHEN OTHERS THEN NULL; END;
  BEGIN ALTER TYPE notification_type ADD VALUE IF NOT EXISTS 'admin'; EXCEPTION WHEN OTHERS THEN NULL; END;
END $$;

-- 2. Notifications table
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

-- Fast queries: unread for user, newest first
CREATE INDEX IF NOT EXISTS idx_notifications_user_unread
  ON notifications (user_id, lida, created_at DESC);

-- 3. Notification preferences table
CREATE TABLE IF NOT EXISTS notification_preferences (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id               uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  -- Email preferences
  email_course_updates  boolean NOT NULL DEFAULT true,
  email_certificates    boolean NOT NULL DEFAULT true,
  email_payments        boolean NOT NULL DEFAULT true,
  email_promotions      boolean NOT NULL DEFAULT false,
  -- In-app preferences
  inapp_course_updates  boolean NOT NULL DEFAULT true,
  inapp_certificates    boolean NOT NULL DEFAULT true,
  inapp_quiz_results    boolean NOT NULL DEFAULT true,
  inapp_payments        boolean NOT NULL DEFAULT true,
  inapp_system          boolean NOT NULL DEFAULT true,
  -- Other
  study_reminders       boolean NOT NULL DEFAULT true,
  created_at            timestamptz NOT NULL DEFAULT now(),
  updated_at            timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_notification_prefs_user
  ON notification_preferences (user_id);

-- 4. RLS policies
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE notification_preferences ENABLE ROW LEVEL SECURITY;

-- Notifications: users read/update own, service role inserts
DO $$ BEGIN
  CREATE POLICY "Users can read own notifications"
    ON notifications FOR SELECT USING (user_id = auth.uid());
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Users can update own notifications"
    ON notifications FOR UPDATE
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Users can delete own notifications"
    ON notifications FOR DELETE
    USING (user_id = auth.uid());
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Service role can insert notifications"
    ON notifications FOR INSERT WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Preferences: users read/update own
DO $$ BEGIN
  CREATE POLICY "Users can read own preferences"
    ON notification_preferences FOR SELECT
    USING (user_id = auth.uid());
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Users can update own preferences"
    ON notification_preferences FOR UPDATE
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Service role can manage preferences"
    ON notification_preferences FOR ALL WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- 5. Auto-cleanup: delete notifications older than 90 days
-- Run via pg_cron or Supabase scheduled function:
-- SELECT cron.schedule('cleanup-old-notifications', '0 3 * * 0',
--   $$DELETE FROM notifications WHERE created_at < now() - interval '90 days'$$
-- );
