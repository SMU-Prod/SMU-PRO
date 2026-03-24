-- ╔══════════════════════════════════════════════════╗
-- ║  Blog Posts — SEO Content Engine                 ║
-- ╚══════════════════════════════════════════════════╝

CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  resumo TEXT, -- Meta description / preview (até 160 chars)
  conteudo TEXT NOT NULL, -- HTML completo (TipTap)
  thumbnail_url TEXT,
  categoria TEXT NOT NULL DEFAULT 'geral',
  tags TEXT[] DEFAULT '{}',
  autor_id UUID REFERENCES users(id),
  publicado BOOLEAN DEFAULT false,
  destaque BOOLEAN DEFAULT false,
  views INT DEFAULT 0,
  tempo_leitura INT DEFAULT 5, -- minutos estimados
  meta_title TEXT, -- Override para <title> (se diferente do titulo)
  meta_description TEXT, -- Override para meta description
  og_image_url TEXT, -- Override para OG image
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Índices para queries comuns
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_publicado ON blog_posts(publicado) WHERE publicado = true;
CREATE INDEX IF NOT EXISTS idx_blog_posts_categoria ON blog_posts(categoria);
CREATE INDEX IF NOT EXISTS idx_blog_posts_destaque ON blog_posts(destaque) WHERE destaque = true;
CREATE INDEX IF NOT EXISTS idx_blog_posts_created ON blog_posts(created_at DESC);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_blog_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS blog_posts_updated_at ON blog_posts;
CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_blog_updated_at();
