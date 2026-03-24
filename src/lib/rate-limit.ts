/**
 * Rate limiter com suporte a Redis (Railway) e fallback in-memory.
 *
 * Se REDIS_URL estiver configurada, usa Redis (persistente, funciona
 * com múltiplas instâncias/deploys). Caso contrário, usa Map em memória.
 *
 * Limites recomendados:
 *   AI routes   = 5/min
 *   Payment     = 10/min
 *   General     = 30/min
 */

import { createClient, type RedisClientType } from "redis";

// ── Redis singleton ──────────────────────────────────────────────
let redis: RedisClientType | null = null;
let redisReady = false;

async function getRedis(): Promise<RedisClientType | null> {
  const url = process.env.REDIS_URL;
  if (!url) return null;

  if (redis && redisReady) return redis;

  try {
    redis = createClient({ url });
    redis.on("error", (err) => {
      console.error("[RateLimit] Redis error:", err.message);
      redisReady = false;
    });
    redis.on("ready", () => {
      redisReady = true;
    });
    await redis.connect();
    redisReady = true;
    return redis;
  } catch (err) {
    console.warn("[RateLimit] Redis unavailable, using in-memory fallback");
    redis = null;
    redisReady = false;
    return null;
  }
}

// ── In-memory fallback ───────────────────────────────────────────
const memStore = new Map<string, { count: number; resetAt: number }>();

// Cleanup old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, val] of memStore) {
    if (now > val.resetAt) memStore.delete(key);
  }
}, 300_000);

function rateLimitMemory(
  key: string,
  limit: number,
  windowMs: number
): { success: boolean; remaining: number } {
  const now = Date.now();
  const record = memStore.get(key);

  if (!record || now > record.resetAt) {
    memStore.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: limit - 1 };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0 };
  }

  record.count++;
  return { success: true, remaining: limit - record.count };
}

// ── Public API ───────────────────────────────────────────────────
export async function rateLimit(
  key: string,
  limit: number,
  windowMs: number = 60_000
): Promise<{ success: boolean; remaining: number }> {
  const client = await getRedis();

  if (!client) {
    // Fallback: in-memory (funciona em dev e se Redis cair)
    return rateLimitMemory(key, limit, windowMs);
  }

  try {
    const redisKey = `rl:${key}`;
    const windowSec = Math.ceil(windowMs / 1000);

    const count = await client.incr(redisKey);

    // Se é a primeira request da janela, define TTL
    if (count === 1) {
      await client.expire(redisKey, windowSec);
    }

    if (count > limit) {
      return { success: false, remaining: 0 };
    }

    return { success: true, remaining: limit - count };
  } catch (err) {
    console.error("[RateLimit] Redis op failed, falling back:", err);
    return rateLimitMemory(key, limit, windowMs);
  }
}
