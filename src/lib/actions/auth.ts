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
  const { success, data, error } = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!success) {
    return { errors: error.flatten().fieldErrors }
  }

  console.log(data);

}