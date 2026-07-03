-- Add Full-Text Search index to blog_posts for content search
-- Uses Portuguese configuration for proper stemming

-- Add tsvector column if not exists
DO $$ BEGIN
  ALTER TABLE public.blog_posts ADD COLUMN IF NOT EXISTS search_vector tsvector;
EXCEPTION WHEN OTHERS THEN NULL;
END $$;

-- Create or replace function to update search vector
CREATE OR REPLACE FUNCTION blog_posts_search_update() RETURNS trigger AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('portuguese', COALESCE(NEW.titulo, '')), 'A') ||
    setweight(to_tsvector('portuguese', COALESCE(NEW.resumo, '')), 'B') ||
    setweight(to_tsvector('portuguese', COALESCE(NEW.conteudo, '')), 'C');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
DROP TRIGGER IF EXISTS blog_posts_search_trigger ON public.blog_posts;
CREATE TRIGGER blog_posts_search_trigger
  BEFORE INSERT OR UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION blog_posts_search_update();

-- Create GIN index
CREATE INDEX IF NOT EXISTS idx_blog_posts_search ON public.blog_posts USING gin(search_vector);

-- Backfill existing rows
UPDATE public.blog_posts SET search_vector =
  setweight(to_tsvector('portuguese', COALESCE(titulo, '')), 'A') ||
  setweight(to_tsvector('portuguese', COALESCE(resumo, '')), 'B') ||
  setweight(to_tsvector('portuguese', COALESCE(conteudo, '')), 'C');
