import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

/**
 * The database client is created lazily so that importing this module never
 * throws. This matters on hosting platforms (Netlify, Vercel) where the build
 * environment has no DATABASE_URL — importing at module scope used to crash
 * `next build` while it collected route data.
 */

const globalForDb = globalThis as typeof globalThis & {
  __novaPool?: Pool;
  __novaDb?: NodePgDatabase;
};

export function getDatabaseUrl(): string | undefined {
  return process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
}

export function isDatabaseConfigured(): boolean {
  return Boolean(getDatabaseUrl());
}

function getPool(): Pool {
  const url = getDatabaseUrl();
  if (!url) throw new Error("DATABASE_URL is not set");

  if (!globalForDb.__novaPool) {
    globalForDb.__novaPool = new Pool({
      connectionString: url,
      max: 5,
      // Managed Postgres providers (Neon, Supabase, Railway) need SSL but ship
      // certificates that fail Node's default verification.
      ssl: /sslmode=(require|verify-ca|verify-full)/.test(url) ? { rejectUnauthorized: false } : undefined,
    });
  }
  return globalForDb.__novaPool;
}

export function getDb(): NodePgDatabase {
  if (!globalForDb.__novaDb) {
    globalForDb.__novaDb = drizzle(getPool());
  }
  return globalForDb.__novaDb;
}
