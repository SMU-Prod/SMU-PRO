-- Enable Row Level Security (RLS) on all main tables
-- RLS policies restrict users to their own data, except for admin roles

-- ============================================================
-- USERS TABLE
-- ============================================================
alter table public.users enable row level security;

-- Users can read their own row
create policy "users_can_read_own_row" on public.users
  for select
  using (auth.uid()::text = clerk_id);

-- Users can update their own row
create policy "users_can_update_own_row" on public.users
  for update
  using (auth.uid()::text = clerk_id);

-- Admins can read all users
create policy "admins_can_read_all_users" on public.users
  for select
  using (
    exists (
      select 1 from public.users u
      where u.clerk_id = auth.uid()::text and u.role = 'admin'
    )
  );

-- Admins can update any user
create policy "admins_can_update_any_user" on public.users
  for update
  using (
    exists (
      select 1 from public.users u
      where u.clerk_id = auth.uid()::text and u.role = 'admin'
    )
  );

-- ============================================================
-- ENROLLMENTS TABLE
-- ============================================================
alter table public.enrollments enable row level security;

-- Users can only see their own enrollments
create policy "users_can_read_own_enrollments" on public.enrollments
  for select
  using (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Admins can read all enrollments
create policy "admins_can_read_all_enrollments" on public.enrollments
  for select
  using (
    exists (
      select 1 from public.users u
      where u.clerk_id = auth.uid()::text and u.role = 'admin'
    )
  );

-- Users can update their own enrollments
create policy "users_can_update_own_enrollments" on public.enrollments
  for update
  using (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Admins can update any enrollment
create policy "admins_can_update_any_enrollment" on public.enrollments
  for update
  using (
    exists (
      select 1 from public.users u
      where u.clerk_id = auth.uid()::text and u.role = 'admin'
    )
  );

-- ============================================================
-- PROGRESS TABLE
-- ============================================================
alter table public.progress enable row level security;

-- Users can only see their own progress
create policy "users_can_read_own_progress" on public.progress
  for select
  using (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Users can update their own progress
create policy "users_can_update_own_progress" on public.progress
  for update
  using (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Users can insert their own progress
create policy "users_can_insert_own_progress" on public.progress
  for insert
  with check (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Admins can read all progress
create policy "admins_can_read_all_progress" on public.progress
  for select
  using (
    exists (
      select 1 from public.users u
      where u.clerk_id = auth.uid()::text and u.role = 'admin'
    )
  );

-- ============================================================
-- CERTIFICATES TABLE
-- ============================================================
alter table public.certificates enable row level security;

-- Users can only see their own certificates
create policy "users_can_read_own_certificates" on public.certificates
  for select
  using (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Users can insert their own certificates
create policy "users_can_insert_own_certificates" on public.certificates
  for insert
  with check (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Admins can read all certificates
create policy "admins_can_read_all_certificates" on public.certificates
  for select
  using (
    exists (
      select 1 from public.users u
      where u.clerk_id = auth.uid()::text and u.role = 'admin'
    )
  );

-- ============================================================
-- NOTES TABLE
-- ============================================================
alter table public.notes enable row level security;

-- Users can only see their own notes
create policy "users_can_read_own_notes" on public.notes
  for select
  using (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Users can insert their own notes
create policy "users_can_insert_own_notes" on public.notes
  for insert
  with check (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Users can update their own notes
create policy "users_can_update_own_notes" on public.notes
  for update
  using (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Users can delete their own notes
create policy "users_can_delete_own_notes" on public.notes
  for delete
  using (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Admins can read all notes
create policy "admins_can_read_all_notes" on public.notes
  for select
  using (
    exists (
      select 1 from public.users u
      where u.clerk_id = auth.uid()::text and u.role = 'admin'
    )
  );

-- ============================================================
-- QUIZ_ATTEMPTS TABLE
-- ============================================================
alter table public.quiz_attempts enable row level security;

-- Users can only see their own attempts
create policy "users_can_read_own_attempts" on public.quiz_attempts
  for select
  using (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Users can insert their own attempts
create policy "users_can_insert_own_attempts" on public.quiz_attempts
  for insert
  with check (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Users can update their own attempts
create policy "users_can_update_own_attempts" on public.quiz_attempts
  for update
  using (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Admins can read all attempts
create policy "admins_can_read_all_attempts" on public.quiz_attempts
  for select
  using (
    exists (
      select 1 from public.users u
      where u.clerk_id = auth.uid()::text and u.role = 'admin'
    )
  );

-- ============================================================
-- NOTIFICATIONS TABLE
-- ============================================================
alter table public.notifications enable row level security;

-- Users can only see their own notifications
create policy "users_can_read_own_notifications" on public.notifications
  for select
  using (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Users can update their own notifications (e.g., mark as read)
create policy "users_can_update_own_notifications" on public.notifications
  for update
  using (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Users can delete their own notifications
create policy "users_can_delete_own_notifications" on public.notifications
  for delete
  using (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- System/backend can insert notifications for any user
create policy "backend_can_insert_notifications" on public.notifications
  for insert
  with check (true);

-- Admins can read all notifications
create policy "admins_can_read_all_notifications" on public.notifications
  for select
  using (
    exists (
      select 1 from public.users u
      where u.clerk_id = auth.uid()::text and u.role = 'admin'
    )
  );

-- ============================================================
-- ACTIVITY_LOG TABLE
-- ============================================================
alter table public.activity_log enable row level security;

-- Users can only see their own activity
create policy "users_can_read_own_activity" on public.activity_log
  for select
  using (
    user_id = (
      select id from public.users where clerk_id = auth.uid()::text
    )
  );

-- Backend can insert activity logs
create policy "backend_can_insert_activity_logs" on public.activity_log
  for insert
  with check (true);

-- Admins can read all activity logs
create policy "admins_can_read_all_activity_logs" on public.activity_log
  for select
  using (
    exists (
      select 1 from public.users u
      where u.clerk_id = auth.uid()::text and u.role = 'admin'
    )
  );
