-- ╔══════════════════════════════════════════════════╗
-- ║  Instrutores Parceiros — Split de Pagamento     ║
-- ╚══════════════════════════════════════════════════╝

-- Tabela de parceiros (instrutores que recebem comissão)
CREATE TABLE IF NOT EXISTS instructor_partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  -- Dados pessoais
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  cpf TEXT,
  telefone TEXT,
  bio TEXT,
  avatar_url TEXT,
  -- Vínculo com instrutor existente (opcional)
  instructor_id UUID REFERENCES instructors(id) ON DELETE SET NULL,
  -- Asaas
  asaas_wallet_id TEXT, -- walletId da conta Asaas do parceiro (para split)
  asaas_customer_id TEXT, -- customer ID no Asaas
  -- Comissão padrão
  comissao_padrao NUMERIC(5,2) DEFAULT 40.00, -- % padrão do parceiro
  -- Status
  ativo BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Vínculo parceiro-curso com comissão customizada
CREATE TABLE IF NOT EXISTS partner_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  partner_id UUID NOT NULL REFERENCES instructor_partners(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  -- Comissão customizada para este curso (sobrescreve comissao_padrao)
  comissao_percentual NUMERIC(5,2), -- NULL = usa comissao_padrao do parceiro
  -- Quem trouxe o aluno: se o parceiro trouxer, ganha mais
  comissao_indicacao NUMERIC(5,2) DEFAULT 60.00, -- % quando o parceiro traz o aluno
  ativo BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(partner_id, course_id)
);

-- Log de comissões/repasses (para relatórios e transparência)
CREATE TABLE IF NOT EXISTS partner_commissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  partner_id UUID NOT NULL REFERENCES instructor_partners(id),
  enrollment_id UUID REFERENCES enrollments(id),
  course_id UUID NOT NULL REFERENCES courses(id),
  -- Valores
  valor_venda NUMERIC(10,2) NOT NULL, -- valor total da venda
  valor_liquido NUMERIC(10,2) NOT NULL, -- após taxa Asaas
  comissao_percentual NUMERIC(5,2) NOT NULL, -- % aplicado
  valor_comissao NUMERIC(10,2) NOT NULL, -- valor que o parceiro recebe
  valor_plataforma NUMERIC(10,2) NOT NULL, -- valor que a SMU PRO recebe
  -- Split
  asaas_split_id TEXT, -- ID do split no Asaas
  tipo_indicacao TEXT DEFAULT 'organico', -- 'organico' | 'indicacao_parceiro'
  -- Status
  status TEXT DEFAULT 'pendente', -- pendente, pago, cancelado
  pago_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_instructor_partners_email ON instructor_partners(email);
CREATE INDEX IF NOT EXISTS idx_instructor_partners_ativo ON instructor_partners(ativo) WHERE ativo = true;
CREATE INDEX IF NOT EXISTS idx_partner_courses_partner ON partner_courses(partner_id);
CREATE INDEX IF NOT EXISTS idx_partner_courses_course ON partner_courses(course_id);
CREATE INDEX IF NOT EXISTS idx_partner_commissions_partner ON partner_commissions(partner_id);
CREATE INDEX IF NOT EXISTS idx_partner_commissions_status ON partner_commissions(status);
CREATE INDEX IF NOT EXISTS idx_partner_commissions_created ON partner_commissions(created_at DESC);

-- Trigger updated_at
CREATE OR REPLACE FUNCTION update_instructor_partners_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS instructor_partners_updated_at ON instructor_partners;
CREATE TRIGGER instructor_partners_updated_at
  BEFORE UPDATE ON instructor_partners
  FOR EACH ROW EXECUTE FUNCTION update_instructor_partners_updated_at();

-- RLS
ALTER TABLE instructor_partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_commissions ENABLE ROW LEVEL SECURITY;

-- Admin: CRUD completo
CREATE POLICY "admin_manage_partners" ON instructor_partners FOR ALL
  USING (EXISTS (SELECT 1 FROM users WHERE users.clerk_id = auth.uid()::text AND users.role = 'admin'));
CREATE POLICY "admin_manage_partner_courses" ON partner_courses FOR ALL
  USING (EXISTS (SELECT 1 FROM users WHERE users.clerk_id = auth.uid()::text AND users.role = 'admin'));
CREATE POLICY "admin_manage_commissions" ON partner_commissions FOR ALL
  USING (EXISTS (SELECT 1 FROM users WHERE users.clerk_id = auth.uid()::text AND users.role = 'admin'));

-- Parceiros podem ler seus próprios dados (futuro painel)
-- (implementado via service_role no backend por enquanto)
