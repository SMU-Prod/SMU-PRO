/**
 * Asaas API Client
 * Docs: https://docs.asaas.com/reference/about-this-doc
 *
 * Auth: header "access_token" com a API key
 * Prod: https://api.asaas.com/v3
 * Sandbox: https://api-sandbox.asaas.com/v3
 */

const BASE_URL =
  process.env.ASAAS_ENVIRONMENT === "production"
    ? "https://api.asaas.com/v3"
    : "https://api-sandbox.asaas.com/v3";

const API_KEY = process.env.ASAAS_API_KEY!;

const MAX_RETRIES = 3;
const RETRY_BASE_MS = 1000;
const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504]);

async function asaasRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15_000);

      const res = await fetch(`${BASE_URL}${path}`, {
        ...options,
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "smu-pro",
          access_token: API_KEY,
          ...options.headers,
        },
      });

      clearTimeout(timeout);

      const data = await res.json();

      if (!res.ok) {
        // Retry em status transientes (429, 5xx)
        if (RETRYABLE_STATUS.has(res.status) && attempt < MAX_RETRIES) {
          const delay = RETRY_BASE_MS * Math.pow(2, attempt);
          console.warn(`[Asaas] ${res.status} em ${path}, retry ${attempt + 1}/${MAX_RETRIES} em ${delay}ms`);
          await new Promise((r) => setTimeout(r, delay));
          continue;
        }

        const message =
          data?.errors?.[0]?.description ?? data?.message ?? "Erro na API Asaas";
        throw new Error(message);
      }

      return data as T;
    } catch (err: any) {
      lastError = err;

      // Retry em erros de rede/timeout (não em erros de negócio)
      const isNetworkError = err.name === "AbortError" || err.code === "ECONNRESET" || err.code === "ETIMEDOUT";
      if (isNetworkError && attempt < MAX_RETRIES) {
        const delay = RETRY_BASE_MS * Math.pow(2, attempt);
        console.warn(`[Asaas] Network error em ${path}, retry ${attempt + 1}/${MAX_RETRIES} em ${delay}ms`);
        await new Promise((r) => setTimeout(r, delay));
        continue;
      }

      throw err;
    }
  }

  throw lastError ?? new Error("Erro inesperado na API Asaas");
}

// ============================================================
// Tipos
// ============================================================

export type AsaasBillingType = "PIX" | "BOLETO" | "CREDIT_CARD" | "UNDEFINED";

export type AsaasPaymentStatus =
  | "PENDING"
  | "RECEIVED"
  | "CONFIRMED"
  | "OVERDUE"
  | "REFUNDED"
  | "RECEIVED_IN_CASH"
  | "REFUND_REQUESTED"
  | "CHARGEBACK_REQUESTED"
  | "AWAITING_RISK_ANALYSIS";

export interface AsaasCustomer {
  id: string;
  name: string;
  email: string;
  cpfCnpj?: string;
  phone?: string;
}

export interface AsaasPayment {
  id: string;
  customer: string;
  billingType: AsaasBillingType;
  status: AsaasPaymentStatus;
  value: number;
  netValue: number;
  dueDate: string;
  description?: string;
  externalReference?: string;
  invoiceUrl?: string;
  bankSlipUrl?: string;
  pixQrCodeId?: string;
}

export interface AsaasPixQrCode {
  encodedImage: string; // base64 do QR code
  payload: string; // código PIX copia-e-cola
  expirationDate: string;
}

export interface AsaasWebhookPayload {
  event: string;
  payment: AsaasPayment;
}

// ============================================================
// Clientes
// ============================================================

interface CreateCustomerInput {
  name: string;
  email: string;
  cpfCnpj?: string;
  phone?: string;
  externalReference?: string;
}

/**
 * Busca cliente pelo externalReference (nosso userId).
 * Se não existir, cria um novo.
 */
