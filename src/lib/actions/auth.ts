'use server';

import { signIn, signOut } from '@/auth';
import { FormState, SignupFormSchema } from '../definitions';

export const LoginGoogle = async () => {
  await signIn('google', { redirectTo: '/home/inicio/vistageneral' });
}

export const LogoutGoogle = async () => {
  await signOut({ redirectTo: '/' });
}

export async function sigup(state: FormState, formData: FormData) {
  // validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors }
  }

  console.log(validatedFields.data);

}