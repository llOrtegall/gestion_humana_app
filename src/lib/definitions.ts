import { z } from 'zod';

export const SignupFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export type FormState =
  | {
    errors?: {
      email?: string[]
      password?: string[]
    }
    message?: string
  }
  | undefined