export async function createOrGetCustomer(
  input: CreateCustomerInput
): Promise<AsaasCustomer> {
  // Busca pelo externalReference (userId do Clerk)
  if (input.externalReference) {
    const search = await asaasRequest<{ data: AsaasCustomer[] }>(
      `/customers?externalReference=${input.externalReference}`
    );
    if (search.data?.length > 0) {
      const existing = search.data[0];
      // Se o cliente existe mas não tem CPF e agora temos, atualiza
      if (!existing.cpfCnpj && input.cpfCnpj) {
        const updated = await asaasRequest<AsaasCustomer>(`/customers/${existing.id}`, {
          method: "PUT",
          body: JSON.stringify({ cpfCnpj: input.cpfCnpj }),
        });
        return updated;
      }
      return existing;
    }
  }

  // Cria novo cliente
  return asaasRequest<AsaasCustomer>("/customers", {
    method: "POST",
    body: JSON.stringify({
      name: input.name,
      email: input.email,
      cpfCnpj: input.cpfCnpj,
      phone: input.phone,
      externalReference: input.externalReference,
    }),
  });
}

// ============================================================
// Cobranças
// ============================================================

interface CreatePaymentInput {
  customer: string; // Asaas customer ID
  billingType: AsaasBillingType;
  value: number;
  dueDate: string; // YYYY-MM-DD
  description?: string;
  externalReference?: string; // nosso enrollment_id
  callbackSuccessUrl?: string;
  callbackAutoRedirect?: boolean;
}

export async function createPayment(
  input: CreatePaymentInput
): Promise<AsaasPayment> {
  return asaasRequest<AsaasPayment>("/payments", {
    method: "POST",
    body: JSON.stringify({
      customer: input.customer,
      billingType: input.billingType,
      value: input.value,
      dueDate: input.dueDate,
      description: input.description,
      externalReference: input.externalReference,
      callback: input.callbackSuccessUrl
        ? {
            successUrl: input.callbackSuccessUrl,
            autoRedirect: input.callbackAutoRedirect ?? false,
          }
        : undefined,
    }),
  });
}

export async function getPayment(paymentId: string): Promise<AsaasPayment> {
  return asaasRequest<AsaasPayment>(`/payments/${paymentId}`);
}

/**
 * Retorna QR code PIX (encodedImage base64 + payload copia-e-cola)
 * Deve ser chamado após criar uma cobrança com billingType=PIX
 */
export async function getPixQrCode(paymentId: string): Promise<AsaasPixQrCode> {
  return asaasRequest<AsaasPixQrCode>(`/payments/${paymentId}/pixQrCode`);
}

/**
 * Retorna a linha digitável do boleto
 */
export async function getBoletoIdentificationField(
  paymentId: string
): Promise<{ identificationField: string; nossoNumero: string; barCode: string }> {
  return asaasRequest(`/payments/${paymentId}/identificationField`);
}

/**
 * Solicita reembolso total de uma cobrança
 * Docs: https://docs.asaas.com/reference/estornar-cobranca
 */
export async function refundPayment(paymentId: string): Promise<AsaasPayment> {
  return asaasRequest<AsaasPayment>(`/payments/${paymentId}/refund`, {
    method: "POST",
  });
}

/**
 * Lista cobranças do Asaas com filtros opcionais
 */
export async function listPayments(params?: {
  offset?: number;
  limit?: number;
  status?: AsaasPaymentStatus;
  externalReference?: string;
}): Promise<{ data: AsaasPayment[]; totalCount: number }> {
  const searchParams = new URLSearchParams();
  if (params?.offset) searchParams.set("offset", String(params.offset));
  if (params?.limit) searchParams.set("limit", String(params.limit));
  if (params?.status) searchParams.set("status", params.status);
  if (params?.externalReference) searchParams.set("externalReference", params.externalReference);
  const qs = searchParams.toString();
  return asaasRequest(`/payments${qs ? `?${qs}` : ""}`);
}

// ============================================================
// Webhooks (criação programática, opcional)
// ============================================================

interface CreateWebhookInput {
  name: string;
  url: string;
  email: string;
  events: string[];
  authToken?: string;
}

export async function createWebhook(input: CreateWebhookInput) {
  return asaasRequest("/webhooks", {
    method: "POST",
    body: JSON.stringify({
      name: input.name,
      url: input.url,
      email: input.email,
      enabled: true,
      interrupted: false,
      authToken: input.authToken,
      sendType: "SEQUENTIALLY",
      events: input.events,
    }),
  });
}

// ============================================================
// Utilitários
// ============================================================

/** Gera a due date para hoje + N dias */
export function getDueDate(daysFromNow = 3): string {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  return d.toISOString().split("T")[0];
}
