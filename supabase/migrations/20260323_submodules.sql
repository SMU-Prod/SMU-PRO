-- ╔══════════════════════════════════════════════════╗
-- ║  Sub-módulos — Self-referencing modules          ║
-- ║  parent_id = NULL → módulo raiz                  ║
-- ║  parent_id = UUID → sub-módulo                   ║
-- ╚══════════════════════════════════════════════════╝

-- Adiciona coluna parent_id (nullable = módulo raiz)
ALTER TABLE modules
ADD COLUMN IF NOT EXISTS parent_id UUID REFERENCES modules(id) ON DELETE CASCADE;

-- Índice para buscar sub-módulos de um módulo pai
CREATE INDEX IF NOT EXISTS idx_modules_parent_id ON modules(parent_id);

-- Índice composto para buscar sub-módulos de um curso ordenados
CREATE INDEX IF NOT EXISTS idx_modules_course_parent_ordem ON modules(course_id, parent_id, ordem);

-- Constraint: sub-módulo deve pertencer ao mesmo course_id do pai
-- (garante integridade ao mover entre módulos)
CREATE OR REPLACE FUNCTION check_submodule_course_id()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.parent_id IS NOT NULL THEN
    IF NOT EXISTS (
      SELECT 1 FROM modules WHERE id = NEW.parent_id AND course_id = NEW.course_id
    ) THEN
      RAISE EXCEPTION 'Sub-módulo deve pertencer ao mesmo curso que o módulo pai';
    END IF;
    -- Impede mais de 1 nível de aninhamento (parent do parent deve ser NULL)
    IF EXISTS (
      SELECT 1 FROM modules WHERE id = NEW.parent_id AND parent_id IS NOT NULL
    ) THEN
      RAISE EXCEPTION 'Apenas 1 nível de sub-módulos é permitido (módulo → sub-módulo)';
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS check_submodule_course_id_trigger ON modules;
CREATE TRIGGER check_submodule_course_id_trigger
  BEFORE INSERT OR UPDATE ON modules
  FOR EACH ROW EXECUTE FUNCTION check_submodule_course_id();
