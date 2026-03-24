-- Fix: Allow multiple NR per-lesson certificates for the same user+course
-- The old UNIQUE(user_id, course_id) prevents per-lesson NR certs.
-- Replace with a partial unique index that only enforces uniqueness for
-- non-NR certificates (where metadata is null or tipo != 'nr_aula').
-- NR certs are unique per (user_id, course_id, lesson_id) via metadata.

-- Step 1: Drop the old unique constraint
ALTER TABLE public.certificates DROP CONSTRAINT IF EXISTS certificates_user_id_course_id_key;

-- Step 2: Add partial unique index for regular (non-NR) certificates
-- This ensures a user can still only have ONE regular certificate per course
CREATE UNIQUE INDEX IF NOT EXISTS idx_certificates_unique_regular
ON public.certificates (user_id, course_id)
WHERE (metadata IS NULL OR metadata->>'tipo' IS DISTINCT FROM 'nr_aula');

-- Step 3: Add unique index for NR per-lesson certificates
-- Ensures one NR cert per user+course+lesson combination
CREATE UNIQUE INDEX IF NOT EXISTS idx_certificates_unique_nr_lesson
ON public.certificates (user_id, course_id, (metadata->>'lesson_id'))
WHERE (metadata->>'tipo' = 'nr_aula');
