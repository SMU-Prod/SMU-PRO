-- Add CPF column to users table (required by Asaas for payments)
ALTER TABLE users ADD COLUMN IF NOT EXISTS cpf TEXT DEFAULT NULL;

-- Index for lookups (optional, useful if querying by CPF)
CREATE INDEX IF NOT EXISTS idx_users_cpf ON users (cpf) WHERE cpf IS NOT NULL;
