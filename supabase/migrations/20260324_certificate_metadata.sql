-- Add metadata column to certificates for NR per-lesson certificates
-- metadata stores: { lesson_id, lesson_titulo, tipo: "nr_aula" }
ALTER TABLE public.certificates
ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT NULL;

-- Index for querying NR per-lesson certificates
CREATE INDEX IF NOT EXISTS idx_certificates_metadata_lesson
ON public.certificates USING GIN (metadata);

-- Allow filtering by metadata->lesson_id
COMMENT ON COLUMN public.certificates.metadata IS 'JSON metadata for NR per-lesson certificates. Keys: lesson_id, lesson_titulo, tipo';
