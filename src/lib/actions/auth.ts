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

  const userData = {
    email: data.email,
    password: data.password,
    app: 'test'
  }

  // consultar api
  try {
    const response = await fetch('http://localhost:4000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })

    await response.json().then(data => console.log(data.message))

  } catch (error) {
    console.error('Error:', error)
  }


}