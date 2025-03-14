import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from '@/lib/db/envSchema';
import { createPool, Pool } from "mysql2/promise";

const pool: Pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: DB_PORT,
  connectionLimit: 10,
});

export const query = async (sql: string, values?: unknown) => {
  const [results] = await pool.execute(sql, values);
  return results;
};
