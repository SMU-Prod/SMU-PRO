-- Adicionar "instrutor" ao ENUM user_role existente
ALTER TYPE user_role ADD VALUE IF NOT EXISTS 'instrutor';
