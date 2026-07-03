-- ============================================================
-- PLANO DE ASSINATURA MENSAL (ALL-ACCESS COM TOGGLE POR CURSO)
-- ============================================================

-- 1. Adicionar flag nos cursos: disponível na assinatura?
ALTER TABLE public.courses
  ADD COLUMN IF NOT EXISTS disponivel_assinatura boolean NOT NULL DEFAULT false;

-- 2. Tabela de planos de assinatura (admin configura)
CREATE TABLE IF NOT EXISTS public.subscription_plans (
  id              uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome            text NOT NULL,
  descricao       text,
  preco_mensal    numeric(10,2) NOT NULL,
  preco_anual     numeric(10,2),                     -- desconto para anual (opcional)
  ativo           boolean NOT NULL DEFAULT true,
  max_cursos      integer,                            -- NULL = ilimitado
  features        jsonb DEFAULT '[]',                 -- ["Certificados", "Suporte prioritário", ...]
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);

-- 3. Tabela de assinaturas dos alunos
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id                  uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id             uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  plan_id             uuid NOT NULL REFERENCES public.subscription_plans(id),
  status              text NOT NULL DEFAULT 'pendente'
                        CHECK (status IN ('pendente', 'ativo', 'cancelado', 'expirado', 'inadimplente')),
  asaas_subscription_id text,                          -- ID da assinatura no Asaas
  asaas_customer_id   text,                            -- ID do cliente no Asaas
  ciclo               text NOT NULL DEFAULT 'mensal'
                        CHECK (ciclo IN ('mensal', 'anual')),
  data_inicio         timestamptz,
  data_proximo_pagamento timestamptz,
  data_cancelamento   timestamptz,
  created_at          timestamptz NOT NULL DEFAULT now(),
  updated_at          timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, plan_id)
);

CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON public.subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON public.subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_subscriptions_asaas_id ON public.subscriptions(asaas_subscription_id);

-- 4. Inserir plano padrão
INSERT INTO public.subscription_plans (nome, descricao, preco_mensal, preco_anual, ativo, features)
VALUES (
  'SMU PRO All-Access',
  'Acesso a todos os cursos marcados como disponíveis na assinatura',
  49.90,
  478.80,
  true,
  '["Acesso a todos os cursos inclusos", "Certificados verificáveis", "Suporte prioritário", "Novos cursos automaticamente"]'
)
ON CONFLICT DO NOTHING;

-- 5. RLS
ALTER TABLE public.subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- Plans: leitura pública (ativos), escrita admin
CREATE POLICY "Plans visíveis para todos" ON public.subscription_plans
  FOR SELECT USING (ativo = true);

-- Subscriptions: usuário vê as próprias
CREATE POLICY "Usuário vê própria assinatura" ON public.subscriptions
  FOR SELECT USING (auth.uid()::text IN (
    SELECT clerk_id FROM public.users WHERE id = subscriptions.user_id
  ));
