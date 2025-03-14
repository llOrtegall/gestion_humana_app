import { z } from 'zod';

const envSchema = z.object({
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z.string().transform((v) => parseInt(v, 10)),
  DB_NAME: z.string(),
});

const { success, data, error } = envSchema.safeParse(process.env);

if (!success) {
  throw new Error(error.message);
}

export const {
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_USER
} = data;